import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Award } from 'lucide-react';
import '../styles/Home.css';

export const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1920&h=1080&fit=crop" 
            alt="Creative workspace with design tools" 
            className="hero-image"
            loading="eager"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">DESIGN THAT SPEAKS VOLUMES</h1>
          <p className="hero-subtitle">
            Transform your brand with cutting-edge design and premium printing services
          </p>
          <div className="hero-cta-group">
            <Link to="/services" className="btn-primary">
              Explore Services
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">WHY CHOOSE US</h2>
            <p className="section-subtitle">
              We combine creative excellence with technical precision to deliver outstanding results
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <Zap size={40} />
              </div>
              <h3 className="feature-title">Fast Turnaround</h3>
              <p className="feature-description">
                Quick delivery without compromising on quality. Most projects completed within 48-72 hours.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <Users size={40} />
              </div>
              <h3 className="feature-title">Expert Team</h3>
              <p className="feature-description">
                Experienced designers and print specialists dedicated to bringing your vision to life.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <Award size={40} />
              </div>
              <h3 className="feature-title">Premium Quality</h3>
              <p className="feature-description">
                Top-tier materials and cutting-edge technology ensure exceptional results every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">READY TO ELEVATE YOUR BRAND?</h2>
            <p className="cta-description">
              Let's create something amazing together. Get in touch today for a free consultation.
            </p>
            <Link to="/contact" className="btn-primary btn-large">
              Start Your Project
              <ArrowRight size={20} className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
