'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`} id="navbar">
            <div className="container mx-auto px-6 h-20 flex justify-between items-center relative">
                
                <Link href="/" className="flex items-center gap-3 group z-50">
                    <div className="relative h-8 w-auto">
                        <img src="/assets/logo.png" alt="Visuapp" className="h-8 w-auto group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-visu-black">Visuapp Studios</span>
                </Link>
                
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-8">
                        <Link href="/#servicos" className="text-sm font-medium text-gray-500 hover:text-visu-primary transition-colors">Serviços</Link>
                        <Link href="/#planos" className="text-sm font-medium text-gray-500 hover:text-visu-primary transition-colors">Planos</Link>
                        <Link href="/portfolio" className="text-sm font-medium text-gray-500 hover:text-visu-primary transition-colors">Portfólio</Link>
                        <Link href="/#contato" className="text-sm font-medium text-gray-500 hover:text-visu-primary transition-colors">Contato</Link>
                        <Link href="/#faq" className="text-sm font-medium text-gray-500 hover:text-visu-primary transition-colors">FAQ</Link>
                    </div>

                    {/* CORREÇÃO AQUI: Link absoluto para o portal */}
                    <Link href="https://portal.visuapp.com.br/login" className="bg-visu-black text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-visu-primary transition-colors duration-300 flex items-center gap-2 group">
                        <i className="fas fa-user-circle text-lg opacity-70 group-hover:opacity-100 transition-opacity"></i>
                        <span>Área do Cliente</span>
                    </Link>
                </div>

                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-visu-black focus:outline-none z-50 p-2">
                    <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl transition-all duration-300`}></i>
                </button>
            </div>

            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl animate-fade-in-down origin-top`}>
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                    <Link href="/#servicos" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-gray-600 hover:text-visu-primary py-3 border-b border-gray-50">Serviços</Link>
                    <Link href="/#planos" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-gray-600 hover:text-visu-primary py-3 border-b border-gray-50">Planos</Link>
                    <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-gray-600 hover:text-visu-primary py-3 border-b border-gray-50">Portfólio</Link>
                    <Link href="/#contato" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-gray-600 hover:text-visu-primary py-3 mb-2">Contato</Link>
                    
                    {/* CORREÇÃO AQUI: Link absoluto para o portal no Mobile também */}
                    <Link href="https://portal.visuapp.com.br/login" className="bg-visu-black text-white px-6 py-4 rounded-xl font-bold text-sm text-center hover:bg-visu-primary transition-colors duration-300 flex items-center justify-center gap-2 w-full shadow-lg shadow-indigo-500/20">
                        <i className="fas fa-user-circle text-lg"></i>
                        <span>Área do Cliente</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}