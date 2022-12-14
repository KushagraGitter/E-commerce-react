import React from 'react';

export default function Cart({ cartProducts }) {
  const productCount = () => {
    return cartProducts.length;
  };
  return <div className="cart">{productCount()}</div>;
}
