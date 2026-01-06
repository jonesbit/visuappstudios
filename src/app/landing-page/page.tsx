'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function LandingPage() {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
            easing: 'ease-out-cubic',
        });
    }, []);

    return (
        <main className="bg-visu-black min-h-screen text-white overflow-x-hidden selection:bg-green-500 selection:text-white">
            <Navbar />
            
            {/* Hero Section - Foco em Performance */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                {/* Background FX */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-visu-primary/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md animate-fade-in-down shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Máquina de Vendas
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
                        Transforme Cliques em <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 bg-[length:200%_auto] animate-shine">Clientes Reais.</span>
                    </h1>
                    
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
                        Chega de perder dinheiro com sites lentos. Desenvolvemos Landing Pages otimizadas para 
                        Google Ads e Facebook Ads, focadas em uma única coisa: <strong>Conversão.</strong>
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-down" style={{ animationDelay: '0.3s' }}>
                        <Link href="#planos" className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-green-500/20 hover:-translate-y-1 hover:shadow-green-500/40">
                            Ver Ofertas de Lançamento
                        </Link>
                        <Link href="https://wa.me/5511939034586" target="_blank" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold transition-all hover:-translate-y-1 backdrop-blur-sm">
                            <i className="fab fa-whatsapp mr-2"></i> Consultoria Grátis
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12 max-w-4xl mx-auto" data-aos="fade-up">
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">0.8s</div>
                            <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Carregamento</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-green-400 mb-1">+120%</div>
                            <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Taxa de Conversão</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">100%</div>
                            <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">SEO Otimizado</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-visu-primary mb-1">Mobile</div>
                            <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">First Design</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us Section - Grid Diferenciado */}
            <section className="py-24 bg-visu-dark/50 border-y border-white/5 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que nossas <span className="text-gradient">LPs Vendem Mais?</span></h2>
                        <p className="text-gray-400">Não é sorte. É engenharia de vendas aplicada ao design.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-visu-black p-8 rounded-3xl border border-white/5 hover:border-green-500/30 transition-all duration-300 group hover:-translate-y-2" data-aos="fade-up" data-aos-delay="0">
                            <div className="w-14 h-14 bg-visu-gray rounded-2xl flex items-center justify-center text-green-500 text-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/50">
                                <i className="fas fa-bolt"></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Velocidade Extrema</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Cada milissegundo conta. Usamos Next.js e otimização de imagens avançada para garantir que seu cliente não feche a aba antes de ver sua oferta.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-visu-black p-8 rounded-3xl border border-white/5 hover:border-visu-primary/30 transition-all duration-300 group hover:-translate-y-2" data-aos="fade-up" data-aos-delay="100">
                            <div className="w-14 h-14 bg-visu-gray rounded-2xl flex items-center justify-center text-visu-primary text-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/50">
                                <i className="fas fa-brain"></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Neuromarketing</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Cores, fontes e layout projetados para guiar o olho do usuário até o botão de compra. Gatilhos mentais aplicados visualmente.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-visu-black p-8 rounded-3xl border border-white/5 hover:border-visu-accent/30 transition-all duration-300 group hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
                            <div className="w-14 h-14 bg-visu-gray rounded-2xl flex items-center justify-center text-visu-accent text-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/50">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Mobile Obsession</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                80% do tráfego vem do celular. Desenhamos primeiro para telas pequenas, garantindo uma experiência de toque perfeita e botões acessíveis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Plans Section - High ROI Style */}
            <section id="planos" className="py-24 bg-visu-black relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-visu-black to-visu-black pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                     <div className="text-center mb-16" data-aos="fade-up">
                        <span className="text-green-500 font-bold tracking-widest text-xs uppercase mb-3 block">Investimento Único</span>
                        <h2 className="text-4xl font-bold mb-4 text-white">Escolha o Motor do seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Crescimento</span></h2>
                        <p className="text-gray-400">Sem mensalidades. O site é seu para sempre.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
                        
                        {/* Plan 1: LP Essencial */}
                        <div className="bg-visu-gray/30 backdrop-blur-sm rounded-3xl p-8 border border-white/5 hover:border-gray-600 transition-all duration-300 flex flex-col h-full group" data-aos="fade-right">
                            <div className="mb-6">
                                <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 group-hover:bg-white group-hover:text-black transition-colors">Start</span>
                                <h3 className="text-2xl font-bold text-white mb-2">LP Essencial</h3>
                                <p className="text-gray-500 text-sm h-10">Página única, rápida e eficiente para capturar leads diretos.</p>
                            </div>
                            <div className="mb-8">
                                <div className="flex items-baseline gap-1 text-white">
                                    <span className="text-sm font-bold text-gray-500">R$</span>
                                    <span className="text-4xl font-bold">350</span>
                                    <span className="text-xl font-bold text-gray-500">,00</span>
                                </div>
                                <span className="text-xs text-gray-500">Pagamento único</span>
                            </div>
                            <div className="flex-1 space-y-4 mb-8">
                                <ul className="space-y-4 text-sm text-gray-400">
                                    <li className="flex items-center gap-3"><i className="fas fa-check text-white"></i> Até 4 seções de conteúdo</li>
                                    <li className="flex items-center gap-3"><i className="fas fa-check text-white"></i> Design Responsivo (Mobile)</li>
                                    <li className="flex items-center gap-3"><i className="fas fa-check text-white"></i> Botão WhatsApp Flutuante</li>
                                    <li className="flex items-center gap-3"><i className="fas fa-check text-white"></i> Formulário de Contato</li>
                                    <li className="flex items-center gap-3"><i className="fas fa-check text-white"></i> Entrega em 3 dias úteis</li>
                                </ul>
                            </div>
                            <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20no%20Plano%20LP%20Essencial" className="w-full py-3 rounded-xl border border-white/10 hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-bold text-center text-white block">
                                Escolher Básico
                            </a>
                        </div>

                         {/* Plan 2: LP Performance (Destaque) */}
                        <div className="bg-gradient-to-b from-gray-900 to-black rounded-3xl p-1 border border-green-500/50 shadow-2xl shadow-green-900/20 transform lg:-translate-y-4 relative group" data-aos="fade-up">
                            
                            {/* --- NOVA BADGE MAIS VENDIDO --- */}
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                                <div className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-700 text-white text-xs font-bold uppercase rounded-full shadow-[0_5px_20px_-5px_rgba(34,197,94,0.5)] tracking-wider ring-4 ring-visu-black relative overflow-hidden">
                                    <i className="fas fa-crown text-yellow-300 text-sm"></i>
                                    <span>Mais Vendido</span>
                                    {/* Efeito de brilho passando */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-shine" style={{animationDuration:'2.5s'}}></div>
                                </div>
                            </div>
                            {/* -------------------------------- */}

                            <div className="bg-visu-black/90 h-full rounded-[20px] p-8 flex flex-col relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                                
                                <div className="mb-6 relative z-10 pt-4">
                                    <h3 className="text-3xl font-bold text-white mb-2">LP Performance</h3>
                                    <p className="text-gray-400 text-sm h-10">A estrutura perfeita para escalar vendas com copy persuasiva.</p>
                                </div>
                                <div className="mb-8 relative z-10">
                                    <div className="flex items-baseline gap-1 text-white">
                                        <span className="text-sm font-bold text-green-500">R$</span>
                                        <span className="text-5xl font-bold">849</span>
                                        <span className="text-xl font-bold text-green-500">,99</span>
                                    </div>
                                    <span className="text-xs text-green-500 font-bold">Alta Conversão Garantida</span>
                                </div>
                                <div className="flex-1 space-y-4 mb-8 relative z-10">
                                    <ul className="space-y-4 text-sm text-gray-300">
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center"><i className="fas fa-check text-[10px] text-green-400"></i></div>
                                            <span className="text-white font-bold">Tudo do plano Essencial</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center"><i className="fas fa-check text-[10px] text-green-400"></i></div>
                                            <span>Até <strong className="text-white">9 seções</strong> estratégicas</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center"><i className="fas fa-check text-[10px] text-green-400"></i></div>
                                            <span className="text-green-400 font-bold">Domínio Grátis (1 ano)</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center"><i className="fas fa-check text-[10px] text-green-400"></i></div>
                                            <span>Copywriting Profissional</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center"><i className="fas fa-check text-[10px] text-green-400"></i></div>
                                            <span>Animações Fluidas (AOS)</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center"><i className="fas fa-check text-[10px] text-green-400"></i></div>
                                            <span>Otimização SEO Avançada</span>
                                        </li>
                                    </ul>
                                </div>
                                <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20no%20Plano%20LP%20Performance" className="w-full py-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 font-bold text-center text-white block relative z-10">
                                    Quero Vender Mais
                                </a>
                            </div>
                        </div>

                        {/* Plan 3: LP Authority */}
                        <div className="bg-visu-gray/30 backdrop-blur-sm rounded-3xl p-8 border border-white/5 hover:border-visu-accent/50 transition-all duration-300 flex flex-col h-full group" data-aos="fade-left">
                            <div className="mb-6">
                                <span className="inline-block px-3 py-1 bg-visu-accent/10 text-visu-accent rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 border border-visu-accent/20">VIP</span>
                                <h3 className="text-2xl font-bold text-white mb-2">LP Authority</h3>
                                <p className="text-gray-500 text-sm h-10">Para lançamentos e empresas que precisam de autoridade total.</p>
                            </div>
                            <div className="mb-8">
                                <div className="flex items-baseline gap-1 text-white">
                                    <span className="text-sm font-bold text-gray-500">R$</span>
                                    <span className="text-4xl font-bold">1.199</span>
                                    <span className="text-xl font-bold text-gray-500">,99</span>
                                </div>
                                <span className="text-xs text-gray-500">Pagamento único</span>
                            </div>
                            <div className="flex-1 space-y-4 mb-8">
                                <ul className="space-y-4 text-sm text-gray-400">
                                    <li className="flex items-center gap-3"><i className="fas fa-check text-visu-accent"></i> <span className="text-white font-bold">Tudo do plano Performance</span></li>
                                    <li className="flex items-center gap-3"><i className="fas fa-check text-visu-accent"></i> Até 14 seções personalizadas</li>
                                    <li className="flex items-center gap-3"><i className="fas fa-check text-visu-accent"></i> <span className="text-white">Integração Pixel/Analytics</span></li>
                                    <li className="flex items-center gap-3"><i className="fas fa-check text-visu-accent"></i> Config. de E-mail Profissional</li>
                                    <li className="flex items-center gap-3"><i className="fas fa-check text-visu-accent"></i> Suporte Prioritário 30 dias</li>
                                </ul>
                            </div>
                            <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20no%20Plano%20LP%20Authority" className="w-full py-3 rounded-xl border border-white/20 hover:bg-visu-accent hover:border-visu-accent hover:shadow-lg hover:shadow-visu-accent/20 transition-all duration-300 font-bold text-center text-white block">
                                Contratar VIP
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Final - CARD MELHORADO */}
            <section className="py-24 bg-visu-dark border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    
                    {/* --- CARD CTA REESTILIZADO --- */}
                    <div className="max-w-4xl mx-auto relative group" data-aos="zoom-in">
                         {/* Borda Gradient Animada */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-visu-primary/20 to-green-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-70"></div>
                        
                        <div className="relative bg-visu-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-16 overflow-hidden">
                             {/* Textura de fundo */}
                             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.07] pointer-events-none"></div>
                             
                             {/* Luzes de fundo */}
                             <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
                             <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" style={{animationDelay:'1.5s'}}></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                    Ainda com dúvida se <br/>é o <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">momento certo?</span>
                                </h2>
                                <p className="text-gray-400 mb-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                                    Não deixe seu concorrente na frente. Converse com nosso estrategista agora e descubra o potencial de vendas que você está perdendo.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href="https://wa.me/5511939034586" target="_blank" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-500 transition-all shadow-lg shadow-green-900/30 hover:shadow-green-500/50 hover:-translate-y-1 group/btn">
                                        <i className="fab fa-whatsapp text-2xl group-hover/btn:rotate-12 transition-transform"></i>
                                        <span>Chamar no WhatsApp</span>
                                    </Link>
                                    <Link href="#planos" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white rounded-xl font-bold hover:bg-white/5 hover:border-white/40 transition-colors">
                                        Rever Planos
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ----------------------------- */}

                </div>
            </section>

            <Footer />
        </main>
    );
}