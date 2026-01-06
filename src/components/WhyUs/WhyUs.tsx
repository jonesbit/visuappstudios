import styles from './WhyUs.module.css';

export default function WhyUs() {
    return (
        <section className="section-screen bg-visu-dark relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-visu-primary to-transparent opacity-50"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none"></div>
    
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Por que somos <br />a sua <span className="text-visu-primary">vantagem competitiva</span></h2>
                        <p className="text-gray-400 text-lg">Entregamos mais do que código e pixels. Entregamos resultados mensuráveis e segurança para sua operação.</p>
                    </div>
                </div>
    
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className={`${styles.shimmerWrapper} ${styles.featureIconWrapperHover} group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-visu-primary/50 transition-all duration-300 hover:-translate-y-2`} data-aos="fade-up" data-aos-delay="0">
                        <div className="flex justify-between items-start mb-8">
                            <div className={`${styles.featureIconWrapper} w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center text-3xl shadow-inner shadow-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                                <i className="fas fa-globe text-visu-primary"></i>
                            </div>
                            <span className="inline-block px-3 py-1 bg-visu-primary/10 border border-visu-primary/20 text-visu-primary rounded-full text-[10px] font-bold uppercase tracking-wide">
                                Planos Pro ou Superior
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-visu-primary transition-colors">Domínio gratuito no primeiro ano</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Sua identidade digital garantida. O primeiro ano do registro ".com.br" é por nossa conta, sem burocracias.</p>
                    </div>

                    {/* Card 2 */}
                    <div className={`${styles.shimmerWrapper} ${styles.featureIconWrapperHover} group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-visu-accent/50 transition-all duration-300 hover:-translate-y-2`} data-aos="fade-up" data-aos-delay="100">
                        <div className={`${styles.featureIconWrapper} w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-inner shadow-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                            <i className="fas fa-shield-alt text-visu-accent"></i>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-visu-accent transition-colors">Manutenção por 30 dias</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">30 dias de suporte técnico VIP pós-lançamento. Ajustes finos e monitoramento para garantir estabilidade total.</p>
                    </div>

                    {/* Card 3 */}
                    <div className={`${styles.shimmerWrapper} ${styles.featureIconWrapperHover} group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-2`} data-aos="fade-up" data-aos-delay="200">
                        <div className={`${styles.featureIconWrapper} w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-inner shadow-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                            <i className="fas fa-rocket text-yellow-400"></i>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">Otimização SEO</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Arquitetura semântica e performance Core Web Vitals otimizada para colocar sua marca no topo do Google.</p>
                    </div>

                    {/* Card 4 */}
                    <div className={`${styles.shimmerWrapper} ${styles.featureIconWrapperHover} group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:-translate-y-2`} data-aos="fade-up" data-aos-delay="300">
                        <div className={`${styles.featureIconWrapper} w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-inner shadow-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                            <i className="fas fa-code text-green-400"></i>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">Código otimizado</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Código artesanal, limpo e eficiente. Sem temas prontos pesados. Apenas o essencial para máxima velocidade.</p>
                    </div>

                    {/* Card 5 */}
                    <div className={`${styles.shimmerWrapper} ${styles.featureIconWrapperHover} group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-2`} data-aos="fade-up" data-aos-delay="400">
                        <div className={`${styles.featureIconWrapper} w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-inner shadow-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                            <i className="fas fa-server text-blue-400"></i>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Hospedagem rápida</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Infraestrutura em nuvem escalável. Seu site permanece online e rápido, mesmo com picos repentinos de acesso.</p>
                    </div>

                    {/* Card 6 */}
                    <div className={`${styles.shimmerWrapper} ${styles.featureIconWrapperHover} group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-pink-400/50 transition-all duration-300 hover:-translate-y-2`} data-aos="fade-up" data-aos-delay="500">
                        <div className={`${styles.featureIconWrapper} w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-inner shadow-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                            <i className="fas fa-mobile text-pink-400"></i>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">Design Responsivo</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Layouts fluidos que se adaptam perfeitamente a qualquer dispositivo, do smartwatch à TV 4K.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}