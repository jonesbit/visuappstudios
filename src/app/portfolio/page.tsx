'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Interface do Projeto
interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    tags: string[];
    fullDescription?: string;
    year?: string;
    client?: string;
}

// Dados dos Projetos - REMOVIDOS OS WEBSITES PARA FICAR "EM DESENVOLVIMENTO"
const projects: Project[] = [
    {
        id: 3,
        title: "Tech Solutions",
        category: "landing",
        image: "/assets/hero.png",
        description: "Landing Page de alta conversão para SaaS.",
        tags: ["Performance", "Copywriting"],
        fullDescription: "Landing Page otimizada para campanhas de Google Ads. Tempo de carregamento inferior a 1s e estrutura persuasiva focada em vendas.",
        year: "2024",
        client: "Tech Soluções Digitais"
    },
    {
        id: 4,
        title: "Raquel Confeitaria",
        category: "design",
        image: "/assets/raquelc.png",
        description: "Rebranding completo e materiais para redes sociais.",
        tags: ["Social Media", "Logo"],
        fullDescription: "Criação de nova identidade visual, mais moderna e apetitosa. Pacote completo de artes para Instagram e Facebook visando engajamento.",
        year: "2023",
        client: "Raquel Bolos"
    },
    {
        id: 5,
        title: "Padrinho Burger",
        category: "design",
        image: "/assets/padrinhob.png",
        description: "Identidade visual e cardápio digital para hamburgueria.",
        tags: ["Design Gráfico", "Menu"],
        fullDescription: "Desenvolvimento de cardápio digital interativo e materiais impressos para as mesas. Fotografia e tratamento de imagens dos produtos.",
        year: "2024",
        client: "O Padrinho Burger"
    },
    {
        id: 7,
        title: "Davis Cortes",
        category: "design",
        image: "/assets/davis2.png",
        description: "Estratégia visual para lançamento de curso online.",
        tags: ["Lançamento", "Identity"],
        fullDescription: "Identidade visual para lançamento de infoproduto. Landing page, criativos para tráfego e material de apoio para alunos.",
        year: "2024",
        client: "Davis Academy"
    }
];

