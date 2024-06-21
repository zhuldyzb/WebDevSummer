import React from 'react';

const CategoryList = ({ categories, onSelectCategory }) => {
  return (
    <div className="category-list">
      {categories.map(category => (
        <button key={category.id} onClick={() => onSelectCategory(category)}>
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
