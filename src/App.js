// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CustomizeNeon from './components/CustomizeNeon';
// Import other components as you create them

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <CustomizeNeon />
      {/* Place other component tags here as you create them */}
    </div>
  );
}

export default App;
