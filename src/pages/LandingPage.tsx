import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="company-name">Plant Paradise</h1>
          <p className="company-description">
            Welcome to Plant Paradise, your premier destination for beautiful houseplants that bring life and beauty to your home. 
            We carefully curate a selection of the finest indoor plants, from tropical beauties to hardy succulents, 
            ensuring there's a perfect plant for every space and skill level. Our mission is to make plant ownership 
            accessible and enjoyable for everyone, providing healthy plants and expert guidance to help you create your own green oasis.
          </p>
          <Link to="/products" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
