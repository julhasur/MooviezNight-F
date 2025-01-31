import React, { useEffect, useState } from "react";
import axios from "axios";

const TrendingMovies = ({ onSave }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/week",
          {
            params: { api_key: "YOUR_TMDB_API_KEY" },
          }
        );
        setMovies(response.data.results.slice(0, 10)); // Show only top 10 movies
      } catch (error) {
        console.error("Error fetching trending movies", error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className="trending-container">
      <h2 className="trending-title">Trending Movies</h2>
      <div className="trending-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <p className="movie-title">{movie.title}</p>
            <button className="save-button" onClick={() => onSave(movie)}>
              Save to Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;
