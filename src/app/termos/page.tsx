'use client';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export default function Termos() {
    return (
        <main className="min-h-screen bg-visu-light">
            <Navbar />
            
            <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-visu-primary font-bold tracking-widest text-xs uppercase mb-3 block">Legal</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-visu-black mb-6">Termos de Uso</h1>
                        <p className="text-gray-500 text-lg">Última atualização: Janeiro de 2026</p>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 prose prose-lg text-gray-600">
                        <h3 className="text-xl font-bold text-visu-black mb-4">1. Aceitação dos Termos</h3>
                        <p className="mb-6">
                            Ao acessar e utilizar o site e os serviços da Visuapp Studios, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.
                        </p>

                        <h3 className="text-xl font-bold text-visu-black mb-4">2. Serviços Oferecidos</h3>
                        <p className="mb-6">
                            A Visuapp Studios é uma agência digital especializada em criação de sites, landing pages, design gráfico e desenvolvimento web. Nossos serviços são prestados mediante contrato específico ou aceitação de proposta comercial.
                        </p>

                        <h3 className="text-xl font-bold text-visu-black mb-4">3. Propriedade Intelectual</h3>
                        <p className="mb-6">
                            Todo o conteúdo presente neste site, incluindo textos, gráficos, logotipos, ícones e imagens, é propriedade exclusiva da Visuapp Studios ou de seus licenciadores e está protegido pelas leis de direitos autorais do Brasil.
                        </p>

                        <h3 className="text-xl font-bold text-visu-black mb-4">4. Uso Permitido</h3>
                        <p className="mb-6">
                            Você concorda em utilizar nosso site apenas para fins legais e de maneira que não infrinja os direitos de terceiros ou restrinja o uso e aproveitamento do site por qualquer outra pessoa. É proibido copiar, reproduzir ou revender qualquer parte dos nossos serviços sem permissão expressa por escrito.
                        </p>

                        <h3 className="text-xl font-bold text-visu-black mb-4">5. Limitação de Responsabilidade</h3>
                        <p className="mb-6">
                            Em nenhuma circunstância a Visuapp Studios será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes decorrentes do uso ou da incapacidade de usar nossos serviços ou site.
                        </p>

                        <h3 className="text-xl font-bold text-visu-black mb-4">6. Alterações nos Termos</h3>
                        <p className="mb-6">
                            A Visuapp Studios reserva-se o direito de atualizar ou modificar estes Termos de Uso a qualquer momento. Recomendamos que você revise esta página periodicamente para estar ciente de quaisquer alterações.
                        </p>

                        <h3 className="text-xl font-bold text-visu-black mb-4">7. Contato</h3>
                        <p>
                            Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do e-mail contato@visuapp.com.br.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}