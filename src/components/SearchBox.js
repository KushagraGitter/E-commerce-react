import React, { useState } from 'react';

export default function SearchBox({ handleSearch }) {
  const [searchText, setSearchText] = useState('');
  const handleChange = (e) => {
    setSearchText(e.target.value);
    handleSearch(e.target.value);
  };
  return (
    <input
      className="search-box"
      placeHolder="enter you search"
      value={searchText}
      onChange={handleChange}
    ></input>
  );
}
