import MovieCard from './MovieCard.jsx'

export default function MovieList({ movies }) {
  if (!movies?.length) {
    return (
      <p className="text-center text-slate-500">Nenhum filme encontrado.</p>
    )
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  )
}


