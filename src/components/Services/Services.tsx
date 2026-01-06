import Link from 'next/link';

export default function Services() {
    return (
        <section id="servicos" className="section-screen bg-visu-black text-white relative overflow-hidden">
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

                <div className="grid lg:grid-cols-3 gap-6">
                    
                    <Link href="/landing-page" className="lg:col-span-2 group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-visu-accent/50 transition-all duration-500 min-h-[300px] block order-1" data-aos="fade-up">
                        <div className="absolute inset-0 bg-gradient-to-br from-visu-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="p-10 relative z-10 flex flex-col h-full justify-between">
                            <div className="flex justify-between items-start">
                                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm group-hover:bg-visu-accent group-hover:text-white transition-colors duration-300">
                                    <i className="fas fa-rocket text-2xl"></i>
                                </div>
                                <i className="fas fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-gray-500 group-hover:text-white text-xl"></i>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold mb-3">Landing Pages</h3>
                                <p className="text-gray-400 max-w-lg group-hover:text-gray-200 transition-colors">Páginas de alta conversão focadas em <strong>vendas e resultados</strong>. A estrutura exata para transformar visitantes em clientes através de campanhas e anúncios.</p>
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-visu-accent/30 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                    </Link>

                    <Link href="/sites-institucionais" className="lg:col-span-1 group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-visu-primary/50 transition-all duration-500 min-h-[300px] order-2" data-aos="fade-up" data-aos-delay="200">
                        <div className="absolute inset-0 bg-gradient-to-br from-visu-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="p-10 relative z-10 flex flex-col h-full justify-between">
                            <div className="flex justify-between items-start">
                                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm group-hover:bg-visu-primary group-hover:text-white transition-colors duration-300">
                                    <i className="fas fa-building text-2xl"></i>
                                </div>
                                <i className="fas fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-gray-500 group-hover:text-white text-xl"></i>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3">Sites Institucionais</h3>
                                <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">Portfólios, blogs e sites corporativos. Fortaleça sua marca e ganhe autoridade no mercado.</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/design-grafico" className="lg:col-span-1 group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-pink-500/50 transition-all duration-500 min-h-[300px] order-3" data-aos="fade-up" data-aos-delay="100">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="p-10 relative z-10 flex flex-col h-full justify-between">
                            <div className="flex justify-between items-start">
                                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                                    <i className="fas fa-palette text-2xl"></i>
                                </div>
                                <i className="fas fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-gray-500 group-hover:text-white text-xl"></i>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3">Design Gráfico</h3>
                                <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">Artes para redes sociais, flyers, cardápios e material impresso. Destaque visual imediato.</p>
                            </div>
                        </div>
                    </Link>

                    <div className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-white/5 border border-white/5 min-h-[300px] opacity-40 grayscale cursor-not-allowed order-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="p-10 relative z-10 flex flex-col h-full justify-between">
                            <div className="flex justify-between items-start">
                                <div className="p-4 bg-white/5 rounded-2xl backdrop-blur-sm text-gray-500">
                                    <i className="fas fa-chart-line text-2xl"></i>
                                </div>
                                <span className="text-xs border border-white/20 px-2 py-1 rounded text-gray-500">Em breve</span>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold mb-3 text-gray-500">Sistemas SaaS</h3>
                                <p className="text-gray-600 max-w-lg">Sistemas de gestão e ferramentas por assinatura para escalar negócios.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}