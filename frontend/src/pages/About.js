import React from 'react';
import { teamMembers } from '../mockData';
import { Target, Eye, Heart } from 'lucide-react';
import '../styles/About.css';

export const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">ABOUT US</h1>
          <p className="page-subtitle">
            We're a passionate team of designers and print specialists dedicated to helping businesses stand out
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-heading">Our Story</h2>
              <p className="body-text">
                Founded in 2020, DesignPrint emerged from a simple belief: every business deserves exceptional design that tells their unique story. What started as a small studio has grown into a full-service design and printing powerhouse.
              </p>
              <p className="body-text">
                We've worked with startups, established brands, and everything in between, delivering creative solutions that drive results. Our approach combines artistic vision with strategic thinking to create designs that not only look amazing but also achieve your business goals.
              </p>
              <p className="body-text">
                Today, we're proud to be a trusted partner for businesses seeking to elevate their brand through thoughtful design and premium printing services.
              </p>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop" 
                alt="Design team collaborating on creative projects"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">OUR VALUES</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Target size={36} />
              </div>
              <h3 className="value-title">Mission</h3>
              <p className="value-description">
                To empower businesses with compelling visual identities that resonate with their audience and drive growth.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Eye size={36} />
              </div>
              <h3 className="value-title">Vision</h3>
              <p className="value-description">
                To be the go-to creative partner for businesses seeking to make a lasting impact through exceptional design.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Heart size={36} />
              </div>
              <h3 className="value-title">Passion</h3>
              <p className="value-description">
                We pour our hearts into every project, treating your brand as if it were our own and celebrating your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">MEET THE TEAM</h2>
          <p className="section-subtitle">
            Talented professionals dedicated to your success
          </p>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-card-image">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role}`}
                    loading="lazy"
                  />
                </div>
                <div className="team-card-content">
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="team-member-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
