import React, { useState } from 'react';
// import './SearchBar.css'; // Import the CSS file for styling

function DummySearchBar() {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here using the 'searchText' state
    console.log('Search Text:', searchText);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default DummySearchBar;

