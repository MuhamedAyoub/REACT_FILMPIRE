
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import tmdbApi from '../services/TMDB'
// const rootReducer = combineReducers({
//   tmdbApi
// })

const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer
  }
})

export default store
