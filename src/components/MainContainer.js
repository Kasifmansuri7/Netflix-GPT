import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'

export default function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  console.log('movies: ', movies)
  return (
    <>
      <h1>Main Container</h1>
      <VideoBackground />
    </>
  )
}
