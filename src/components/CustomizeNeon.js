import React, { useState } from 'react';

const CustomizeNeon = () => {
  const [customization, setCustomization] = useState({
    text: 'Goon Light',
    font: 'Poiret One',
    color: '#0000FF',
    size: 50,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomization({ ...customization, [name]: value });
  };

  const neonColors = [
    { name: 'Blue', value: '#0000FF' },
    { name: 'Green', value: '#00FF00' },
    { name: 'Lemon', value: '#FFFF00' },
    { name: 'Orange', value: '#FFA500' },
    { name: 'Purple', value: '#800080' },
    { name: 'Pink', value: '#FFC0CB' },
    { name: 'Ice Blue', value: '#ADD8E6' },
    { name: 'Red', value: '#FF0000' },
    { name: 'Yellow', value: '#FFFF00' },
    { name: 'White', value: '#FFFFFF' },
  ];

  const googleFonts = [
    'Monoton',
    'Roboto Slab',
    'Orbitron',
    'Russo One',
    'Bungee',
    'Pacifico',
    'Poiret One',
    'Righteous',
    'Sigmar One',
    'Ultra'
  ];

  const getFontSizeForPreview = (size) => {
    const minFontSize = 20; // Minimum font size for preview
    const maxFontSize = 60; // Maximum font size for preview
    return `${Math.max(minFontSize, (size / 100) * maxFontSize)}px`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)' }}>
      <div className="max-w-4xl mx-auto p-6 bg-black bg-opacity-50 rounded-lg shadow-xl">
        <h1 className="text-4xl text-white font-extrabold text-center mb-6">Customize Your Neon Sign</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <input
              type="text"
              name="text"
              placeholder="Enter text"
              value={customization.text}
              onChange={handleInputChange}
              className="w-full p-2 rounded-md text-gray-900"
            />

            <select
              name="font"
              value={customization.font}
              onChange={handleInputChange}
              className="w-full p-2 rounded-md text-gray-900"
            >
              {googleFonts.map(font => (
                <option key={font} value={font}>{font}</option>
              ))}
            </select>

            <select
              name="color"
              value={customization.color}
              onChange={handleInputChange}
              className="w-full p-2 rounded-md text-gray-900"
            >
              {neonColors.map(color => (
                <option key={color.value} value={color.value}>{color.name}</option>
              ))}
            </select>

            <div>
              <label className="text-white">Size</label>
              <input
                type="range"
                name="size"
                min="10"
                max="100"
                value={customization.size}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div
              className="w-full h-64 bg-cover bg-center rounded-md shadow-lg"
              style={{
                backgroundImage: 'url("/images/background1.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="flex h-full items-center justify-center">
                <span style={{ fontSize: getFontSizeForPreview(customization.size), color: customization.color, fontFamily: customization.font, textShadow: '0 0 8px currentColor' }}>
                  {customization.text}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeNeon;
