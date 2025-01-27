import React, { useState } from 'react';
import Header from "./Components/header/Header";
import SearchBar from './Components/SearchBar';
import MovieCard from './Components/MovieCard';

function App() {
  const [movie, setMovie] = useState(null);
  const handleSearch = async (query) => {
    const response = await fetch(`https://www.omdbapi.com/?t=${query}&apikey=E61b5b49`);
    const data = await response.json();
    if (data.Response === 'True') {
      setMovie(data);
    } else {
      alert('Movie not found!');
    }
 
  };

  const handleRandom = async () => {
    const randomTitles = ['Inception', 'Titanic', 'Avatar', 'The Matrix', 'Interstellar'];
    const randomTitle = randomTitles[Math.floor(Math.random() * randomTitles.length)];
    handleSearch(randomTitle);
  };

  return (
    <div>
     <Header/>
     <SearchBar onSearch={handleSearch} onRandom={handleRandom} />
      <MovieCard movie={movie} />
    </div>
  );
}

export default App;
