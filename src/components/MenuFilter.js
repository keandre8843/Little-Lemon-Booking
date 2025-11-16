import React from 'react';

function MenuFilter({ 
  categories, 
  dietaryOptions, 
  selectedCategory, 
  selectedDietary, 
  onCategoryChange, 
  onDietaryChange 
}) {
  return (
    <div className="menu-filter">
      {/* Category Filter */}
      <div className="filter-section">
        <h3 className="filter-title">Categories</h3>
        <div className="filter-buttons category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => onCategoryChange(category.id)}
              aria-pressed={selectedCategory === category.id}
            >
              <span className="filter-icon">{category.icon}</span>
              <span className="filter-name">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Dietary Filter */}
      <div className="filter-section">
        <h3 className="filter-title">Dietary Preferences</h3>
        <div className="filter-buttons dietary-filter">
          {dietaryOptions.map(option => (
            <button
              key={option.id}
              className={`filter-btn ${selectedDietary === option.id ? 'active' : ''}`}
              onClick={() => onDietaryChange(option.id)}
              aria-pressed={selectedDietary === option.id}
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuFilter;