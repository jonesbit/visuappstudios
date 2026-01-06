'use client';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export default function Privacidade() {
    return (
        <main className="min-h-screen bg-visu-light">
            <Navbar />
            
            <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-visu-primary font-bold tracking-widest text-xs uppercase mb-3 block">Dados e Segurança</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-visu-black mb-6">Política de Privacidade</h1>
                        <p className="text-gray-500 text-lg">Última atualização: Janeiro de 2026</p>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 prose prose-lg text-gray-600">
                        <h3 className="text-xl font-bold text-visu-black mb-4">1. Introdução</h3>
                        <p className="mb-6">
                            A sua privacidade é importante para nós. É política da Visuapp Studios respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Visuapp Studios, e outros sites que possuímos e operamos.
                        </p>

                        <h3 className="text-xl font-bold text-visu-black mb-4">2. Coleta de Informações</h3>
                        <p className="mb-6">
                            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                        </p>

                        <h3 className="text-xl font-bold text-visu-black mb-4">3. Uso das Informações</h3>
                        <p className="mb-6">
                            As informações coletadas são utilizadas para fornecer e melhorar nossos serviços, entrar em contato com você sobre seu projeto e enviar atualizações relevantes. Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                        </p>

                        <h3 className="text-xl font-bold text-visu-black mb-4">4. Retenção de Dados</h3>
                        <p className="mb-6">
                            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                        </p>

                        <h3 className="text-xl font-bold text-visu-black mb-4">5. Cookies</h3>
                        <p className="mb-6">
                            Utilizamos cookies para melhorar a experiência do usuário, analisar o tráfego do site e personalizar conteúdo. Você pode desativar os cookies através das configurações do seu navegador, mas isso pode afetar a funcionalidade de certas partes do site.
                        </p>

                        <h3 className="text-xl font-bold text-visu-black mb-4">6. Segurança</h3>
                        <p className="mb-6">
                            Implementamos medidas de segurança adequadas para proteger suas informações pessoais. No entanto, lembre-se de que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro.
                        </p>

                        <h3 className="text-xl font-bold text-visu-black mb-4">7. Seus Direitos (LGPD)</h3>
                        <p className="mb-6">
                            De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de acessar, corrigir, portar e excluir seus dados pessoais, bem como de revogar o consentimento a qualquer momento.
                        </p>

                        <h3 className="text-xl font-bold text-visu-black mb-4">8. Contato</h3>
                        <p>
                            Para exercer seus direitos ou tirar dúvidas sobre nossa Política de Privacidade, entre em contato conosco pelo e-mail contato@visuapp.com.br.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}