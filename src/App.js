import React, { useState,useEffect } from 'react';
import Header from "./Components/header/Header";
import SearchBar from './Components/SearchBar';
import MovieCard from './Components/MovieCard';
import FavoritesList from './Components/FavoritesList';

function App() {
  const [movie, setMovie] = useState(null);

  const [favorites, setFavorites] = useState(() => {
    // Load favorites from localStorage
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    // Save favorites to localStorage when updated
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

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

  const handleSave = (movie) => {
    if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    } else {
      alert('Movie is already in favorites!');
    }
  };

  const handleRemove = (id) => {
    setFavorites(favorites.filter((fav) => fav.imdbID !== id));
  };

  return (
    <div>
     <Header/>
     <SearchBar onSearch={handleSearch} onRandom={handleRandom} />
      <MovieCard movie={movie} onSave={handleSave}  />
      <FavoritesList favorites={favorites} onRemove={handleRemove} />
    </div>
  );
}

export default App;
