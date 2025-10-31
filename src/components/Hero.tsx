import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  imageUrl?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, onCtaClick, imageUrl }) => {
  return (
    <section className="hero-section text-light d-flex align-items-center" style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${imageUrl || 'https://images.unsplash.com/photo-1533158326339-7f3cf240435d?q=80&w=2000&auto=format&fit=crop'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '60vh'
    }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={7} className="py-5">
            <h1 className="display-5 fw-bold mb-3">{title}</h1>
            {subtitle && <p className="lead mb-4">{subtitle}</p>}
            {ctaText && (
              <Button size="lg" variant="light" className="text-primary fw-semibold" onClick={onCtaClick}>
                {ctaText}
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
