// src/components/SearchBar/SearchBar.js
import React from 'react';
import './SearchBar.css';

const SearchBar = ({ placeholder, onChange }) => {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder={placeholder || "Search..."} 
        onChange={onChange} 
      />
    </div>
  );
};

export default SearchBar;
