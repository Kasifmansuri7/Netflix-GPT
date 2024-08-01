import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GET_API_OPTIONS, TOPRATED_API } from '../utils/constants'
import { addTopratedMovies } from '../utils/store/movieSlice'

export default function useTopratedrMovies() {
  const dispatch = useDispatch()

  const getTopratedMovies = async () => {
    try {
      const res = await axios.get(TOPRATED_API, GET_API_OPTIONS)
      dispatch(addTopratedMovies(res.data.results))
    } catch (error) {
      console.error('Movie fetching error', error)
    }
  }

  useEffect(() => {
    getTopratedMovies()
  }, [])
}
