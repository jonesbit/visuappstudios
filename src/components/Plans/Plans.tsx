'use client';

import { useState } from 'react';
import styles from './Plans.module.css';

export default function Plans() {
    const [activeTab, setActiveTab] = useState<'landing' | 'institutional'>('landing');

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
                                        <h3 className="text-2xl font-bold text-white">Plano Básico</h3>
                                        <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-400 transition-colors">Página única rápida e eficiente para campanhas e captura de leads.</p>
                                    </div>
                                    
                                    <div className="mb-8">
                                        <span className="text-visu-primary text-[10px] font-bold uppercase tracking-widest mb-1 block">Pagamento Único</span>
                                        <div className="flex flex-col">
                                            <span className="text-sm text-gray-500 line-through decoration-red-500/50 mb-1">De R$ 450,00</span>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-sm text-gray-500 font-bold">R$</span>
                                                <span className="text-4xl font-bold text-white">350</span>
                                                <span className="text-sm text-gray-500">,00</span>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20no%20Plano%20Básico%20de%20Landing%20Page" className="block w-full py-3 rounded-xl border border-gray-600 text-white font-bold text-center group-hover:bg-visu-primary group-hover:border-visu-primary hover:shadow-lg transition-all duration-300 mb-8">
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

                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <h3 className="text-3xl font-bold text-white">Plano Pro</h3>
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

                                    <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20no%20Plano%20Pro%20de%20Landing%20Page" className="block w-full py-4 rounded-xl bg-gradient-to-r from-visu-primary to-visu-accent text-white font-bold text-center hover:shadow-lg hover:shadow-visu-primary/40 hover:scale-[1.02] hover:brightness-110 transition-all duration-300 mb-8 relative overflow-hidden">
                                        <span className="relative z-10">Contratar Agora</span>
                                    </a>

                                    <ul className="space-y-4 text-sm text-gray-300">
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center"><i className="fas fa-check text-xs text-visu-primary"></i></div>
                                            <span className="font-bold text-white">Tudo do plano Básico</span>
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
                                        <h3 className="text-2xl font-bold text-white">Plano Premium</h3>
                                        <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-400 transition-colors">Design exclusivo e integrações avançadas para lançamentos de alto nível.</p>
                                    </div>
                                    
                                    <div className="mb-8">
                                        <span className="text-visu-accent text-[10px] font-bold uppercase tracking-widest mb-1 block">Orçamento</span>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-bold text-white">Sob Consulta</span>
                                        </div>
                                    </div>

                                    <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20no%20Plano%20Premium%20de%20Landing%20Page" className="block w-full py-3 rounded-xl border border-gray-600 text-white font-bold text-center group-hover:bg-visu-accent group-hover:border-visu-accent hover:shadow-lg transition-all duration-300 mb-8">
                                        Falar com Consultor
                                    </a>

                                    <ul className="space-y-4 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-accent"></i> <span className="font-bold text-white">Tudo do plano Pro</span>
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
                            <div className="bg-gradient-to-b from-gray-800 to-visu-black border border-visu-primary/50 rounded-3xl p-8 md:p-10 transform lg:-translate-y-6 shadow-2xl shadow-visu-primary/20 relative overflow-hidden group hover:shadow-visu-primary/40 transition-all duration-500 animate-fade-in-down lg:col-start-1">
                                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-visu-primary via-visu-accent to-visu-primary"></div>
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-visu-primary text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg animate-pulse">Recomendado</span>
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <h3 className="text-3xl font-bold text-white">Plano Básico</h3>
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

                                    <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20no%20Plano%20Institucional%20Básico" className="block w-full py-4 rounded-xl bg-gradient-to-r from-visu-primary to-visu-accent text-white font-bold text-center hover:shadow-lg hover:shadow-visu-primary/40 hover:scale-[1.02] hover:brightness-110 transition-all duration-300 mb-8 relative overflow-hidden">
                                        <span className="relative z-10">Contratar Agora</span>
                                    </a>

                                    <ul className="space-y-4 text-sm text-gray-300">
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center"><i className="fas fa-check text-xs text-visu-primary"></i></div>
                                            <span>Até 7 Páginas Internas</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center"><i className="fas fa-check text-xs text-visu-primary"></i></div>
                                            <span>Otimização para Google (SEO)</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center"><i className="fas fa-check text-xs text-visu-primary"></i></div>
                                            <span className="text-visu-primary font-bold">Domínio .com.br Grátis (1 ano)</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center"><i className="fas fa-check text-xs text-visu-primary"></i></div>
                                            <span>Botão WhatsApp e Redes Sociais</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-visu-gray border border-gray-800 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden hover:shadow-2xl hover:shadow-visu-accent/20 hover:border-visu-accent/50 animate-fade-in-down lg:col-start-2 lg:col-span-2">
                                <div className="absolute inset-0 bg-gradient-to-br from-visu-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-white">Plano Pro</h3>
                                        <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-400 transition-colors">Soluções complexas sob medida para grandes empresas e catálogos.</p>
                                    </div>
                                    
                                    <div className="mb-8">
                                         <span className="text-visu-accent text-[10px] font-bold uppercase tracking-widest mb-1 block">Orçamento</span>
                                         <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-bold text-white">Sob Consulta</span>
                                        </div>
                                    </div>

                                    <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20no%20Plano%20Institucional%20Pro" className="block w-full py-3 rounded-xl border border-gray-600 text-white font-bold text-center group-hover:bg-visu-accent group-hover:border-visu-accent hover:shadow-lg transition-all duration-300 mb-8">
                                        Falar com Consultor
                                    </a>

                                    <ul className="space-y-4 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-accent"></i> <span className="font-bold text-white">Páginas Ilimitadas</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-accent"></i> Blog / Notícias Gerenciável
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-accent"></i> Painel Administrativo CMS
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-accent"></i> <span className="text-white font-bold">Catálogo de Produtos / Vitrine</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <i className="fas fa-check text-visu-accent"></i> Área Restrita de Clientes
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