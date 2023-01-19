import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// API KEY : eafb9c33

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=eafb9c33';

const movie = {
	Title: 'Superman II',
	Year: '1980',
	imdbID: 'tt0081573',
	Type: 'movie',
	Poster:
		'https://m.media-amazon.com/images/M/MV5BODk2NjgzNTEtYzZhZC00ZTBkLTllMGQtMmMxMzU1NDRkM2RlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
};

const App = () => {
	const [movies, setMovies] = useState([]);

	const searchMovies = async title => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();
		setMovies(data.Search);
	};

	useEffect(() => {
		searchMovies('Superman');
	}, []);

	return (
		<div className='app'>
			<h1>MovieLand</h1>

			<div className='search'>
				<input placeholder='Search for movies' value='Superman' onChange={() => {}} />

				<img src={SearchIcon} alt='search' onClick={() => {}} />
			</div>
			{movies?.length > 0 ? (
				<div className='container'>
					{movies.map(movie => (
						<MovieCard movie={movie} />
					))}
				</div>
			) : (
				<div className='empty'>
					<h2>No movies found</h2>
				</div>
			)}
		</div>
	);
};

export default App;
