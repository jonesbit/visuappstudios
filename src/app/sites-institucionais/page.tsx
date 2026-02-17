import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Link from 'next/link';

export default function SitesInstitucionais() {
    return (
        <main className="bg-gray-50 min-h-screen font-sans text-gray-800">
            <Navbar />
            
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-[0.03] mix-blend-darken"></div>
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 animate-pulse-slow"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2 animate-pulse-slow"></div>
                
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100/50 text-indigo-700 font-bold text-sm mb-8 animate-fade-in-down shadow-sm border border-indigo-200/50">
                        <i className="fas fa-star text-xs"></i>
                        Aumente sua Autoridade no Mercado
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight tracking-tight text-gray-900 drop-shadow-sm">
                        Sua Empresa Merece um <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Site Profissional</span>
                    </h1>
                    
                    <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                        Mostre seriedade e conquiste a confiança dos seus clientes. Desenvolvemos sites completos, seguros e otimizados para colocar sua marca no topo.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="#planos" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1 transition-all duration-300">
                            Ver Planos Institucionais
                        </Link>
                        <Link href="https://wa.me/5511939034586" target="_blank" className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-bold text-lg hover:border-green-500 hover:text-green-600 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                            <i className="fab fa-whatsapp text-xl text-green-500"></i>
                            Falar com Especialista
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative z-10">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-indigo-600 font-bold tracking-widest text-xs uppercase mb-3 block">Diferenciais</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Por que ter um <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">site completo?</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Muito mais que um cartão de visitas. Uma ferramenta poderosa para gerar negócios e apresentar seu portfólio.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:border-blue-200 transition-all shadow-sm hover:shadow-xl hover:-translate-y-2 group">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform border border-blue-100">
                                <i className="fas fa-award"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Credibilidade Total</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Clientes confiam mais em empresas que possuem um site oficial e organizado. Passe profissionalismo na primeira impressão.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:border-indigo-200 transition-all shadow-sm hover:shadow-xl hover:-translate-y-2 group">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform border border-indigo-100">
                                <i className="fas fa-layer-group"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Múltiplas Páginas</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Apresente sua história, detalhe seus serviços, mostre sua equipe e publique notícias no seu blog para educar seu cliente.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:border-green-200 transition-all shadow-sm hover:shadow-xl hover:-translate-y-2 group">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-green-500 text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform border border-green-100">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Topo do Google</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Estrutura robusta de SEO para indexar diversas páginas e atrair tráfego orgânico qualificado para o seu negócio.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="planos" className="py-24 bg-gray-50 relative border-t border-gray-100 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.04] mix-blend-darken"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-[150px] pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-indigo-600 font-bold tracking-widest text-xs uppercase mb-3 block">Investimento</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Planos Corporativos</h2>
                        <p className="text-gray-600 max-w-xl mx-auto text-lg">
                            A solução definitiva para a presença digital da sua empresa. Pagamento único e propriedade total.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
                        
                        <div className="bg-white border-2 border-indigo-500/30 rounded-[2rem] p-8 md:p-12 transform hover:-translate-y-2 shadow-xl shadow-indigo-100 hover:shadow-2xl hover:shadow-indigo-200/50 relative overflow-hidden group transition-all duration-300">
                            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500"></div>
                            
                            <div className="relative z-10">
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm animate-pulse-slow">
                                    Recomendado
                                </div>

                                <h3 className="text-3xl font-bold text-gray-900 mb-2">Plano Básico</h3>
                                <p className="text-gray-500 text-sm mb-8 font-medium">Site robusto para gerar autoridade e confiança.</p>
                                
                                <div className="mb-10 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-indigo-100">
                                    <div className="flex items-end gap-1">
                                        <span className="text-2xl text-indigo-600 font-bold mb-2">R$</span>
                                        <span className="text-6xl font-extrabold text-gray-900 leading-none">1.490</span>
                                        <span className="text-gray-500 mb-2 font-bold text-xl">,99</span>
                                    </div>
                                    <span className="text-[11px] text-white font-bold uppercase mt-3 block tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 inline-block px-3 py-1 rounded-full shadow-sm">Pagamento Único</span>
                                </div>

                                <ul className="space-y-5 mb-12 text-gray-700 text-base font-medium">
                                    <li className="flex items-center gap-4"><div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-sm text-indigo-600"></i></div> <span>Até <strong>7 Páginas Internas</strong></span></li>
                                    <li className="flex items-center gap-4"><div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-sm text-indigo-600"></i></div> <span>Otimização para Google (SEO)</span></li>
                                    <li className="flex items-center gap-4"><div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-sm text-indigo-600"></i></div> <span className="text-gray-900 font-bold">Domínio .com.br Grátis (1 ano)</span></li>
                                    <li className="flex items-center gap-4"><div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-sm text-indigo-600"></i></div> <span>Botão WhatsApp e Redes Sociais</span></li>
                                    <li className="flex items-center gap-4"><div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-sm text-indigo-600"></i></div> <span>Hospedagem Inclusa (1 mês)</span></li>
                                    <li className="flex items-center gap-4"><div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0"><i className="fas fa-check text-sm text-indigo-600"></i></div> <span>Design Institucional Premium</span></li>
                                </ul>

                                <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20no%20Plano%20Institucional%20Básico" className="block w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-center font-bold text-lg hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.02] transition-all duration-300">
                                    Contratar Agora
                                </a>
                            </div>
                        </div>

                        <div className="bg-white border-2 border-gray-100 rounded-[2rem] p-8 md:p-12 hover:border-gray-300 transition-all shadow-sm hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">Plano Pro</h3>
                                <p className="text-gray-500 text-sm mb-8 font-medium">Soluções complexas sob medida para grandes empresas.</p>
                                
                                <div className="mb-10 p-6 bg-gray-50 rounded-3xl border border-gray-200">
                                    <div className="flex items-end gap-1">
                                        <span className="text-4xl font-bold text-gray-900">Sob Consulta</span>
                                    </div>
                                    <span className="text-[11px] text-gray-600 font-bold uppercase mt-3 block tracking-wider bg-gray-200 inline-block px-3 py-1 rounded-full">Orçamento Personalizado</span>
                                </div>

                                <ul className="space-y-5 mb-12 text-gray-600 text-base font-medium">
                                    <li className="flex items-center gap-4"><i className="fas fa-check-circle text-gray-400 text-xl"></i> <span className="font-bold text-gray-900">Páginas Ilimitadas</span></li>
                                    <li className="flex items-center gap-4"><i className="fas fa-check-circle text-gray-400 text-xl"></i> Blog / Notícias Gerenciável</li>
                                    <li className="flex items-center gap-4"><i className="fas fa-check-circle text-gray-400 text-xl"></i> Painel Administrativo CMS</li>
                                    <li className="flex items-center gap-4"><i className="fas fa-check-circle text-gray-400 text-xl"></i> <span className="font-bold text-gray-900">Catálogo de Produtos / Vitrine</span></li>
                                    <li className="flex items-center gap-4"><i className="fas fa-check-circle text-gray-400 text-xl"></i> Área Restrita de Clientes</li>
                                    <li className="flex items-center gap-4"><i className="fas fa-check-circle text-gray-400 text-xl"></i> Suporte Dedicado 24/7</li>
                                </ul>

                                <a href="https://wa.me/5511939034586?text=Olá,%20tenho%20interesse%20no%20Plano%20Institucional%20Pro" className="block w-full py-5 border-2 border-gray-800 text-gray-800 rounded-xl text-center font-bold text-lg hover:bg-gray-800 hover:text-white transition-all duration-300">
                                    Falar com Consultor
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative z-10">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Vamos tirar seu projeto do papel?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg font-medium">
                        Nossa equipe está pronta para entender sua necessidade e entregar a solução perfeita.
                    </p>
                    <Link href="https://wa.me/5511939034586" className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] text-white rounded-full font-bold text-xl hover:bg-[#20ba5a] transition-all shadow-xl shadow-green-500/20 hover:shadow-green-500/40 hover:-translate-y-1">
                        <i className="fab fa-whatsapp text-3xl"></i>
                        Iniciar Projeto Agora
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
} 