'use client';

import { useEffect } from 'react';
import './studio.css';

export default function VisuLabStudioPage() {
    
    useEffect(() => {
        // --- INÍCIO DA INTEGRAÇÃO DO SCRIPT.JS ---
        
        // Cursor Customizado
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

        // Funcao Check Overflow
        function checkSnippetOverflow(card: Element) {
            const body = card.querySelector('.editor-body') as HTMLElement;
            const content = card.querySelector('.code-content.active');
            const expandBtn = card.querySelector('.btn-editor-expand') as HTMLElement;
            const overlay = card.querySelector('.fade-overlay');
            const collapsedHeight = 180;

            if (content && content.scrollHeight <= collapsedHeight) {
                if(expandBtn) expandBtn.classList.add('hidden-action');
                if(overlay) overlay.classList.add('hidden');
                if(body && body.classList.contains('expanded')) body.classList.remove('expanded');
            } else {
                if(expandBtn) expandBtn.classList.remove('hidden-action');
                if (body && !body.classList.contains('expanded')) {
                    if(overlay) overlay.classList.remove('hidden');
                    if(expandBtn) {
                        expandBtn.innerText = 'Expandir Código';
                        expandBtn.classList.remove('active');
                    }
                }
            }
        }

        // Tabs Snippets
        const tabBtns = document.querySelectorAll('.editor-tab');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const targetBtn = e.currentTarget as HTMLElement;
                const card = targetBtn.closest('.editor-card');
                if(card) {
                    const targetClass = targetBtn.getAttribute('data-target');
                    card.querySelectorAll('.editor-tab').forEach(b => b.classList.remove('active'));
                    targetBtn.classList.add('active');
                    card.querySelectorAll('.code-content').forEach(pane => pane.classList.remove('active'));
                    const targetPane = card.querySelector(`.code-content.${targetClass}`);
                    if(targetPane) targetPane.classList.add('active');
                    checkSnippetOverflow(card);
                }
            });
        });

        document.querySelectorAll('.editor-card').forEach(card => checkSnippetOverflow(card));

        // Expandir
        const expandBtns = document.querySelectorAll('.btn-editor-expand');
        expandBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const targetBtn = e.currentTarget as HTMLElement;
                const card = targetBtn.closest('.editor-card');
                if(card) {
                    const wrapper = card.querySelector('.editor-body') as HTMLElement;
                    const overlay = card.querySelector('.fade-overlay');
                    wrapper.classList.toggle('expanded');
                    
                    if (wrapper.classList.contains('expanded')) {
                        targetBtn.innerText = 'Recolher';
                        targetBtn.classList.add('active'); 
                        if(overlay) overlay.classList.add('hidden');
                    } else {
                        targetBtn.innerText = 'Expandir Código';
                        targetBtn.classList.remove('active');
                        if(overlay) overlay.classList.remove('hidden');
                    }
                }
            });
        });

        // Copiar Snippet
        const copySnippetBtns = document.querySelectorAll('.btn-editor-copy');
        copySnippetBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const targetBtn = e.currentTarget as HTMLElement;
                const card = targetBtn.closest('.editor-card');
                const activePane = card?.querySelector('.code-content.active') as HTMLElement;
                if(activePane) {
                    const textToCopy = activePane.innerText;
                    navigator.clipboard.writeText(textToCopy).then(() => {
                        const originalText = targetBtn.innerText;
                        targetBtn.innerText = 'Copiado!';
                        targetBtn.classList.add('copied');
                        setTimeout(() => {
                            targetBtn.innerText = originalText;
                            targetBtn.classList.remove('copied');
                        }, 2000);
                    });
                }
            });
        });

        // Copiar Token
        const tokenCards = document.querySelectorAll('.btn-copy-token');
        tokenCards.forEach(card => {
            card.addEventListener('click', () => {
                const targetCard = card as HTMLElement;
                const textToCopy = targetCard.getAttribute('data-copy');
                if(textToCopy) {
                    navigator.clipboard.writeText(textToCopy).then(() => {
                        targetCard.style.borderColor = 'var(--accent)';
                        setTimeout(() => targetCard.style.borderColor = '#e0e0e0', 500);
                    });
                }
            });
        });

        // Copiar Prompts
        const copyButtons = document.querySelectorAll('.btn-copy');
        copyButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const targetBtn = e.currentTarget as HTMLElement;
                const textToCopy = targetBtn.getAttribute('data-copy');
                if(textToCopy) {
                    navigator.clipboard.writeText(textToCopy).then(() => {
                        const originalText = targetBtn.innerText;
                        targetBtn.innerText = 'Copiado!';
                        targetBtn.style.backgroundColor = 'var(--accent)';
                        targetBtn.style.color = 'white';
                        targetBtn.style.borderColor = 'var(--accent)';
                        setTimeout(() => {
                            targetBtn.innerText = originalText;
                            targetBtn.style.backgroundColor = 'transparent';
                            targetBtn.style.color = 'inherit';
                            targetBtn.style.borderColor = 'currentColor';
                        }, 2000);
                    });
                }
            });
        });

        // Acordeão
        const accordions = document.querySelectorAll('.accordion-item');
        accordions.forEach(acc => {
            const header = acc.querySelector('.accordion-header');
            if(header) {
                header.addEventListener('click', () => {
                    const isActive = acc.classList.contains('active');
                    accordions.forEach(otherAcc => otherAcc.classList.remove('active'));
                    if (!isActive) {
                        acc.classList.add('active');
                        setTimeout(() => {
                            acc.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }, 300);
                    }
                });
            }
        });

        // Reveal
        const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, observerOptions);
        document.querySelectorAll('.reveal-scroll').forEach(el => observer.observe(el));

        // Nav
        const navLinks = document.querySelectorAll('.nav-item');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetLink = link as HTMLAnchorElement;
                const targetId = targetLink.getAttribute('href');
                if(targetId) {
                    const targetSection = document.querySelector(targetId);
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                    targetSection?.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Scroll Highlight
        const sections = document.querySelectorAll('section');
        const handleScroll = () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id') || '';
                }
            });
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href')?.includes(current)) {
                    link.classList.add('active');
                }
            });
        };
        
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className="visulab-studio-scope">
            <div className="model-info">ACESSO RESTRITO: AMBIENTE INTERNO VISUAPP — APENAS PESSOAL AUTORIZADO</div>
            <div className="custom-cursor"></div>

            <div className="layout-grid">
                <aside>
                    <div className="brand-container">
                        <div className="brand">VisuLab</div>
                        <div className="sub-brand">Studio.</div>
                    </div>
                    
                    <nav className="nav-links">
                        <a href="#hero" className="nav-item active">Visão Geral</a>
                        <a href="#tokens" className="nav-item">Design Tokens</a>
                        <a href="#templates" className="nav-item">Biblioteca</a>
                        <a href="#prompts" className="nav-item">AI Prompts</a>
                        <a href="#snippets" className="nav-item">Snippets</a>
                        <a href="#contact" className="nav-item">Suporte</a>
                    </nav>

                    <div className="meta-info">
                        <span>Build 2025.8</span>
                        <span>Internal Use Only</span>
                    </div>
                </aside>

                <main>
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
                                <div className="token-card btn-copy-token" data-copy="var(--ink)">
                                    <div className="token-swatch" style={{backgroundColor: 'var(--ink)'}}></div>
                                    <div className="token-info">
                                        <span className="token-name">--ink</span>
                                        <span className="token-hex">#080808</span>
                                    </div>
                                </div>
                                <div className="token-card btn-copy-token" data-copy="var(--bg)">
                                    <div className="token-swatch" style={{backgroundColor: 'var(--bg)', border: '1px solid #eee'}}></div>
                                    <div className="token-info">
                                        <span className="token-name">--bg</span>
                                        <span className="token-hex">#FFFFFF</span>
                                    </div>
                                </div>
                                <div className="token-card btn-copy-token" data-copy="var(--accent)">
                                    <div className="token-swatch" style={{backgroundColor: 'var(--accent)'}}></div>
                                    <div className="token-info">
                                        <span className="token-name">--accent</span>
                                        <span className="token-hex">#FF4500</span>
                                    </div>
                                </div>
                                <div className="token-card btn-copy-token" data-copy="var(--gray)">
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
                                <div className="token-card btn-copy-token" data-copy="var(--success-green)">
                                    <div className="token-swatch" style={{backgroundColor: 'var(--success-green)'}}></div>
                                    <div className="token-info">
                                        <span className="token-name">--success</span>
                                        <span className="token-hex">#00C853</span>
                                    </div>
                                </div>
                                <div className="token-card btn-copy-token" data-copy="#ff3b30">
                                    <div className="token-swatch" style={{backgroundColor: '#ff3b30'}}></div>
                                    <div className="token-info">
                                        <span className="token-name">--error</span>
                                        <span className="token-hex">#FF3B30</span>
                                    </div>
                                </div>
                                <div className="token-card btn-copy-token" data-copy="#ffcc00">
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
                            <div className="accordion-item reveal-scroll">
                                <div className="accordion-header">
                                    <h3 className="acc-title">Arquitetura Estrutural</h3>
                                    <span className="acc-tag light">Modelo Claro</span>
                                    <div className="acc-icon">+</div>
                                </div>
                                <div className="accordion-body">
                                    <div className="body-content">
                                        <div className="model-preview">
                                            <div className="img-placeholder">
                                                <img 
                                                    src="/assets/models/estrutural.png" 
                                                    alt="Preview Arquitetura Estrutural" 
                                                    onError={(e) => {e.currentTarget.style.display='none'; e.currentTarget.parentElement?.classList.add('no-img')}}
                                                />
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

                            <div className="accordion-item reveal-scroll">
                                <div className="accordion-header">
                                    <h3 className="acc-title">Neo-Brutalismo</h3>
                                    <span className="acc-tag light">Modelo Claro</span>
                                    <div className="acc-icon">+</div>
                                </div>
                                <div className="accordion-body">
                                    <div className="body-content">
                                        <div className="model-preview">
                                            <div className="img-placeholder">
                                                <img 
                                                    src="/assets/models/neobrutalismo.png" 
                                                    alt="Preview Neo-Brutalismo" 
                                                    onError={(e) => {e.currentTarget.style.display='none'; e.currentTarget.parentElement?.classList.add('no-img')}}
                                                />
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
                            
                            <div className="accordion-item reveal-scroll">
                                <div className="accordion-header">
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

                            <div className="accordion-item reveal-scroll">
                                <div className="accordion-header">
                                    <h3 className="acc-title">Sofisticado</h3>
                                    <span className="acc-tag dark">Modelo Escuro</span>
                                    <div className="acc-icon">+</div>
                                </div>
                                <div className="accordion-body">
                                    <div className="body-content">
                                        <div className="model-preview">
                                            <div className="img-placeholder">
                                                <img 
                                                    src="/assets/models/sofisticado.png" 
                                                    alt="Preview Sofisticado" 
                                                    onError={(e) => {e.currentTarget.style.display='none'; e.currentTarget.parentElement?.classList.add('no-img')}}
                                                />
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
                                    <button className="btn-copy" data-copy="Regras: 1. Mande os códigos inteiros; 2. Nunca comente nos códigos; 3. Mexa nos códigos SOLICITADOS, não faça nada sem ter sido solicitado, não mexe em códigos que não precisam mexer conforme a solicitação;">Copiar</button>
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
                                    <button className="btn-copy" data-copy="Atue como um Arquiteto de Software Sênior especializado em Clean Code. Analise o seguinte código em [LINGUAGEM]. Identifique code smells, violações de princípios SOLID e sugira uma refatoração que melhore a legibilidade e manutenibilidade sem alterar o comportamento final. Explique o 'porquê' de cada mudança.">Copiar</button>
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
                                    <button className="btn-copy" data-copy="Crie casos de teste unitários abrangentes para a função abaixo usando [FRAMEWORK DE TESTE]. Inclua cenários felizes, casos de borda (edge cases) e tratamento de erros. Garanta 100% de cobertura de branches.">Copiar</button>
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
                                    <button className="btn-copy" data-copy="Gere uma documentação técnica para este componente seguindo o padrão JSDoc/DocString. Inclua descrição dos parâmetros, tipos de retorno, exceções lançadas e um exemplo prático de uso.">Copiar</button>
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
                                    <img 
                                        src="/assets/snippets/form-input.png" 
                                        alt="Input Visual" 
                                        onError={(e) => {e.currentTarget.style.display='none'; e.currentTarget.parentElement?.classList.add('no-img')}}
                                    />
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
                                    <button className="editor-tab active" data-target="html">HTML</button>
                                    <button className="editor-tab" data-target="css">CSS</button>
                                    <button className="editor-tab" data-target="js">JS</button>
                                </div>

                                <div className="editor-body">
                                    <div className="code-content html active">
