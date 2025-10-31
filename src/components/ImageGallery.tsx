import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface ImageGalleryProps {
  heading?: string;
  images: { src: string; alt?: string }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ heading, images }) => {
  return (
    <section className="py-5">
      <Container>
        {heading && <h2 className="text-center mb-4">{heading}</h2>}
        <Row className="g-3">
          {images.map((img, idx) => (
            <Col xs={6} md={4} lg={3} key={idx}>
              <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
                <img src={img.src} alt={img.alt || `Gallery ${idx + 1}`} style={{ objectFit: 'cover' }} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ImageGallery;
