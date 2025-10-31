import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

interface Feature {
  title: string;
  description: string;
  imageUrl?: string;
}

interface FeatureGridProps {
  heading?: string;
  features: Feature[];
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ heading, features }) => {
  return (
    <section className="py-5 bg-light">
      <Container>
        {heading && <h2 className="text-center mb-4">{heading}</h2>}
        <Row className="g-4">
          {features.map((f, idx) => (
            <Col md={6} lg={4} key={idx}>
              <Card className="h-100 shadow-sm">
                {f.imageUrl && (
                  <Card.Img variant="top" src={f.imageUrl} alt={f.title} style={{ objectFit: 'cover', height: 180 }} />
                )}
                <Card.Body>
                  <Card.Title>{f.title}</Card.Title>
                  <Card.Text>{f.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeatureGrid;
