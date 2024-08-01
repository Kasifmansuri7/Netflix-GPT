import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GET_API_OPTIONS } from '../utils/constants'
import { addTrailerVideo } from '../utils/store/movieSlice'

export default function useTrailerVideo(movieId) {
  const dispatch = useDispatch()
  const getVideoDetails = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        GET_API_OPTIONS,
      )
      let videoData = res?.data?.results.find((vd) => vd.type === 'Trailer')
      if (!videoData) {
        videoData = res?.data?.results.find((vd) => vd.type === 'Teaser')
        if (videoData) {
          videoData = res?.data?.results[0]
        }
      }
      dispatch(addTrailerVideo(videoData))
    } catch (error) {
      console.error('Getting video details', error)
    }
  }

  useEffect(() => {
    if (movieId) {
      getVideoDetails()
    }
  }, [])
}
