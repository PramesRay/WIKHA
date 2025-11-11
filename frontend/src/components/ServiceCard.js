import React from 'react';
import * as LucideIcons from 'lucide-react';
import '../styles/ServiceCard.css';

export const ServiceCard = ({ title, description, icon }) => {
  // Dynamically get the icon component from lucide-react
  const IconComponent = LucideIcons[icon] || LucideIcons.Box;

  return (
    <div className="service-card">
      <div className="service-card-icon">
        <IconComponent size={32} />
      </div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-description">{description}</p>
    </div>
  );
};
