import { useSelector } from 'react-redux'
import MovieList from './MovieList'

export default function SecondaryContainer() {
  const movies = useSelector((store) => store?.movies)
  return (
    <div className="bg-black ">
      <div className="h-full -m-5 px-10">
        <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
        <MovieList title={'Top Rated'} movies={movies.topratedMovies} />
        <MovieList title={'Popular'} movies={movies.popularMovies} />
        <MovieList title={'Upcoming'} movies={movies.upcomingMovies} />
      </div>
    </div>
  )
}
