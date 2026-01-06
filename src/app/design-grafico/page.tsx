'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function GraphicDesignPage() {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
            easing: 'ease-out-cubic',
        });
    }, []);

    return (
        <main className="bg-visu-black min-h-screen text-white overflow-x-hidden selection:bg-visu-accent selection:text-white">
            <Navbar />
            
            {/* Hero Section - Surpreendente e Imersivo */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-visu-primary/20 rounded-full blur-[100px] animate-pulse-slow"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-visu-accent/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-visu-gray bg-white/5 text-visu-accent text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md animate-fade-in-down">
                        Identidade & Visual
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
                        Design que <span className="text-transparent bg-clip-text bg-gradient-to-r from-visu-primary via-visu-accent to-visu-primary bg-[length:200%_auto] animate-shine">Impacta</span> <br />
                        e Comunica.
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
                        Não é apenas estética. É estratégia visual para posicionar sua marca no topo. 
                        Do social media aos materiais impressos, criamos a imagem que seu negócio merece.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-down" style={{ animationDelay: '0.3s' }}>
                        <Link href="#planos" className="px-8 py-4 bg-visu-primary hover:bg-visu-primary/90 text-white rounded-xl font-bold transition-all shadow-lg shadow-visu-primary/25 hover:-translate-y-1">
                            Ver Planos Especiais
                        </Link>
                        <Link href="https://wa.me/5511939034586" target="_blank" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold transition-all hover:-translate-y-1 backdrop-blur-sm">
                            Falar com Designer
                        </Link>
                    </div>
                </div>
            </section>

            {/* Showcase / Portfolio Section - Visual */}
            <section className="py-20 border-y border-white/5 bg-visu-dark/50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div data-aos="fade-right">
                            <h2 className="text-3xl md:text-4xl font-bold mb-2">O que criamos?</h2>
                            <p className="text-gray-400">Alguns exemplos do nosso padrão de qualidade.</p>
                        </div>
                        <div className="flex gap-2" data-aos="fade-left">
                           <div className="px-4 py-2 bg-visu-gray rounded-lg text-xs font-bold uppercase text-gray-400 border border-white/5">Social Media</div>
                           <div className="px-4 py-2 bg-visu-gray rounded-lg text-xs font-bold uppercase text-gray-400 border border-white/5">Identidade</div>
                           <div className="px-4 py-2 bg-visu-gray rounded-lg text-xs font-bold uppercase text-gray-400 border border-white/5">Print</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Exemplo 1 */}
                        <div className="group relative aspect-square rounded-2xl overflow-hidden bg-visu-gray border border-white/5 cursor-pointer" data-aos="fade-up" data-aos-delay="0">
                            <div className="absolute inset-0 bg-gradient-to-br from-visu-primary/40 to-visu-black/90 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 border-b-2 border-visu-primary pb-1">Campanhas Digitais</span>
                            </div>
                            <img src="/assets/hero.png" alt="Exemplo Social Media" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" />
                        </div>
                         {/* Exemplo 2 */}
                         <div className="group relative aspect-square rounded-2xl overflow-hidden bg-visu-gray border border-white/5 cursor-pointer" data-aos="fade-up" data-aos-delay="100">
                             <div className="absolute inset-0 bg-gradient-to-br from-visu-accent/40 to-visu-black/90 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 border-b-2 border-visu-accent pb-1">Branding & Logo</span>
                            </div>
                            <img src="/assets/davis.png" alt="Exemplo Branding" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" />
                        </div>
                         {/* Exemplo 3 */}
                         <div className="group relative aspect-square rounded-2xl overflow-hidden bg-visu-gray border border-white/5 cursor-pointer" data-aos="fade-up" data-aos-delay="200">
                             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-visu-black/90 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 border-b-2 border-purple-500 pb-1">Material Impresso</span>
                            </div>
                            <img src="/assets/hero2.png" alt="Exemplo Impresso" className="w-full h-full object-cover opacity-80 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Metodologia Section - Processo */}
            <section className="py-20 bg-visu-black relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                     <div className="text-center mb-16" data-aos="fade-up">
                        <span className="text-visu-primary font-bold tracking-widest text-xs uppercase mb-3 block">Metodologia</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Como funciona o <span className="text-gradient">Processo Criativo</span></h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Linha conectora (Desktop) */}
                        <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-0.5 bg-gradient-to-r from-visu-primary/0 via-visu-primary/30 to-visu-primary/0 z-0"></div>

                        {/* Passo 1 */}
                        <div className="relative z-10 group" data-aos="fade-up" data-aos-delay="0">
                            <div className="w-20 h-20 mx-auto bg-visu-dark border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:border-visu-primary/50 group-hover:bg-visu-primary/10 transition-all duration-300 shadow-xl relative">
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-visu-primary rounded-full flex items-center justify-center text-xs font-bold">1</div>
                                <i className="fas fa-comment-dots text-2xl text-gray-400 group-hover:text-visu-primary transition-colors"></i>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-2">Briefing</h3>
                            <p className="text-gray-500 text-center text-sm px-4">Entendemos sua necessidade, público-alvo e objetivos com o material.</p>
                        </div>

                        {/* Passo 2 */}
                        <div className="relative z-10 group" data-aos="fade-up" data-aos-delay="100">
                             <div className="w-20 h-20 mx-auto bg-visu-dark border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:border-visu-primary/50 group-hover:bg-visu-primary/10 transition-all duration-300 shadow-xl relative">
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-visu-primary rounded-full flex items-center justify-center text-xs font-bold">2</div>
                                <i className="fas fa-search text-2xl text-gray-400 group-hover:text-visu-primary transition-colors"></i>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-2">Pesquisa</h3>
                            <p className="text-gray-500 text-center text-sm px-4">Análise de tendências e referências para criar algo único e atual.</p>
                        </div>

                        {/* Passo 3 */}
                        <div className="relative z-10 group" data-aos="fade-up" data-aos-delay="200">
                             <div className="w-20 h-20 mx-auto bg-visu-dark border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:border-visu-primary/50 group-hover:bg-visu-primary/10 transition-all duration-300 shadow-xl relative">
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-visu-primary rounded-full flex items-center justify-center text-xs font-bold">3</div>
                                <i className="fas fa-pen-nib text-2xl text-gray-400 group-hover:text-visu-primary transition-colors"></i>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-2">Criação</h3>
                            <p className="text-gray-500 text-center text-sm px-4">Desenvolvimento das artes com foco em estética e alta conversão.</p>
                        </div>

                        {/* Passo 4 */}
                        <div className="relative z-10 group" data-aos="fade-up" data-aos-delay="300">
                             <div className="w-20 h-20 mx-auto bg-visu-dark border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:border-visu-primary/50 group-hover:bg-visu-primary/10 transition-all duration-300 shadow-xl relative">
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-visu-primary rounded-full flex items-center justify-center text-xs font-bold">4</div>
                                <i className="fas fa-box-open text-2xl text-gray-400 group-hover:text-visu-primary transition-colors"></i>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-2">Entrega</h3>
                            <p className="text-gray-500 text-center text-sm px-4">Arquivos finais em alta resolução prontos para postar ou imprimir.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Plans Section - Redesenhada e Destacada */}
            <section id="planos" className="py-24 bg-visu-dark relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
                
                <div className="container mx-auto px-6 relative z-10">
                     <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl font-bold mb-4">Escolha seu <span className="text-gradient">Pacote</span></h2>
                        <p className="text-gray-400">Opções flexíveis para quem está começando ou quer escalar.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
                        
                        {/* Plan 1: Pack Express */}
                        <div className="bg-visu-black rounded-3xl p-8 border border-white/5 hover:border-visu-primary/50 transition-all duration-300 flex flex-col h-full" data-aos="fade-up" data-aos-delay="0">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Pack Express</h3>
                                <p className="text-gray-500 text-sm h-10">Artes avulsas para redes sociais ou impressão rápida.</p>
                            </div>
                            <div className="mb-8 p-4 bg-visu-gray rounded-2xl border border-white/5">
                                <span className="text-xs font-bold text-gray-500 uppercase">Pagamento Único</span>
                                <div className="flex items-end gap-1 text-white">
                                    <span className="text-3xl font-bold">R$ 199</span>
                                    <span className="font-bold text-gray-500 mb-1">,90</span>
                                </div>
                            </div>
                            <div className="flex-1 space-y-4 mb-8">
                                <div className="flex items-start gap-3 text-sm text-gray-300">
                                    <i className="fas fa-check text-visu-primary mt-1"></i> Pacote com <strong>4 Artes</strong> Digitais
                                </div>
                                <div className="flex items-start gap-3 text-sm text-gray-300">
                                    <i className="fas fa-check text-visu-primary mt-1"></i> Posts para Feed ou Story
                                </div>
                                <div className="flex items-start gap-3 text-sm text-gray-300">
                                    <i className="fas fa-check text-visu-primary mt-1"></i> OU 1 Arte para Impressão (Flyer)
                                </div>
                                <div className="flex items-start gap-3 text-sm text-gray-300">
                                    <i className="fas fa-check text-visu-primary mt-1"></i> Entrega em Alta Definição
                                </div>
                                <div className="flex items-start gap-3 text-sm text-gray-300">
                                    <i className="fas fa-check text-visu-primary mt-1"></i> Arquivos em PNG/PDF
                                </div>
                                <div className="flex items-start gap-3 text-sm text-gray-600 line-through">
                                    <i className="fas fa-times mt-1"></i> Criação de Logo
                                </div>
                            </div>
                            <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20no%20Pack%20Express%20de%20Design" className="w-full py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-bold text-center block">
                                Escolher Básico
                            </a>
                        </div>

                         {/* Plan 2: Pack Business (Destaque) */}
                        <div className="bg-gradient-to-b from-visu-gray to-visu-black rounded-3xl p-8 border border-visu-primary shadow-2xl shadow-visu-primary/10 flex flex-col relative transform lg:-translate-y-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="absolute top-4 right-4 px-3 py-1 bg-visu-primary text-white text-[10px] font-bold uppercase rounded-full shadow-lg animate-pulse">Mais Vendido</div>
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Pack Business</h3>
                                <p className="text-gray-400 text-sm h-10">Garanta presença constante nas redes sociais com um visual profissional.</p>
                            </div>
                            <div className="mb-8 p-4 bg-visu-black/50 rounded-2xl border border-visu-primary/30">
                                <span className="text-xs font-bold text-visu-primary uppercase">Pagamento Único</span>
                                <div className="flex items-end gap-1 text-white">
                                    <span className="text-4xl font-bold">R$ 499</span>
                                    <span className="font-bold text-gray-500 mb-1">,90</span>
                                </div>
                            </div>
                            <div className="flex-1 space-y-4 mb-8">
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <div className="w-5 h-5 rounded-full bg-visu-primary flex items-center justify-center shrink-0"><i className="fas fa-check text-[10px] text-white"></i></div>
                                    Pacote com 12 Artes
                                </div>
                                <div className="flex items-start gap-3 text-sm text-gray-300">
                                    <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center shrink-0"><i className="fas fa-check text-[10px] text-visu-primary"></i></div>
                                    Design para Feed, Story e Capas
                                </div>
                                <div className="flex items-start gap-3 text-sm text-gray-300">
                                    <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center shrink-0"><i className="fas fa-check text-[10px] text-visu-primary"></i></div>
                                    Edição de 2 Capas para Reels
                                </div>
                                <div className="flex items-start gap-3 text-sm text-gray-300">
                                    <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center shrink-0"><i className="fas fa-check text-[10px] text-visu-primary"></i></div>
                                    Incluso Diagramação de Flyer A5
                                </div>
                                <div className="flex items-start gap-3 text-sm text-gray-300">
                                    <div className="w-5 h-5 rounded-full bg-visu-primary/20 flex items-center justify-center shrink-0"><i className="fas fa-check text-[10px] text-visu-primary"></i></div>
                                    Ajustes e Revisões Inclusas
                                </div>
                                 <div className="flex items-start gap-3 text-sm text-gray-600 line-through">
                                    <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center shrink-0"><i className="fas fa-times text-[10px]"></i></div>
                                    Criação de Identidade Visual
                                </div>
                            </div>
                            <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20no%20Pack%20Business%20de%20Design" className="w-full py-4 rounded-xl bg-visu-primary hover:bg-visu-primary/90 hover:shadow-lg hover:shadow-visu-primary/25 transition-all duration-300 font-bold text-center text-white block">
                                Contratar Agora
                            </a>
                        </div>

                        {/* Plan 3: Pack Completo */}
                        <div className="bg-visu-black rounded-3xl p-8 border border-white/5 hover:border-visu-accent/50 transition-all duration-300 flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Pack Completo</h3>
                                <p className="text-gray-500 text-sm h-10">Soluções robustas para cardápios, eventos e materiais impressos.</p>
                            </div>
                            <div className="mb-8 p-4 bg-visu-gray rounded-2xl border border-white/5">
                                <span className="text-xs font-bold text-gray-500 uppercase">Orçamento</span>
                                <div className="flex items-end gap-1 text-white">
                                    <span className="text-3xl font-bold">Sob Consulta</span>
                                </div>
                            </div>
                            <div className="flex-1 space-y-4 mb-8">
                                <div className="flex items-start gap-3 text-sm text-gray-300">
                                    <i className="fas fa-check text-visu-accent mt-1"></i> Cardápios Digitais ou Impressos
                                </div>
                                <div className="flex items-start gap-3 text-sm text-gray-300">
                                    <i className="fas fa-check text-visu-accent mt-1"></i> Convites Interativos
                                </div>
                                <div className="flex items-start gap-3 text-sm text-gray-300">
                                    <i className="fas fa-check text-visu-accent mt-1"></i> Kits para Eventos e Festas
                                </div>
                                <div className="flex items-start gap-3 text-sm text-gray-300">
                                    <i className="fas fa-check text-visu-accent mt-1"></i> Papelaria (Cartão de Visita/Pasta)
                                </div>
                                <div className="flex items-start gap-3 text-sm text-gray-300">
                                    <i className="fas fa-check text-visu-accent mt-1"></i> Diagramação de E-books
                                </div>
                                <div className="flex items-start gap-3 text-sm text-gray-600 line-through">
                                    <i className="fas fa-times mt-1"></i> Manual de Marca
                                </div>
                            </div>
                            <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20em%20um%20projeto%20de%20Design%20Personalizado" className="w-full py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-bold text-center block">
                                Solicitar Orçamento
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}