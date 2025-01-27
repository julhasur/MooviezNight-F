import React from 'react';
import Header from './Components/header/Header.jsx';
import SearchBar from './Components/SearchBar.jsx';

function App() {
  const handleSearch = (query) => {
    console.log('Searching for:', query);
 
  };

  const handleRandom = () => {
    console.log('Fetching a random movie...');
  
  };

  return (
    <div>
     <Header/>
     <SearchBar onSearch={handleSearch} onRandom={handleRandom} />
    </div>
  );
}

export default App;
