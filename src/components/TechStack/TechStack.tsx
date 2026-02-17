import styles from './TechStack.module.css';

export default function TechStack() {
    return (
        <section className="py-16 bg-visu-light border-b border-gray-200">
            <div className="container mx-auto px-6">
                <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-[0.3em] mb-12">Tecnologias e Ferramentas</p>
                <div className="flex flex-wrap justify-center gap-12 md:gap-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    
                    <div className={`${styles.techIconGroup} group`}>
                        <i className="fab fa-html5 text-4xl text-orange-500" title="HTML5"></i>
                        <span className={`${styles.techLabel} text-xs font-semibold text-gray-500`}>HTML5</span>
                    </div>

                    <div className={`${styles.techIconGroup} group`}>
                        <i className="fab fa-css3-alt text-4xl text-blue-600" title="CSS3"></i>
                        <span className={`${styles.techLabel} text-xs font-semibold text-gray-500`}>CSS3</span>
                    </div>

                    <div className={`${styles.techIconGroup} group`}>
                        <i className="fab fa-js text-4xl text-yellow-400" title="JavaScript"></i>
                        <span className={`${styles.techLabel} text-xs font-semibold text-gray-500`}>JavaScript</span>
                    </div>

                    <div className={`${styles.techIconGroup} group`}>
                        <div className="text-4xl font-bold text-blue-500" title="TypeScript">TS</div>
                        <span className={`${styles.techLabel} text-xs font-semibold text-gray-500`}>TypeScript</span>
                    </div>

                    <div className={`${styles.techIconGroup} group`}>
                        <i className="fab fa-react text-4xl text-blue-400" title="Next.js"></i>
                        <span className={`${styles.techLabel} text-xs font-semibold text-gray-500`}>Next.js</span>
                    </div>

                    <div className={`${styles.techIconGroup} group`}>
                        <i className="fab fa-php text-4xl text-indigo-500" title="PHP"></i>
                        <span className={`${styles.techLabel} text-xs font-semibold text-gray-500`}>PHP</span>
                    </div>

                    <div className={`${styles.techIconGroup} group`}>
                        <i className="fas fa-database text-4xl text-orange-500" title="MySQL"></i>
                        <span className={`${styles.techLabel} text-xs font-semibold text-gray-500`}>MySQL</span>
                    </div>

                    <div className={`${styles.techIconGroup} group`}>
                        <i className="fas fa-fire text-4xl text-yellow-500" title="Firebase"></i>
                        <span className={`${styles.techLabel} text-xs font-semibold text-gray-500`}>Firebase</span>
                    </div>

                </div>
            </div>
        </section>
    );
}