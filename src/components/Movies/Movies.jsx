import { useState, useEffect, useMemo } from 'react'
import { Box, CircularProgress, useMediaQuery, Typography, Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import { useGetMoviesQuery } from '../../services/TMDB'
import MovieList from '../MovieList/MovieList'
import Loader from '../Loader'
const Movies = () => {
  const [page, setPage] = useState(1)
  const { genreIdOrCategoryName, searchQuery } = useSelector(state => state.currentGenreCategory)
  const { data, error, isFetching } = useGetMoviesQuery(
    { genreIdOrCategoryName, page, searchQuery }

  )

  console.log('genreIdOrCategoryName', genreIdOrCategoryName)
  console.log('this is my data 1 ', data)
  if (isFetching) {
    return (
      <Loader />
    )
  }
  if (!data?.results) {
    console.log('s')
    return (
      <Box display='flex' alignItems='center' mt='20px' >
  <Typography variant='h4' >
    No movies
    <br />
    Please search for something else
  </Typography>
      </Box>
    )
  }
  if (error) return 'error has occured'
  return (
    <div>

        <MovieList movies={data.results} />
    </div>
  )
}

export default Movies
