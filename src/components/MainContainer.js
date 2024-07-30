import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

export default function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  // early return
  if (!movies) return

  return (
    <>
      <VideoTitle movie={movies[0]} />
      <VideoBackground movieId={movies[0]?.id} />
    </>
  )
}
