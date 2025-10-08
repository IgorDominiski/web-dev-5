export default function Header({ search, onSearchChange }) {
  return (
    <header className="fixed inset-x-0 top-0 z-10 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <h1 className="text-lg sm:text-xl font-bold tracking-tight">
          <span className="text-brand-600">Mini</span> Catálogo de Filmes
        </h1>

        <label className="relative flex-1 max-w-md">
          <span className="sr-only">Buscar por título</span>
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por título..."
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 pr-9 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
          <svg className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </label>
      </div>
    </header>
  )
}


