'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';

const sectionTitles: Record<string, string> = {
    'overview': 'Visão Geral',
    'servicos': 'Meus Serviços',
    'assinaturas': 'Assinaturas',
    'financeiro': 'Financeiro',
    'depoimentos': 'Depoimentos',
    'configuracoes': 'Configurações'
};

export default function PortalClient() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
    const [activeSection, setActiveSection] = useState('overview');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (!currentUser) {
                window.location.href = 'https://portal.visuapp.com.br/login';
                return;
            }
            setUser(currentUser);
            setTimeout(() => setLoading(false), 500);
        });

        return () => unsubscribe();
    }, []);

    // --- LÓGICA DO TIMER INTELIGENTE ---
    useEffect(() => {
        if (!user || !user.metadata?.lastSignInTime) return;

        const handleSessionTimer = () => {
            const storageKey = `visu_session_${user.uid}`;
            const serverLoginTime = new Date(user.metadata.lastSignInTime).getTime();
            let expirationTime = 0;

            try {
                const storedData = JSON.parse(localStorage.getItem(storageKey) || 'null');
                
                // Se existe um timer salvo e ele pertence a ESTA sessão de login (mesmo timestamp do firebase)
                if (storedData && storedData.loginTime === serverLoginTime) {
                    expirationTime = storedData.expirationTime;
                } else {
                    // Se é um login novo ou não tem nada salvo, define Agora + 1h
                    expirationTime = Date.now() + (60 * 60 * 1000);
                    localStorage.setItem(storageKey, JSON.stringify({
                        loginTime: serverLoginTime,
                        expirationTime: expirationTime
                    }));
                }
            } catch (e) {
                // Fallback em caso de erro no localStorage
                expirationTime = Date.now() + (60 * 60 * 1000);
            }

            const timer = setInterval(async () => {
                const now = Date.now();
                const distance = expirationTime - now;

                if (distance <= 0) {
                    clearInterval(timer);
                    setTimeLeft('00:00');
                    
                    // Limpa o storage ao expirar
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

    const handleLogout = async () => {
        // Limpa o storage ao sair manualmente
        if (user?.uid) {
            localStorage.removeItem(`visu_session_${user.uid}`);
        }
        await signOut(auth);
        window.location.href = 'https://portal.visuapp.com.br/login';
    };

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    
    const switchSection = (section: string) => {
        setActiveSection(section);
        if (window.innerWidth < 768) {
            setIsSidebarOpen(false);
        }
    };

    if (loading) return (
        <div className="min-h-screen bg-visu-black flex flex-col items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-visu-primary/5 animate-pulse"></div>
             <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 relative mb-4">
                    <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-t-visu-primary rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img src="/assets/logo.png" alt="V" className="w-6 h-auto opacity-50" />
                    </div>
                </div>
                <p className="text-white font-bold tracking-widest text-xs uppercase animate-pulse">Carregando Portal</p>
             </div>
        </div>
    );

    return (
        <div className="text-visu-black antialiased flex h-[100dvh] overflow-hidden text-sm relative bg-[#f8fafc]">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

            <style jsx global>{`
                .custom-scroll::-webkit-scrollbar { width: 6px; height: 6px; }
                .custom-scroll::-webkit-scrollbar-track { background: #1f1f1f; }
                .custom-scroll::-webkit-scrollbar-thumb { background: #374151; border-radius: 3px; }
                .custom-scroll::-webkit-scrollbar-thumb:hover { background: #4b5563; }
                .fade-in { animation: fadeIn 0.3s ease-in-out; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
                .card-hover { transition: transform 0.2s ease, box-shadow 0.2s ease; }
                .card-hover:hover { transform: translateY(-2px); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
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
                            <span className="text-[10px] uppercase tracking-wider font-bold text-visu-primary">Área do Cliente</span>
                        </div>
                    </div>
                    <button onClick={toggleSidebar} className="md:hidden text-gray-400 hover:text-white">
                        <i className="fas fa-times text-lg"></i>
                    </button>
                </div>

                <nav className="flex-1 py-6 space-y-1 overflow-y-auto custom-scroll">
                    <p className="px-6 text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-2 mt-2">Principal</p>
                    
                    <div onClick={() => switchSection('overview')} className={`sidebar-link flex items-center gap-3 px-6 py-2.5 text-sm font-medium cursor-pointer transition-all border-l-[3px] ${activeSection === 'overview' ? 'active text-white border-visu-primary bg-[#1e1e1e]' : 'border-transparent hover:text-white hover:bg-[#1e1e1e]'}`}>
                        <i className="fas fa-th-large w-5 text-center"></i>
                        Visão Geral
                    </div>
                    <div onClick={() => switchSection('servicos')} className={`sidebar-link flex items-center gap-3 px-6 py-2.5 text-sm font-medium cursor-pointer transition-all border-l-[3px] ${activeSection === 'servicos' ? 'active text-white border-visu-primary bg-[#1e1e1e]' : 'border-transparent hover:text-white hover:bg-[#1e1e1e]'}`}>
                        <i className="fas fa-layer-group w-5 text-center"></i>
                        Serviços Ativos
                    </div>

                    <p className="px-6 text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-2 mt-6">Financeiro & Contratos</p>

                    <div onClick={() => switchSection('assinaturas')} className={`sidebar-link flex items-center gap-3 px-6 py-2.5 text-sm font-medium cursor-pointer transition-all border-l-[3px] ${activeSection === 'assinaturas' ? 'active text-white border-visu-primary bg-[#1e1e1e]' : 'border-transparent hover:text-white hover:bg-[#1e1e1e]'}`}>
                        <i className="fas fa-sync w-5 text-center"></i>
                        Assinaturas (SaaS)
                    </div>
                    <div onClick={() => switchSection('financeiro')} className={`sidebar-link flex items-center gap-3 px-6 py-2.5 text-sm font-medium cursor-pointer transition-all border-l-[3px] ${activeSection === 'financeiro' ? 'active text-white border-visu-primary bg-[#1e1e1e]' : 'border-transparent hover:text-white hover:bg-[#1e1e1e]'}`}>
                        <i className="fas fa-file-invoice-dollar w-5 text-center"></i>
                        Financeiro
                    </div>

                    <p className="px-6 text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-2 mt-6">Gestão</p>

                    <div onClick={() => switchSection('depoimentos')} className={`sidebar-link flex items-center gap-3 px-6 py-2.5 text-sm font-medium cursor-pointer transition-all border-l-[3px] ${activeSection === 'depoimentos' ? 'active text-white border-visu-primary bg-[#1e1e1e]' : 'border-transparent hover:text-white hover:bg-[#1e1e1e]'}`}>
                        <i className="fas fa-comment-alt w-5 text-center"></i>
                        Depoimentos
                    </div>
                    <div onClick={() => switchSection('configuracoes')} className={`sidebar-link flex items-center gap-3 px-6 py-2.5 text-sm font-medium cursor-pointer transition-all border-l-[3px] ${activeSection === 'configuracoes' ? 'active text-white border-visu-primary bg-[#1e1e1e]' : 'border-transparent hover:text-white hover:bg-[#1e1e1e]'}`}>
                        <i className="fas fa-cog w-5 text-center"></i>
                        Configurações
                    </div>
                </nav>

                <div className="p-4 bg-visu-dark border-t border-gray-800">
                    <div className="flex items-center gap-3 mb-3">
                        <img src="https://images.icon-icons.com/2483/PNG/512/user_icon_149851.png" className="w-8 h-8 rounded-full border border-gray-600" alt="User" />
                        <div className="overflow-hidden">
                            <p className="text-white text-xs font-bold truncate">{user?.email || 'Usuário'}</p>
                            <p className="text-gray-500 text-[10px] truncate">Visuapp Cliente</p>
                        </div>
                    </div>
                    <button onClick={handleLogout} className="flex items-center justify-center gap-2 w-full py-2 bg-gray-800 hover:bg-red-900/30 text-gray-400 hover:text-red-400 rounded transition-colors text-xs font-bold">
                        <i className="fas fa-power-off"></i> Sair
                    </button>
                </div>
            </aside>

            <div className="flex-1 flex flex-col h-full overflow-hidden relative bg-gray-50">
                
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8 shadow-sm z-20 sticky top-0">
                    <div className="flex items-center gap-3 md:gap-4">
                        <button onClick={toggleSidebar} className="md:hidden text-visu-black focus:outline-none p-2 -ml-2">
                            <i className="fas fa-bars text-xl"></i>
                        </button>

                        <h2 className="text-base md:text-lg font-bold text-gray-800">{sectionTitles[activeSection] || 'Dashboard'}</h2>
                        <div className="hidden md:block h-6 w-px bg-gray-200"></div>
                        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-100 rounded text-red-700 text-xs font-bold uppercase tracking-wider">
                            <i className="fas fa-lock"></i> Área Restrita
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {timeLeft && (
                            <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-red-50 border border-red-100 rounded-lg shadow-sm">
                                <span className="text-[10px] font-bold uppercase text-red-500 tracking-wider">Sessão:</span>
                                <span className="text-sm font-bold font-mono text-red-600">{timeLeft}</span>
                                <i className="fas fa-clock text-xs text-red-400 animate-pulse"></i>
                            </div>
                        )}

                        <div className="md:hidden flex items-center gap-1 px-2 py-0.5 bg-red-50 border border-red-100 rounded text-red-700 text-[10px] font-bold uppercase">
                            <i className="fas fa-lock"></i>
                        </div>
                        <button className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors relative">
                            <i className="fas fa-bell"></i>
                            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-visu-primary border-2 border-white rounded-full"></span>
                        </button>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-24 custom-scroll scroll-smooth w-full">
                    <div className="max-w-7xl mx-auto">
                        
                        {activeSection === 'overview' && (
                            <div className="fade-in space-y-6 md:space-y-8">
                                <div>
                                    <h1 className="text-xl md:text-2xl font-bold text-visu-black mb-1">Painel de Controle</h1>
                                    <p className="text-gray-500 text-sm">Resumo das atividades da sua conta.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                                    <div onClick={() => switchSection('servicos')} className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm card-hover cursor-pointer group">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-visu-primary group-hover:bg-visu-primary group-hover:text-white transition-colors">
                                                <i className="fas fa-rocket"></i>
                                            </div>
                                            <span className="px-2 py-1 bg-green-50 text-green-600 rounded text-xs font-bold uppercase">Ativo</span>
                                        </div>
                                        <p className="text-gray-500 text-xs uppercase font-bold tracking-wider mb-1">Serviços Ativos</p>
                                        <h3 className="text-2xl md:text-3xl font-bold text-visu-black">1</h3>
                                        <p className="text-sm text-gray-400 mt-2">Clique para ver detalhes</p>
                                    </div>

                                    <div onClick={() => switchSection('assinaturas')} className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm card-hover opacity-70 cursor-pointer">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">
                                                <i className="fas fa-cloud"></i>
                                            </div>
                                            <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs font-bold uppercase">Inativo</span>
                                        </div>
                                        <p className="text-gray-500 text-xs uppercase font-bold tracking-wider mb-1">SaaS System</p>
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-400">0</h3>
                                        <p className="text-sm text-gray-400 mt-2">Nenhuma assinatura</p>
                                    </div>

                                    <div onClick={() => switchSection('depoimentos')} className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm card-hover cursor-pointer group">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center text-visu-accent group-hover:bg-visu-accent group-hover:text-white transition-colors">
                                                <i className="fas fa-comment-dots"></i>
                                            </div>
                                            <span className="px-2 py-1 bg-indigo-50 text-visu-primary rounded text-xs font-bold uppercase">Novo</span>
                                        </div>
                                        <p className="text-gray-500 text-xs uppercase font-bold tracking-wider mb-1">Depoimentos</p>
                                        <h3 className="text-2xl md:text-3xl font-bold text-visu-black">12</h3>
                                        <p className="text-sm text-gray-400 mt-2">Gerenciar depoimentos</p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-visu-primary to-visu-accent rounded-2xl p-6 md:p-8 text-white shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                    <div>
                                        <h3 className="font-bold text-lg md:text-xl mb-2">Precisa de ajuda com seu projeto?</h3>
                                        <p className="text-white/80 text-sm max-w-md">Nossa equipe de suporte técnico está disponível para ajustes emergenciais ou novas contratações.</p>
                                    </div>
                                    <a href="https://wa.me/5511999999999" target="_blank" className="w-full md:w-auto text-center bg-white text-visu-primary px-6 py-3 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors shadow-lg">
                                        <i className="fab fa-whatsapp mr-2"></i> Falar com Suporte
                                    </a>
                                </div>
                            </div>
                        )}

                        {activeSection === 'servicos' && (
                            <div className="fade-in space-y-6">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-visu-black">Meus Serviços</h2>
                                        <p className="text-gray-500 text-sm">Gerencie os detalhes técnicos dos seus produtos.</p>
                                    </div>
                                    <button className="w-full md:w-auto px-4 py-3 md:py-2 bg-visu-primary text-white rounded-lg text-xs font-bold hover:bg-indigo-700 transition-colors">
                                        <i className="fas fa-plus mr-2"></i> Novo Projeto
                                    </button>
                                </div>

                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                    <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                            <h3 className="font-bold text-visu-black">Website Institucional</h3>
                                        </div>
                                        <span className="text-xs font-mono text-gray-400">ID: #SRV-2023-01</span>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex flex-col lg:flex-row gap-8">
                                            <div className="w-full lg:w-1/3">
                                                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 relative group h-48">
                                                    <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Preview" className="w-full h-full object-cover" />
                                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <a href="#" className="px-4 py-2 bg-white text-visu-black rounded-lg text-xs font-bold hover:bg-visu-primary hover:text-white transition-colors">
                                                            Acessar Site <i className="fas fa-external-link-alt ml-1"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-1 space-y-6">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <h4 className="text-lg font-bold text-visu-black">Barbearia Viking</h4>
                                                        <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-bold uppercase">Online</span>
                                                    </div>
                                                    <p className="text-gray-500 text-sm leading-relaxed">
                                                        Plataforma institucional completa desenvolvida em React.js. Inclui módulo de blog, integração com Instagram e sistema de agendamento via WhatsApp API.
                                                    </p>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                                                        <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Servidor</p>
                                                        <p className="text-sm font-bold text-visu-black"><i className="fab fa-aws mr-1 text-orange-500"></i> AWS EC2</p>
                                                    </div>
                                                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                                                        <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Segurança</p>
                                                        <p className="text-sm font-bold text-visu-black"><i className="fas fa-lock mr-1 text-green-500"></i> SSL Ativo</p>
                                                    </div>
                                                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                                                        <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Backup</p>
                                                        <p className="text-sm font-bold text-visu-black"><i className="fas fa-history mr-1 text-blue-500"></i> Diário (03:00)</p>
                                                    </div>
                                                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                                                        <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Uptime Mensal</p>
                                                        <p className="text-sm font-bold text-green-600">99.98%</p>
                                                    </div>
                                                </div>

                                                <div className="pt-4 border-t border-gray-100 flex flex-col md:flex-row gap-3">
                                                    <button className="w-full md:w-auto px-4 py-3 md:py-2 border border-gray-200 rounded-lg text-xs font-bold text-gray-600 hover:border-visu-primary hover:text-visu-primary transition-colors text-center">
                                                        <i className="fas fa-chart-bar mr-1"></i> Analytics
                                                    </button>
                                                    <button className="w-full md:w-auto px-4 py-3 md:py-2 border border-gray-200 rounded-lg text-xs font-bold text-gray-600 hover:border-visu-primary hover:text-visu-primary transition-colors text-center">
                                                        <i className="fas fa-tools mr-1"></i> Solicitar Ajuste
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'assinaturas' && (
                            <div className="fade-in space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-visu-black">Assinaturas SaaS</h2>
                                    <p className="text-gray-500 text-sm">Planos de software recorrentes.</p>
                                </div>

                                <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden relative min-h-[400px] flex items-center justify-center">
                                    <div className="text-center p-8 max-w-md">
                                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-gray-300 mx-auto mb-6 shadow-sm">
                                            <i className="fas fa-cube text-3xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Nenhum plano ativo</h3>
                                        <p className="text-gray-500 text-sm mb-6">Você ainda não utiliza nossos produtos de software como serviço (SaaS). Conheça nossas soluções para automação.</p>
                                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                                            <button className="w-full md:w-auto px-6 py-3 bg-visu-black text-white rounded-xl text-sm font-bold hover:bg-visu-primary transition-colors shadow-lg shadow-indigo-500/20">
                                                Conhecer Planos
                                            </button>
                                            <button className="w-full md:w-auto px-6 py-3 bg-white border border-gray-200 text-gray-600 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors">
                                                Falar com Consultor
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'financeiro' && (
                            <div className="fade-in space-y-6">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-visu-black">Histórico Financeiro</h2>
                                        <p className="text-gray-500 text-sm">Faturas, recibos e histórico de pagamentos.</p>
                                    </div>
                                    <button className="w-full md:w-auto px-4 py-3 md:py-2 border border-gray-200 bg-white text-gray-600 rounded-lg text-xs font-bold hover:bg-gray-50 transition-colors">
                                        <i className="fas fa-download mr-2"></i> Exportar Extrato
                                    </button>
                                </div>

                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                    <div className="overflow-x-auto custom-scroll pb-2">
                                        <table className="w-full text-left min-w-[600px]">
                                            <thead className="bg-gray-50 text-[10px] uppercase text-gray-500 font-bold">
                                                <tr>
                                                    <th className="px-6 py-4">Descrição</th>
                                                    <th className="px-6 py-4">Data</th>
                                                    <th className="px-6 py-4">Método</th>
                                                    <th className="px-6 py-4">Valor</th>
                                                    <th className="px-6 py-4">Status</th>
                                                    <th className="px-6 py-4 text-right">Ações</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 text-xs">
                                                <tr className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4">
                                                        <p className="font-bold text-visu-black">Desenvolvimento Web - Setup</p>
                                                        <p className="text-gray-400 text-[10px]">Parcela Única</p>
                                                    </td>
                                                    <td className="px-6 py-4 text-gray-600">23 Out, 2023</td>
                                                    <td className="px-6 py-4 text-gray-600"><i className="fab fa-pix text-green-500 mr-1"></i> PIX</td>
                                                    <td className="px-6 py-4 font-bold text-visu-black">R$ 2.500,00</td>
                                                    <td className="px-6 py-4"><span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold bg-green-50 text-green-700 border border-green-100">Pago</span></td>
                                                    <td className="px-6 py-4 text-right">
                                                        <button className="text-gray-400 hover:text-visu-primary transition-colors tooltip" title="Baixar Fatura"><i className="fas fa-file-download text-base"></i></button>
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4">
                                                        <p className="font-bold text-visu-black">Manutenção Mensal</p>
                                                        <p className="text-gray-400 text-[10px]">Ref: Novembro/2023</p>
                                                    </td>
                                                    <td className="px-6 py-4 text-gray-600">23 Nov, 2023</td>
                                                    <td className="px-6 py-4 text-gray-600">Cortesia (Garantia)</td>
                                                    <td className="px-6 py-4 font-bold text-visu-black">R$ 0,00</td>
                                                    <td className="px-6 py-4"><span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold bg-green-50 text-green-700 border border-green-100">Isento</span></td>
                                                    <td className="px-6 py-4 text-right">
                                                        <button className="text-gray-400 hover:text-visu-primary transition-colors"><i className="fas fa-file-download text-base"></i></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'depoimentos' && (
                            <div className="fade-in space-y-6">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-visu-black">Gerenciador de Depoimentos</h2>
                                        <p className="text-gray-500 text-sm">O que seus clientes dizem sobre você.</p>
                                    </div>
                                    <button className="w-full md:w-auto px-4 py-3 md:py-2 bg-visu-black text-white rounded-lg text-xs font-bold hover:bg-visu-primary transition-colors">
                                        <i className="fas fa-plus mr-2"></i> Adicionar Novo
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative group hover:border-visu-primary/30 transition-colors">
                                        <div className="absolute top-6 right-6 flex gap-2 md:opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="w-8 h-8 rounded-lg bg-gray-50 text-gray-600 hover:bg-visu-primary hover:text-white flex items-center justify-center transition-colors"><i className="fas fa-pen"></i></button>
                                            <button className="w-8 h-8 rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center transition-colors"><i className="fas fa-trash"></i></button>
                                        </div>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-lg font-bold text-gray-400">
                                                MR
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-visu-black">Marcos Rocha</h4>
                                                <div className="flex text-yellow-400 text-xs mt-1">
                                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <i className="fas fa-quote-left text-gray-100 text-4xl absolute -top-2 -left-2 -z-10"></i>
                                            <p className="text-gray-600 text-sm italic leading-relaxed">"O serviço da barbearia é excelente, o ambiente é muito agradável. Recomendo fortemente para quem busca qualidade."</p>
                                        </div>
                                        <p className="text-[10px] text-gray-400 mt-4 font-bold uppercase tracking-wider">Publicado em 10 Nov, 2023</p>
                                    </div>

                                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative group hover:border-visu-primary/30 transition-colors">
                                        <div className="absolute top-6 right-6 flex gap-2 md:opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="w-8 h-8 rounded-lg bg-gray-50 text-gray-600 hover:bg-visu-primary hover:text-white flex items-center justify-center transition-colors"><i className="fas fa-pen"></i></button>
                                            <button className="w-8 h-8 rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center transition-colors"><i className="fas fa-trash"></i></button>
                                        </div>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-lg font-bold text-gray-400">
                                                AS
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-visu-black">André Souza</h4>
                                                <div className="flex text-yellow-400 text-xs mt-1">
                                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <i className="fas fa-quote-left text-gray-100 text-4xl absolute -top-2 -left-2 -z-10"></i>
                                            <p className="text-gray-600 text-sm italic leading-relaxed">"Profissionais de alta qualidade. O agendamento online facilitou muito a minha vida."</p>
                                        </div>
                                        <p className="text-[10px] text-gray-400 mt-4 font-bold uppercase tracking-wider">Publicado em 15 Nov, 2023</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'configuracoes' && (
                            <div className="fade-in space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-visu-black">Configurações</h2>
                                    <p className="text-gray-500 text-sm">Gerencie seus dados e preferências.</p>
                                </div>
                                <div className="bg-white p-12 rounded-2xl border border-gray-100 text-center">
                                     <i className="fas fa-cog text-4xl text-gray-200 mb-4 animate-spin-slow"></i>
                                     <p className="text-gray-500">Módulo de configurações em desenvolvimento.</p>
                                </div>
                            </div>
                        )}

                    </div>
                </main>
            </div>
        </div>
    );
}