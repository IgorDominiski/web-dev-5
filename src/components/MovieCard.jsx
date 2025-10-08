export default function MovieCard({ movie }) {
  return (
    <article className="group rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden transition hover:shadow-md">
      <div className="aspect-[3/2] bg-slate-100 overflow-hidden">
        {movie?.image ? (
          <img
            src={movie.image}
            alt={movie.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : movie?.movie_banner ? (
          <img
            src={movie.movie_banner}
            alt={movie.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="grid h-full w-full place-items-center text-slate-400 text-sm">
            {movie.release_date}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-1 group-hover:text-brand-600 transition-colors">
          {movie.title}
        </h3>
        <p className="text-xs text-slate-500 mb-2">Diretor: {movie.director}</p>
        <p className="text-sm line-clamp-3 text-slate-700">{movie.description}</p>
      </div>
    </article>
  )
}


