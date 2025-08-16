import React, { useState } from "react";

export default function BadgeModal({ product, onClose }) {
  const [badgeText, setBadgeText] = useState("My Car");
  const [badgeColor, setBadgeColor] = useState("#ff0000");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded w-96 relative">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold">
          X
        </button>
        <h2 className="text-2xl font-bold mb-4">{product.name} Customizer</h2>
        <div className="mb-4">
          <input 
            type="text" 
            value={badgeText} 
            onChange={(e) => setBadgeText(e.target.value)} 
            className="border p-2 w-full mb-2" 
            placeholder="Enter badge text" />
          <input 
            type="color" 
            value={badgeColor} 
            onChange={(e) => setBadgeColor(e.target.value)} 
            className="w-full h-10"/>
        </div>
        <div 
          style={{ backgroundColor: badgeColor }}
          className="text-white text-center font-bold py-4 rounded mb-4">
          {badgeText}
        </div>
        <button 
          onClick={() => alert("Checkout system coming soon!")} 
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full">
          Buy Now
        </button>
      </div>
    </div>
  );
}
