import React from 'react';

const ProductItem = ({ product }) => (
  <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
    <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
    <h3><a href={product.link}>{product.name}</a></h3>
    <p>{product.description}</p>
    <p>Rating: {product.rating}</p>
    <button onClick={() => window.location.href = `https://wa.me/?text=${product.link}`}>Share</button>
  </div>
);

export default ProductItem;
