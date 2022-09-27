import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useGetRecommendations } from '../../services/TMDB';
import MovieList from '../../components/MovieList/MovieList';
const MovieReco = ({ movieId }) => {
	const { data: recommendations, isFetching } = useGetRecommendations({
		list: '/recommendations',
		movieId,
	});

	console.log(recommendations);
	return (
		<Box marginTop="5rem" width="100%">
			<Typography variant="h3" gutterBottom>
				You might also like
			</Typography>
			{recommendations ? (
				<MovieList movies={recommendations} />
			) : (
				<Box>Sorry, nothing was found.</Box>
			)}
		</Box>
	);
};

export default MovieReco;
