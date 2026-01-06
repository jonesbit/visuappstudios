import styles from './FAQ.module.css';

export default function FAQ() {
    return (
        <section id="faq" className="py-20 bg-visu-light border-t border-gray-200">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-visu-primary font-bold tracking-widest text-xs uppercase mb-3 block">Tire suas dúvidas</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-visu-black">Perguntas <span className="text-gradient">Frequentes</span></h2>
                    <p className="text-gray-500 mt-4 max-w-lg mx-auto">Tudo o que você precisa saber antes de iniciarmos o seu projeto.</p>
                </div>

                <div className="space-y-4">
                    
                    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-visu-primary/30" data-aos="fade-up" data-aos-delay="0">
                        <details className="group p-6 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex justify-between items-center font-bold text-visu-black text-lg list-none select-none">
                                <span>Preciso pagar mensalidade pelo desenvolvimento?</span>
                                <span className="transition-transform duration-300 group-open:rotate-180">
                                    <i className="fas fa-chevron-down text-visu-primary"></i>
                                </span>
                            </summary>
                            <div className="text-gray-500 mt-4 leading-relaxed text-sm animate-fade-in-down">
                                Não. O valor do desenvolvimento do site é único. Após a entrega, você terá apenas os custos básicos de manutenção da internet: o <strong>Domínio</strong> (seu endereço .com.br, aprox. R$ 50/ano) e a <strong>Hospedagem</strong>. A hospedagem é acordada no momento da contratação para escolher o servidor ideal para o seu tráfego. <br /><br />
                                <span className="text-visu-primary font-bold">Bônus:</span> Nos planos Pro ou Superior, o 1º ano de domínio é presente nosso!
                            </div>
                        </details>
                    </div>

                    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-visu-primary/30" data-aos="fade-up" data-aos-delay="100">
                        <details className="group p-6 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex justify-between items-center font-bold text-visu-black text-lg list-none select-none">
                                <span>Eu consigo editar os textos e imagens sozinho?</span>
                                <span className="transition-transform duration-300 group-open:rotate-180">
                                    <i className="fas fa-chevron-down text-visu-primary"></i>
                                </span>
                            </summary>
                            <div className="text-gray-500 mt-4 leading-relaxed text-sm animate-fade-in-down">
                                Nossa prioridade é a <strong>performance extrema e segurança</strong>. Para garantir que seu site nunca saia do ar ou fique lento com plugins pesados, nós desenvolvemos em código puro, sem painéis administrativos complexos que quebram o layout.<br /><br />
                                Caso precise alterar textos ou fotos futuramente, você pode solicitar diretamente ao nosso suporte através de pacotes de manutenção ou ajustes pontuais. Assim, garantimos que o design e a velocidade permaneçam intactos.
                            </div>
                        </details>
                    </div>

                    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-visu-primary/30" data-aos="fade-up" data-aos-delay="200">
                        <details className="group p-6 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex justify-between items-center font-bold text-visu-black text-lg list-none select-none">
                                <span>O site vai aparecer no Google?</span>
                                <span className="transition-transform duration-300 group-open:rotate-180">
                                    <i className="fas fa-chevron-down text-visu-primary"></i>
                                </span>
                            </summary>
                            <div className="text-gray-500 mt-4 leading-relaxed text-sm animate-fade-in-down">
                                Sim! Todos os nossos projetos são desenvolvidos com as melhores práticas de SEO (Search Engine Optimization). Utilizamos tags semânticas corretas, otimização de imagens e velocidade de carregamento, que são os principais fatores que o Google utiliza para ranquear sites nas pesquisas.
                            </div>
                        </details>
                    </div>

                    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-visu-primary/30" data-aos="fade-up" data-aos-delay="300">
                        <details className="group p-6 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex justify-between items-center font-bold text-visu-black text-lg list-none select-none">
                                <span>Quanto tempo leva para o site ficar pronto?</span>
                                <span className="transition-transform duration-300 group-open:rotate-180">
                                    <i className="fas fa-chevron-down text-visu-primary"></i>
                                </span>
                            </summary>
                            <div className="text-gray-500 mt-4 leading-relaxed text-sm animate-fade-in-down">
                                Depende da complexidade. <strong>Landing Pages</strong> são entregues, em média, de 3 a 5 dias úteis após o recebimento de todo o conteúdo. <strong>Sites Institucionais</strong> completos podem levar de 10 a 20 dias úteis. Trabalhamos com cronogramas ágeis para colocar seu negócio no ar o quanto antes.
                            </div>
                        </details>
                    </div>

                    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-visu-primary/30" data-aos="fade-up" data-aos-delay="400">
                        <details className="group p-6 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex justify-between items-center font-bold text-visu-black text-lg list-none select-none">
                                <span>O site será meu ou da agência?</span>
                                <span className="transition-transform duration-300 group-open:rotate-180">
                                    <i className="fas fa-chevron-down text-visu-primary"></i>
                                </span>
                            </summary>
                            <div className="text-gray-500 mt-4 leading-relaxed text-sm animate-fade-in-down">
                                O site é <strong>100% seu</strong>. Diferente de plataformas de aluguel (como Wix ou Shopify) onde você nunca é dono do código, aqui você paga pelo desenvolvimento e o ativo digital é propriedade sua. Nós apenas cuidamos da criação e publicação.
                            </div>
                        </details>
                    </div>

                    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-visu-primary/30" data-aos="fade-up" data-aos-delay="500">
                        <details className="group p-6 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex justify-between items-center font-bold text-visu-black text-lg list-none select-none">
                                <span>Quais são as formas de pagamento?</span>
                                <span className="transition-transform duration-300 group-open:rotate-180">
                                    <i className="fas fa-chevron-down text-visu-primary"></i>
                                </span>
                            </summary>
                            <div className="text-gray-500 mt-4 leading-relaxed text-sm animate-fade-in-down">
                                Aceitamos PIX (com desconto especial), transferência bancária e cartão de crédito. Geralmente trabalhamos com um sinal de entrada para início do projeto e o restante na entrega/aprovação final.
                            </div>
                        </details>
                    </div>

                </div>
            </div>
        </section>
    );
}