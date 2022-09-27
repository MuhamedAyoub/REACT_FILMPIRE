import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
const tmdbApiKey = 'fca42487f142f89a8b9b62180d24c00f';
export const tmbApi = createApi({
	reducerPath: 'tmbApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.themoviedb.org/3',
	}),

	endpoints: (builder) => ({
		//* Get Movies by [Type]
		getMovies: builder.query({
			query: ({ genreIdOrCategoryName, page, searchQuery }) => {
				//* Search by Query
				if (searchQuery) {
					return `search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
				}
				//* get movies by Categories
				// popular , top_rated , upcoming , now_playing -> string
				if (
					genreIdOrCategoryName &&
					typeof genreIdOrCategoryName === 'string'
				) {
					return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
				}
				//* get movies by genres
				else if (
					genreIdOrCategoryName &&
					typeof genreIdOrCategoryName === 'number'
				) {
					return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
				}
				return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
			},
		}),
		//* Get Genres
		getGenres: builder.query({
			query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
		}),
		//* @Get Movie Information
		getMovie: builder.query({
			query: (id) =>
				`/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
		}),

		//* Get User specific List
		//* @param {string} list
		getRecommendations: builder.query({
			query: ({ movieId, list }) =>
				`/movie/${movieId}/${list}?api_key=${tmdbApiKey}`,
		}),
	}),
});

export const {
	//* this hook make for us a call to the getMovies function
	useGetMoviesQuery,
	//* this hook make for us to get the movie details
	useGetMovieQuery,
	// *this hook make for us a call to the getMovies function
	useGetGenresQuery,
	useGetRecommendations,
} = tmbApi;
export default tmbApi;

//  =<<api_key>>&language=en-US
