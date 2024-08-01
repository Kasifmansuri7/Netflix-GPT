import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GET_API_OPTIONS, POPULAR_API } from '../utils/constants'
import { addPopularMovies } from '../utils/store/movieSlice'

export default function usePopularMovies() {
  const dispatch = useDispatch()

  const getPopularMovies = async () => {
    try {
      const res = await axios.get(POPULAR_API, GET_API_OPTIONS)
      dispatch(addPopularMovies(res.data.results))
    } catch (error) {
      console.error('Movie fetching error', error)
    }
  }

  useEffect(() => {
    getPopularMovies()
  }, [])
}
