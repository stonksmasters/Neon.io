import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const HeroSection = () => {
  return (
    <div className="bg-black text-white flex justify-center items-center" style={{ height: '100vh', background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)' }}>
      <div className="container mx-auto text-center px-4">
        <div className="w-48 h-48 mb-8 mx-auto overflow-hidden rounded-full bg-black">
          <img src="/images/neon.gif" alt="Neon Lights" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <h1 className="text-5xl font-extrabold mb-4" style={{ color: '#00c9ff' }}>Illuminate Your Space</h1>
        <p className="mb-8 text-lg font-light" style={{ color: '#8ecae6' }}>Customize and purchase unique neon lights tailored for your space.</p>
        <Link to="/customize" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg text-lg transition-colors duration-300" style={{ backgroundColor: '#00c9ff', borderColor: '#00c9ff', color: '#030d16' }}>
          Start Customizing
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
