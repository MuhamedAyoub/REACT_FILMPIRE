
import { configureStore } from '@reduxjs/toolkit'
import tmdbApi from '../services/TMDB'
import GenreCategory from '../slices/GenreCategorySlice'
import userReducer from '../slices/authSlice'
const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreCategory: GenreCategory,
    auth: userReducer

  }
})

export default store
