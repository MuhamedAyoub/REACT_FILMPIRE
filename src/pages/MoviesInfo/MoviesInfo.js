import React, { useState } from 'react';
import {
	Movie as MovieIcon,
	Theaters,
	Language,
	PlusOne,
	Favorite,
	FavoriteBorderOutlined,
	ArrowBack,
	Remove,
} from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGetMovieQuery } from '../../services/TMDB';
import {
	Box,
	Button,
	ButtonGroup,
	CircularProgress,
	Grid,
	Rating,
	Typography,
} from '@mui/material';
import genresIcons from '../../assets/genres/index';
import { useTheme } from '@emotion/react';
import { selectGenreOrCategory } from '../../slices/GenreCategorySlice';
import MovieReco from './MovieReco';
const MoviesInfo = () => {
	const theme = useTheme();
	console.log('Movie Information');
	const { id } = useParams();
	const { data, isFetching, error } = useGetMovieQuery(id);
	const dispatch = useDispatch();
	const [isMovieFavorite, setIsMovieFavorite] = useState(false);
	const [isMovieWatchListed, setIsMovieWatchListed] = useState(false);
	// *functions
	const addToFavorite = () => {};
	const addToWatchList = () => {};

	if (isFetching) {
		return (
			<Box display="flex" justifyContent="center" alignContent="center">
				<CircularProgress size="8rem" />
			</Box>
		);
	}
	if (error) {
		return (
			<Box display="flex" justifyContent="center" alignContent="center">
				<Link to="/">Something wrong -- Please go back!</Link>
			</Box>
		);
	}
	return (
		<Grid
			sx={{
				display: 'flex',
				justifyContent: 'space-around',
				m: '10px 0 !important',
				flexDirection: 'column',
				flexWrap: 'wrap',
				padding: '20px 30px',
			}}
			container>
			<Grid item>
				<img
					className="image-poster"
					src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
					alt={data?.name}
				/>
			</Grid>
			<Grid item direction="column" container lg={7}>
				<Typography variant="h3" align="center" gutterBottom>
					{data?.title}({data?.release_date.split('-')[0]})
				</Typography>
				<Typography variant="h5" align="center" gutterBottom>
					{data?.tagLine}
					{data.overview}
				</Typography>
			</Grid>
			<Grid item container display="flex" justifyContent="center" sx={{}}>
				<Box display="flex" align="center" justifyContent="center">
					<Rating value={data.vote_average / 2} />
					<Typography
						variant="subtitle1"
						gutterBottom
						style={{ margin: '10px 0' }}>
						{data?.vote_average} / 10
					</Typography>
				</Box>
			</Grid>
			<Grid item>
				<Typography variant="h6" align="center" gutterBottom>
					{data?.runtime}main{' '}
					{data.spoken_languages.length > 0
						? `/${data.spoken_languages[0].name}`
						: ''}
				</Typography>
			</Grid>
			<Grid item className="genres-container">
				<Grid>
					{data.genres?.map((genre) => (
						<Link
							key={genre.name}
							to="/"
							onClick={() => {
								dispatch(selectGenreOrCategory(genre.id));
							}}
							className="genres-links">
							<img
								style={{
									filter: theme.palette.mode === 'dark' && 'invert(1)',
									marginRight: '10px',
								}}
								src={genresIcons[genre?.name.toLowerCase()]}
								className="genre-image"
								height={30}
							/>
							<Typography color="textPrimary" variant="">
								{genre?.name}
							</Typography>
						</Link>
					))}
				</Grid>
				<Typography
					variant="h5"
					gutterBottom
					style={{
						marginBottom: '20px',
					}}>
					Overview
				</Typography>
				<Typography>{data?.overview}</Typography>
				<Typography
					variant="h5"
					gutterBottom
					style={{
						marginBottom: '20px',
					}}>
					Top Cast
				</Typography>
				<Grid item container spacing={2}>
					{data &&
						data.credits.cast.map(
							(char, index) =>
								char.profile_path && (
									<Grid
										item
										xs={4}
										md={2}
										key={index}
										component={Link}
										to={`/actors/${char.id}`}
										style={{
											textDecoration: 'none',
										}}>
										<img
											src={`https://image.tmdb.org/t/p/w500/${char.profile_path}`}
											className="cast-image"
										/>
										<Typography color="textPrimary">{char.name}</Typography>
										<Typography>{char.character.split('/')[0]}</Typography>
									</Grid>
								)
						)}
				</Grid>
				<Grid
					style={{
						marginTop: '2rem',
					}}>
					<div>
						<Grid
							item
							xs={12}
							sm={6}
							sx={{
								display: 'flex',
								jusrifyContent: 'space-between',
								width: '100%',
								flexDirection: { sm: 'column' },
							}}>
							<ButtonGroup size="small" variant="outlined">
								<Button
									className="button-container"
									target="_blank"
									rel="noopener noreferror"
									href={data.homepage}
									endIcon={<Language />}>
									Web site
								</Button>
								<Button
									target="_blank"
									rel="noopener noreferror"
									href={`
								https://www.imdb.com/title/${data?.imdb_id}`}
									endIcon={<MovieIcon />}>
									IMDB
								</Button>
								<Button
									className="button-container"
									onClick={() => {}}
									href="#"
									endIcon={<Theaters />}></Button>
							</ButtonGroup>
						</Grid>
						<Grid item xs={12} sm={6} sx={{}}>
							<ButtonGroup size="small" variant="outlined">
								<Button
									className="button-container"
									onClick={addToFavorite}
									endIcon={
										isMovieFavorite ? <FavoriteBorderOutlined /> : <Favorite />
									}>
									{isMovieFavorite ? 'Unfavorite' : 'Favorite'}
								</Button>
								<Button
									className="button-container"
									onClick={addToWatchList}
									endIcon={isMovieWatchListed ? <Remove /> : <PlusOne />}>
									{isMovieWatchListed
										? 'Remove from watch listed'
										: 'Add to watch listed'}
								</Button>
								<Button
									className="button-container"
									sx={{
										borderColor: 'primary.main',
										textDecoration: 'none',
									}}
									endIcon={<ArrowBack />}>
									<Typography
										component={Link}
										to="/"
										color="inherit"
										variant="subtitle2">
										Back
									</Typography>
								</Button>
							</ButtonGroup>
						</Grid>
					</div>
				</Grid>
			</Grid>
			<MovieReco movieId={id} />
		</Grid>
	);
};

export default MoviesInfo;
