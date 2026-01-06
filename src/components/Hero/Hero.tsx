export default function Hero() {
    return (
        <section className="section-screen relative overflow-hidden bg-white">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
    
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div data-aos="fade-right" data-aos-duration="1200" className="flex flex-col">
                    <div className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 text-visu-primary text-xs font-bold uppercase tracking-wider mb-8 border border-indigo-100 shadow-sm w-fit">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-visu-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-visu-primary"></span>
                        </span>
                        Especialistas em Alta Conversão
                    </div>
                    
                    <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight order-1">
                        Beleza atrai. <br />
                        <span className="text-gradient">Estratégia converte.</span>
                    </h1>
    
                    <div className="relative mb-10 block lg:hidden order-2" data-aos="fade-up" data-aos-delay="200">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
                            <img src="/assets/hero.png" alt="Hero Dashboard" className="w-full h-auto object-cover opacity-90" />
                        </div>
                    </div>
    
                    <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-xl font-light order-3">
                        Transforme seu site no seu melhor vendedor. Unimos design persuasivo, velocidade extrema e SEO para transformar visitantes casuais em clientes reais.
                    </p>
    
                    <div className="flex flex-col sm:flex-row gap-5 order-4">
                        <a href="#contato" className="bg-visu-black text-white px-10 py-4 rounded-xl font-semibold hover:bg-visu-primary transition-all duration-300 shadow-xl shadow-gray-200 hover:shadow-indigo-500/20 hover:-translate-y-1 text-center">
                            Iniciar Projeto
                        </a>
                        <a href="#portfolio" className="bg-white text-visu-black border border-gray-200 px-10 py-4 rounded-xl font-semibold hover:border-visu-primary hover:text-visu-primary transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 group">
                            Ver Portfolio <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                        </a>
                    </div>
                    
                    <div className="hidden md:flex flex-col md:flex-row items-start md:items-center gap-8 border-t border-gray-100 pt-8 order-5 mt-12">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-visu-primary text-xl group-hover:scale-110 transition-transform duration-300">
                                <i className="fas fa-gem"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-visu-black leading-tight">Design Exclusivo</h3>
                                <p className="text-sm text-gray-400">Identidade única, sem cópias.</p>
                            </div>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-gray-200"></div>
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-visu-accent text-xl group-hover:scale-110 transition-transform duration-300">
                                <i className="fas fa-tachometer-alt"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-visu-black leading-tight">Ultra Rápido</h3>
                                <p className="text-sm text-gray-400">Otimizado para o Google.</p>
                            </div>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-gray-200"></div>
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-yellow-50 flex items-center justify-center text-yellow-500 text-xl group-hover:scale-110 transition-transform duration-300">
                                <i className="fas fa-bullseye"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-visu-black leading-tight">Foco em Vendas</h3>
                                <p className="text-sm text-gray-400">Estratégia de conversão.</p>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="relative hidden lg:block" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-gray-100 bg-white">
                        <div className="p-4 border-b border-gray-50 flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <img src="/assets/hero.png" alt="Hero Dashboard" className="w-full h-auto object-cover opacity-90 hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-visu-primary to-visu-accent rounded-full opacity-20 blur-2xl animate-pulse"></div>
                </div>
            </div>
        </section>
    );
}