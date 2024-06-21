import React, { useState } from 'react';

const ProductItem = ({ product, onRemove }) => {
  const [likes, setLikes] = useState(product.likes);

  const handleLike = () => {
    setLikes(likes + 1);
  };


  const handleShare = () => {
    const message = `Check out this product: ${product.name} - ${product.link}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' , padding: '20px'}} />
      <h3><a href={product.link} target="_blank" rel="noopener noreferrer">{product.name}</a></h3>
      <p>{product.description}</p>
      <p>Rating: {product.rating}</p>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
      <button onClick={() => onRemove(product.id)}>Remove</button>
      <button onClick={handleShare}>Share</button>
    </div>
  );
};

export default ProductItem;
