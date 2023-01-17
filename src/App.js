import React from 'react';
import { useEffect } from 'react';
import './App.css';
// API KEY : eafb9c33

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=eafb9c33';

const App = () => {
	const searchMovies = async title => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();
		console.log(data.Search);
	};

	useEffect(() => {
		searchMovies('Superman');
	}, []);

	return <h1>App</h1>;
};

export default App;
