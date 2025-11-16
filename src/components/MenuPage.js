import React, { useState } from 'react';
import SEO from './SEO';
import MenuItem from './MenuItem';
import MenuFilter from './MenuFilter';
import greekSalad from '../assets/greek salad.jpg';
import bruschetta from '../assets/bruchetta.jpg';
import lemonDessert from '../assets/lemon dessert.jpg';
import hummusPlatter from '../assets/Hummus-Platter.jpg';
import stuffedGrapeLeaves from '../assets/stuffed-grape-leaves.jpg';
import grilledSalmon from '../assets/grilled-salmon.jpg';
import lambKebab from '../assets/lamb-kebab.jpg';
import vegetarianMoussaka from '../assets/vegetarian-moussaka.jpg';
import chickenSouvlaki from '../assets/chicken-souvlaki.jpg';
import mediterraneanPasta from '../assets/mediterranean-pasta.jpg';
import baklava from '../assets/baklava.jpg';
import greekYogurt from '../assets/greek-yogurt.jpg';
import lemonade from '../assets/lemonade.jpg';
import greekCoffee from '../assets/greek-coffee.jpg';

function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDietary, setSelectedDietary] = useState('all');

  const menuItems = [
    // Appetizers
    {
      id: 1,
      name: 'Greek Salad',
      category: 'appetizers',
      price: 12.99,
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      image: greekSalad,
      dietary: ['vegetarian', 'gluten-free'],
      popular: true
    },
    {
      id: 2,
      name: 'Bruschetta',
      category: 'appetizers',
      price: 5.99,
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      image: bruschetta,
      dietary: ['vegetarian', 'vegan'],
      popular: true
    },
    {
      id: 3,
      name: 'Hummus Platter',
      category: 'appetizers',
      price: 8.99,
      description: 'Creamy homemade hummus served with warm pita bread, olives, and fresh vegetables.',
      image: hummusPlatter,
      dietary: ['vegetarian', 'vegan', 'gluten-free']
    },
    {
      id: 4,
      name: 'Stuffed Grape Leaves',
      category: 'appetizers',
      price: 9.99,
      description: 'Tender grape leaves stuffed with rice, herbs, and spices, served with lemon.',
      image: stuffedGrapeLeaves, 
      dietary: ['vegetarian', 'vegan', 'gluten-free']
    },

    // Main Courses
    {
      id: 5,
      name: 'Grilled Mediterranean Salmon',
      category: 'mains',
      price: 24.99,
      description: 'Fresh Atlantic salmon grilled to perfection, served with roasted vegetables and lemon butter sauce.',
      image: grilledSalmon, 
      dietary: ['gluten-free'],
      popular: true
    },
    {
      id: 6,
      name: 'Lamb Kebabs',
      category: 'mains',
      price: 22.99,
      description: 'Tender lamb marinated in Mediterranean spices, grilled with vegetables, served with rice pilaf.',
      image: lambKebab, 
      dietary: ['gluten-free']
    },
    {
      id: 7,
      name: 'Vegetarian Moussaka',
      category: 'mains',
      price: 18.99,
      description: 'Layers of eggplant, potatoes, and lentils topped with creamy béchamel sauce.',
      image: vegetarianMoussaka,
      dietary: ['vegetarian']
    },
    {
      id: 8,
      name: 'Chicken Souvlaki',
      category: 'mains',
      price: 19.99,
      description: 'Marinated chicken skewers served with tzatziki sauce, pita bread, and Greek salad.',
      image: chickenSouvlaki,
      dietary: []
    },
    {
      id: 9,
      name: 'Mediterranean Pasta',
      category: 'mains',
      price: 16.99,
      description: 'Fresh pasta with sun-dried tomatoes, olives, feta cheese, and basil in olive oil.',
      image: mediterraneanPasta,
      dietary: ['vegetarian']
    },

    // Desserts
    {
      id: 10,
      name: 'Lemon Dessert',
      category: 'desserts',
      price: 5.00,
      description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      image: lemonDessert,
      dietary: ['vegetarian'],
      popular: true
    },
    {
      id: 11,
      name: 'Baklava',
      category: 'desserts',
      price: 6.99,
      description: 'Layers of phyllo pastry filled with chopped nuts and sweetened with honey syrup.',
      image: baklava,
      dietary: ['vegetarian']
    },
    {
      id: 12,
      name: 'Greek Yogurt with Honey',
      category: 'desserts',
      price: 4.99,
      description: 'Thick Greek yogurt drizzled with honey and topped with walnuts.',
      image: greekYogurt,
      dietary: ['vegetarian', 'gluten-free']
    },

    // Drinks
    {
      id: 13,
      name: 'Fresh Lemonade',
      category: 'drinks',
      price: 3.99,
      description: 'Freshly squeezed lemon juice with a touch of mint.',
      image: lemonade,
      dietary: ['vegetarian', 'vegan', 'gluten-free']
    },
    {
      id: 14,
      name: 'Greek Coffee',
      category: 'drinks',
      price: 3.50,
      description: 'Traditional strong Greek coffee served in a small cup.',
      image: greekCoffee,
      dietary: ['vegetarian', 'vegan', 'gluten-free']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️' },
    { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
    { id: 'mains', name: 'Main Courses', icon: '🍖' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'drinks', name: 'Drinks', icon: '🍹' }
  ];

  const dietaryOptions = [
    { id: 'all', name: 'All Items' },
    { id: 'vegetarian', name: 'Vegetarian' },
    { id: 'vegan', name: 'Vegan' },
    { id: 'gluten-free', name: 'Gluten Free' }
  ];

  // Filter menu items
  const filteredItems = menuItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const dietaryMatch = selectedDietary === 'all' || item.dietary.includes(selectedDietary);
    return categoryMatch && dietaryMatch;
  });

  const groupedItems = categories.reduce((acc, category) => {
    if (category.id === 'all') return acc;
    
    const items = filteredItems.filter(item => item.category === category.id);
    if (items.length > 0) {
      acc[category.id] = {
        name: category.name,
        icon: category.icon,
        items: items
      };
    }
    return acc;
  }, {});

  return (
    <>
      <SEO 
        title="Menu - Little Lemon Restaurant"
        description="Explore our authentic Mediterranean menu featuring fresh appetizers, grilled mains, homemade desserts, and refreshing drinks. Vegetarian, vegan, and gluten-free options available."
        image="/assets/greek salad.jpg"
      />
      
      <div className="menu-page">
        <section className="menu-header">
          <div className="menu-header-content">
            <h1>Our Menu</h1>
            <p className="menu-subtitle">
              Authentic Mediterranean cuisine made fresh daily with locally-sourced ingredients
            </p>
          </div>
        </section>

        <section className="menu-filters">
          <div className="menu-filters-inner">
            <MenuFilter
              categories={categories}
              dietaryOptions={dietaryOptions}
              selectedCategory={selectedCategory}
              selectedDietary={selectedDietary}
              onCategoryChange={setSelectedCategory}
              onDietaryChange={setSelectedDietary}
            />
          </div>
        </section>

        <section className="menu-content">
          <div className="menu-inner">
            {selectedCategory === 'all' ? (
              Object.entries(groupedItems).map(([categoryId, categoryData]) => (
                <div key={categoryId} className="menu-category-section">
                  <h2 className="menu-category-title">
                    <span className="category-icon">{categoryData.icon}</span>
                    {categoryData.name}
                  </h2>
                  <div className="menu-items-grid">
                    {categoryData.items.map(item => (
                      <MenuItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="menu-items-grid">
                {filteredItems.map(item => (
                  <MenuItem key={item.id} item={item} />
                ))}
              </div>
            )}

            {filteredItems.length === 0 && (
              <div className="no-results">
                <p>No menu items match your filters.</p>
                <button 
                  className="btn btn-secondary"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedDietary('all');
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>
        
        <section className="menu-cta">
          <div className="menu-cta-content">
            <h2>Ready to Dine?</h2>
            <p>Reserve your table or order online for pickup</p>
            <div className="cta-buttons">
              <a href="/booking" className="btn btn-primary">
                Reserve a Table
              </a>
              <a href="/order-online" className="btn btn-secondary">
                Order Online
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default MenuPage;