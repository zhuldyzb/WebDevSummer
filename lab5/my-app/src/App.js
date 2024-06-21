import React, { useState } from 'react';
import CategoryList from './components/CategoryList/CategoryList';
import ProductList from './components/ProductList/ProductList';
import categoriesData from './categories';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <h1>Product Categories</h1>
      <CategoryList categories={categoriesData} onSelectCategory={handleCategorySelect} />
      
      {selectedCategory && <ProductList products={selectedCategory.products} />}
    </div>
  );
};

export default App;
