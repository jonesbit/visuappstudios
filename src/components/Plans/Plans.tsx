'use client';

import { useState } from 'react';
import styles from './Plans.module.css';

export default function Plans() {
    const [activeTab, setActiveTab] = useState<'landing' | 'institutional' | 'design'>('landing');

    return (
        <section id="planos" className={`${styles.plansContainer} bg-visu-dark`}>
            <div className={styles.glowBlob1}></div>
            <div className={styles.glowBlob2}></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12" data-aos="fade-up">
                    <span className="text-visu-primary font-bold tracking-widest text-xs uppercase mb-3 block">Investimento</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Planos que cabem no <br /><span className="text-gradient">seu projeto</span></h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg font-light">
                        Transparência total. Sem mensalidades ocultas no desenvolvimento.
                    </p>
                </div>

                <div className="flex justify-center mb-12 md:mb-16 px-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="bg-visu-gray border border-gray-800 p-2 md:p-1.5 rounded-2xl flex flex-col md:flex-row w-full md:w-auto gap-2 md:gap-0 relative shadow-inner shadow-black/50">
                        
                        <button 
                            onClick={() => setActiveTab('landing')} 
                            className={`w-full md:w-auto px-6 md:px-8 py-4 md:py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-3 md:gap-0 ${activeTab === 'landing' ? 'bg-visu-primary text-white shadow-lg shadow-visu-primary/30' : 'text-gray-400 hover:bg-white/5'}`}
                        >
                            <span>Landing Pages</span>
                        </button>

                        <button 
                            onClick={() => setActiveTab('institutional')} 
                            className={`w-full md:w-auto px-6 md:px-8 py-4 md:py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-3 md:gap-0 ${activeTab === 'institutional' ? 'bg-visu-primary text-white shadow-lg shadow-visu-primary/30' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            <span>Sites Institucionais</span>
                        </button>

                        <button 
                            onClick={() => setActiveTab('design')} 
                            className={`w-full md:w-auto px-6 md:px-8 py-4 md:py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-3 md:gap-0 ${activeTab === 'design' ? 'bg-visu-primary text-white shadow-lg shadow-visu-primary/30' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            <span>Design Gráfico</span>
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto transition-opacity duration-300">
                    
                    {/* LANDING PAGES TAB */}
                    {activeTab === 'landing' && (
                        <>
                            <div className="bg-visu-gray border border-gray-800 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden hover:shadow-2xl hover:shadow-visu-primary/20 hover:border-visu-primary/50 animate-fade-in-down" data-aos="fade-up" data-aos-delay="0">
                                <div className="absolute inset-0 bg-gradient-to-br from-visu-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 group-hover:bg-visu-primary group-hover:text-white transition-colors">Start</span>
                                        <h3 className="text-2xl font-bold text-white">LP Essencial</h3>
                                        <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-400 transition-colors">Página única rápida e eficiente para campanhas e captura de leads.</p>
                                    </div>
                                    
                                    <div className="mb-8">
                                        <span className="text-visu-primary text-[10px] font-bold uppercase tracking-widest mb-1 block">Pagamento Único</span>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-sm text-gray-500 font-bold">R$</span>
                                            <span className="text-4xl font-bold text-white">350</span>
                                            <span className="text-sm text-gray-500">,00</span>
                                        </div>
                                    </div>

                                    <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20no%20Plano%20LP%20Essencial" className="block w-full py-3 rounded-xl border border-gray-600 text-white font-bold text-center group-hover:bg-visu-primary group-hover:border-visu-primary hover:shadow-lg transition-all duration-300 mb-8">
                                        Escolher Plano
                                    </a>

                                    <ul className="space-y-4 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-primary"></i> Até 4 seções de conteúdo
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-primary"></i> Design Responsivo (Mobile)
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-primary"></i> Botão WhatsApp Flutuante
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-primary"></i> Formulário de Contato
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-primary"></i> Entrega em 3 dias úteis
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-primary"></i> Otimização SEO Básica
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gradient-to-b from-gray-800 to-visu-black border border-visu-primary/50 rounded-3xl p-8 md:p-10 transform lg:-translate-y-6 shadow-2xl shadow-visu-primary/20 relative overflow-hidden group hover:shadow-visu-primary/40 transition-all duration-500 animate-fade-in-down" data-aos="fade-up" data-aos-delay="100">
                                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-visu-primary via-visu-accent to-visu-primary"></div>
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-visu-primary text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg animate-pulse">Recomendado</span>
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <span className="inline-block px-3 py-1 bg-visu-primary/20 text-visu-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4">Pro</span>
                                        <h3 className="text-3xl font-bold text-white">LP Performance</h3>
                                        <p className="text-gray-400 text-sm mt-2">A estrutura perfeita para vender produtos e escalar seu negócio com copy persuasiva.</p>
                                    </div>
                                    
                                    <div className="mb-8">
                                        <span className="text-visu-primary text-[10px] font-bold uppercase tracking-widest mb-1 block">Pagamento Único</span>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-sm text-gray-500 font-bold">R$</span>
                                            <span className="text-5xl font-bold text-white">849</span>
                                            <span className="text-lg text-gray-500 font-bold">,99</span>
                                        </div>
                                    </div>

                                    <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20no%20Plano%20LP%20Performance" className="block w-full py-4 rounded-xl bg-gradient-to-r from-visu-primary to-visu-accent text-white font-bold text-center hover:shadow-lg hover:shadow-visu-primary/40 hover:scale-[1.02] hover:brightness-110 transition-all duration-300 mb-8 relative overflow-hidden">
                                        <span className="relative z-10">Contratar Agora</span>
                                    </a>

                                    <ul className="space-y-4 text-sm text-gray-300">
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center"><i className="fas fa-check text-xs text-visu-primary"></i></div>
                                            <span className="font-bold text-white">Tudo do plano Essencial</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center"><i className="fas fa-check text-xs text-visu-primary"></i></div>
                                            <span>Até <strong className="text-white">9 seções</strong> estratégicas</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center"><i className="fas fa-check text-xs text-visu-primary"></i></div>
                                            <span className="text-visu-primary font-bold">Domínio Grátis (1 ano)</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center"><i className="fas fa-check text-xs text-visu-primary"></i></div>
                                            <span>Copywriting Profissional</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center"><i className="fas fa-check text-xs text-visu-primary"></i></div>
                                            <span>Animações Fluidas (AOS)</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center"><i className="fas fa-check text-xs text-visu-primary"></i></div>
                                            <span>Otimização SEO Avançada</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-visu-gray border border-gray-800 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden hover:shadow-2xl hover:shadow-visu-accent/20 hover:border-visu-accent/50 animate-fade-in-down" data-aos="fade-up" data-aos-delay="200">
                                <div className="absolute inset-0 bg-gradient-to-br from-visu-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 group-hover:bg-visu-accent group-hover:text-white transition-colors">VIP</span>
                                        <h3 className="text-2xl font-bold text-white">LP Authority</h3>
                                        <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-400 transition-colors">Design exclusivo e integrações avançadas para lançamentos de alto nível.</p>
                                    </div>
                                    
                                    <div className="mb-8">
                                        <span className="text-visu-accent text-[10px] font-bold uppercase tracking-widest mb-1 block">Pagamento Único</span>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-sm text-gray-500 font-bold">R$</span>
                                            <span className="text-4xl font-bold text-white">1.199</span>
                                            <span className="text-sm text-gray-500">,99</span>
                                        </div>
                                    </div>

                                    <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20no%20Plano%20LP%20Authority" className="block w-full py-3 rounded-xl border border-gray-600 text-white font-bold text-center group-hover:bg-visu-accent group-hover:border-visu-accent hover:shadow-lg transition-all duration-300 mb-8">
                                        Escolher Plano
                                    </a>

                                    <ul className="space-y-4 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-accent"></i> <span className="font-bold text-white">Tudo do plano Performance</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-accent"></i> Até 14 seções personalizadas
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-accent"></i> <span className="text-white font-bold">Domínio Grátis (1 ano)</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-accent"></i> Integração Pixel/Analytics
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-accent"></i> Configuração de Domínio e E-mail
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-accent"></i> Suporte Prioritário 30 dias
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    )}

                    {/* INSTITUCIONAL TAB */}
                    {activeTab === 'institutional' && (
                        <>
                            <div className="bg-visu-gray border border-gray-800 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden hover:shadow-2xl hover:shadow-visu-primary/20 hover:border-visu-primary/50 animate-fade-in-down">
                                <div className="absolute inset-0 bg-gradient-to-br from-visu-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 group-hover:bg-visu-primary group-hover:text-white transition-colors">Business</span>
                                        <h3 className="text-2xl font-bold text-white">Inst. Start</h3>
                                        <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-400 transition-colors">Site profissional multipáginas para apresentar sua empresa na web.</p>
                                    </div>
                                    
                                    <div className="mb-8">
                                        <span className="text-visu-primary text-[10px] font-bold uppercase tracking-widest mb-1 block">Pagamento Único</span>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-sm text-gray-500 font-bold">R$</span>
                                            <span className="text-4xl font-bold text-white">650</span>
                                            <span className="text-sm text-gray-500">,00</span>
                                        </div>
                                    </div>

                                    <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20no%20Plano%20Institucional%20Start" className="block w-full py-3 rounded-xl border border-gray-600 text-white font-bold text-center group-hover:bg-visu-primary group-hover:border-visu-primary hover:shadow-lg transition-all duration-300 mb-8">
                                        Escolher Plano
                                    </a>

                                    <ul className="space-y-4 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-primary"></i> Até 5 Páginas (Home, Sobre, etc)
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-primary"></i> Design Institucional Moderno
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-primary"></i> Otimização para Google (SEO)
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-primary"></i> Botão WhatsApp e Redes Sociais
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-primary"></i> Entrega em 7 dias úteis
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-primary"></i> Hospedagem Inclusa (1 mês)
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gradient-to-b from-gray-800 to-visu-black border border-visu-primary/50 rounded-3xl p-8 md:p-10 transform lg:-translate-y-6 shadow-2xl shadow-visu-primary/20 relative overflow-hidden group hover:shadow-visu-primary/40 transition-all duration-500 animate-fade-in-down">
                                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-visu-primary via-visu-accent to-visu-primary"></div>
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-visu-primary text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg animate-pulse">Completo</span>
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <span className="inline-block px-3 py-1 bg-visu-primary/20 text-visu-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4">Pro</span>
                                        <h3 className="text-3xl font-bold text-white">Inst. Growth</h3>
                                        <p className="text-gray-400 text-sm mt-2">Site robusto com Blog ou Área de Serviços detalhada para gerar autoridade.</p>
                                    </div>
                                    
                                    <div className="mb-8">
                                        <span className="text-visu-primary text-[10px] font-bold uppercase tracking-widest mb-1 block">Pagamento Único</span>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-sm text-gray-500 font-bold">R$</span>
                                            <span className="text-5xl font-bold text-white">1.490</span>
                                            <span className="text-lg text-gray-500 font-bold">,99</span>
                                        </div>
                                    </div>

                                    <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20no%20Plano%20Institucional%20Growth" className="block w-full py-4 rounded-xl bg-gradient-to-r from-visu-primary to-visu-accent text-white font-bold text-center hover:shadow-lg hover:shadow-visu-primary/40 hover:scale-[1.02] hover:brightness-110 transition-all duration-300 mb-8 relative overflow-hidden">
                                        <span className="relative z-10">Contratar Agora</span>
                                    </a>

                                    <ul className="space-y-4 text-sm text-gray-300">
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center"><i className="fas fa-check text-xs text-visu-primary"></i></div>
                                            <span className="font-bold text-white">Tudo do plano Start</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center"><i className="fas fa-check text-xs text-visu-primary"></i></div>
                                            <span>Até <strong className="text-white">10 Páginas</strong> Internas</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center"><i className="fas fa-check text-xs text-visu-primary"></i></div>
                                            <span className="text-visu-primary font-bold">Blog / Notícias Gerenciável</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center"><i className="fas fa-check text-xs text-visu-primary"></i></div>
                                            <span>Painel Administrativo CMS</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center"><i className="fas fa-check text-xs text-visu-primary"></i></div>
                                            <span>Domínio .com.br Grátis (1 ano)</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center"><i className="fas fa-check text-xs text-visu-primary"></i></div>
                                            <span>Google Meu Negócio Configurado</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-visu-gray border border-gray-800 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden hover:shadow-2xl hover:shadow-visu-accent/20 hover:border-visu-accent/50 animate-fade-in-down">
                                <div className="absolute inset-0 bg-gradient-to-br from-visu-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 group-hover:bg-visu-accent group-hover:text-white transition-colors">Corporativo</span>
                                        <h3 className="text-2xl font-bold text-white">Inst. Elite</h3>
                                        <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-400 transition-colors">Soluções complexas sob medida para grandes empresas e catálogos.</p>
                                    </div>
                                    
                                    <div className="mb-8">
                                         <span className="text-visu-accent text-[10px] font-bold uppercase tracking-widest mb-1 block">Orçamento</span>
                                         <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-bold text-white">Sob Consulta</span>
                                        </div>
                                    </div>

                                    <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20no%20Plano%20Institucional%20Elite" className="block w-full py-3 rounded-xl border border-gray-600 text-white font-bold text-center group-hover:bg-visu-accent group-hover:border-visu-accent hover:shadow-lg transition-all duration-300 mb-8">
                                        Falar com Consultor
                                    </a>

                                    <ul className="space-y-4 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-accent"></i> <span className="font-bold text-white">Tudo do plano Growth</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-accent"></i> Páginas Ilimitadas
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-accent"></i> <span className="text-white font-bold">Catálogo de Produtos / Vitrine</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-accent"></i> Área Restrita de Clientes
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-accent"></i> Suporte Dedicado 24/7
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-accent"></i> Treinamento de Uso da Plataforma
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    )}

                    {/* DESIGN TAB */}
                    {activeTab === 'design' && (
                        <>
                            <div className="bg-visu-gray border border-gray-800 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden hover:shadow-2xl hover:shadow-visu-primary/20 hover:border-visu-primary/50 animate-fade-in-down">
                                <div className="absolute inset-0 bg-gradient-to-br from-visu-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 group-hover:bg-visu-primary group-hover:text-white transition-colors">Rápido</span>
                                        <h3 className="text-2xl font-bold text-white">Pack Express</h3>
                                        <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-400 transition-colors">Artes avulsas para redes sociais ou impressão rápida.</p>
                                    </div>
                                    
                                    <div className="mb-8">
                                        <span className="text-visu-primary text-[10px] font-bold uppercase tracking-widest mb-1 block">Pagamento Único</span>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-sm text-gray-500 font-bold">R$</span>
                                            <span className="text-4xl font-bold text-white">199</span>
                                            <span className="text-sm text-gray-500">,90</span>
                                        </div>
                                    </div>

                                    <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20no%20Pack%20Express%20de%20Design" className="block w-full py-3 rounded-xl border border-gray-600 text-white font-bold text-center group-hover:bg-visu-primary group-hover:border-visu-primary hover:shadow-lg transition-all duration-300 mb-8">
                                        Escolher Pack
                                    </a>

                                    <ul className="space-y-4 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-primary"></i> Pacote com <strong>4 Artes</strong> Digitais
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-primary"></i> Posts para Feed ou Story
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-primary"></i> OU 1 Arte para Impressão (Flyer)
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-primary"></i> Entrega em Alta Definição
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-primary"></i> Arquivos em PNG/PDF
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-600 line-through decoration-red-500/50">
                                            <i className="fas fa-times text-gray-600"></i> Criação de Logo
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gradient-to-b from-gray-800 to-visu-black border border-visu-primary/50 rounded-3xl p-8 md:p-10 transform lg:-translate-y-6 shadow-2xl shadow-visu-primary/20 relative overflow-hidden group hover:shadow-visu-primary/40 transition-all duration-500 animate-fade-in-down">
                                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-visu-primary via-visu-accent to-visu-primary"></div>
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-visu-primary text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg animate-pulse">Popular</span>
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <span className="inline-block px-3 py-1 bg-visu-primary/20 text-visu-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4">Pack Social</span>
                                        <h3 className="text-3xl font-bold text-white">Pack Business</h3>
                                        <p className="text-gray-400 text-sm mt-2">Garanta presença constante nas redes sociais com um visual profissional.</p>
                                    </div>
                                    
                                    <div className="mb-8">
                                        <span className="text-visu-primary text-[10px] font-bold uppercase tracking-widest mb-1 block">Pagamento Único</span>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-sm text-gray-500 font-bold">R$</span>
                                            <span className="text-5xl font-bold text-white">499</span>
                                            <span className="text-lg text-gray-500 font-bold">,90</span>
                                        </div>
                                    </div>

                                    <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20no%20Pack%20Business%20de%20Design" className="block w-full py-4 rounded-xl bg-gradient-to-r from-visu-primary to-visu-accent text-white font-bold text-center hover:shadow-lg hover:shadow-visu-primary/40 hover:scale-[1.02] hover:brightness-110 transition-all duration-300 mb-8 relative overflow-hidden">
                                        <span className="relative z-10">Contratar Pack</span>
                                    </a>

                                    <ul className="space-y-4 text-sm text-gray-300">
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center"><i className="fas fa-check text-xs text-visu-primary"></i></div>
                                            <span className="font-bold text-white">Pacote com 12 Artes</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center"><i className="fas fa-check text-xs text-visu-primary"></i></div>
                                            <span>Design para Feed, Story e Capas</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center"><i className="fas fa-check text-xs text-visu-primary"></i></div>
                                            <span className="text-visu-primary font-bold">Edição de 2 Capas para Reels</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center"><i className="fas fa-check text-xs text-visu-primary"></i></div>
                                            <span>Incluso Diagramação de Flyer A5</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center"><i className="fas fa-check text-xs text-visu-primary"></i></div>
                                            <span>Ajustes e Revisões Inclusas</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-500 line-through decoration-red-500/50">
                                            <div className="w-5 h-5 rounded-full bg-gray-700/50 flex items-center justify-center"><i className="fas fa-times text-xs text-gray-500"></i></div>
                                            <span>Criação de Identidade Visual</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-visu-gray border border-gray-800 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden hover:shadow-2xl hover:shadow-visu-accent/20 hover:border-visu-accent/50 animate-fade-in-down">
                                <div className="absolute inset-0 bg-gradient-to-br from-visu-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 group-hover:bg-visu-accent group-hover:text-white transition-colors">Projetos</span>
                                        <h3 className="text-2xl font-bold text-white">Pack Completo</h3>
                                        <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-400 transition-colors">Soluções robustas para cardápios, eventos e materiais impressos.</p>
                                    </div>
                                    
                                    <div className="mb-8">
                                         <span className="text-visu-accent text-[10px] font-bold uppercase tracking-widest mb-1 block">Orçamento</span>
                                         <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-bold text-white">Sob Consulta</span>
                                        </div>
                                    </div>

                                    <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20em%20um%20projeto%20de%20Design%20Personalizado" className="block w-full py-3 rounded-xl border border-gray-600 text-white font-bold text-center group-hover:bg-visu-accent group-hover:border-visu-accent hover:shadow-lg transition-all duration-300 mb-8">
                                        Solicitar Orçamento
                                    </a>

                                    <ul className="space-y-4 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-accent"></i> <span className="font-bold text-white">Cardápios Digitais ou Impressos</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-accent"></i> Convites Interativos
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-accent"></i> <span className="text-white font-bold">Kits para Eventos e Festas</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-accent"></i> Papelaria (Cartão de Visita/Pasta)
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-accent"></i> Diagramação de E-books
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-600 line-through decoration-red-500/50">
                                            <i className="fas fa-times text-gray-600"></i> Manual de Marca
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                
                <div className="mt-16 text-center" data-aos="fade-up">
                    <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
                        <i className="fas fa-info-circle"></i> Precisa de algo mais específico? <a href="#contato" className="text-visu-primary font-bold hover:underline">Fale conosco para um orçamento personalizado.</a>
                    </p>
                </div>
            </div>
        </section>
    );
}