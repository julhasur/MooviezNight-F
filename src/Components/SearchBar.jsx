import React, { useState } from 'react';


function SearchBar({ onSearch, onRandom }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
      setQuery(''); //this is it Clear the input field after search
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
      <button onClick={onRandom} className="random-button">
        Random Movie
      </button>
    </div>
  );
}

export default SearchBar;
