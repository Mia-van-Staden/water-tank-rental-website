import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  onClick?: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ title, subtitle, buttonText, onClick }) => {
  return (
    <section className="py-5 bg-primary text-white">
      <Container>
        <Row className="align-items-center">
          <Col lg={8}>
            <h2 className="mb-2">{title}</h2>
            {subtitle && <p className="mb-0 lead opacity-75">{subtitle}</p>}
          </Col>
          <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
            <Button size="lg" variant="light" className="text-primary fw-semibold" onClick={onClick}>
              {buttonText}
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTASection;
