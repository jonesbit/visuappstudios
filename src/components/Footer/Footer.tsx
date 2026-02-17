import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-visu-black text-gray-400 pt-16 pb-10 md:pt-20 md:pb-12 border-t border-gray-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16">
                    
                    <div className="col-span-2 md:col-span-2 text-center md:text-left">
                        <Link href="/" className="text-3xl font-bold tracking-tight text-white flex items-center justify-center md:justify-start gap-2 mb-6 group">
                            <img src="/assets/logopb.png" alt="Visuapp" className="h-8 w-auto group-hover:scale-105 transition-transform duration-300" />
                            Visuapp Studios
                        </Link>
                        <p className="text-gray-500 max-w-sm mx-auto md:mx-0 mb-6">Transformando ideias complexas em experiências digitais simples, belas e funcionais.</p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-visu-primary hover:text-white transition-all">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-visu-primary hover:text-white transition-all">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h4 className="text-white font-bold mb-6">Institucional</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/" className="hover:text-visu-primary transition-colors">Início</Link></li>
                            <li><Link href="#servicos" className="hover:text-visu-primary transition-colors">Serviços</Link></li>
                            <li><Link href="#planos" className="hover:text-visu-primary transition-colors">Planos</Link></li>
                            <li><Link href="#portfolio" className="hover:text-visu-primary transition-colors">Portfolio</Link></li>
                            <li><Link href="#contato" className="hover:text-visu-primary transition-colors">Fale Conosco</Link></li>
                            <li><Link href="#faq" className="hover:text-visu-primary transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="text-white font-bold mb-6">Serviços</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/landing-page" className="hover:text-visu-primary transition-colors">Landing Page</Link></li>
                            <li><Link href="/sites-institucionais" className="hover:text-visu-primary transition-colors">Site Institucional</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1 text-center md:text-left">
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/termos" className="hover:text-visu-primary transition-colors">Termos de Uso</Link></li>
                            <li><Link href="/privacidade" className="hover:text-visu-primary transition-colors">Política de Privacidade</Link></li>
                            <li><Link href="/reembolso" className="hover:text-visu-primary transition-colors">Política de Reembolso</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-center md:text-left">
                    <p>&copy; 2026 Visuapp Studios. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}