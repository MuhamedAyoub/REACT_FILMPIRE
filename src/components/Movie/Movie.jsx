import React from 'react'
import {
  Typography,
  Grid,
  Grow,
  Tooltip,
  Rating,
  useMediaQuery
} from '@mui/material'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import { useTheme } from '@emotion/react'
const Movie = ({ movie, index }) => {
  const theme = useTheme()
  const isXL = useMediaQuery('min-width:1280px')
  const styles = useStyles(theme, isXL)
  console.log(styles)
  return (
		<Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={styles.movie}>
			<Grow in key={1} timeout={(index + 1) * 250}>
				<Link className='movie-link' style={styles.links} to={`/movie/${movie.id}`}>
					<img
						className="movie-image"
						style={styles.image}
						alt={movie.title}
						src={
							movie.poster_path
							  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
							  : 'https://www.fillmurray.com/200/300'
						}
					/>
					<Typography variant="h5" sx={styles.title}>
						{movie?.title}
					</Typography>
					<Tooltip disableTouchListener title={`${movie.vote_average}`} >
						<div>
							<Rating readOnly value={movie.vote_average / 2} precision={0.1} />
						</div>
					</Tooltip>
				</Link>
			</Grow>
		</Grid>
  )
}

export default Movie
