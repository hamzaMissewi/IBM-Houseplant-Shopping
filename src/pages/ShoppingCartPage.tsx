import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import './ShoppingCartPage.css';

const ShoppingCartPage: React.FC = () => {
  const dispatch = useDispatch();
  const { items, totalItems, totalCost } = useSelector((state: RootState) => state.cart);

  const handleIncreaseQuantity = (plantId: number) => {
    dispatch(increaseQuantity(plantId));
  };

  const handleDecreaseQuantity = (plantId: number) => {
    dispatch(decreaseQuantity(plantId));
  };

  const handleRemoveFromCart = (plantId: number) => {
    dispatch(removeFromCart(plantId));
  };

  const handleCheckout = () => {
    alert('Coming Soon!');
  };

  if (items.length === 0) {
    return (
      <div className="shopping-cart">
        <h1>Shopping Cart</h1>
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      
      <div className="cart-summary">
        <p className="total-items">Total Plants: {totalItems}</p>
        <p className="total-cost">Total Cost: ${totalCost.toFixed(2)}</p>
      </div>

      <div className="cart-items">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.name} className="item-thumbnail" />
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-price">${item.price.toFixed(2)} each</p>
            </div>
            
            <div className="quantity-controls">
              <button 
                className="quantity-btn decrease"
                onClick={() => handleDecreaseQuantity(item.id)}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span className="quantity">{item.quantity}</span>
              <button 
                className="quantity-btn increase"
                onClick={() => handleIncreaseQuantity(item.id)}
              >
                +
              </button>
            </div>

            <button 
              className="delete-btn"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              🗑️ Delete
            </button>
          </div>
        ))}
      </div>

      <div className="cart-actions">
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
        <Link to="/products" className="continue-shopping-btn">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
