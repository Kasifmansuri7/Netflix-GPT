import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GET_API_OPTIONS, NOW_PLAYING_API } from '../utils/constants';
import { addMovie } from '../utils/store/movieSlice';

const Browse = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    try {
      const res = await axios.get(NOW_PLAYING_API, GET_API_OPTIONS);
      dispatch(addMovie(res.data));
    } catch (error) {
      console.error('Movie fetching error', error);
    }
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return <h1>browse component</h1>;
};

export default Browse;
