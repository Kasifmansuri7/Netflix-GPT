import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topratedMovies: null,
    upcomingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload
    },
    addTopratedMovies: (state, action) => {
      state.topratedMovies = action.payload
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload
    },
  },
})

export default movieSlice.reducer
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopratedMovies,
  addUpcomingMovies,
} = movieSlice.actions
