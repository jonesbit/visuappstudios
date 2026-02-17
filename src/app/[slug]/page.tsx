import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-visu-black flex flex-col items-center justify-center px-6 text-center">
            
            {/* Ícone Simples e Amigável */}
            <div className="bg-white/5 p-8 rounded-full mb-8 animate-pulse-slow">
                <i className="fas fa-compass text-6xl text-visu-primary opacity-80"></i>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Página não encontrada
            </h1>
            
            <p className="text-gray-400 text-lg max-w-md mb-10 leading-relaxed">
                Parece que o endereço que você digitou não existe ou mudou de lugar. Não se preocupe, vamos te ajudar a voltar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm justify-center">
                <Link 
                    href="/" 
                    className="w-full sm:w-auto px-8 py-3 bg-visu-primary text-white rounded-xl font-bold hover:bg-visu-primary/90 transition-all duration-300 shadow-lg shadow-visu-primary/20 flex items-center justify-center gap-2"
                >
                    <i className="fas fa-home"></i>
                    Início
                </Link>

                <Link 
                    href="/#contato" 
                    className="w-full sm:w-auto px-8 py-3 bg-transparent border border-gray-700 text-gray-300 rounded-xl font-bold hover:bg-white/5 hover:border-gray-500 transition-all duration-300 flex items-center justify-center gap-2"
                >
                    <i className="fas fa-envelope"></i>
                    Contato
                </Link>
            </div>

        </div>
    );
}