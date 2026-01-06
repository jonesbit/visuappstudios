'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

// Mapeamento de títulos para o header
const sectionTitles: Record<string, string> = {
    'overview': 'Visão Geral',
    'clientes': 'Gestão de Clientes',
    'vencimentos': 'Serviços a Expirar',
    'chamados': 'Central de Suporte',
    'depoimentos': 'Moderação de Depoimentos',
    'financeiro': 'Financeiro'
};

export default function PortalAdmin() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
    const [activeSection, setActiveSection] = useState('overview');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (!currentUser) {
                router.push('/login');
                return;
            }

            // Verifica se é ADMIN de verdade
            const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
            if (userDoc.exists() && userDoc.data().role === 'admin') {
                setUser(currentUser);
                setLoading(false);
            } else {
                // Se não for admin, manda pro portal de cliente
                router.push('/portal');
            }
        });

        return () => unsubscribe();
    }, [router]);

    const handleLogout = async () => {
        await signOut(auth);
        router.push('/login');
    };

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    
    const switchSection = (section: string) => {
        setActiveSection(section);
        if (window.innerWidth < 768) {
            setIsSidebarOpen(false);
        }
    };

    if (loading) return <div className="min-h-screen bg-visu-black flex items-center justify-center text-white">Verificando permissões...</div>;

    return (
        <div className="text-visu-black antialiased flex h-[100dvh] overflow-hidden text-sm relative bg-[#f8fafc]">
            {/* Importando FontAwesome e Fonte */}
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

            <style jsx global>{`
                .custom-scroll::-webkit-scrollbar { width: 6px; height: 6px; }
                .custom-scroll::-webkit-scrollbar-track { background: #1f1f1f; }
                .custom-scroll::-webkit-scrollbar-thumb { background: #374151; border-radius: 3px; }
                .custom-scroll::-webkit-scrollbar-thumb:hover { background: #4b5563; }
                .fade-in { animation: fadeIn 0.3s ease-in-out; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
                .card-hover { transition: transform 0.2s ease, box-shadow 0.2s ease; }
                .card-hover:hover { transform: translateY(-2px); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
                .btn-studio { background: linear-gradient(90deg, #4f46e5, #db2777); background-size: 200% 200%; animation: gradient-shift 3s ease infinite; }
                @keyframes gradient-shift { 0% { background-position: 0% 50% } 50% { background-position: 100% 50% } 100% { background-position: 0% 50% } }
                .sidebar-overlay { background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(4px); }
            `}</style>

            <div 
                onClick={toggleSidebar} 
                className={`fixed inset-0 z-30 sidebar-overlay md:hidden transition-opacity duration-300 ${isSidebarOpen ? 'block' : 'hidden'}`}
            ></div>

            <aside className={`w-72 bg-visu-black text-gray-400 flex flex-col flex-shrink-0 h-full shadow-2xl z-40 fixed md:relative transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
                <div className="h-16 flex items-center justify-between px-6 border-b border-gray-800 bg-visu-dark">
                    <div className="flex items-center gap-3">
                        <img src="/assets/logo.png" alt="Visuapp" className="h-8 w-auto grayscale brightness-200" />
                        <div>
                            <span className="text-white font-bold tracking-tight block leading-tight">Visuapp</span>
                            <span className="text-[10px] uppercase tracking-wider font-bold text-visu-primary">Colaborador</span>
                        </div>
                    </div>
                    <button onClick={toggleSidebar} className="md:hidden text-gray-400 hover:text-white">
                        <i className="fas fa-times text-lg"></i>
                    </button>
                </div>

                <nav className="flex-1 py-6 space-y-1 overflow-y-auto custom-scroll">
                    
                    <div className="px-6 mb-6">
                        <a href="https://studio.visuapp.com" target="_blank" className="btn-studio group block w-full text-white rounded-xl p-4 shadow-lg hover:shadow-indigo-500/50 transition-all hover:-translate-y-1 relative overflow-hidden">
                            <div className="relative z-10 flex items-center justify-between">
                                <div>
                                    <p className="font-bold text-sm">VisuLab Studio</p>
                                    <p className="text-[10px] text-white/80">Criar sites & templates</p>
                                </div>
                                <i className="fas fa-magic text-xl group-hover:rotate-12 transition-transform"></i>
                            </div>
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </a>
                    </div>

                    <p className="px-6 text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-2">Gestão</p>
                    
                    <div onClick={() => switchSection('overview')} className={`sidebar-link flex items-center gap-3 px-6 py-2.5 text-sm font-medium cursor-pointer transition-all border-l-[3px] ${activeSection === 'overview' ? 'active text-white border-visu-primary bg-[#1e1e1e]' : 'border-transparent hover:text-white hover:bg-[#1e1e1e]'}`}>
                        <i className="fas fa-th-large w-5 text-center"></i>
                        Visão Geral
                    </div>
                    <div onClick={() => switchSection('clientes')} className={`sidebar-link flex items-center gap-3 px-6 py-2.5 text-sm font-medium cursor-pointer transition-all border-l-[3px] ${activeSection === 'clientes' ? 'active text-white border-visu-primary bg-[#1e1e1e]' : 'border-transparent hover:text-white hover:bg-[#1e1e1e]'}`}>
                        <i className="fas fa-users w-5 text-center"></i>
                        Gestão de Clientes
                    </div>
                    <div onClick={() => switchSection('vencimentos')} className={`sidebar-link flex items-center gap-3 px-6 py-2.5 text-sm font-medium cursor-pointer transition-all border-l-[3px] ${activeSection === 'vencimentos' ? 'active text-white border-visu-primary bg-[#1e1e1e]' : 'border-transparent hover:text-white hover:bg-[#1e1e1e]'}`}>
                        <i className="fas fa-clock w-5 text-center"></i>
                        Vencimentos
                    </div>

                    <p className="px-6 text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-2 mt-6">Operacional</p>

                    <div onClick={() => switchSection('chamados')} className={`sidebar-link flex items-center gap-3 px-6 py-2.5 text-sm font-medium cursor-pointer transition-all border-l-[3px] justify-between ${activeSection === 'chamados' ? 'active text-white border-visu-primary bg-[#1e1e1e]' : 'border-transparent hover:text-white hover:bg-[#1e1e1e]'}`}>
                        <div className="flex items-center gap-3"><i className="fa-solid fa-headset w-5 text-center"></i> Chamados</div>
                        <span className="bg-visu-primary text-white text-[10px] px-1.5 rounded font-bold">3</span>
                    </div>
                    <div onClick={() => switchSection('depoimentos')} className={`sidebar-link flex items-center gap-3 px-6 py-2.5 text-sm font-medium cursor-pointer transition-all border-l-[3px] ${activeSection === 'depoimentos' ? 'active text-white border-visu-primary bg-[#1e1e1e]' : 'border-transparent hover:text-white hover:bg-[#1e1e1e]'}`}>
                        <i className="fas fa-comment-dots w-5 text-center"></i>
                        Depoimentos
                    </div>

                    <p className="px-6 text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-2 mt-6">Financeiro</p>

                    <div onClick={() => switchSection('financeiro')} className={`sidebar-link flex items-center gap-3 px-6 py-2.5 text-sm font-medium cursor-pointer transition-all border-l-[3px] ${activeSection === 'financeiro' ? 'active text-white border-visu-primary bg-[#1e1e1e]' : 'border-transparent hover:text-white hover:bg-[#1e1e1e]'}`}>
                        <i className="fas fa-file-invoice-dollar w-5 text-center"></i>
                        Pagamentos
                    </div>
                </nav>

                <div className="p-4 bg-visu-dark border-t border-gray-800">
                    <div className="flex items-center gap-3 mb-3">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-8 h-8 rounded-full border border-gray-600" alt="User" />
                        <div className="overflow-hidden">
                            <p className="text-white text-xs font-bold truncate">{user?.email || 'Admin'}</p>
                            <p className="text-gray-500 text-[10px] truncate">Front-end Lead</p>
                        </div>
                    </div>
                    <button onClick={handleLogout} className="flex items-center justify-center gap-2 w-full py-2 bg-gray-800 hover:bg-red-900/30 text-gray-400 hover:text-red-400 rounded transition-colors text-xs font-bold">
                        <i className="fas fa-power-off"></i> Sair
                    </button>
                </div>
            </aside>

            <div className="flex-1 flex flex-col h-full overflow-hidden relative bg-gray-50">
                
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8 shadow-sm z-20 sticky top-0">
                    <div className="flex items-center gap-3 md:gap-4">
                        <button onClick={toggleSidebar} className="md:hidden text-visu-black focus:outline-none p-2 -ml-2">
                            <i className="fas fa-bars text-xl"></i>
                        </button>

                        <h2 className="text-base md:text-lg font-bold text-gray-800">{sectionTitles[activeSection] || 'Dashboard'}</h2>
                        <div className="hidden md:block h-6 w-px bg-gray-200"></div>
                        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-visu-black border border-gray-800 rounded text-white text-xs font-bold uppercase tracking-wider">
                            <i className="fas fa-shield-alt"></i> Admin
                        </div>
                    </div>

                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="relative hidden md:block">
                            <input type="text" placeholder="Buscar projeto, cliente..." className="bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-4 py-1.5 text-xs focus:outline-none focus:border-visu-primary w-64 transition-all" />
                            <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        </div>
                        <button className="md:hidden w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600">
                            <i className="fas fa-search"></i>
                        </button>

                        <button className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors relative">
                            <i className="fas fa-bell"></i>
                            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-visu-danger border-2 border-white rounded-full"></span>
                        </button>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-24 custom-scroll scroll-smooth w-full">
                    <div className="max-w-7xl mx-auto">
                        
                        {/* SEÇÃO: VISÃO GERAL */}
                        {activeSection === 'overview' && (
                            <div className="fade-in space-y-6 md:space-y-8">
                                
                                <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm relative overflow-hidden group">
                                    <div className="absolute right-0 top-0 w-full md:w-1/2 h-full bg-gradient-to-l from-visu-primary/10 to-transparent pointer-events-none"></div>
                                    <div className="relative z-10 flex justify-between items-center">
                                        <div>
                                            <h2 className="text-xl md:text-2xl font-bold text-visu-black mb-2">Área de Criação & Desenvolvimento</h2>
                                            <p className="text-gray-500 max-w-xl text-xs md:text-sm">Acesse o novo VisuLab Studio para criar sites, extrair templates de referências e consultar a documentação técnica.</p>
                                            <div className="mt-6 flex gap-3">
                                                <a href="#" className="bg-visu-black text-white px-5 md:px-6 py-2.5 rounded-lg text-xs md:text-sm font-bold hover:bg-visu-primary transition-colors shadow-lg shadow-indigo-500/20 flex items-center gap-2">
                                                    <i className="fas fa-rocket"></i> Acessar Studio
                                                </a>
                                            </div>
                                        </div>
                                        <div className="hidden lg:block">
                                            <i className="fas fa-layer-group text-8xl text-visu-primary/20 group-hover:scale-110 transition-transform duration-500"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm card-hover relative overflow-hidden">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <p className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">Faturamento Total Mensal</p>
                                                <h3 className="text-2xl font-bold text-visu-black mt-1">R$ 42.500</h3>
                                            </div>
                                            <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                                                <i className="fas fa-calendar-day"></i>
                                            </div>
                                        </div>
                                        <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-[70%]"></div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm card-hover">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <p className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">Faturamento Recorrente (MRR)</p>
                                                <h3 className="text-2xl font-bold text-visu-black mt-1">R$ 15.200</h3>
                                            </div>
                                            <div className="w-10 h-10 rounded-lg bg-blue-50 text-visu-primary flex items-center justify-center">
                                                <i className="fas fa-sync"></i>
                                            </div>
                                        </div>
                                        <span className="text-visu-primary text-xs font-bold bg-blue-50 px-2 py-1 rounded">+5 Assinaturas novas</span>
                                    </div>

                                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm card-hover">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <p className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">Faturamento Total (Anual)</p>
                                                <h3 className="text-2xl font-bold text-visu-black mt-1">R$ 380.000</h3>
                                            </div>
                                            <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                                                <i className="fas fa-chart-line"></i>
                                            </div>
                                        </div>
                                        <span className="text-purple-600 text-xs font-bold">Meta: 85% Concluída</span>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                    <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                                        <h3 className="font-bold text-gray-800 text-sm md:text-base">Histórico de Pagamentos Recentes</h3>
                                        <button onClick={() => switchSection('financeiro')} className="text-xs font-bold text-visu-primary hover:underline">Ver Completo</button>
                                    </div>
                                    <div className="overflow-x-auto custom-scroll pb-2">
                                        <table className="w-full text-left min-w-[600px]">
                                            <thead className="bg-gray-50 text-[10px] uppercase text-gray-500 font-bold border-b border-gray-100">
                                                <tr>
                                                    <th className="px-6 py-3">Cliente</th>
                                                    <th className="px-6 py-3">Data</th>
                                                    <th className="px-6 py-3">Serviço</th>
                                                    <th className="px-6 py-3">Valor</th>
                                                    <th className="px-6 py-3">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 text-xs">
                                                <tr className="hover:bg-gray-50">
                                                    <td className="px-6 py-3 font-bold text-gray-700">Barbearia Viking</td>
                                                    <td className="px-6 py-3 text-gray-500">26 Nov, 2025</td>
                                                    <td className="px-6 py-3">Manutenção Mensal</td>
                                                    <td className="px-6 py-3 font-bold text-visu-black">R$ 150,00</td>
                                                    <td className="px-6 py-3"><span className="px-2 py-0.5 rounded bg-green-100 text-green-700 font-bold">Pago</span></td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="px-6 py-3 font-bold text-gray-700">Tech Solutions</td>
                                                    <td className="px-6 py-3 text-gray-500">25 Nov, 2025</td>
                                                    <td className="px-6 py-3">Setup Inicial SaaS</td>
                                                    <td className="px-6 py-3 font-bold text-visu-black">R$ 2.500,00</td>
                                                    <td className="px-6 py-3"><span className="px-2 py-0.5 rounded bg-green-100 text-green-700 font-bold">Pago</span></td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="px-6 py-3 font-bold text-gray-700">La Trattoria</td>
                                                    <td className="px-6 py-3 text-gray-500">24 Nov, 2025</td>
                                                    <td className="px-6 py-3">Renovação Domínio</td>
                                                    <td className="px-6 py-3 font-bold text-visu-black">R$ 80,00</td>
                                                    <td className="px-6 py-3"><span className="px-2 py-0.5 rounded bg-yellow-100 text-yellow-700 font-bold">Pendente</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* SEÇÃO: CLIENTES */}
                        {activeSection === 'clientes' && (
                            <div className="fade-in space-y-6">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-visu-black">Base de Clientes</h2>
                                        <p className="text-gray-500 text-sm">Gerenciamento de contratos e datas de expiração.</p>
                                    </div>
                                    <button className="w-full md:w-auto px-4 py-2 bg-visu-black text-white rounded-lg text-xs font-bold hover:bg-visu-primary transition-colors">
                                        <i className="fas fa-plus mr-2"></i> Novo Cliente
                                    </button>
                                </div>

                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                    <div className="overflow-x-auto custom-scroll pb-2">
                                        <table className="w-full text-left min-w-[800px]">
                                            <thead className="bg-gray-50 text-[10px] uppercase text-gray-500 font-bold border-b border-gray-100">
                                                <tr>
                                                    <th className="px-6 py-4">Cliente / Projeto</th>
                                                    <th className="px-6 py-4">Aquisição</th>
                                                    <th className="px-6 py-4">Venc. Manutenção (30d)</th>
                                                    <th className="px-6 py-4">Venc. Domínio (1 ano)</th>
                                                    <th className="px-6 py-4">Status</th>
                                                    <th className="px-6 py-4 text-right">Ações</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 text-xs">
                                                <tr className="hover:bg-gray-50 group">
                                                    <td className="px-6 py-4">
                                                        <p className="font-bold text-visu-black">Barbearia Viking</p>
                                                        <p className="text-[10px] text-gray-400">barbeariaviking.com.br</p>
                                                    </td>
                                                    <td className="px-6 py-4 text-gray-600">10 Out, 2025</td>
                                                    <td className="px-6 py-4 text-visu-black font-medium">10 Dez, 2025</td>
                                                    <td className="px-6 py-4 text-visu-black font-medium">10 Out, 2026</td>
                                                    <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-green-100 text-green-700 font-bold">Ativo</span></td>
                                                    <td className="px-6 py-4 text-right"><button className="text-gray-400 hover:text-visu-primary"><i className="fas fa-edit"></i></button></td>
                                                </tr>
                                                <tr className="hover:bg-gray-50 group">
                                                    <td className="px-6 py-4">
                                                        <p className="font-bold text-visu-black">Consultório Dra. Ana</p>
                                                        <p className="text-[10px] text-gray-400">draanasilva.com</p>
                                                    </td>
                                                    <td className="px-6 py-4 text-gray-600">15 Nov, 2025</td>
                                                    <td className="px-6 py-4 text-visu-black font-medium">15 Dez, 2025</td>
                                                    <td className="px-6 py-4 text-visu-black font-medium">15 Nov, 2026</td>
                                                    <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-green-100 text-green-700 font-bold">Ativo</span></td>
                                                    <td className="px-6 py-4 text-right"><button className="text-gray-400 hover:text-visu-primary"><i className="fas fa-edit"></i></button></td>
                                                </tr>
                                                <tr className="hover:bg-gray-50 group">
                                                    <td className="px-6 py-4">
                                                        <p className="font-bold text-visu-black">Restaurante Sabor</p>
                                                        <p className="text-[10px] text-gray-400">saborcaseiro.com.br</p>
                                                    </td>
                                                    <td className="px-6 py-4 text-gray-600">20 Set, 2025</td>
                                                    <td className="px-6 py-4 text-red-500 font-bold">20 Nov, 2025 (Atrasado)</td>
                                                    <td className="px-6 py-4 text-visu-black font-medium">20 Set, 2026</td>
                                                    <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-red-100 text-red-700 font-bold">Pendente</span></td>
                                                    <td className="px-6 py-4 text-right"><button className="text-gray-400 hover:text-visu-primary"><i className="fas fa-edit"></i></button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* SEÇÃO: VENCIMENTOS */}
                        {activeSection === 'vencimentos' && (
                            <div className="fade-in space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-visu-black">Serviços a Expirar</h2>
                                    <p className="text-gray-500 text-sm">Monitoramento de datas críticas (Domínio, Hospedagem, Manutenção).</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-visu-danger"></div>
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <p className="text-xs font-bold text-visu-danger uppercase">Expira em 2 dias</p>
                                                <h4 className="font-bold text-visu-black mt-1">Renovação Domínio</h4>
                                            </div>
                                            <i className="fas fa-globe text-gray-300 text-xl"></i>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-4">Cliente: <span className="font-bold">Restaurante Sabor</span></p>
                                        <button className="w-full py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 text-xs font-bold rounded-lg transition-colors border border-gray-200">Notificar Cliente</button>
                                    </div>

                                     <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-visu-warning"></div>
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <p className="text-xs font-bold text-visu-warning uppercase">Expira em 5 dias</p>
                                                <h4 className="font-bold text-visu-black mt-1">Manutenção Mensal</h4>
                                            </div>
                                            <i className="fas fa-tools text-gray-300 text-xl"></i>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-4">Cliente: <span className="font-bold">Barbearia Viking</span></p>
                                        <button className="w-full py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 text-xs font-bold rounded-lg transition-colors border border-gray-200">Gerar Fatura</button>
                                    </div>

                                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-visu-primary"></div>
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <p className="text-xs font-bold text-visu-primary uppercase">Expira em 15 dias</p>
                                                <h4 className="font-bold text-visu-black mt-1">Hospedagem AWS</h4>
                                            </div>
                                            <i className="fas fa-server text-gray-300 text-xl"></i>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-4">Cliente: <span className="font-bold">Consultório Dra. Ana</span></p>
                                        <button className="w-full py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 text-xs font-bold rounded-lg transition-colors border border-gray-200">Verificar Status</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* SEÇÃO: CHAMADOS */}
                        {activeSection === 'chamados' && (
                            <div className="fade-in space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-visu-black">Central de Chamados</h2>
                                    <p className="text-gray-500 text-sm">Gerenciamento de tickets e suporte.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    
                                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative group hover:border-gray-300 transition-colors">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex items-center gap-2">
                                                <span className="w-8 h-8 rounded-full bg-red-50 text-visu-danger flex items-center justify-center text-xs"><i className="fas fa-exclamation"></i></span>
                                                <span className="text-xs font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded">#TK-902</span>
                                            </div>
                                            <span className="text-[10px] text-gray-400 font-bold uppercase">Há 2 horas</span>
                                        </div>
                                        <h4 className="font-bold text-visu-black mb-2">Erro 500 no Checkout</h4>
                                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">Cliente relatou impossibilidade de finalizar compras via mobile. Ocorre intermitentemente.</p>
                                        <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 rounded-full bg-visu-black text-white flex items-center justify-center text-[10px] font-bold">S</div>
                                                <span className="text-xs font-bold text-gray-500">ShopShoes</span>
                                            </div>
                                            <button className="px-4 py-1.5 bg-visu-primary text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition-colors">Atender</button>
                                        </div>
                                    </div>

                                     <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative group hover:border-gray-300 transition-colors">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex items-center gap-2">
                                                <span className="w-8 h-8 rounded-full bg-yellow-50 text-visu-warning flex items-center justify-center text-xs"><i className="fas fa-pen"></i></span>
                                                <span className="text-xs font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded">#TK-899</span>
                                            </div>
                                            <span className="text-[10px] text-gray-400 font-bold uppercase">Ontem</span>
                                        </div>
                                        <h4 className="font-bold text-visu-black mb-2">Alteração de Rodapé</h4>
                                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">Solicitação para atualizar o telefone de contato e adicionar link para LinkedIn.</p>
                                        <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 rounded-full bg-visu-black text-white flex items-center justify-center text-[10px] font-bold">C</div>
                                                <span className="text-xs font-bold text-gray-500">Cafe & Co</span>
                                            </div>
                                            <button className="px-4 py-1.5 bg-visu-primary text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition-colors">Atender</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}

                        {/* SEÇÃO: DEPOIMENTOS */}
                        {activeSection === 'depoimentos' && (
                            <div className="fade-in space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-visu-black">Moderação de Depoimentos</h2>
                                    <p className="text-gray-500 text-sm">Todos os depoimentos recebidos dos sites dos clientes.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    
                                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-[10px] font-bold uppercase text-visu-primary bg-indigo-50 px-2 py-1 rounded">Barbearia Viking</span>
                                            <div className="flex text-yellow-400 text-[10px]">
                                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                            </div>
                                        </div>
                                        <h4 className="text-sm font-bold text-gray-800 mb-1">Lucas Mendes</h4>
                                        <p className="text-xs text-gray-500 italic mb-4">"Melhor corte da região, atendimento impecável!"</p>
                                        <div className="flex gap-2">
                                            <button className="flex-1 py-1.5 bg-green-50 text-green-600 text-xs font-bold rounded hover:bg-green-100"><i className="fas fa-check mr-1"></i> Aprovar</button>
                                            <button className="flex-1 py-1.5 bg-red-50 text-red-600 text-xs font-bold rounded hover:bg-red-100"><i className="fas fa-trash mr-1"></i> Excluir</button>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-[10px] font-bold uppercase text-visu-primary bg-indigo-50 px-2 py-1 rounded">Consultório Ana</span>
                                            <div className="flex text-yellow-400 text-[10px]">
                                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>
                                            </div>
                                        </div>
                                        <h4 className="text-sm font-bold text-gray-800 mb-1">Julia Roberts</h4>
                                        <p className="text-xs text-gray-500 italic mb-4">"Doutora muito atenciosa, mas o agendamento demorou um pouco."</p>
                                        <div className="flex gap-2">
                                            <button className="flex-1 py-1.5 bg-green-50 text-green-600 text-xs font-bold rounded hover:bg-green-100"><i className="fas fa-check mr-1"></i> Aprovar</button>
                                            <button className="flex-1 py-1.5 bg-red-50 text-red-600 text-xs font-bold rounded hover:bg-red-100"><i className="fas fa-trash mr-1"></i> Excluir</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}

                        {/* SEÇÃO: FINANCEIRO */}
                        {activeSection === 'financeiro' && (
                            <div className="fade-in space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-visu-black">Gestão Financeira</h2>
                                    <p className="text-gray-500 text-sm">Histórico completo de transações.</p>
                                </div>
                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                    <div className="overflow-x-auto custom-scroll pb-2">
                                        <table className="w-full text-left min-w-[700px]">
                                            <thead className="bg-gray-50 text-[10px] uppercase text-gray-500 font-bold border-b border-gray-100">
                                                <tr>
                                                    <th className="px-6 py-4">ID Transação</th>
                                                    <th className="px-6 py-4">Cliente</th>
                                                    <th className="px-6 py-4">Data</th>
                                                    <th className="px-6 py-4">Tipo</th>
                                                    <th className="px-6 py-4">Valor</th>
                                                    <th className="px-6 py-4">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 text-xs">
                                                <tr className="hover:bg-gray-50">
                                                    <td className="px-6 py-4 font-mono text-gray-400">#TRX-9902</td>
                                                    <td className="px-6 py-4 font-bold text-gray-700">Barbearia Viking</td>
                                                    <td className="px-6 py-4 text-gray-500">26 Nov, 10:30</td>
                                                    <td className="px-6 py-4">Manutenção</td>
                                                    <td className="px-6 py-4 font-bold text-visu-black">R$ 150,00</td>
                                                    <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-green-100 text-green-700 font-bold">Pago</span></td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="px-6 py-4 font-mono text-gray-400">#TRX-9901</td>
                                                    <td className="px-6 py-4 font-bold text-gray-700">Tech Solutions</td>
                                                    <td className="px-6 py-4 text-gray-500">25 Nov, 14:15</td>
                                                    <td className="px-6 py-4">Setup</td>
                                                    <td className="px-6 py-4 font-bold text-visu-black">R$ 2.500,00</td>
                                                    <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-green-100 text-green-700 font-bold">Pago</span></td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="px-6 py-4 font-mono text-gray-400">#TRX-9900</td>
                                                    <td className="px-6 py-4 font-bold text-gray-700">Restaurante Sabor</td>
                                                    <td className="px-6 py-4 text-gray-500">20 Nov, 09:00</td>
                                                    <td className="px-6 py-4">Manutenção</td>
                                                    <td className="px-6 py-4 font-bold text-visu-black">R$ 150,00</td>
                                                    <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-red-100 text-red-700 font-bold">Falha</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </main>
            </div>
        </div>
    );
}