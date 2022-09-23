
import { configureStore } from '@reduxjs/toolkit'
import tmdbApi from '../services/TMDB'
import GenreCategory from '../slices/GenreCategorySlice'

const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreCategory: GenreCategory

  }
})

export default store
