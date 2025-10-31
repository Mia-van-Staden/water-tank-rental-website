import React from 'react';
import { Navbar as BootstrapNavbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <BootstrapNavbar bg="primary" variant="dark" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">Water Tank Rental & Service</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Business Plan" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/problem-opportunity">Problem & Opportunity</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/solution-business-model">Solution & Business Model</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/startup-costs-pricing">Startup Costs & Pricing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/financial-projections">Financial Projections</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/target-market">Target Market</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/operations-team">Operations & Team</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/risk-analysis">Risk Analysis</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/references">References</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;