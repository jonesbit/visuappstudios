import Link from 'next/link';

export default function Services() {
    return (
        <section id="servicos" className="section-screen bg-visu-black text-white relative overflow-hidden py-24">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-visu-black to-visu-black"></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-visu-primary rounded-full blur-[150px] opacity-20 animate-pulse-slow"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-visu-accent rounded-full blur-[150px] opacity-20 animate-pulse-slow"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8 text-center md:text-left">
                    <div data-aos="fade-right">
                        <span className="text-visu-primary font-bold tracking-widest text-xs uppercase mb-2 block">O que fazemos</span>
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">Nossos <span className="text-gradient">Serviços</span></h2>
                    </div>
                    <div data-aos="fade-left">
                        <p className="text-gray-400 max-w-sm text-lg">Soluções profissionais para você, seu comércio ou sua empresa. Do design à publicação.</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                    
                    <Link href="/landing-page" className="group relative min-h-[500px] rounded-[2.5rem] border border-white/10 bg-white/5 overflow-hidden hover:border-visu-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-visu-accent/20 flex flex-col" data-aos="fade-up">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-visu-accent/10 opacity-0 group-hover:opacity-100 transition-duration-500"></div>
                        <div className="absolute -right-20 -top-20 w-80 h-80 bg-visu-accent/20 blur-[80px] rounded-full group-hover:bg-visu-accent/30 transition-all duration-500"></div>
                        
                        <div className="relative p-10 md:p-12 flex flex-col h-full z-10">
                            <div className="mb-auto">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-visu-accent to-purple-600 flex items-center justify-center text-white text-2xl mb-8 shadow-lg shadow-visu-accent/20 group-hover:scale-110 transition-transform duration-500">
                                    <i className="fas fa-rocket"></i>
                                </div>
                                
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-visu-accent transition-colors">Landing Pages</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    Páginas focadas em uma única missão: <strong>transformar visitantes em clientes</strong>. Ideal para lançamentos, venda de produtos e captura de leads com tráfego pago.
                                </p>

                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3 text-gray-300 text-sm">
                                        <i className="fas fa-bolt text-visu-accent"></i> Carregamento ultra-rápido
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-300 text-sm">
                                        <i className="fas fa-bullseye text-visu-accent"></i> Copywriting persuasivo
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-300 text-sm">
                                        <i className="fas fa-mobile-alt text-visu-accent"></i> 100% Mobile First
                                    </li>
                                </ul>
                            </div>

                            <div className="flex items-center gap-4 text-visu-accent font-bold uppercase tracking-wider text-sm group-hover:translate-x-2 transition-transform duration-300">
                                Ver Detalhes <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-visu-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                    </Link>

                    <Link href="/sites-institucionais" className="group relative min-h-[500px] rounded-[2.5rem] border border-white/10 bg-white/5 overflow-hidden hover:border-visu-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-visu-primary/20 flex flex-col" data-aos="fade-up" data-aos-delay="200">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-visu-primary/10 opacity-0 group-hover:opacity-100 transition-duration-500"></div>
                        <div className="absolute -right-20 -top-20 w-80 h-80 bg-visu-primary/20 blur-[80px] rounded-full group-hover:bg-visu-primary/30 transition-all duration-500"></div>
                        
                        <div className="relative p-10 md:p-12 flex flex-col h-full z-10">
                            <div className="mb-auto">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-visu-primary to-blue-600 flex items-center justify-center text-white text-2xl mb-8 shadow-lg shadow-visu-primary/20 group-hover:scale-110 transition-transform duration-500">
                                    <i className="fas fa-building"></i>
                                </div>
                                
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-visu-primary transition-colors">Sites Institucionais</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    A sede digital da sua empresa. Estrutura robusta para apresentar serviços, portfólio e artigos, gerando <strong>autoridade e confiança</strong> na sua marca a longo prazo.
                                </p>

                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3 text-gray-300 text-sm">
                                        <i className="fas fa-search text-visu-primary"></i> Otimizado para Google (SEO)
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-300 text-sm">
                                        <i className="fas fa-layer-group text-visu-primary"></i> Multi-páginas e Blog
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-300 text-sm">
                                        <i className="fas fa-shield-alt text-visu-primary"></i> Segurança e Credibilidade
                                    </li>
                                </ul>
                            </div>

                            <div className="flex items-center gap-4 text-visu-primary font-bold uppercase tracking-wider text-sm group-hover:translate-x-2 transition-transform duration-300">
                                Ver Detalhes <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-visu-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                    </Link>

                </div>
            </div>
        </section>
    );
}