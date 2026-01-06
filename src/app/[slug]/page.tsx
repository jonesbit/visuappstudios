'use client';

import Link from 'next/link';
import { use } from 'react'; 
export default function GenericPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-visu-dark text-white text-center px-6">
      <span className="text-visu-primary font-bold tracking-widest uppercase mb-4">Em Construção</span>
      <h1 className="text-5xl md:text-7xl font-bold mb-6">{title}</h1>
      <p className="text-gray-400 text-lg max-w-lg mb-10">
        Estamos preparando um conteúdo incrível para esta página. Em breve estará disponível com toda a qualidade Visuapp.
      </p>
      <Link href="/" className="bg-white text-visu-black px-8 py-4 rounded-full font-bold hover:bg-visu-primary hover:text-white transition-all duration-300">
        Voltar para o Início
      </Link>
    </main>
  );
}