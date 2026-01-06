'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
    const [contactMethod, setContactMethod] = useState<'whatsapp' | 'email'>('whatsapp');

    return (
        <section id="contato" className="section-screen bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-100 border border-gray-100 flex flex-col md:flex-row min-h-[650px]">
                    
                    {/* Lado Esquerdo - Info */}
                    <div className="md:w-5/12 p-12 lg:p-14 bg-visu-black text-white relative flex flex-col justify-between overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                        <div className={styles.blobPrimary}></div>
                        <div className={styles.blobAccent}></div>
                        
                        <div className="relative z-10">
                            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-visu-primary border border-white/5">Vamos Conversar</span>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Pronto para <br />o próximo nível?</h2>
                            <p className="text-gray-400 mb-12 text-lg font-light leading-relaxed">Nossa equipe está pronta para transformar sua visão em realidade digital de alta performance.</p>
                            
                            <div className="space-y-8">
                                <div className="flex items-center gap-6 group cursor-pointer">
                                    <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center text-xl shadow-lg border border-white/5 group-hover:scale-110 transition-transform duration-300 group-hover:border-visu-primary/50">
                                        <i className="fas fa-envelope text-white group-hover:text-visu-primary transition-colors"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Email</p>
                                        <p className="font-medium text-lg text-gray-200 group-hover:text-white transition-colors">contato@visuapp.com.br</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group cursor-pointer">
                                    <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center text-xl shadow-lg border border-white/5 group-hover:scale-110 transition-transform duration-300 group-hover:border-green-500/50">
                                        <i className="fab fa-whatsapp text-white group-hover:text-green-500 transition-colors"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">WhatsApp</p>
                                        <p className="font-medium text-lg text-gray-200 group-hover:text-white transition-colors">(11) 93903-4586</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group cursor-pointer">
                                    <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center text-xl shadow-lg border border-white/5 group-hover:scale-110 transition-transform duration-300 group-hover:border-blue-500/50">
                                        <i className="fas fa-map-marker-alt text-white group-hover:text-blue-500 transition-colors"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Localização</p>
                                        <p className="font-medium text-lg text-gray-200 group-hover:text-white transition-colors">São Paulo, SP</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 relative z-10 flex gap-4 opacity-50">
                            <i className="fab fa-instagram hover:opacity-100 transition-opacity cursor-pointer"></i>
                            <i className="fab fa-facebook hover:opacity-100 transition-opacity cursor-pointer"></i>
                        </div>
                    </div>
                    
                    {/* Lado Direito - Form/Ação */}
                    <div className="md:w-7/12 bg-white p-12 lg:p-14 flex flex-col justify-center relative">
                        <div className="flex p-1.5 bg-gray-50 rounded-2xl border border-gray-100 mb-10 relative max-w-sm mx-auto w-full">
                            <button 
                                onClick={() => setContactMethod('whatsapp')} 
                                className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all duration-300 relative z-10 flex items-center justify-center gap-2 ${contactMethod === 'whatsapp' ? 'bg-white text-green-600 shadow-sm ring-1 ring-black/5' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                <i className="fab fa-whatsapp text-lg"></i> WhatsApp
                            </button>
                            <button 
                                onClick={() => setContactMethod('email')} 
                                className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all duration-300 relative z-10 flex items-center justify-center gap-2 ${contactMethod === 'email' ? 'bg-white text-visu-black shadow-sm ring-1 ring-black/5' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                <i className="fas fa-envelope text-lg"></i> Email
                            </button>
                        </div>

                        {contactMethod === 'email' ? (
                            <form className="space-y-6 animate-fade-in-down">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2 group">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1 group-focus-within:text-visu-primary transition-colors">Nome Completo</label>
                                        <input type="text" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-visu-primary focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium outline-none placeholder-gray-300" placeholder="Ex: João Silva" />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1 group-focus-within:text-visu-primary transition-colors">Profissão / Empresa</label>
                                        <input type="text" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-visu-primary focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium outline-none placeholder-gray-300" placeholder="Ex: Psicólogo, Empresa de Moda." />
                                    </div>
                                </div>
                                
                                <div className="space-y-2 group">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1 group-focus-within:text-visu-primary transition-colors">Email</label>
                                    <input type="email" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-visu-primary focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium outline-none placeholder-gray-300" placeholder="Ex: joao@seuemail.com" />
                                </div>

                                <div className="space-y-2 group">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1 group-focus-within:text-visu-primary transition-colors">Detalhes do Projeto</label>
                                    <textarea className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-visu-primary focus:ring-4 focus:ring-indigo-500/10 transition-all h-32 font-medium outline-none resize-none placeholder-gray-300" placeholder="Conte-nos sobre seus objetivos..."></textarea>
                                </div>

                                <button className="w-full bg-gradient-to-r from-visu-black to-gray-800 hover:from-visu-primary hover:to-visu-accent text-white font-bold py-5 rounded-xl shadow-xl shadow-gray-200 hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden">
                                    <span className="relative z-10 flex items-center justify-center gap-2">Enviar Solicitação <i className="fas fa-paper-plane group-hover:translate-x-1 transition-transform"></i></span>
                                </button>
                            </form>
                        ) : (
                            <div className="text-center flex flex-col items-center justify-center h-full space-y-8 animate-fade-in-down">
                                <div className="w-28 h-28 bg-green-50 rounded-full flex items-center justify-center relative group cursor-pointer">
                                    <div className="absolute inset-0 bg-green-500 rounded-full opacity-20 animate-ping group-hover:animate-none"></div>
                                    <i className="fab fa-whatsapp text-6xl text-green-500 group-hover:scale-110 transition-transform duration-300"></i>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-visu-black mb-3">Conversa Instantânea</h3>
                                    <p className="text-gray-400 max-w-xs mx-auto text-lg">Fale diretamente com um especialista e receba um orçamento preliminar em poucos minutos.</p>
                                </div>
                                <a href="https://wa.me/5511939034586" target="_blank" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-5 rounded-xl shadow-xl shadow-green-500/20 hover:shadow-green-500/40 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                                    <i className="fab fa-whatsapp text-xl"></i> Iniciar Conversa no WhatsApp
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}