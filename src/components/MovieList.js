import MovieCard from './MovieCard'

export default function MovieList({ title, movies }) {
  return (
    <div className="px-6 py-2">
      <h1 className="text-white text-xl underline py-2">{title}</h1>
      <div className="flex gap-2">
        {movies?.length > 0 &&
          movies.slice(0, 10).map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />
          })}
      </div>
    </div>
  )
}
