import React from 'react';

function FavoritesList({ favorites, onRemove }) {
  if (favorites.length === 0) {
    return (
      <div style={styles.empty}>
        <p>No favorite movies saved yet.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>Your Favorite Movies</h2>
      {favorites.map((movie) => (
        <div key={movie.imdbID} style={styles.movie}>
          <img src={movie.Poster} alt={movie.Title} style={styles.poster} />
          <div>
            <h3>{movie.Title}</h3>
            <button onClick={() => onRemove(movie.imdbID)} style={styles.button}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  empty: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f8f8f8',
    borderRadius: '8px',
    margin: '20px auto',
    width: '80%',
  },
  container: {
    textAlign: 'center',
    margin: '20px auto',
    width: '80%',
  },
  movie: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '10px',
    margin: '10px 0',
  },
  poster: {
    width: '50px',
    borderRadius: '8px',
    marginRight: '10px',
  },
  button: {
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
  },
};

export default FavoritesList;
