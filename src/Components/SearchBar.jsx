import React, { useState } from 'react';

function SearchBar({ onSearch, onRandom }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
      setQuery(''); // Clear the input field after search
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>
        Search
      </button>
      <button onClick={onRandom} style={{ ...styles.button, backgroundColor: '#333', color: 'white' }}>
        Random Movie
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    margin: '20px 0',
  },
  input: {
    padding: '10px',
    width: '250px',
    marginRight: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 15px',
    margin: '0 5px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default SearchBar;
