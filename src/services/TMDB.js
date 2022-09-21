import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
const page = 1
const tmdbApiKey = 'fca42487f142f89a8b9b62180d24c00f'
export const tmbApi = createApi({
  reducerPath: 'tmbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3'

  }),

  endpoints: (builder) => ({
    //* Get Movies by [Type]
    getMovies: builder.query({
      query: () => `movie/popular?page=${page}&api_key=${tmdbApiKey}`

    }),
    //* Get Genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`
    })
  })

})

export const {
  // this hook make for us a call to the getMovies function
  useGetMoviesQuery,
  // this hook make for us a call to the getMovies function
  useGetGenresQuery
} = tmbApi
export default tmbApi

//  =<<api_key>>&language=en-US
