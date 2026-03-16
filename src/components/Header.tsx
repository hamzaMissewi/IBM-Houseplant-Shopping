import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const totalItems = useSelector((state: RootState) => state.cart.totalItems);

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Plant Paradise</h1>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/cart" className="nav-link cart-link">
            🛒 Cart ({totalItems})
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
