import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GET_API_OPTIONS, UPCOMING_API } from '../utils/constants'
import { addUpcomingMovies } from '../utils/store/movieSlice'

export default function useUpcomingMovies() {
  const dispatch = useDispatch()

  const getUpcomingMovies = async () => {
    try {
      const res = await axios.get(UPCOMING_API, GET_API_OPTIONS)
      dispatch(addUpcomingMovies(res.data.results))
    } catch (error) {
      console.error('Movie fetching error', error)
    }
  }

  useEffect(() => {
    getUpcomingMovies()
  }, [])
}
