'use client';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export default function Reembolso() {
    return (
        <main className="min-h-screen bg-visu-light">
            <Navbar />
            
            <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-visu-primary font-bold tracking-widest text-xs uppercase mb-3 block">Transparência</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-visu-black mb-6">Política de Reembolso</h1>
                        <p className="text-gray-500 text-lg">Última atualização: Janeiro de 2026</p>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 prose prose-lg text-gray-600">
                        <h3 className="text-xl font-bold text-visu-black mb-4">1. Visão Geral</h3>
                        <p className="mb-6">
                            A Visuapp Studios se compromete com a satisfação de seus clientes. Nossa política de reembolso visa ser justa e transparente, alinhada com o Código de Defesa do Consumidor e as especificidades de serviços digitais personalizados.
                        </p>

                        <h3 className="text-xl font-bold text-visu-black mb-4">2. Serviços de Desenvolvimento (Sites e Landing Pages)</h3>
                        <ul className="list-disc pl-5 mb-6 space-y-2">
                            <li>
                                <strong>Antes do início do projeto:</strong> Se você solicitar o cancelamento após o pagamento do sinal, mas antes do início do desenvolvimento ou criação de layout, reembolsaremos 100% do valor pago.
                            </li>
                            <li>
                                <strong>Durante o desenvolvimento:</strong> Se o cancelamento ocorrer após o início do trabalho (criação de layout, configuração de servidor, etc.), será retido um valor proporcional às horas já trabalhadas e custos operacionais incorridos, com um mínimo de 30% do valor total do contrato para cobrir custos administrativos.
                            </li>
                            <li>
                                <strong>Após a entrega/aprovação:</strong> Não oferecemos reembolso após o site ter sido aprovado pelo cliente, finalizado e publicado (entregue), pois o serviço foi considerado prestado e aceito.
                            </li>
                        </ul>

                        <h3 className="text-xl font-bold text-visu-black mb-4">3. Serviços de Assinatura ou Manutenção</h3>
                        <ul className="list-disc pl-5 mb-6 space-y-2">
                            <li>Você pode cancelar sua assinatura a qualquer momento.</li>
                            <li>O cancelamento entrará em vigor no próximo ciclo de faturamento.</li>
                            <li>Não oferecemos reembolsos parciais para períodos mensais já iniciados.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-visu-black mb-4">4. Produtos Digitais (Downloads)</h3>
                        <p className="mb-6">
                            Para templates, plugins ou assets digitais comprados diretamente em nossa loja, devido à natureza irrevogável desses bens digitais, não emitimos reembolsos após o download ser concluído, a menos que o produto apresente defeito técnico comprovado que impeça seu uso.
                        </p>

                        <h3 className="text-xl font-bold text-visu-black mb-4">5. Solicitação de Reembolso</h3>
                        <p className="mb-6">
                            Para solicitar um reembolso, entre em contato com nossa equipe financeira através do e-mail financeiro@visuapp.com.br, informando o número do pedido ou contrato e o motivo da solicitação. Analisaremos seu caso e responderemos em até 5 dias úteis.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}