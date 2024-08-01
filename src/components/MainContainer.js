import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

export default function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  // early return
  if (!movies) return

  return (
    <div>
      <VideoBackground movieId={movies[3]?.id} />
      <VideoTitle movie={movies[3]} />
    </div>
  )
}
