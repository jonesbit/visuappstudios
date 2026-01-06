import styles from './About.module.css';

export default function About() {
    return (
        <section className={`${styles.aboutContainer} section-screen bg-visu-light`}>
            <div className="container mx-auto px-6">
                <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
                    
                    <div className="lg:w-1/2 relative" data-aos="fade-right">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-8">
                                <img src="/assets/hero1.png" className={`${styles.imageRounded} ${styles.cardFloat} h-64`} alt="Equipe em Reunião" />
                                <div className={`${styles.cardFloat} bg-visu-dark p-6 rounded-2xl text-white h-40 flex flex-col justify-center`}>
                                    <i className="fas fa-lightbulb text-3xl text-yellow-400 mb-2"></i>
                                    <p className="font-medium">Ideias Brilhantes</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className={`${styles.cardFloat} bg-white p-6 rounded-2xl shadow-sm h-40 flex flex-col justify-center`}>
                                    <i className="fas fa-layer-group text-3xl text-visu-primary mb-2"></i>
                                    <p className="font-medium text-visu-black">Tecnologia Moderna</p>
                                </div>
                                <img src="/assets/hero2.png" className={`${styles.imageRounded} ${styles.cardFloat} h-64`} alt="Planejamento Estratégico" />
                            </div>
                        </div>

                        <div className="flex lg:hidden flex-col gap-4 mt-8">
                            <div className="flex items-center gap-4">
                                <div className={styles.iconBox}>
                                    <i className="fas fa-check text-visu-accent"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-visu-black">Design Centrado no Usuário</h4>
                                    <p className="text-sm text-gray-500">Cada pixel pensado na experiência do seu cliente.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className={styles.iconBox}>
                                    <i className="fas fa-bolt text-visu-primary"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-visu-black">Performance Extrema</h4>
                                    <p className="text-sm text-gray-500">Carregamento instantâneo e otimização para o Google.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="lg:w-1/2" data-aos="fade-left">
                        <h2 className="text-sm font-bold text-visu-primary uppercase tracking-widest mb-4">Sobre a Visuapp</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-visu-black mb-6 leading-tight">
                            Criatividade que gera <br /><span className="text-gradient">valor real.</span>
                        </h3>
                        <p className="text-gray-500 text-lg mb-6 leading-relaxed">
                            Somos uma agência boutique focada em detalhes. Não fazemos apenas sites; construímos ativos digitais que posicionam sua marca como líder de mercado. 
                        </p>
                        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                            Nossa abordagem combina estética minimalista com tecnologia de última geração. O resultado? Interfaces fluidas, rápidas e irresistíveis que funcionam em qualquer celular ou computador.
                        </p>
                        
                        <div className="hidden lg:flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className={`${styles.iconBox} shadow-sm text-visu-accent`}>
                                    <i className="fas fa-check"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-visu-black">Design Centrado no Usuário</h4>
                                    <p className="text-sm text-gray-500">Cada pixel pensado na experiência do seu cliente.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className={`${styles.iconBox} shadow-sm text-visu-primary`}>
                                    <i className="fas fa-bolt"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-visu-black">Performance Extrema</h4>
                                    <p className="text-sm text-gray-500">Carregamento instantâneo e otimização para o Google.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}