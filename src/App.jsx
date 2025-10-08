import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import MovieList from './components/MovieList.jsx'
import { fetchMovies } from './services/moviesService.js'

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true
    setIsLoading(true)
    console.log('[App] mounting, fetching movies...')
    fetchMovies()
      .then((data) => {
        if (!isMounted) return
        console.log('[App] movies received:', data?.length)
        setMovies(data)
      })
      .catch((e) => {
        if (!isMounted) return
        console.error('[App] fetch error:', e?.message || e)
        setError('Falha ao carregar filmes. Tente novamente mais tarde.')
      })
      .finally(() => {
        if (!isMounted) return
        setIsLoading(false)
      })
    return () => { isMounted = false }
  }, [])

  const filteredMovies = useMemo(() => {
    const term = search.trim().toLowerCase()
    if (!term) return movies
    return movies.filter((m) => m.title.toLowerCase().includes(term))
  }, [movies, search])

  return (
    <div className="min-h-dvh flex flex-col">
      <Header search={search} onSearchChange={setSearch} />

      <main className="container mx-auto px-4 py-24 sm:py-28">
        {isLoading && (
          <p className="text-center text-slate-600">Carregando filmes...</p>
        )}
        {!!error && (
          <p className="text-center text-red-600">{error}</p>
        )}
        {!isLoading && !error && (
          <MovieList movies={filteredMovies} />
        )}
      </main>

      <footer className="mt-auto py-6 text-center text-sm text-slate-500">
        Mini Catálogo de Filmes • React + Tailwind
      </footer>
    </div>
  )
}

export default App
