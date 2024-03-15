import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import CustomizeNeon from './components/CustomizeNeon';
// Import other components

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/customize" element={<CustomizeNeon />} />
          {/* Define other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
