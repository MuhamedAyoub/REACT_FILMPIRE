import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  genreIdOrCategoryName: null,
  searchQuery: '',
  page: 1
}
const genreCategorySlice = createSlice({
  name: 'genreOrCategory',
  initialState,
  reducers: {
    selectGenreOrCategory: (state, action) => {
      state.genreIdOrCategoryName = action.payload
      state.searchQuery = ''
    },
    searchMovie: (state, action) => {
      state.searchQuery = action.payload
    }
  }

})

export const {
  selectGenreOrCategory,
  searchMovie
} = genreCategorySlice.actions

export default genreCategorySlice.reducer

