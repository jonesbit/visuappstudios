'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import { createSessionAction } from '@/app/actions/server-action-login'; 

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [view, setView] = useState<'login' | 'reset'>('login');

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
            easing: 'ease-out-cubic',
        });
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        if (view === 'login') {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                const userDocRef = doc(db, 'users', user.uid);
                const userDoc = await getDoc(userDocRef);

                let role = 'user';
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    role = userData.role || 'user';
                }

                await createSessionAction(user.uid, role);

                if (role === 'admin') {
                    window.location.href = 'https://portal.visuapp.com.br/admin';
                } else {
                    window.location.href = 'https://portal.visuapp.com.br/dashboard';
                }
                
            } catch (err: any) {
                console.error(err);
                if (err.code === 'auth/invalid-credential') {
                    setError('Email ou senha incorretos.');
                } else {
                    setError('Ocorreu um erro ao tentar entrar.');
                }
                setLoading(false);
            }
        } else {
            if (!email) {
                setError('Digite seu email para redefinir a senha.');
                setLoading(false);
                return;
            }

            try {
                const usersRef = collection(db, 'users');
                const q = query(usersRef, where('email', '==', email));
                const querySnapshot = await getDocs(q);

                if (querySnapshot.empty) {
                    setError('Este email não foi encontrado em nossa base de dados.');
                    setLoading(false);
                    return;
                }

                await sendPasswordResetEmail(auth, email);
                setSuccess('Email de redefinição enviado! Verifique sua caixa de entrada.');
                setLoading(false);
            } catch (err: any) {
                console.error(err);
                if (err.code === 'auth/invalid-email') {
                    setError('O formato do email é inválido.');
                } else {
                    setError('Erro ao processar a solicitação.');
                }
                setLoading(false);
            }
        }
    };

    const toggleView = () => {
        setView(view === 'login' ? 'reset' : 'login');
        setError('');
        setSuccess('');
    };

    return (
        <main className="bg-visu-black min-h-screen flex items-center justify-center relative overflow-x-hidden font-sans py-10 md:py-0">
            <style jsx global>{`
                .glass-panel {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(20px);
                }
                .input-group:focus-within label {
                    color: #4f46e5;
                }
                .input-group:focus-within i {
                    color: #4f46e5;
                }
            `}</style>

            <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-72 h-72 bg-visu-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-10 right-10 w-72 h-72 bg-visu-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '2s' }}></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '4s' }}></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>
            </div>

            <div className="absolute top-4 left-4 md:top-8 md:left-8 z-50">
                <Link href="https://visuapp.com.br" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group bg-visu-black/50 backdrop-blur-md px-4 py-2 rounded-full md:bg-transparent md:backdrop-blur-none md:p-0 md:rounded-none border border-white/10 md:border-none">
                    <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
                    <span className="text-xs md:text-sm font-medium">Voltar ao site</span>
                </Link>
            </div>

            <div className="container mx-auto px-4 relative z-10 max-w-5xl mt-10 md:mt-0">
                <div className="bg-visu-dark rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-auto md:min-h-[600px] border border-white/5" data-aos="fade-up" data-aos-duration="800">
                    
                    <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-visu-gray to-black relative flex flex-col justify-between overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-visu-primary to-visu-accent rounded-full blur-[100px] opacity-20"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-8 md:mb-12">
                                <img src="/assets/logo.png" alt="Visuapp" className="h-6 md:h-8 w-auto grayscale brightness-200" />
                                <span className="text-xl md:text-2xl font-bold tracking-tight text-white">Visuapp</span>
                            </div>
                            
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                {view === 'login' ? 'Bem-vindo de volta.' : 'Recuperação de Conta'}
                            </h2>
                            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                                {view === 'login' 
                                    ? 'Acesse seu painel para acompanhar o progresso dos projetos, visualizar faturas e aprovar novos designs.'
                                    : 'Insira seu email cadastrado para receber as instruções de recuperação de senha.'}
                            </p>
                        </div>

                        <div className="relative z-10 mt-8 md:mt-12 hidden md:block">
                            <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4 animate-float">
                                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <div>
                                    <p className="text-white text-sm font-bold">Ambiente Seguro</p>
                                    <p className="text-xs text-gray-400">Criptografia de ponta a ponta.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 p-8 md:p-12 bg-white flex flex-col justify-center relative">
                        {view === 'login' && (
                            <div className="mb-6 md:absolute md:top-6 md:right-6 md:mb-0 inline-flex self-start md:self-auto items-center gap-2 px-3 py-1 bg-red-50 text-red-600 rounded-full text-[10px] font-bold uppercase tracking-wider border border-red-100">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                                Acesso Restrito
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-visu-black mb-2">
                                {view === 'login' ? 'Login' : 'Recuperar Senha'}
                            </h3>
                            <p className="text-gray-500 text-sm">
                                {view === 'login' ? 'Acesse sua área exclusiva.' : 'Informe seu email abaixo.'}
                            </p>
                        </div>

                        <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
                            <div className="space-y-2 input-group">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide transition-colors">Email</label>
                                <div className="relative">
                                    <input 
                                        type="email" 
                                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-visu-primary focus:bg-white focus:ring-0 transition-all font-medium outline-none text-visu-black text-sm md:text-base" 
                                        placeholder="seu@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required 
                                        tabIndex={1}
                                    />
                                    <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors pointer-events-none"></i>
                                </div>
                            </div>

                            {view === 'login' && (
                                <div className="space-y-2 input-group">
                                    <div className="flex justify-between items-center">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wide transition-colors">Senha</label>
                                        <button type="button" onClick={toggleView} tabIndex={4} className="text-xs font-semibold text-visu-primary hover:text-visu-accent transition-colors hover:underline outline-none">
                                            Esqueceu a senha?
                                        </button>
                                    </div>
                                    <div className="relative">
                                        <input 
                                            type="password" 
                                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-visu-primary focus:bg-white focus:ring-0 transition-all font-medium outline-none text-visu-black text-sm md:text-base" 
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required 
                                            tabIndex={2}
                                        />
                                        <i className="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors pointer-events-none"></i>
                                    </div>
                                </div>
                            )}

                            {error && (
                                <div className="text-red-500 text-sm text-center font-bold">
                                    {error}
                                </div>
                            )}

                            {success && (
                                <div className="text-green-500 text-sm text-center font-bold">
                                    {success}
                                </div>
                            )}

                            <button 
                                type="submit" 
                                disabled={loading}
                                tabIndex={3}
                                className="block w-full text-center bg-visu-black text-white font-bold py-3.5 md:py-4 rounded-xl shadow-xl shadow-gray-200 hover:shadow-indigo-500/20 hover:bg-visu-primary transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <span className="relative z-10 text-sm md:text-base">
                                    {loading ? 'Processando...' : (view === 'login' ? 'Acessar Painel' : 'Enviar Link de Recuperação')}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-visu-primary to-visu-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>

                            {view === 'reset' && (
                                <button 
                                    type="button" 
                                    onClick={toggleView}
                                    className="block w-full text-center text-gray-500 text-sm hover:text-visu-black transition-colors"
                                >
                                    Voltar para o Login
                                </button>
                            )}
                        </form>

                        <div className="mt-8 text-center border-t border-gray-100 pt-6">
                            <p className="text-[10px] md:text-xs text-gray-400">
                                <i className="fas fa-lock mr-1"></i> Área exclusiva para clientes ativos. <br className="hidden md:block" />
                                Tentativas de acesso não autorizadas são monitoradas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}