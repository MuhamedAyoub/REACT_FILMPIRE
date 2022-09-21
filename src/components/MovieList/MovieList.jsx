import { Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import useStyles from './styles'
import Movie from '../Movie/Movie'
const MovieList = ({ movies }) => {
  const isMobile = useMediaQuery('(max-width:767px)')
  const styles = useStyles(isMobile)

  return (
     <Grid container sx={styles.moviesContainer} >
      {
        movies.map((movie, index) => (
          <Movie key={index} index={index} movie={movie} />
        ))
      }
    </Grid>
  )
}

export default MovieList

// ? the Grow components is a animation
