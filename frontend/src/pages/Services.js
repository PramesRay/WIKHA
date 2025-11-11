import React, { useState } from 'react';
import { services } from '../mockData';
import { ServiceCard } from '../components/ServiceCard';
import { ServiceModal } from '../components/ServiceModal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import '../styles/Services.css';

export const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1 className="page-title">Pilih Kebutuhan Kamu!</h1>
          <p className="page-subtitle">
            From concept to completion, we offer comprehensive design and printing solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} onClick={() => handleServiceClick(service)}>
                <ServiceCard
                  title={service.serviceName}
                  description={service.shortDescription.join(' • ')}
                  icon={service.icon}
                  price={service.price}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">HOW WE WORK</h2>
          <p className="section-subtitle">
            Our streamlined process ensures your project runs smoothly from start to finish
          </p>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3 className="step-title">Consultation</h3>
              <p className="step-description">
                We start by understanding your vision, goals, and requirements through a detailed consultation.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">02</div>
              <h3 className="step-title">Concept Development</h3>
              <p className="step-description">
                Our team creates initial concepts and designs based on your brief and feedback.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">03</div>
              <h3 className="step-title">Refinement</h3>
              <p className="step-description">
                We refine the chosen concept, incorporating your feedback until it's perfect.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">04</div>
              <h3 className="step-title">Delivery</h3>
              <p className="step-description">
                Final files are delivered in all required formats, ready for print or digital use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="container">
          <div className="services-cta-content">
            <h2 className="cta-title">LET'S BRING YOUR IDEAS TO LIFE</h2>
            <p className="cta-description">
              Ready to get started? Contact us today to discuss your project.
            </p>
            <Link to="/contact" className="btn-primary btn-large">
              Request a Quote
              <ArrowRight size={20} className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={selectedService}
      />
    </div>
  );
};

export default Services;