<pre><code>{`<div class="input-group">
  <input type="text" id="visuName" required placeholder=" ">
  <label for="visuName">Nome Completo</label>
  <span class="highlight"></span>
</div>`}</code></pre>
                                    </div>
                                    
                                    <div className="code-content css">
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

                                    <div className="code-content js">
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
                                    <button className="btn-editor-expand">Expandir Código</button>
                                    <button className="btn-editor-copy">Copiar</button>
                                </div>
                            </div>

                            <div className="editor-card reveal-scroll">
                                <div className="snippet-visual">
                                    <img 
                                        src="/assets/snippets/button-ui.png" 
                                        alt="Button Visual" 
                                        onError={(e) => {e.currentTarget.style.display='none'; e.currentTarget.parentElement?.classList.add('no-img')}}
                                    />
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
                                    <button className="editor-tab active" data-target="html">HTML</button>
                                    <button className="editor-tab" data-target="css">CSS</button>
                                </div>

                                <div className="editor-body">
                                    <div className="code-content html active">
<pre><code>{`<button class="visu-btn">
  <span>Enviar Dados</span>
  <div class="icon-arrow">→</div>
</button>`}</code></pre>
                                    </div>
                                    
                                    <div className="code-content css">
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
                                    <button className="btn-editor-expand">Expandir Código</button>
                                    <button className="btn-editor-copy">Copiar</button>
                                </div>
                            </div>

                            <div className="editor-card reveal-scroll">
                                <div className="snippet-visual">
                                    <img 
                                        src="/assets/snippets/grid-layout.png" 
                                        alt="Grid Visual" 
                                        onError={(e) => {e.currentTarget.style.display='none'; e.currentTarget.parentElement?.classList.add('no-img')}}
                                    />
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
                                    <button className="editor-tab active" data-target="css">CSS</button>
                                    <button className="editor-tab" data-target="react">React</button>
                                </div>

                                <div className="editor-body">
                                    <div className="code-content css active">
<pre><code>{`.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
}`}</code></pre>
                                    </div>
                                    
                                    <div className="code-content react">
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
                                    <button className="btn-editor-expand">Expandir Código</button>
                                    <button className="btn-editor-copy">Copiar</button>
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
                </main>
            </div>
        </div>
    );
}