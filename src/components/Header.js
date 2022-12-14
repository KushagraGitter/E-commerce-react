import React from 'react';
import Cart from './Cart';
import SearchBox from './SearchBox';

export default function Header() {
  return (
    <div className="app-header">
      <SearchBox />
      <Cart />
    </div>
  );
}
