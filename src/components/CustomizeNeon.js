// src/components/CustomizeNeon.js
import React, { useState } from 'react';

const CustomizeNeon = () => {
  const [customization, setCustomization] = useState({
    text: 'Goon Light',
    font: 'Arial',
    color: '#0000FF',
    size: 50, // Assuming size is the font size for simplicity
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

  const calculatePrice = (text, font, color, size) => {
    let price = 30; // Base price
    price += text.length * 5; // $5 per character
    if (font === "Verdana" || font === "Helvetica") {
      price += 10;
    }
    if (color === '#FFC0CB' || color === '#ADD8E6') { // Premium colors
      price += 15;
    }
    price += size > 50 ? 20 : 0; // Larger sizes cost more
    return price;
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <label htmlFor="text" className="block text-sm font-medium text-gray-700">Text</label>
          <input
            type="text"
            name="text"
            id="text"
            value={customization.text}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />

          <label htmlFor="font" className="block text-sm font-medium text-gray-700">Font</label>
          <select
            name="font"
            id="font"
            value={customization.font}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Helvetica">Helvetica</option>
            {/* Include other font options as needed */}
          </select>

          <label htmlFor="color" className="block text-sm font-medium text-gray-700">Color</label>
          <select
            name="color"
            id="color"
            value={customization.color}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            {neonColors.map(color => (
              <option key={color.value} value={color.value}>{color.name}</option>
            ))}
          </select>

          <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size</label>
          <input
            type="range"
            name="size"
            id="size"
            min="10"
            max="100"
            value={customization.size}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className="flex justify-center items-center">
        <div
  className="preview relative"
  style={{
    backgroundImage: 'url("/images/room-background.jpg")', // Correct path usage
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: customization.color,
    fontFamily: customization.font,
    fontSize: `${customization.size}px`,
    textShadow: '0 0 8px currentColor',
  }}
>
  {customization.text}
</div>
        </div>
      </div>

      <div className="mt-6 p-4 border-t-2">
        <h2 className="text-lg font-semibold">Price Estimate:</h2>
        <p className="text-xl">${calculatePrice(customization.text, customization.font, customization.color, customization.size)}</p>
      </div>
    </div>
  );
};

export default CustomizeNeon;
