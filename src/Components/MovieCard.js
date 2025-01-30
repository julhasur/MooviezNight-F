function MovieCard({ movie, onSave }) {
    if (!movie) {
      return (
        <div className="movie-placeholder">
          <p>Search for a movie or get a random suggestion!</p>
        </div>
      );
    }
  
    return (
      <div className="movie-card">
        {movie.Poster !== 'N/A' && (
          <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
        )}
        <div className="movie-details">
          <h2 className="movie-title">{movie.Title}</h2>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <button onClick={() => onSave(movie)} className="save-button">
            Save to Favorites
          </button>
        </div>
      </div>
    );
  }
  
  export default MovieCard;
  