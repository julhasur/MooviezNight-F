import React from 'react';

function FavoritesList({ favorites, onRemove }) {
  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <p>No favorite movies saved yet.</p>
      </div>
    );
  }

  return (
    <div className="favorites-container">
      <h2 className="favorites-title">Your Favorite Movies</h2>
      {favorites.map((movie) => (
        <div key={movie.imdbID} className="favorites-movie">
          <img src={movie.Poster} alt={movie.Title} className="favorites-poster" />
          <div className="favorites-info">
            <h3 className="favorites-movie-title">{movie.Title}</h3>
            <button
              onClick={() => onRemove(movie.imdbID)}
              className="favorites-remove-button"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FavoritesList;
