import Link from "next/link"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen w-full bg-gray-100">
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="h-16 flex items-center justify-center border-b border-slate-800 font-bold text-xl">
          VisuApp Admin
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link href="/admin" className="block px-4 py-2 rounded hover:bg-slate-800 transition-colors">
            Dashboard
          </Link>
          <Link href="/admin/users" className="block px-4 py-2 rounded hover:bg-slate-800 transition-colors">
            Usuários
          </Link>
          <Link href="/admin/settings" className="block px-4 py-2 rounded hover:bg-slate-800 transition-colors">
            Configurações
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <form action="/auth/signout" method="post">
            <button className="w-full px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors text-left">
              Sair
            </button>
          </form>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <h1 className="text-lg font-semibold text-gray-800">Visão Geral</h1>
          <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}