export default function PortfolioPage() {
    const [filter, setFilter] = useState('todos');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
            easing: 'ease-out-cubic',
        });
    }, []);

    // Bloquear scroll quando modal estiver aberto
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedProject]);

    const filteredProjects = filter === 'todos' 
        ? projects 
        : projects.filter(project => project.category === filter);

    return (
        <main className="bg-visu-black min-h-screen text-white overflow-x-hidden selection:bg-visu-primary selection:text-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-visu-primary/10 rounded-full blur-[100px] animate-pulse-slow"></div>
                    <div className="absolute bottom-20 left-20 w-72 h-72 bg-visu-accent/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md animate-fade-in-down">
                        Showcase
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
                        Nossas <span className="text-transparent bg-clip-text bg-gradient-to-r from-visu-primary via-visu-accent to-visu-primary bg-[length:200%_auto] animate-shine">Obras Primas</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
                        Explore uma seleção dos nossos projetos favoritos. De sites corporativos complexos a identidades visuais marcantes.
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="pb-32 relative z-10">
                <div className="container mx-auto px-6">
                    
                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-down" style={{ animationDelay: '0.3s' }}>
                        <button 
                            onClick={() => setFilter('todos')}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${filter === 'todos' ? 'bg-white text-visu-black border-white' : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'}`}
                        >
                            Todos
                        </button>
                        <button 
                            onClick={() => setFilter('websites')}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${filter === 'websites' ? 'bg-white text-visu-black border-white' : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'}`}
                        >
                            Websites
                        </button>
                        <button 
                            onClick={() => setFilter('landing')}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${filter === 'landing' ? 'bg-white text-visu-black border-white' : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'}`}
                        >
                            Landing Pages
                        </button>
                        <button 
                            onClick={() => setFilter('design')}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${filter === 'design' ? 'bg-white text-visu-black border-white' : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'}`}
                        >
                            Design Gráfico
                        </button>
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div 
                                key={project.id} 
                                className="group relative bg-visu-dark rounded-3xl overflow-hidden border border-white/5 hover:border-visu-primary/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer" 
                                data-aos="fade-up"
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Image Container */}
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-visu-black via-transparent to-transparent opacity-60 z-10"></div>
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    
                                    {/* Overlay Hover Content */}
                                    <div className="absolute inset-0 bg-visu-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
                                        <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                                        <p className="text-white/80 text-sm mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.description}</p>
                                        <button className="px-6 py-2 bg-white text-visu-primary font-bold rounded-full text-sm hover:bg-visu-black hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 shadow-lg">
                                            Ver Detalhes
                                        </button>
                                    </div>
                                </div>

                                {/* Card Footer Info */}
                                <div className="p-6 relative z-10">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-white group-hover:text-visu-primary transition-colors">{project.title}</h3>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-visu-primary group-hover:text-white transition-colors">
                                            <i className="fas fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-xs"></i>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white/5 rounded text-gray-400 border border-white/5 group-hover:border-visu-primary/20 group-hover:text-visu-primary/80 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State PERSONALIZADO para Websites */}
                    {filter === 'websites' && filteredProjects.length === 0 && (
                        <div className="text-center py-24 bg-visu-dark/30 rounded-3xl border border-white/5 animate-fade-in-down">
                            <div className="relative w-24 h-24 mx-auto mb-6">
                                <div className="absolute inset-0 bg-visu-primary/20 rounded-full animate-ping"></div>
                                <div className="relative bg-visu-black rounded-full w-24 h-24 flex items-center justify-center border border-visu-primary/50">
                                    <i className="fas fa-code text-4xl text-visu-primary"></i>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Em Desenvolvimento</h3>
                            <p className="text-gray-400 max-w-md mx-auto">
                                Nossos projetos de Websites Institucionais estão no forno. <br />
                                Em breve atualizaremos a galeria com novos cases de sucesso.
                            </p>
                        </div>
                    )}

                    {/* Empty State Genérico (para outros casos vazios) */}
                    {filter !== 'websites' && filteredProjects.length === 0 && (
                        <div className="text-center py-20 bg-visu-dark/30 rounded-3xl border border-white/5">
                            <i className="fas fa-search text-4xl text-gray-600 mb-4"></i>
                            <p className="text-gray-400">Nenhum projeto encontrado nesta categoria.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-visu-dark border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto relative group" data-aos="zoom-in">
                        <div className="absolute inset-0 bg-gradient-to-r from-visu-primary/20 via-visu-accent/20 to-visu-primary/20 rounded-3xl blur-2xl opacity-50"></div>
                        
                        <div className="relative bg-visu-black border border-white/10 rounded-3xl p-12 overflow-hidden">
                             <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Pronto para começar seu projeto?
                                </h2>
                                <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
                                    Gostou do que viu? Vamos criar algo incrível para a sua marca também.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href="https://wa.me/5511939034586" target="_blank" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-visu-black rounded-xl font-bold hover:bg-gray-200 transition-all shadow-xl">
                                        <span>Solicitar Orçamento</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECT DETAILS MODAL */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity" 
                        onClick={() => setSelectedProject(null)}
                    ></div>

                    {/* Modal Content */}
                    <div 
                        className="bg-visu-dark w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 relative z-10 shadow-2xl animate-fade-in-down"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button 
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-visu-primary transition-colors border border-white/10"
                        >
                            <i className="fas fa-times"></i>
                        </button>

                        <div className="flex flex-col md:flex-row">
                            {/* Image Side */}
                            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                                <img 
                                    src={selectedProject.image} 
                                    alt={selectedProject.title} 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-visu-dark via-transparent to-transparent md:bg-gradient-to-r"></div>
                            </div>

                            {/* Details Side */}
                            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col">
                                <div className="mb-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-visu-primary bg-visu-primary/10 px-2 py-1 rounded border border-visu-primary/20">
                                            {selectedProject.category === 'websites' ? 'Website' : selectedProject.category === 'landing' ? 'Landing Page' : 'Design'}
                                        </span>
                                        {selectedProject.year && <span className="text-gray-500 text-xs font-mono border-l border-white/10 pl-2">{selectedProject.year}</span>}
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                                    <p className="text-gray-400 text-sm">{selectedProject.client || "Cliente Visuapp"}</p>
                                </div>

                                <div className="prose prose-invert text-gray-300 text-sm leading-relaxed mb-8 flex-1">
                                    <p>{selectedProject.fullDescription || selectedProject.description}</p>
                                    
                                    <h4 className="text-white font-bold mt-6 mb-2 text-sm uppercase">Tecnologias & Tags</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/10 flex gap-4">
                                    <Link href="#contato" onClick={() => setSelectedProject(null)} className="flex-1 py-3 bg-visu-primary hover:bg-visu-primary/80 text-white font-bold rounded-xl text-center text-sm transition-colors shadow-lg shadow-visu-primary/20">
                                        Quero um igual
                                    </Link>
                                    <button onClick={() => setSelectedProject(null)} className="px-6 py-3 border border-white/10 hover:bg-white/5 text-white font-bold rounded-xl text-sm transition-colors">
                                        Fechar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}