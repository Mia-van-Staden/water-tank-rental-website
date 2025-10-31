import React from 'react';
import { Table } from 'react-bootstrap';

const StartupCostsPricing: React.FC = () => {
  return (
    <div>
      <h2>Startup Costs & Pricing</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Package</th>
            <th>Est. Install Cost (R)</th>
            <th>24-mo RTO (R/pm)</th>
            <th>36-mo RTO (R/pm)</th>
            <th>Service Plan (R/yr)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Basic (2500L + budget pump)</td>
            <td>16,400</td>
            <td>790</td>
            <td>530</td>
            <td>1,200</td>
          </tr>
          <tr>
            <td>Standard (5000L + brand pump)</td>
            <td>19,700</td>
            <td>950</td>
            <td>640</td>
            <td>1,600</td>
          </tr>
          <tr>
            <td>Premium (2×2500L + VSD pump)</td>
            <td>32,200</td>
            <td>1,550</td>
            <td>1,050</td>
            <td>2,600</td>
          </tr>
        </tbody>
      </Table>
      <p>
        Estimated startup cash requirement: ~R180,500 for first 10 installs (4 Basic, 4 Standard, 2
        Premium) plus ~R50,500 for tools, marketing, registration, and insurance. Total ≈ R231,000.
      </p>
    </div>
  );
};

export default StartupCostsPricing;