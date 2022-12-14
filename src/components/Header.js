import React from 'react';
import Cart from './Cart';
import SearchBox from './SearchBox';

export default function Header({ children }) {
  return <div className="app-header">{children}</div>;
}
