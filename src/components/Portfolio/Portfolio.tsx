import styles from './Portfolio.module.css';
import Link from 'next/link';

export default function Portfolio() {
    return (
        <section id="portfolio" className="section-screen bg-white relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-20 text-center">
                    <span className="text-visu-accent font-bold tracking-widest text-xs uppercase mb-3 px-3 py-1 bg-pink-50 rounded-full">Portfólio</span>
                    <h2 className="text-5xl md:text-6xl font-bold text-visu-black mb-6">Transformando ideias em <span className="text-transparent bg-clip-text bg-gradient-to-r from-visu-primary to-visu-accent">Legado Digital</span></h2>
                    <p className="text-gray-500 max-w-2xl text-lg">Explore nossa galeria de projetos de alto impacto. Unimos estética refinada e arquitetura de conversão para posicionar marcas no topo.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    
                    <div className={`${styles.portfolioCard} group relative rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200/50 cursor-pointer h-[500px]`} data-aos="fade-up" data-aos-delay="0">
                        <img src="/assets/davis2.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out" alt="Psi. Davi Santiago" />
                        <div className="absolute inset-0 bg-visu-black/20 group-hover:bg-visu-black/40 transition-colors duration-500"></div>
                        
                        <div className={`${styles.portfolioOverlay} absolute inset-x-0 bottom-0 p-8 opacity-100 lg:opacity-0 translate-y-0 lg:translate-y-8 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 ease-out bg-gradient-to-t from-visu-black/90 via-visu-black/50 to-transparent`}>
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-white uppercase tracking-wider rounded-full bg-visu-accent/90 shadow-sm">Psicólogo</span>
                                
                                <h4 className="text-white text-2xl font-bold mb-2">Psi. Davi Santiago</h4>
                                <p className="text-gray-200 text-sm mb-4 leading-relaxed">Lorem impsum.</p>
                                <span className="inline-flex items-center gap-2 text-white text-sm font-bold group/link hover:text-visu-accent transition-colors">
                                    Ver Projeto <i className="fas fa-arrow-right group-hover/link:translate-x-1 transition-transform"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                     <div className={`${styles.portfolioCard} group relative rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200/50 cursor-pointer h-[500px] md:mt-16`} data-aos="fade-up" data-aos-delay="150">
                        <img src="/assets/raquelc.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out" alt="Psi. Raquel Calbo" />
                        <div className="absolute inset-0 bg-visu-black/20 group-hover:bg-visu-black/40 transition-colors duration-500"></div>
                        
                        <div className={`${styles.portfolioOverlay} absolute inset-x-0 bottom-0 p-8 opacity-100 lg:opacity-0 translate-y-0 lg:translate-y-8 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 ease-out bg-gradient-to-t from-visu-black/90 via-visu-black/50 to-transparent`}>
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-white uppercase tracking-wider rounded-full bg-visu-accent/90 shadow-sm">Psicóloga</span>
                                <h4 className="text-white text-2xl font-bold mb-2">Psi. Raquel Calbo</h4>
                                <p className="text-gray-200 text-sm mb-4 leading-relaxed">Lorem impsum.</p>
                                <span className="inline-flex items-center gap-2 text-white text-sm font-bold group/link hover:text-visu-accent transition-colors">
                                    Ver Projeto <i className="fas fa-arrow-right group-hover/link:translate-x-1 transition-transform"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.portfolioCard} group relative rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200/50 cursor-pointer h-[500px]`} data-aos="fade-up" data-aos-delay="300">
                        <img src="/assets/padrinhob.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out" alt="Padrinho Barber" />
                        <div className="absolute inset-0 bg-visu-black/20 group-hover:bg-visu-black/40 transition-colors duration-500"></div>
                        
                        <div className={`${styles.portfolioOverlay} absolute inset-x-0 bottom-0 p-8 opacity-100 lg:opacity-0 translate-y-0 lg:translate-y-8 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 ease-out bg-gradient-to-t from-visu-black/90 via-visu-black/50 to-transparent`}>
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-white uppercase tracking-wider rounded-full bg-visu-accent/90 shadow-sm">Barbearia</span>
                                <h4 className="text-white text-2xl font-bold mb-2">Padrinho Barber</h4>
                                <p className="text-gray-200 text-sm mb-4 leading-relaxed">Lorem impsum.</p>
                                <span className="inline-flex items-center gap-2 text-white text-sm font-bold group/link hover:text-visu-accent transition-colors">
                                    Ver Projeto <i className="fas fa-arrow-right group-hover/link:translate-x-1 transition-transform"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-16">
                     <Link href="/portfolio" className="group relative px-8 py-4 bg-visu-black text-white rounded-full font-bold overflow-hidden shadow-2xl hover:shadow-visu-primary/50 transition-all duration-300">
                        <span className="relative z-10 flex items-center gap-2">Explorar Todos os Projetos <i className="fas fa-plus text-xs group-hover:rotate-90 transition-transform"></i></span>
                        <div className="absolute inset-0 bg-gradient-to-r from-visu-primary to-visu-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                </div>
            </div>
        </section>
    );
}