import React, { useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';

const ProductList = ({ products }) => {
  const [productList, setProductList] = useState(products);

  const handleRemove = (productId) => {
    const updatedProducts = productList.filter(product => product.id !== productId);
    setProductList(updatedProducts);
  };

  return (
    <div className="product-list">
      {productList.map(product => (
        <ProductItem key={product.id} product={product} onRemove={handleRemove} />
      ))}
    </div>
  );
};

export default ProductList;
