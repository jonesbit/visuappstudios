'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import './studio.css';

interface UserData {
    uid: string;
    email: string | null;
    metadata: {
        lastSignInTime?: string;
    };
}

export default function VisuLabStudioPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<UserData | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [timeLeft, setTimeLeft] = useState('');
    const [activeSection, setActiveSection] = useState('hero');
    
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
    const [activeSnippetTab, setActiveSnippetTab] = useState<Record<string, string>>({
        'snippet-1': 'html',
        'snippet-2': 'html',
        'snippet-3': 'css'
    });
    const [expandedSnippets, setExpandedSnippets] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (!currentUser) {
                window.location.href = 'https://portal.visuapp.com.br/login';
                return;
            }

            const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
            if (userDoc.exists() && userDoc.data().role === 'admin') {
                setUser(currentUser as UserData);
                setTimeout(() => setLoading(false), 500);
            } else {
                window.location.href = 'https://portal.visuapp.com.br';
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (!user || !user.metadata?.lastSignInTime) return;

        const handleSessionTimer = () => {
            const storageKey = `visu_session_${user.uid}`;
            const serverLoginTime = new Date(user.metadata.lastSignInTime!).getTime();
            let expirationTime = 0;

            try {
                const storedData = JSON.parse(localStorage.getItem(storageKey) || 'null');
                
                if (storedData && storedData.loginTime === serverLoginTime) {
                    expirationTime = storedData.expirationTime;
                } else {
                    expirationTime = Date.now() + (60 * 60 * 1000);
                    localStorage.setItem(storageKey, JSON.stringify({
                        loginTime: serverLoginTime,
                        expirationTime: expirationTime
                    }));
                }
            } catch (e) {
                expirationTime = Date.now() + (60 * 60 * 1000);
            }

            const timer = setInterval(async () => {
                const now = Date.now();
                const distance = expirationTime - now;

                if (distance <= 0) {
                    clearInterval(timer);
                    setTimeLeft('00:00');
                    localStorage.removeItem(storageKey);
                    await signOut(auth);
                    window.location.href = 'https://portal.visuapp.com.br/login'; 
                } else {
                    const minutes = Math.floor(distance / (1000 * 60));
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    setTimeLeft(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
                }
            }, 1000);

            return () => clearInterval(timer);
        };

        const cleanup = handleSessionTimer();
        return cleanup;
    }, [user]);

    useEffect(() => {
        const cursor = document.querySelector('.custom-cursor') as HTMLElement;
        const hoverElements = document.querySelectorAll('a, button, .accordion-header, .contact-link, .btn-copy, .resource-card, .editor-card, .editor-tab, .btn-editor-expand, .btn-editor-copy, .token-card');

        const handleMouseMove = (e: MouseEvent) => {
            if(cursor) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            }
        };

        if(cursor) {
            document.addEventListener('mousemove', handleMouseMove);
            hoverElements.forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('active'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
            });
        }

        const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, observerOptions);
        document.querySelectorAll('.reveal-scroll').forEach(el => observer.observe(el));

        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id') || '';
                }
            });
            if(current) setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loading]);

    const handleLogout = async () => {
        if (user?.uid) {
            localStorage.removeItem(`visu_session_${user.uid}`);
        }
        await signOut(auth);
        window.location.href = 'https://portal.visuapp.com.br/login';
    };

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if(el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
            if(window.innerWidth < 768) setIsSidebarOpen(false);
        }
    };

    const copyToClipboard = (text: string, e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
        e.stopPropagation();
        navigator.clipboard.writeText(text).then(() => {
            const target = e.currentTarget as HTMLElement;
            if(target.classList.contains('btn-copy') || target.classList.contains('btn-editor-copy')) {
                const originalText = target.innerText;
                target.innerText = 'Copiado!';
                target.classList.add('copied');
                setTimeout(() => {
                    target.innerText = originalText;
                    target.classList.remove('copied');
                }, 2000);
            } else if (target.classList.contains('token-card')) {
                 target.style.borderColor = 'var(--accent)';
                 setTimeout(() => target.style.borderColor = '#e0e0e0', 500);
            }
        });
    };

    const toggleAccordion = (id: string) => {
        if(activeAccordion === id) setActiveAccordion(null);
        else setActiveAccordion(id);
    };

    const switchTab = (snippetId: string, tab: string) => {
        setActiveSnippetTab(prev => ({ ...prev, [snippetId]: tab }));
    };

    const toggleSnippetExpand = (snippetId: string) => {
        setExpandedSnippets(prev => ({ ...prev, [snippetId]: !prev[snippetId] }));
    };

    if (loading) return (
        <div className="min-h-screen bg-visu-black flex flex-col items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-visu-primary/5 animate-pulse"></div>
             <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 relative mb-4">
                    <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-t-purple-600 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                         <i className="fas fa-shield-alt text-2xl text-purple-600 opacity-80"></i>
                    </div>
                </div>
                <p className="text-white font-bold tracking-widest text-xs uppercase animate-pulse">Acesso Administrativo</p>
             </div>
        </div>
    );

    return (
        <div className="text-visu-black antialiased flex h-[100dvh] overflow-hidden text-sm relative bg-[#f8fafc]">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Archivo:wght@300;400;600;800&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet" />

            <style jsx global>{`
                .custom-scroll::-webkit-scrollbar { width: 6px; height: 6px; }
                .custom-scroll::-webkit-scrollbar-track { background: #1f1f1f; }
                .custom-scroll::-webkit-scrollbar-thumb { background: #374151; border-radius: 3px; }
                .custom-scroll::-webkit-scrollbar-thumb:hover { background: #4b5563; }
                .sidebar-overlay { background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(4px); }
            `}</style>

            <div 
                onClick={toggleSidebar} 
                className={`fixed inset-0 z-30 sidebar-overlay md:hidden transition-opacity duration-300 ${isSidebarOpen ? 'block' : 'hidden'}`}
            ></div>

            <aside className={`w-72 bg-visu-black text-gray-400 flex flex-col flex-shrink-0 h-full shadow-2xl z-40 fixed md:relative transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
                <div className="h-16 flex items-center justify-between px-6 border-b border-gray-800 bg-visu-dark">
                    <div className="flex items-center gap-3">
                        <img src="/assets/logo.png" alt="Visuapp" className="h-8 w-auto grayscale brightness-200" />
                        <div>
                            <span className="text-white font-bold tracking-tight block leading-tight">Visuapp</span>
                            <span className="text-[10px] uppercase tracking-wider font-bold text-visu-primary">Colaborador</span>
                        </div>
                    </div>
                    <button onClick={toggleSidebar} className="md:hidden text-gray-400 hover:text-white">
                        <i className="fas fa-times text-lg"></i>
                    </button>
                </div>

                <nav className="flex-1 py-6 space-y-1 overflow-y-auto custom-scroll">
                    <p className="px-6 text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-2">VisuLab Studio</p>
                    
                    <div onClick={() => scrollToSection('hero')} className={`sidebar-link flex items-center gap-3 px-6 py-2.5 text-sm font-medium cursor-pointer transition-all border-l-[3px] ${activeSection === 'hero' ? 'active text-white border-visu-primary bg-[#1e1e1e]' : 'border-transparent hover:text-white hover:bg-[#1e1e1e]'}`}>
                        <i className="fas fa-eye w-5 text-center"></i>
                        Visão Geral
                    </div>
                    <div onClick={() => scrollToSection('tokens')} className={`sidebar-link flex items-center gap-3 px-6 py-2.5 text-sm font-medium cursor-pointer transition-all border-l-[3px] ${activeSection === 'tokens' ? 'active text-white border-visu-primary bg-[#1e1e1e]' : 'border-transparent hover:text-white hover:bg-[#1e1e1e]'}`}>
                        <i className="fas fa-palette w-5 text-center"></i>
                        Design Tokens
                    </div>
                    <div onClick={() => scrollToSection('templates')} className={`sidebar-link flex items-center gap-3 px-6 py-2.5 text-sm font-medium cursor-pointer transition-all border-l-[3px] ${activeSection === 'templates' ? 'active text-white border-visu-primary bg-[#1e1e1e]' : 'border-transparent hover:text-white hover:bg-[#1e1e1e]'}`}>
                        <i className="fas fa-layer-group w-5 text-center"></i>
                        Biblioteca
                    </div>
                    <div onClick={() => scrollToSection('prompts')} className={`sidebar-link flex items-center gap-3 px-6 py-2.5 text-sm font-medium cursor-pointer transition-all border-l-[3px] ${activeSection === 'prompts' ? 'active text-white border-visu-primary bg-[#1e1e1e]' : 'border-transparent hover:text-white hover:bg-[#1e1e1e]'}`}>
                        <i className="fas fa-robot w-5 text-center"></i>
                        AI Prompts
                    </div>
                    <div onClick={() => scrollToSection('snippets')} className={`sidebar-link flex items-center gap-3 px-6 py-2.5 text-sm font-medium cursor-pointer transition-all border-l-[3px] ${activeSection === 'snippets' ? 'active text-white border-visu-primary bg-[#1e1e1e]' : 'border-transparent hover:text-white hover:bg-[#1e1e1e]'}`}>
                        <i className="fas fa-code w-5 text-center"></i>
                        Snippets
                    </div>
                     <div onClick={() => scrollToSection('contact')} className={`sidebar-link flex items-center gap-3 px-6 py-2.5 text-sm font-medium cursor-pointer transition-all border-l-[3px] ${activeSection === 'contact' ? 'active text-white border-visu-primary bg-[#1e1e1e]' : 'border-transparent hover:text-white hover:bg-[#1e1e1e]'}`}>
                        <i className="fas fa-life-ring w-5 text-center"></i>
                        Suporte
                    </div>
                </nav>

                <div className="p-4 bg-visu-dark border-t border-gray-800">
                    <div className="flex items-center gap-3 mb-3">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-8 h-8 rounded-full border border-gray-600" alt="User" />
                        <div className="overflow-hidden">
                            <p className="text-white text-xs font-bold truncate">{user?.email || 'Admin'}</p>
                            <p className="text-gray-500 text-[10px] truncate">Front-end Lead</p>
                        </div>
                    </div>
                    <button onClick={handleLogout} className="flex items-center justify-center gap-2 w-full py-2 bg-gray-800 hover:bg-red-900/30 text-gray-400 hover:text-red-400 rounded transition-colors text-xs font-bold">
                        <i className="fas fa-power-off"></i> Sair
                    </button>
                </div>
            </aside>

            <div className="flex-1 flex flex-col h-full overflow-hidden relative bg-white">
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8 shadow-sm z-20 sticky top-0">
                    <div className="flex items-center gap-3 md:gap-4">
                        <button onClick={toggleSidebar} className="md:hidden text-visu-black focus:outline-none p-2 -ml-2">
                            <i className="fas fa-bars text-xl"></i>
                        </button>

                        <h2 className="text-base md:text-lg font-bold text-gray-800">VisuLab Studio</h2>
                        <div className="hidden md:block h-6 w-px bg-gray-200"></div>
                        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-visu-black border border-gray-800 rounded text-white text-xs font-bold uppercase tracking-wider">
                            <i className="fas fa-shield-alt"></i> Admin
                        </div>
                    </div>

                    <div className="flex items-center gap-3 md:gap-4">
                        {timeLeft && (
                            <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-red-50 border border-red-100 rounded-lg shadow-sm">
                                <span className="text-[10px] font-bold uppercase text-red-500 tracking-wider">Sessão:</span>
                                <span className="text-sm font-bold font-mono text-red-600">{timeLeft}</span>
                                <i className="fas fa-clock text-xs text-red-400 animate-pulse"></i>
                            </div>
                        )}

                        <div className="relative hidden md:block">
                            <input type="text" placeholder="Buscar no Studio..." className="bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-4 py-1.5 text-xs focus:outline-none focus:border-visu-primary w-64 transition-all" />
                            <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        </div>
                        <button className="md:hidden w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto custom-scroll scroll-smooth w-full studio-scope">
                    <div className="model-info">ACESSO RESTRITO: AMBIENTE INTERNO VISUAPP — APENAS PESSOAL AUTORIZADO</div>
                    <div className="custom-cursor"></div>
                    
                    <div className="studio-main">
                         <section id="hero" className="hero-section">
                            <div className="hero-content">
                                <div className="anim-line"></div>
                                <h1 className="reveal-text">Gerenciamento de<br/>Templates<br/>Arquitetados.</h1>
                                <p className="reveal-text delay-1">Busque, melhore e tenha ideias baseadas em nossos templates internos. Padronização e eficiência para o ecossistema Visuapp.</p>
                            </div>
                            <div className="scroll-indicator">↓</div>
                        </section>

                        <section id="tokens" className="tokens-section">
                            <div className="section-header reveal-scroll">
                                <h2>Design Tokens</h2>
                                <p>Fundamentos visuais imutáveis. Clique nas cores para copiar a variável CSS.</p>
                            </div>

                            <div className="tokens-group reveal-scroll">
                                <h3>Paleta Institucional</h3>
                                <div className="tokens-grid">
                                    <div className="token-card btn-copy-token" onClick={(e) => copyToClipboard('var(--ink)', e)}>
                                        <div className="token-swatch" style={{backgroundColor: 'var(--ink)'}}></div>
                                        <div className="token-info">
                                            <span className="token-name">--ink</span>
                                            <span className="token-hex">#080808</span>
                                        </div>
                                    </div>
                                    <div className="token-card btn-copy-token" onClick={(e) => copyToClipboard('var(--bg)', e)}>
                                        <div className="token-swatch" style={{backgroundColor: 'var(--bg)', border: '1px solid #eee'}}></div>
                                        <div className="token-info">
                                            <span className="token-name">--bg</span>
                                            <span className="token-hex">#FFFFFF</span>
                                        </div>
                                    </div>
                                    <div className="token-card btn-copy-token" onClick={(e) => copyToClipboard('var(--accent)', e)}>
                                        <div className="token-swatch" style={{backgroundColor: 'var(--accent)'}}></div>
                                        <div className="token-info">
                                            <span className="token-name">--accent</span>
                                            <span className="token-hex">#FF4500</span>
                                        </div>
                                    </div>
                                    <div className="token-card btn-copy-token" onClick={(e) => copyToClipboard('var(--gray)', e)}>
                                        <div className="token-swatch" style={{backgroundColor: 'var(--gray)'}}></div>
                                        <div className="token-info">
                                            <span className="token-name">--gray</span>
                                            <span className="token-hex">#F4F4F4</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tokens-group reveal-scroll">
                                <h3>Cores Semânticas</h3>
                                <div className="tokens-grid">
                                    <div className="token-card btn-copy-token" onClick={(e) => copyToClipboard('var(--success-green)', e)}>
                                        <div className="token-swatch" style={{backgroundColor: 'var(--success-green)'}}></div>
                                        <div className="token-info">
                                            <span className="token-name">--success</span>
                                            <span className="token-hex">#00C853</span>
                                        </div>
                                    </div>
                                    <div className="token-card btn-copy-token" onClick={(e) => copyToClipboard('#ff3b30', e)}>
                                        <div className="token-swatch" style={{backgroundColor: '#ff3b30'}}></div>
                                        <div className="token-info">
                                            <span className="token-name">--error</span>
                                            <span className="token-hex">#FF3B30</span>
                                        </div>
                                    </div>
                                    <div className="token-card btn-copy-token" onClick={(e) => copyToClipboard('#ffcc00', e)}>
                                        <div className="token-swatch" style={{backgroundColor: '#ffcc00'}}></div>
                                        <div className="token-info">
                                            <span className="token-name">--warning</span>
                                            <span className="token-hex">#FFCC00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tokens-group reveal-scroll">
                                <h3>Escala Tipográfica</h3>
                                <div className="type-scale-list">
                                    <div className="type-row">
                                        <div className="type-meta">H1 Display</div>
                                        <div className="type-preview" style={{fontSize: '4rem', fontWeight: 800}}>Aa</div>
                                        <div className="type-specs">Archivo ExtraBold / 5rem (80px)</div>
                                    </div>
                                    <div className="type-row">
                                        <div className="type-meta">H2 Title</div>
                                        <div className="type-preview" style={{fontSize: '3rem', fontWeight: 300}}>Aa</div>
                                        <div className="type-specs">Archivo Light / 3rem (48px)</div>
                                    </div>
                                    <div className="type-row">
                                        <div className="type-meta">H3 Subtitle</div>
                                        <div className="type-preview" style={{fontSize: '2rem', fontWeight: 400}}>Aa</div>
                                        <div className="type-specs">Archivo Regular / 2rem (32px)</div>
                                    </div>
                                    <div className="type-row">
                                        <div className="type-meta">Body Text</div>
                                        <div className="type-preview" style={{fontSize: '1rem', fontWeight: 400}}>Aa</div>
                                        <div className="type-specs">Archivo Regular / 1rem (16px)</div>
                                    </div>
                                    <div className="type-row">
                                        <div className="type-meta">Monospace</div>
                                        <div className="type-preview" style={{fontFamily: 'JetBrains Mono', fontSize: '0.9rem'}}>console.log('Hello')</div>
                                        <div className="type-specs">JetBrains Mono / 0.9rem (14px)</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="templates" className="templates-section">
                            <div className="section-header reveal-scroll">
                                <h2>Repositório de Templates</h2>
                                <p>Selecione um modelo para visualizar a documentação técnica.</p>
                            </div>

                            <div className="accordion-list">
                                <div className={`accordion-item reveal-scroll ${activeAccordion === 'acc1' ? 'active' : ''}`}>
                                    <div className="accordion-header" onClick={() => toggleAccordion('acc1')}>
                                        <h3 className="acc-title">Arquitetura Estrutural</h3>
                                        <span className="acc-tag light">Modelo Claro</span>
                                        <div className="acc-icon">+</div>
                                    </div>
                                    <div className="accordion-body">
                                        <div className="body-content">
                                            <div className="model-preview">
                                                <div className="img-placeholder">
                                                    <img src="assets/models/estrutural.png" alt="Preview Arquitetura Estrutural" onError={(e) => {e.currentTarget.style.display='none'; e.currentTarget.parentElement?.classList.add('no-img')}} />
                                                </div>
                                            </div>
                                            <div className="model-details">
                                                <div className="detail-row">
                                                    <span className="label">Tipo de Modelo:</span>
                                                    <span className="value">Minimalismo Técnico</span>
                                                </div>
                                                <div className="detail-row">
                                                    <span className="label">Base do Modelo:</span>
                                                    <span className="value">Bauhaus & Brutalismo Leve</span>
                                                </div>
                                                <div className="detail-desc">
                                                    <span className="label">Descrição Técnica:</span>
                                                    <p>Focado na legibilidade extrema e hierarquia clara. Utiliza a fonte Archivo para transmitir solidez. Layout baseado em grids rígidos com bordas visíveis de 1px.</p>
                                                </div>
                                                <button className="btn-action">Clonar Repositório</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`accordion-item reveal-scroll ${activeAccordion === 'acc2' ? 'active' : ''}`}>
                                    <div className="accordion-header" onClick={() => toggleAccordion('acc2')}>
                                        <h3 className="acc-title">Neo-Brutalismo</h3>
                                        <span className="acc-tag light">Modelo Claro</span>
                                        <div className="acc-icon">+</div>
                                    </div>
                                    <div className="accordion-body">
                                        <div className="body-content">
                                            <div className="model-preview">
                                                <div className="img-placeholder">
                                                    <img src="assets/models/neobrutalismo.png" alt="Preview Neo-Brutalismo" onError={(e) => {e.currentTarget.style.display='none'; e.currentTarget.parentElement?.classList.add('no-img')}} />
                                                </div>
                                            </div>
                                            <div className="model-details">
                                                <div className="detail-row">
                                                    <span className="label">Tipo de Modelo:</span>
                                                    <span className="value">High-Contrast Pop</span>
                                                </div>
                                                <div className="detail-desc">
                                                    <span className="label">Descrição Técnica:</span>
                                                    <p>Caracterizado por cores vibrantes, bordas grossas pretas e sombras sólidas. Tipografia grotesca e elementos de UI exagerados.</p>
                                                </div>
                                                <button className="btn-action">Clonar Repositório</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className={`accordion-item reveal-scroll ${activeAccordion === 'acc3' ? 'active' : ''}`}>
                                    <div className="accordion-header" onClick={() => toggleAccordion('acc3')}>
                                        <h3 className="acc-title">Swiss Grid Motion</h3>
                                        <span className="acc-tag light">Modelo Claro</span>
                                        <div className="acc-icon">+</div>
                                    </div>
                                    <div className="accordion-body">
                                        <div className="body-content">
                                            <div className="model-details">
                                                <p>Conteúdo em desenvolvimento...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`accordion-item reveal-scroll ${activeAccordion === 'acc4' ? 'active' : ''}`}>
                                    <div className="accordion-header" onClick={() => toggleAccordion('acc4')}>
                                        <h3 className="acc-title">Sofisticado</h3>
                                        <span className="acc-tag dark">Modelo Escuro</span>
                                        <div className="acc-icon">+</div>
                                    </div>
                                    <div className="accordion-body">
                                        <div className="body-content">
                                            <div className="model-preview">
                                                <div className="img-placeholder">
                                                    <img src="assets/models/sofisticado.png" alt="Preview Sofisticado" onError={(e) => {e.currentTarget.style.display='none'; e.currentTarget.parentElement?.classList.add('no-img')}} />
                                                </div>
                                            </div>
                                            <div className="model-details">
                                                <div className="detail-row">
                                                    <span className="label">Tipo de Modelo:</span>
                                                    <span className="value">Luxury Interface</span>
                                                </div>
                                                <div className="detail-desc">
                                                    <span className="label">Descrição Técnica:</span>
                                                    <p>Palette escura profunda com acentos metálicos. Fontes serifadas elegantes para títulos.</p>
                                                </div>
                                                <button className="btn-action">Clonar Repositório</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="prompts" className="prompts-section dark-section">
                            <div className="section-header reveal-scroll">
                                <h2>Engenharia de Prompt</h2>
                                <p>Copie prompts padronizados para acelerar seu desenvolvimento com IA.</p>
                            </div>
                            
                            <div className="grid-resources">
                                <div className="resource-card featured-card reveal-scroll">
                                    <div className="card-top">
                                        <span className="res-tag featured-tag">MANDATÓRIO</span>
                                        <button className="btn-copy" onClick={(e) => copyToClipboard('Regras: 1. Mande os códigos inteiros; 2. Nunca comente nos códigos; 3. Mexa nos códigos SOLICITADOS, não faça nada sem ter sido solicitado, não mexe em códigos que não precisam mexer conforme a solicitação;', e)}>Copiar</button>
                                    </div>
                                    <div className="code-preview">
                                        <strong style={{color: 'var(--accent)', display: 'block', marginBottom: '10px'}}>Prompt de Regras</strong>
                                        Regras:<br/>
                                        1. Mande os códigos inteiros;<br/>
                                        2. Nunca comente nos códigos;<br/>
                                        3. Mexa nos códigos SOLICITADOS, não faça nada sem ter sido solicitado, não mexe em códigos que não precisam mexer conforme a solicitação;
                                    </div>
                                    <div className="card-meta">Uso: Obrigatório em toda nova thread</div>
                                </div>

                                <div className="resource-card reveal-scroll">
                                    <div className="card-top">
                                        <span className="res-tag">Refatoração</span>
                                        <button className="btn-copy" onClick={(e) => copyToClipboard('Atue como um Arquiteto de Software Sênior especializado em Clean Code. Analise o seguinte código em [LINGUAGEM]. Identifique code smells, violações de princípios SOLID e sugira uma refatoração que melhore a legibilidade e manutenibilidade sem alterar o comportamento final. Explique o "porquê" de cada mudança.', e)}>Copiar</button>
                                    </div>
                                    <div className="code-preview">
                                        <strong style={{color: '#fff', display: 'block', marginBottom: '10px'}}>Refatoração Clean Code</strong>
                                        "Atue como um Arquiteto de Software Sênior especializado em Clean Code. Analise o seguinte código em [LINGUAGEM]. Identifique code smells..."
                                    </div>
                                    <div className="card-meta">Uso: Otimização de legado</div>
                                </div>

                                <div className="resource-card reveal-scroll">
                                    <div className="card-top">
                                        <span className="res-tag">Testes Unitários</span>
                                        <button className="btn-copy" onClick={(e) => copyToClipboard('Crie casos de teste unitários abrangentes para a função abaixo usando [FRAMEWORK DE TESTE]. Inclua cenários felizes, casos de borda (edge cases) e tratamento de erros. Garanta 100% de cobertura de branches.', e)}>Copiar</button>
                                    </div>
                                    <div className="code-preview">
                                        <strong style={{color: '#fff', display: 'block', marginBottom: '10px'}}>Testes Unitários (Jest/Vitest)</strong>
                                        "Crie casos de teste unitários abrangentes para a função abaixo usando [FRAMEWORK DE TESTE]. Inclua cenários felizes, casos de borda..."
                                    </div>
                                    <div className="card-meta">Uso: QA & Coverage</div>
                                </div>

                                <div className="resource-card reveal-scroll">
                                    <div className="card-top">
                                        <span className="res-tag">Documentação</span>
                                        <button className="btn-copy" onClick={(e) => copyToClipboard('Gere uma documentação técnica para este componente seguindo o padrão JSDoc/DocString. Inclua descrição dos parâmetros, tipos de retorno, exceções lançadas e um exemplo prático de uso.', e)}>Copiar</button>
                                    </div>
                                    <div className="code-preview">
                                         <strong style={{color: '#fff', display: 'block', marginBottom: '10px'}}>Documentação Técnica</strong>
                                        "Gere uma documentação técnica para este componente seguindo o padrão JSDoc/DocString. Inclua descrição dos parâmetros..."
                                    </div>
                                    <div className="card-meta">Uso: Padronização</div>
                                </div>
                            </div>
                        </section>

                        <section id="snippets" className="snippets-section">
                            <div className="section-header reveal-scroll">
                                <h2>Utilidades Essenciais</h2>
                                <p>Blocos de código aprovados para uso em produção.</p>
                            </div>

                            <div className="grid-resources">
                                
                                <div className="editor-card reveal-scroll">
                                    <div className="snippet-visual">
                                        <img src="assets/snippets/form-input.png" alt="Input Visual" onError={(e) => {e.currentTarget.style.display='none'; e.currentTarget.parentElement?.classList.add('no-img')}} />
                                    </div>
                                    
                                    <div className="editor-header">
                                        <div className="window-controls">
                                            <span className="dot red"></span>
                                            <span className="dot yellow"></span>
                                            <span className="dot green"></span>
                                        </div>
                                        <div className="filename">Input Material Design</div>
                                    </div>

                                    <div className="editor-tabs">
                                        <button className={`editor-tab ${activeSnippetTab['snippet-1'] === 'html' ? 'active' : ''}`} onClick={(e) => {e.stopPropagation(); switchTab('snippet-1', 'html')}}>HTML</button>
                                        <button className={`editor-tab ${activeSnippetTab['snippet-1'] === 'css' ? 'active' : ''}`} onClick={(e) => {e.stopPropagation(); switchTab('snippet-1', 'css')}}>CSS</button>
                                        <button className={`editor-tab ${activeSnippetTab['snippet-1'] === 'js' ? 'active' : ''}`} onClick={(e) => {e.stopPropagation(); switchTab('snippet-1', 'js')}}>JS</button>
                                    </div>

                                    <div className={`editor-body ${expandedSnippets['snippet-1'] ? 'expanded' : ''}`}>
                                        <div className={`code-content html ${activeSnippetTab['snippet-1'] === 'html' ? 'active' : ''}`}>
<pre><code>{`<div class="input-group">
  <input type="text" id="visuName" required placeholder=" ">
  <label for="visuName">Nome Completo</label>
  <span class="highlight"></span>
</div>`}</code></pre>
                                        </div>
                                        
                                        <div className={`code-content css ${activeSnippetTab['snippet-1'] === 'css' ? 'active' : ''}`}>
<pre><code>{`.input-group { position: relative; margin-bottom: 20px; }

.input-group input { 
  padding: 10px 0; border: none; 
  border-bottom: 1px solid #ccc; outline: none; 
  width: 100%;
}

.input-group label {
  position: absolute; top: 10px; left: 0;
  pointer-events: none; transition: 0.2s ease all;
  color: #999;
}

.input-group input:focus ~ label,
.input-group input:not(:placeholder-shown) ~ label {
  top: -15px; font-size: 0.8rem; color: #000;
}`}</code></pre>
                                        </div>

                                        <div className={`code-content js ${activeSnippetTab['snippet-1'] === 'js' ? 'active' : ''}`}>
<pre><code>{`// Validação simples
const input = document.getElementById('visuName');

input.addEventListener('blur', (e) => {
  if(e.target.value.length < 3) {
    e.target.classList.add('error');
  } else {
    e.target.classList.remove('error');
  }
});`}</code></pre>
                                        </div>
                                        <div className="fade-overlay"></div>
                                    </div>

                                    <div className="editor-footer">
                                        <button className={`btn-editor-expand ${expandedSnippets['snippet-1'] ? 'active' : ''}`} onClick={(e) => {e.stopPropagation(); toggleSnippetExpand('snippet-1')}}>
                                            {expandedSnippets['snippet-1'] ? 'Recolher' : 'Expandir Código'}
                                        </button>
                                        <button className="btn-editor-copy" onClick={(e) => copyToClipboard(activeSnippetTab['snippet-1'] === 'html' ? `<div class="input-group">
  <input type="text" id="visuName" required placeholder=" ">
  <label for="visuName">Nome Completo</label>
  <span class="highlight"></span>
</div>` : activeSnippetTab['snippet-1'] === 'css' ? `.input-group { position: relative; margin-bottom: 20px; } ...` : `// Validação simples...`, e)}>Copiar</button>
                                    </div>
                                </div>

                                <div className="editor-card reveal-scroll">
                                    <div className="snippet-visual">
                                        <img src="assets/snippets/button-ui.png" alt="Button Visual" onError={(e) => {e.currentTarget.style.display='none'; e.currentTarget.parentElement?.classList.add('no-img')}} />
                                    </div>
                                    
                                    <div className="editor-header">
                                        <div className="window-controls">
                                            <span className="dot red"></span>
                                            <span className="dot yellow"></span>
                                            <span className="dot green"></span>
                                        </div>
                                        <div className="filename">Botão com Ícone</div>
                                    </div>

                                    <div className="editor-tabs">
                                        <button className={`editor-tab ${activeSnippetTab['snippet-2'] === 'html' ? 'active' : ''}`} onClick={(e) => {e.stopPropagation(); switchTab('snippet-2', 'html')}}>HTML</button>
                                        <button className={`editor-tab ${activeSnippetTab['snippet-2'] === 'css' ? 'active' : ''}`} onClick={(e) => {e.stopPropagation(); switchTab('snippet-2', 'css')}}>CSS</button>
                                    </div>

                                    <div className={`editor-body ${expandedSnippets['snippet-2'] ? 'expanded' : ''}`}>
                                        <div className={`code-content html ${activeSnippetTab['snippet-2'] === 'html' ? 'active' : ''}`}>
<pre><code>{`<button class="visu-btn">
  <span>Enviar Dados</span>
  <div class="icon-arrow">→</div>
</button>`}</code></pre>
                                        </div>
                                        
                                        <div className={`code-content css ${activeSnippetTab['snippet-2'] === 'css' ? 'active' : ''}`}>
<pre><code>{`.visu-btn {
  padding: 15px 30px; background: #000; color: #fff;
  border: none; display: flex; align-items: center;
  gap: 10px; cursor: pointer; transition: gap 0.3s;
}

.visu-btn:hover { gap: 20px; }`}</code></pre>
                                        </div>
                                        <div className="fade-overlay"></div>
                                    </div>

                                    <div className="editor-footer">
                                        <button className={`btn-editor-expand ${expandedSnippets['snippet-2'] ? 'active' : ''}`} onClick={(e) => {e.stopPropagation(); toggleSnippetExpand('snippet-2')}}>
                                            {expandedSnippets['snippet-2'] ? 'Recolher' : 'Expandir Código'}
                                        </button>
                                        <button className="btn-editor-copy" onClick={(e) => copyToClipboard(activeSnippetTab['snippet-2'] === 'html' ? `<button class="visu-btn">...</button>` : `.visu-btn { ... }`, e)}>Copiar</button>
                                    </div>
                                </div>

                                <div className="editor-card reveal-scroll">
                                    <div className="snippet-visual">
                                        <img src="assets/snippets/grid-layout.png" alt="Grid Visual" onError={(e) => {e.currentTarget.style.display='none'; e.currentTarget.parentElement?.classList.add('no-img')}} />
                                    </div>
                                    
                                    <div className="editor-header">
                                        <div className="window-controls">
                                            <span className="dot red"></span>
                                            <span className="dot yellow"></span>
                                            <span className="dot green"></span>
                                        </div>
                                        <div className="filename">Grid Responsivo</div>
                                    </div>

                                    <div className="editor-tabs">
                                        <button className={`editor-tab ${activeSnippetTab['snippet-3'] === 'css' ? 'active' : ''}`} onClick={(e) => {e.stopPropagation(); switchTab('snippet-3', 'css')}}>CSS</button>
                                        <button className={`editor-tab ${activeSnippetTab['snippet-3'] === 'react' ? 'active' : ''}`} onClick={(e) => {e.stopPropagation(); switchTab('snippet-3', 'react')}}>React</button>
                                    </div>

                                    <div className={`editor-body ${expandedSnippets['snippet-3'] ? 'expanded' : ''}`}>
                                        <div className={`code-content css ${activeSnippetTab['snippet-3'] === 'css' ? 'active' : ''}`}>
<pre><code>{`.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
}`}</code></pre>
                                        </div>
                                        
                                        <div className={`code-content react ${activeSnippetTab['snippet-3'] === 'react' ? 'active' : ''}`}>
<pre><code>{`const Grid = ({ children }) => (
  <div style={{ 
     display: 'grid', 
     gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
     gap: '2rem' 
  }}>
    {children}
  </div>
);`}</code></pre>
                                        </div>
                                        <div className="fade-overlay"></div>
                                    </div>

                                    <div className="editor-footer">
                                        <button className={`btn-editor-expand ${expandedSnippets['snippet-3'] ? 'active' : ''}`} onClick={(e) => {e.stopPropagation(); toggleSnippetExpand('snippet-3')}}>
                                            {expandedSnippets['snippet-3'] ? 'Recolher' : 'Expandir Código'}
                                        </button>
                                        <button className="btn-editor-copy" onClick={(e) => copyToClipboard(activeSnippetTab['snippet-3'] === 'css' ? `.grid-container { ... }` : `const Grid = ...`, e)}>Copiar</button>
                                    </div>
                                </div>

                            </div>
                        </section>

                        <section id="contact" className="contact-container dark-section">
                            <div className="contact-grid reveal-scroll">
                                <div className="contact-text">
                                    <h2>Precisa de um novo padrão?</h2>
                                    <p>A equipe de Design Ops está disponível para discutir novas implementações e ajustes nos componentes base.</p>
                                </div>
                                <div className="contact-actions">
                                    <a href="#" className="contact-link">Abrir Ticket (Jira)</a>
                                    <a href="#" className="contact-link">Slack #design-system</a>
                                    <a href="#" className="contact-link">Documentação API</a>
                                </div>
                            </div>
                        </section>

                        <footer>
                            <div className="footer-content">
                                <div className="f-col">
                                    <h4>Escritório</h4>
                                    <p>Operação 100% Remota</p>
                                    <p>Sede Global / Cloud</p>
                                </div>
                                <div className="f-col">
                                    <h4>Social</h4>
                                    <a href="#" className="f-link">Instagram</a>
                                    <a href="#" className="f-link">LinkedIn</a>
                                    <a href="#" className="f-link">Whatsapp</a>
                                </div>
                                <div className="f-col">
                                    <h4>Legal</h4>
                                    <a href="#" className="f-link">Termos de Uso</a>
                                    <a href="#" className="f-link">Política de Privacidade</a>
                                    <p className="copyright">@ 2025 Visuapp Developer Arc.</p>
                                </div>
                            </div>
                        </footer>
                    </div>
                </main>
            </div>
        </div>
    );
}