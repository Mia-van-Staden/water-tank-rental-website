import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-5 mt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="mb-3">Water Tank Rental & Service</h5>
            <p className="opacity-75">Affordable rent-to-own water tank systems with professional installation and ongoing service.</p>
          </div>
          <div className="col-md-4">
            <h6 className="mb-3">Company</h6>
            <ul className="list-unstyled">
              <li><a className="text-white text-decoration-none opacity-75" href="/">Home</a></li>
              <li><a className="text-white text-decoration-none opacity-75" href="/solution-business-model">Solution & Business Model</a></li>
              <li><a className="text-white text-decoration-none opacity-75" href="/target-market">Target Market</a></li>
              <li><a className="text-white text-decoration-none opacity-75" href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="mb-3">Contact</h6>
            <ul className="list-unstyled opacity-75 mb-0">
              <li>info@watertankrental.co.za</li>
              <li>+27 81 700 7548</li>
              <li>Gauteng, South Africa</li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        <div className="d-flex justify-content-between align-items-center pb-3 small opacity-75">
          <span>&copy; 2025 Water Tank Rental & Service</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;