import React, { useState } from 'react';

export default function SearchBox() {
  const [searchText, setSearchText] = useState('');
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
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
