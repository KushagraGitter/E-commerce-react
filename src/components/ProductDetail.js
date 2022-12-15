import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((product) => {
    return product.id === parseInt(id);
  });
  return (
    <div>
      {product && (
        <>
          <h1>{product.title}</h1>
          <p>{product.description} </p>
          <img src={product.image}></img>
        </>
      )}
    </div>
  );
}
