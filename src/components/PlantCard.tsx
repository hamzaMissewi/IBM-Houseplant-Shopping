import React from 'react';

interface PlantCardProps {
  plant: {
    name: string;
    image: string;
    description: string;
    cost: string;
  };
  isInCart: boolean;
  onAddToCart: () => void;
}

const PlantCard: React.FC<PlantCardProps> = React.memo(({ 
  plant, 
  isInCart, 
  onAddToCart 
}) => {
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} className="plant-thumbnail" />
      <h3 className="plant-name">{plant.name}</h3>
      <p className="plant-price">{plant.cost}</p>
      <p className="plant-description">{plant.description}</p>
      <button
        className="add-to-cart-btn"
        onClick={onAddToCart}
        disabled={isInCart}
      >
        {isInCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
});

PlantCard.displayName = 'PlantCard';

export default PlantCard;
