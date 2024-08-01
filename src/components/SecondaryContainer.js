import { useSelector } from 'react-redux'
import MovieList from './MovieList'

export default function SecondaryContainer() {
  const movies = useSelector((store) => store?.movies.nowPlayingMovies)
  return (
    <div className="h-full">
      <MovieList title={'Now Playing'} movies={movies} />
    </div>
  )
}
