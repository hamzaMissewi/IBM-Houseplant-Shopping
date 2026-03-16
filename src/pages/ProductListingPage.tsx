import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { addToCart } from '../store/cartSlice';
import { plants, categories } from '../data/plants';
import './ProductListingPage.css';

const ProductListingPage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPlants = selectedCategory === 'All'
    ? plants
    : plants.filter(plant => plant.category === selectedCategory);

  const isPlantInCart = (plantId: number) => {
    return cartItems.some(item => item.id === plantId);
  };

  const handleAddToCart = (plant: typeof plants[0]) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-listing">
      <h1>Our Houseplants</h1>

      <div className="category-filter">
        <button
          className={`category-btn ${selectedCategory === 'All' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('All')}
        >
          All Plants
        </button>
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="plants-grid">
        {filteredPlants.map(plant => (
          <div key={plant.id} className="plant-card">
            <img src={plant.thumbnail} alt={plant.name} className="plant-thumbnail" />
            <h3 className="plant-name">{plant.name}</h3>
            <p className="plant-price">${plant.price.toFixed(2)}</p>
            <p className="plant-category">{plant.category}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(plant)}
              disabled={isPlantInCart(plant.id)}
            >
              {isPlantInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
