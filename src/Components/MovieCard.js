import React from 'react';

function MovieCard({ movie }) {
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
      </div>
    </div>
  );
}

const styles = {
  placeholder: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#eee',
    borderRadius: '8px',
    margin: '20px auto',
    width: '80%',
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '20px',
    margin: '20px auto',
    width: '80%',
  },
  poster: {
    width: '150px',
    borderRadius: '8px',
    marginRight: '20px',
  },
  details: {
    flex: 1,
  },
};

export default MovieCard;
