import React from 'react';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import ImageGallery from '../components/ImageGallery';
import CTASection from '../components/CTASection';
import { Container } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <div>
      <Hero
        title="Reliable Water, Made Affordable"
        subtitle="Rent-to-own JoJo tank systems with professional installation and ongoing service. Secure your water supply without the upfront cost."
        ctaText="Get a Quote"
        onCtaClick={() => (window.location.href = '/contact')}
        imageUrl="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2000&auto=format&fit=crop"
      />

      <Container className="py-5">
        <h2 className="mb-3">Executive Summary</h2>
        <p className="lead">
          This business provides households and small businesses with access to water security through a
          rent-to-own model for JoJo tank and pump installations. Customers who cannot afford a large upfront
          payment can pay monthly over 24–36 months, after which ownership transfers and they may subscribe to a
          service plan. This model is inclusive, serving both lower-income households with entry-level systems and
          higher-income clients with premium setups.
        </p>
      </Container>

      <FeatureGrid
        heading="Why Choose Us"
        features={[
          {
            title: 'Affordable Payments',
            description: 'Structured rent-to-own plans to fit your budget, with transparent pricing and no surprises.',
            imageUrl: 'https://images.unsplash.com/photo-1567427013953-4b746d0898ea?q=80&w=1200&auto=format&fit=crop'
          },
          {
            title: 'Professional Installation',
            description: 'Certified installers ensure neat, safe and compliant setup tailored to your property.',
            imageUrl: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200&auto=format&fit=crop'
          },
          {
            title: 'Ongoing Service',
            description: 'Optional service plans for maintenance, pump checks and water quality assurance.',
            imageUrl: 'https://images.unsplash.com/photo-1581092334983-8b7b44a0d167?q=80&w=1200&auto=format&fit=crop'
          }
        ]}
      />

      <ImageGallery
        heading="Installations & Systems"
        images={[
          { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop', alt: 'Tank and pump' },
          { src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop', alt: 'Household setup' },
          { src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop', alt: 'Rain harvesting' },
          { src: 'https://images.unsplash.com/photo-1590496793923-4f3b7199e3b3?q=80&w=1200&auto=format&fit=crop', alt: 'Plumbing install' },
          { src: 'https://images.unsplash.com/photo-1523419409543-8ea3e6df3a2b?q=80&w=1200&auto=format&fit=crop', alt: 'Pumps' },
          { src: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop', alt: 'Control panel' },
          { src: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?q=80&w=1200&auto=format&fit=crop', alt: 'Yard installation' },
          { src: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop', alt: 'Tank close-up' }
        ]}
      />

      <CTASection
        title="Ready to secure your water supply?"
        subtitle="Speak to our team for a tailored quote and installation timeline."
        buttonText="Contact Us"
        onClick={() => (window.location.href = '/contact')}
      />
    </div>
  );
};

export default Home;