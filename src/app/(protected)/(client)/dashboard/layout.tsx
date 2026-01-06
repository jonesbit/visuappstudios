import Link from "next/link"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="font-bold text-blue-600 text-xl">VisuApp</div>
            <nav className="hidden md:flex gap-6">
              <Link href="/dashboard" className="text-sm font-medium text-gray-900 hover:text-blue-600">
                Início
              </Link>
              <Link href="/dashboard/projects" className="text-sm font-medium text-gray-500 hover:text-blue-600">
                Meus Projetos
              </Link>
              <Link href="/dashboard/billing" className="text-sm font-medium text-gray-500 hover:text-blue-600">
                Faturas
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm text-gray-500 hover:text-gray-900">Ajuda</button>
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-medium text-sm">
              U
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          © 2024 VisuApp. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}