import React from 'react';
import { useSelector } from 'react-redux';
import { ExitToApp } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';

const Profile = () => {
	const favoriteMovies = {};
	const { user } = useSelector((state) => state.auth);
	const logout = () => {
		localStorage.clear();
		location.href = '/';
	};
	return (
		<Box>
			<Box display="flex" justifyContent="space-between">
				<Typography variant="h4" gutterBottom>
					<Button color="inherit" onClick={logout}>
						Logout &nbsp;
						<ExitToApp />
					</Button>
				</Typography>
			</Box>
			{!favoriteMovies.length ? (
				<Typography variant="h5">
					Add favorites or watchlist some movies to see them here
				</Typography>
			) : (
				<Box>FAVORITE MOVIES</Box>
			)}
		</Box>
	);
};

export default Profile;
