import React, { useState, useEffect } from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import Cart from './components/Cart';

export default function App() {
  const [url, setUrl] = useState('https://fakestoreapi.com/products');
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const { data } = useFetch({
    url,
  });

  useEffect(() => {
    setProducts(data);
    setDisplayProducts(data);
  }, [data]);

  const handleSearch = (searchText) => {
    let tempProducts = products.filter((product) => {
      return product.title.indexOf(searchText) > -1;
    });
    setDisplayProducts(tempProducts);
  };

  const handleAddToCart = (productId) => {
    let product = products.filter((product) => {
      return product.id === productId;
    });
    setCartProducts([...cartProducts, product]);
  };
  return (
    <>
      <Header>
        <SearchBox handleSearch={handleSearch} />
        <Cart cartProducts={cartProducts} />
      </Header>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {displayProducts && (
                  <ProductList
                    products={displayProducts}
                    handleAddToCart={handleAddToCart}
                  />
                )}
              </div>
            }
          />
          <Route
            path="/productDetail/:id"
            element={<ProductDetail products={displayProducts} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
