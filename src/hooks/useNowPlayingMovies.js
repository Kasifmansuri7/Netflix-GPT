import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GET_API_OPTIONS, NOW_PLAYING_API } from '../utils/constants'
import { addNowPlayingMovies } from '../utils/store/movieSlice'

export default function useNowPlayingMovies() {
  const dispatch = useDispatch()

  const getNowPlayingMovies = async () => {
    try {
      const res = await axios.get(NOW_PLAYING_API, GET_API_OPTIONS)
      dispatch(addNowPlayingMovies(res.data.results))
    } catch (error) {
      console.error('Movie fetching error', error)
    }
  }

  useEffect(() => {
    getNowPlayingMovies()
  }, [])
}
