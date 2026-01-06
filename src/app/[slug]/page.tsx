'use client';

import Link from 'next/link';
import { use } from 'react'; 

export default function GenericPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  // Formata o slug para Título (ex: minha-pagina -> Minha Pagina)
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <main className="min-h-screen relative flex items-center justify-center overflow-hidden bg-visu-black text-white px-6">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-visu-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-3xl w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-lg shadow-visu-primary/5">
          <div className="w-2 h-2 rounded-full bg-visu-primary animate-pulse"></div>
          <span className="text-xs font-bold uppercase tracking-widest text-visu-primary">Em Desenvolvimento</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 drop-shadow-2xl">
          {title}
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Estamos trabalhando nos bastidores para trazer algo extraordinário para esta página. 
          A qualidade <span className="text-white font-bold">Visuapp</span> que você conhece, em breve disponível aqui.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link 
            href="/" 
            className="group relative px-8 py-4 bg-white text-visu-black rounded-xl font-bold transition-all hover:scale-105 hover:shadow-xl hover:shadow-white/10 overflow-hidden"
          >
            <span className="relative z-10">Voltar ao Início</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>

          <a 
            href="https://wa.me/5511999999999" 
            target="_blank"
            className="px-8 py-4 rounded-xl font-bold text-white border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2"
          >
            <i className="fab fa-whatsapp"></i> Falar com Suporte
          </a>
        </div>
      </div>

      {/* Footer Decorative */}
      <div className="absolute bottom-8 text-center w-full text-gray-600 text-[10px] font-mono uppercase tracking-widest z-10">
        Visuapp Development Studio &copy; {new Date().getFullYear()}
      </div>
    </main>
  );
}