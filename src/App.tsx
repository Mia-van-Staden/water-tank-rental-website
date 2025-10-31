import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProblemOpportunity from './pages/ProblemOpportunity';
import SolutionBusinessModel from './pages/SolutionBusinessModel';
import StartupCostsPricing from './pages/StartupCostsPricing';
import FinancialProjections from './pages/FinancialProjections';
import TargetMarket from './pages/TargetMarket';
import OperationsTeam from './pages/OperationsTeam';
import RiskAnalysis from './pages/RiskAnalysis';
import References from './pages/References';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problem-opportunity" element={<ProblemOpportunity />} />
          <Route path="/solution-business-model" element={<SolutionBusinessModel />} />
          <Route path="/startup-costs-pricing" element={<StartupCostsPricing />} />
          <Route path="/financial-projections" element={<FinancialProjections />} />
          <Route path="/target-market" element={<TargetMarket />} />
          <Route path="/operations-team" element={<OperationsTeam />} />
          <Route path="/risk-analysis" element={<RiskAnalysis />} />
          <Route path="/references" element={<References />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
