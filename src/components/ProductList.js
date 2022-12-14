import React from 'react';
import useFetch from '../hooks/useFetch';

export default function ProductList({ products, handleAddToCart }) {
  return (
    <ul className="product-list">
      {' '}
      {products.map((product) => {
        return (
          <li className="product-item" key={product.id}>
            <div className="product-item-card">
              <h2>{product.title}</h2>
              <img src={product.image} height={300} width={300}></img>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <button
                className="product-item-addtocart"
                onClick={() => handleAddToCart(product.id)}
              >
                Add To Cart
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
