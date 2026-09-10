import React from 'react';
import { useCart } from '../context/CartContext.jsx';

function ButtonAddItem({ produk }) {
  const { addToCart } = useCart();

  return (
    <button 
      className="btn btn-sm btn-outline-primary"
      onClick={() => produk && addToCart(produk)}
    >
      +
    </button>
  );
}

export default ButtonAddItem;