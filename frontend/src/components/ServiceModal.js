import React from 'react';
import { X } from 'lucide-react';
import '../styles/ServiceModal.css';

export const ServiceModal = ({ isOpen, onClose, service }) => {
  if (!isOpen || !service) return null;

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(service.waMessageTemplate);
    const whatsappUrl = `https://wa.me/${service.picNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="service-modal-overlay" onClick={handleOverlayClick}>
      <div className="service-modal-container">
        <button className="service-modal-close" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>
        
        <div className="service-modal-content">
          {/* Modal Image */}
          <div className="service-modal-image-wrapper">
            <img 
              src={service.modalImageUrl} 
              alt={service.serviceName}
              className="service-modal-image"
            />
          </div>

          {/* Modal Details */}
          <div className="service-modal-details">
            <h2 className="service-modal-title">{service.serviceName}</h2>
            <p className="service-modal-price">{service.price}</p>
            <p className="service-modal-description">{service.modalDetailedDescription}</p>
            
            {/* CTA Button */}
            <button 
              className="service-modal-cta" 
              onClick={handleWhatsAppClick}
            >
              Contact via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
