import React from 'react';
import './style.css';
import useFetch from './hooks/useFetch';
import ProductList from './components/ProductList';
import Header from './components/Header';

const url = 'https://fakestoreapi.com/products';

export default function App() {
  const { data } = useFetch({
    url,
  });
  return (
    <>
      <Header></Header>
      <div>{data && <ProductList products={data} />}</div>
    </>
  );
}
