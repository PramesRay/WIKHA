import React, { useState } from 'react';
import { portfolioItems } from '../mockData';
import '../styles/Portfolio.css';

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Branding', 'Print Design', 'Digital Design', 'Packaging'];

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <h1 className="page-title">OUR WORK</h1>
          <p className="page-subtitle">
            Explore our portfolio of successful projects and creative solutions
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="portfolio-filter-section">
        <div className="container">
          <div className="portfolio-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-grid-section">
        <div className="container">
          <div className="portfolio-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="portfolio-item">
                <div className="portfolio-item-image">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    loading="lazy"
                  />
                  <div className="portfolio-item-overlay">
                    <div className="portfolio-item-content">
                      <span className="portfolio-category">{item.category}</span>
                      <h3 className="portfolio-item-title">{item.title}</h3>
                      <p className="portfolio-item-description">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
