import { useState, useEffect } from 'react'
import { Box, CircularProgress, useMediaQuery, Typography, Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import { useGetMoviesQuery } from '../../services/TMDB'
import MovieList from '../MovieList/MovieList'
import Loader from '../Loader'
const Movies = () => {
  const { data, error, isFetching } = useGetMoviesQuery()
  console.log(data)
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
