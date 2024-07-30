import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'movie',
  initialState: null,
  reducers: {
    addMovie: (state, action) => {
      return action.payload;
    },
  },
});

export default userSlice.reducer;
export const { addMovie } = userSlice.actions;
