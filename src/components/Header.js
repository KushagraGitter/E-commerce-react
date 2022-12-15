import React from 'react';
import Cart from './Cart';
import SearchBox from './SearchBox';

export default function Header({ children }) {
  return (
    <div className="app-header">
      <h1 className="app-header-title">Mini Shopping</h1>
      {children}
    </div>
  );
}
