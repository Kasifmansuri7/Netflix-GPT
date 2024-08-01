import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'

import useTopratedrMovies from '../hooks/useTopratedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'

import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTopratedrMovies()
  useUpcomingMovies()
  return (
    <div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse
