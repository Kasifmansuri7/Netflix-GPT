import axios from 'axios'
import { useEffect } from 'react'
import { GET_API_OPTIONS } from '../utils/constants'

export default function VideoBackground({ movieId }) {
  useEffect(() => {
    if (movieId) {
      getVideoDetails()
    }
  }, [])

  const getVideoDetails = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        GET_API_OPTIONS,
      )
      console.log('res: ', res)
    } catch (error) {
      console.error('Getting video details', error)
    }
  }
}
