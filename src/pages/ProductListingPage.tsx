import React, { useState, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { addToCart } from '../store/cartSlice';
import { plantsArray } from '../data/plants';
import PlantCard from '../components/PlantCard';
import './ProductListingPage.css';

const ProductListingPage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Extract all unique categories from plantsArray (memoized)
  const allCategories = useMemo(() =>
    ['All', ...plantsArray.map(cat => cat.category)], []);

  // Filter plants based on selected category (memoized)
  const filteredPlants = useMemo(() => {
    return selectedCategory === 'All'
      ? plantsArray.flatMap(category => category.plants)
      : plantsArray
        .find(category => category.category === selectedCategory)
        ?.plants || [];
  }, [selectedCategory]);

  // Create a memoized set of plant names in cart for performance
  const cartPlantNames = useMemo(() =>
    new Set(cartItems.map(item => item.name)), [cartItems]);

  const isPlantInCart = useCallback((plantName: string) => {
    return cartPlantNames.has(plantName);
  }, [cartPlantNames]);

  const handleAddToCart = useCallback((plant: any) => {
    // Convert the plant object to match the expected Plant interface
    const plantToAdd = {
      id: plant.name.toLowerCase().replace(/\s+/g, '-'), // Generate ID from name
      name: plant.name,
      price: parseFloat(plant.cost.replace('$', '')),
      thumbnail: plant.image,
      category: selectedCategory === 'All' ? 'Uncategorized' : selectedCategory
    };
    dispatch(addToCart(plantToAdd));
  }, [dispatch, selectedCategory]);

  return (
    <div className="product-listing">
      <h1>Our Houseplants</h1>

      <div className="category-filter">
        {allCategories.map(category => (
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
        {filteredPlants.map((plant, index) => (
          //  <div key={`${plant.name}-${index}`} className="plant-card">
          //             <img src={plant.image} alt={plant.name} className="plant-thumbnail" />
          //             <h3 className="plant-name">{plant.name}</h3>
          //             <p className="plant-price">{plant.cost}</p>
          //             <p className="plant-description">{plant.description}</p>
          //             <button
          //               className="add-to-cart-btn"
          //               onClick={() => handleAddToCart(plant)}
          //               disabled={isPlantInCart(plant.name)}
          //             >
          //               {isPlantInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
          //             </button>
          //           </div>
          <PlantCard
            key={`${plant.name}-${index}`}
            plant={plant}
            isInCart={isPlantInCart(plant.name)}
            onAddToCart={() => handleAddToCart(plant)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
