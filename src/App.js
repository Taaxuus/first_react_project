import React from 'react';
import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
// API KEY : eafb9c33

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=eafb9c33';

const movie1 = {
	Title: 'Superman II',
	Year: '1980',
	imdbID: 'tt0081573',
	Type: 'movie',
	Poster:
		'https://m.media-amazon.com/images/M/MV5BODk2NjgzNTEtYzZhZC00ZTBkLTllMGQtMmMxMzU1NDRkM2RlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
};

const App = () => {
	const searchMovies = async title => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();
		console.log(data.Search);
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

			<div className='container'>
				<div className='movie'>
					<div>
						<p>{movie1.Year}</p>
					</div>

					<div>
						<img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https//via.placeholder.com/400'} alt={movie1.Title} />
					</div>

					<div>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
