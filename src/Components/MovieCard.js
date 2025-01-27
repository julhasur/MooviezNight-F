function MovieCard({ movie, onSave }) {
    if (!movie) {
      return (
        <div style={styles.placeholder}>
          <p>Search for a movie or get a random suggestion!</p>
        </div>
      );
    }
  
    return (
      <div style={styles.card}>
        {movie.Poster !== 'N/A' && (
          <img src={movie.Poster} alt={movie.Title} style={styles.poster} />
        )}
        <div style={styles.details}>
          <h2>{movie.Title}</h2>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <button onClick={() => onSave(movie)} style={styles.saveButton}>
            Save to Favorites
          </button>
        </div>
      </div>
    );
  }
  
  const styles = {
    // Add this to styles object
    saveButton: {
      marginTop: '10px',
      padding: '10px 15px',
      backgroundColor: '#333',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  
    export default MovieCard;