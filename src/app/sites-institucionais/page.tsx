'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function InstitutionalPage() {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
            easing: 'ease-out-cubic',
        });
    }, []);

    return (
        <main className="bg-visu-black min-h-screen text-white overflow-x-hidden selection:bg-indigo-500 selection:text-white">
            <Navbar />
            
            {/* Hero Section - Corporativo e Imponente */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                {/* Background Tech Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    {/* Orb Azul Sutil */}
                    <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                    {/* Orb Branca Sutil */}
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md animate-fade-in-down shadow-[0_0_15px_rgba(79,70,229,0.3)]">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                        Presença Digital de Elite
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
                        Sua Marca, Sua <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400 bg-[length:200%_auto] animate-shine">Maior Autoridade.</span>
                    </h1>
                    
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
                        Sites institucionais robustos, seguros e gerenciáveis. A infraestrutura perfeita para empresas que não podem se dar ao luxo de parecer amadoras.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-down" style={{ animationDelay: '0.3s' }}>
                        <Link href="#planos" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20 hover:-translate-y-1 hover:shadow-indigo-500/40 flex items-center justify-center gap-2">
                            Ver Soluções Corporativas
                        </Link>
                        <Link href="https://wa.me/5511939034586" target="_blank" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold transition-all hover:-translate-y-1 backdrop-blur-sm flex items-center justify-center gap-2">
                            <i className="far fa-comments"></i> Agendar Reunião
                        </Link>
                    </div>
                </div>
            </section>

            {/* Showcase Section - Placeholder "Em Breve" */}
            <section className="py-20 bg-visu-dark/30 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div data-aos="fade-right">
                            <h2 className="text-3xl md:text-4xl font-bold mb-2">Portfólio Select</h2>
                            <p className="text-gray-400">Excelência em cada pixel.</p>
                        </div>
                    </div>

                    {/* Card "Em Breve" Estilizado */}
                    <div className="w-full bg-visu-black border border-white/5 rounded-3xl p-12 md:p-20 relative overflow-hidden text-center group" data-aos="zoom-in">
                        {/* Background Decor */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px] group-hover:bg-indigo-600/20 transition-all duration-500"></div>
                        
                        <div className="relative z-10 flex flex-col items-center justify-center">
                            <div className="w-20 h-20 bg-visu-gray rounded-full flex items-center justify-center mb-6 shadow-xl border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                <i className="fas fa-layer-group text-3xl text-indigo-500 animate-pulse"></i>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Showcase em Atualização</h3>
                            <p className="text-gray-500 max-w-lg mx-auto text-lg leading-relaxed">
                                Estamos selecionando e curando nossos melhores projetos recentes para apresentar aqui. <br/>
                                Em breve, você verá exemplos reais de transformação digital.
                            </p>
                            <div className="mt-8">
                                <span className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-xs font-bold uppercase tracking-wider">
                                    Aguarde Novidades
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Processo de Criação Section (Antiga Features) */}
            <section className="py-24 bg-visu-black relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                     <div className="text-center mb-20" data-aos="fade-up">
                        <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-3 block">Metodologia Ágil</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Processo de <span className="text-gradient">Criação</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Do conceito ao código. Um fluxo de trabalho transparente e focado em resultados reais para o seu negócio.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                         {/* Linha conectora (Desktop) */}
                         <div className="hidden lg:block absolute top-[3rem] left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 z-0"></div>

                        {/* Step 1 */}
                        <div className="bg-visu-dark p-8 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group relative z-10" data-aos="fade-up" data-aos-delay="0">
                            <div className="w-14 h-14 bg-visu-black rounded-xl flex items-center justify-center text-indigo-500 text-xl mb-6 shadow-inner shadow-white/5 border border-white/5 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 relative">
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-[10px] font-bold text-white border border-visu-black">1</div>
                                <i className="fas fa-coffee"></i>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">Briefing & Estratégia</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Entendemos seu modelo de negócio, concorrentes e objetivos para definir a estrutura ideal do site.
                            </p>
                        </div>

                         {/* Step 2 */}
                         <div className="bg-visu-dark p-8 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group relative z-10" data-aos="fade-up" data-aos-delay="100">
                            <div className="w-14 h-14 bg-visu-black rounded-xl flex items-center justify-center text-indigo-500 text-xl mb-6 shadow-inner shadow-white/5 border border-white/5 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 relative">
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-[10px] font-bold text-white border border-visu-black">2</div>
                                <i className="fas fa-pencil-ruler"></i>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">UI/UX Design</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Criação do layout visual e arquitetura de informação, focado na experiência do usuário e identidade da marca.
                            </p>
                        </div>

                         {/* Step 3 */}
                         <div className="bg-visu-dark p-8 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group relative z-10" data-aos="fade-up" data-aos-delay="200">
                            <div className="w-14 h-14 bg-visu-black rounded-xl flex items-center justify-center text-indigo-500 text-xl mb-6 shadow-inner shadow-white/5 border border-white/5 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 relative">
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-[10px] font-bold text-white border border-visu-black">3</div>
                                <i className="fas fa-code"></i>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">Desenvolvimento</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Programação front-end e back-end utilizando Next.js para máxima performance, segurança e SEO.
                            </p>
                        </div>

                         {/* Step 4 */}
                         <div className="bg-visu-dark p-8 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group relative z-10" data-aos="fade-up" data-aos-delay="300">
                            <div className="w-14 h-14 bg-visu-black rounded-xl flex items-center justify-center text-indigo-500 text-xl mb-6 shadow-inner shadow-white/5 border border-white/5 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 relative">
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-[10px] font-bold text-white border border-visu-black">4</div>
                                <i className="fas fa-rocket"></i>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">Entrega & Suporte</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Publicação do site, configuração de domínio e treinamento para uso do painel administrativo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section - Corporate Style */}
            <section id="planos" className="py-24 bg-visu-black relative">
                {/* Decoration */}
                <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-indigo-900/10 to-transparent pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                     <div className="text-center mb-16" data-aos="fade-up">
                        <span className="text-indigo-500 font-bold tracking-widest text-xs uppercase mb-3 block">Planos & Investimento</span>
                        <h2 className="text-4xl font-bold mb-4 text-white">Estruturas para cada <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white">Fase do Negócio</span></h2>
                        <p className="text-gray-400">Transparência total. Sem custos ocultos de setup.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
                        
                        {/* Plan 1: Inst. Start */}
                        <div className="bg-visu-gray rounded-3xl p-8 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 flex flex-col h-full group" data-aos="fade-right">
                            <div className="mb-6">
                                <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 border border-white/5">Business</span>
                                <h3 className="text-2xl font-bold text-white mb-2">Inst. Start</h3>
                                <p className="text-gray-500 text-sm h-12">Site profissional multipáginas para apresentar sua empresa na web.</p>
                            </div>
                            <div className="mb-8 p-4 bg-visu-black/50 rounded-2xl border border-white/5">
                                <div className="flex items-baseline gap-1 text-white">
                                    <span className="text-sm font-bold text-gray-500">R$</span>
                                    <span className="text-4xl font-bold">650</span>
                                    <span className="text-xl font-bold text-gray-500">,00</span>
                                </div>
                                <span className="text-xs text-gray-500">Pagamento único</span>
                            </div>
                            <div className="flex-1 space-y-4 mb-8">
                                <ul className="space-y-4 text-sm text-gray-400">
                                    <li className="flex items-center gap-3"><i className="fas fa-check text-indigo-500"></i> Até 5 Páginas (Home, Sobre, etc)</li>
                                    <li className="flex items-center gap-3"><i className="fas fa-check text-indigo-500"></i> Design Institucional Moderno</li>
                                    <li className="flex items-center gap-3"><i className="fas fa-check text-indigo-500"></i> Otimização para Google (SEO)</li>
                                    <li className="flex items-center gap-3"><i className="fas fa-check text-indigo-500"></i> Botão WhatsApp e Redes Sociais</li>
                                    <li className="flex items-center gap-3"><i className="fas fa-check text-indigo-500"></i> Entrega em 7 dias úteis</li>
                                    <li className="flex items-center gap-3"><i className="fas fa-check text-indigo-500"></i> Hospedagem Inclusa (1 mês)</li>
                                </ul>
                            </div>
                            <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20no%20Plano%20Institucional%20Start" className="w-full py-3 rounded-xl border border-white/10 hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-bold text-center text-white block">
                                Selecionar Plano
                            </a>
                        </div>

                         {/* Plan 2: Inst. Growth (Destaque) */}
                        <div className="bg-gradient-to-b from-indigo-900/40 to-visu-black rounded-3xl p-1 border border-indigo-500/50 shadow-2xl shadow-indigo-900/20 transform lg:-translate-y-4 relative group" data-aos="fade-up">
                            {/* Badge */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                <div className="flex items-center gap-2 px-5 py-1.5 bg-indigo-600 text-white text-[10px] font-bold uppercase rounded-full shadow-lg tracking-wider ring-4 ring-visu-black">
                                    <i className="fas fa-star text-yellow-300"></i> Recomendado
                                </div>
                            </div>

                            <div className="bg-visu-black/90 h-full rounded-[20px] p-8 flex flex-col relative overflow-hidden backdrop-blur-xl">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-600/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                                
                                <div className="mb-6 relative z-10 pt-4">
                                    <h3 className="text-3xl font-bold text-white mb-2">Inst. Growth</h3>
                                    <p className="text-gray-400 text-sm h-12">Site robusto com Blog ou Área de Serviços detalhada para gerar autoridade.</p>
                                </div>
                                <div className="mb-8 relative z-10 p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                                    <div className="flex items-baseline gap-1 text-white">
                                        <span className="text-sm font-bold text-indigo-400">R$</span>
                                        <span className="text-5xl font-bold">1.490</span>
                                        <span className="text-xl font-bold text-indigo-400">,99</span>
                                    </div>
                                    <span className="text-xs text-indigo-400 font-bold">Melhor Custo-Benefício</span>
                                </div>
                                <div className="flex-1 space-y-4 mb-8 relative z-10">
                                    <ul className="space-y-4 text-sm text-gray-300">
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center"><i className="fas fa-check text-[10px] text-indigo-400"></i></div>
                                            <span className="text-white font-bold">Tudo do plano Start</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center"><i className="fas fa-check text-[10px] text-indigo-400"></i></div>
                                            <span>Até <strong className="text-white">10 Páginas</strong> Internas</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center"><i className="fas fa-check text-[10px] text-indigo-400"></i></div>
                                            <span className="text-indigo-400 font-bold">Blog / Notícias Gerenciável</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center"><i className="fas fa-check text-[10px] text-indigo-400"></i></div>
                                            <span>Painel Administrativo CMS</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center"><i className="fas fa-check text-[10px] text-indigo-400"></i></div>
                                            <span className="text-indigo-400 font-bold">Domínio .com.br Grátis (1 ano)</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center"><i className="fas fa-check text-[10px] text-indigo-400"></i></div>
                                            <span>Google Meu Negócio Configurado</span>
                                        </li>
                                    </ul>
                                </div>
                                <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20no%20Plano%20Institucional%20Growth" className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 font-bold text-center text-white block relative z-10">
                                    Contratar Solução Completa
                                </a>
                            </div>
                        </div>

                        {/* Plan 3: Inst. Elite */}
                        <div className="bg-visu-gray rounded-3xl p-8 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 flex flex-col h-full group" data-aos="fade-left">
                            <div className="mb-6">
                                <span className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 border border-white/10">Corporativo</span>
                                <h3 className="text-2xl font-bold text-white mb-2">Inst. Elite</h3>
                                <p className="text-gray-500 text-sm h-12">Soluções complexas sob medida para grandes empresas e catálogos.</p>
                            </div>
                            <div className="mb-8 p-4 bg-visu-black/50 rounded-2xl border border-white/5">
                                <div className="flex items-baseline gap-1 text-white">
                                    <span className="text-3xl font-bold">Sob Consulta</span>
                                </div>
                                <span className="text-xs text-gray-500">Projeto Personalizado</span>
                            </div>
                            <div className="flex-1 space-y-4 mb-8">
                                <ul className="space-y-4 text-sm text-gray-400">
                                    <li className="flex items-center gap-3"><i className="fas fa-check text-white"></i> <span className="font-bold">Tudo do plano Growth</span></li>
                                    <li className="flex items-center gap-3"><i className="fas fa-check text-white"></i> Páginas Ilimitadas</li>
                                    <li className="flex items-center gap-3"><i className="fas fa-check text-white"></i> <span className="text-white font-bold">Catálogo de Produtos / Vitrine</span></li>
                                    <li className="flex items-center gap-3"><i className="fas fa-check text-white"></i> Área Restrita de Clientes</li>
                                    <li className="flex items-center gap-3"><i className="fas fa-check text-white"></i> Suporte Dedicado 24/7</li>
                                    <li className="flex items-center gap-3"><i className="fas fa-check text-white"></i> Treinamento de Equipe</li>
                                </ul>
                            </div>
                            <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20no%20Plano%20Institucional%20Elite" className="w-full py-3 rounded-xl border border-white/10 hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-bold text-center text-white block">
                                Falar com Consultor
                            </a>
                        </div>

                    </div>
                </div>
            </section>

             {/* Final CTA - Corporate */}
             <section className="py-20 bg-visu-dark border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto relative group" data-aos="zoom-in">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 via-visu-gray to-indigo-900/40 rounded-3xl blur-xl opacity-50"></div>
                        
                        <div className="relative bg-visu-black border border-white/10 rounded-3xl p-10 md:p-14 overflow-hidden">
                             <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Precisa de um projeto especial?
                                </h2>
                                <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
                                    Desenvolvemos sistemas web, intranets e portais corporativos sob medida.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href="https://wa.me/5511939034586" target="_blank" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-visu-black rounded-xl font-bold hover:bg-gray-200 transition-all shadow-xl">
                                        <span>Solicitar Proposta Técnica</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}