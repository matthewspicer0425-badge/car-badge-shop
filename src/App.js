import React, { useState } from "react";
import BadgeModal from "./BadgeModal";

const products = [
  { id: 1, name: "Classic Badge", price: 19.99 },
  { id: 2, name: "Sporty Badge", price: 24.99 },
  { id: 3, name: "Luxury Badge", price: 29.99 },
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="font-sans">
      <header className="bg-gray-900 text-white flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">CarBadge Shop</h1>
        <nav className="space-x-4">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#shop" className="hover:text-gray-300">Shop</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
          <span className="ml-4">🛒</span>
        </nav>
      </header>

      <section className="bg-blue-600 text-white text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Create Your Custom Car Badge!</h2>
        <p className="mb-6">Unique badges for your car. Choose style, color, and text.</p>
        <button 
          onClick={() => setSelectedProduct(products[0])} 
          className="bg-white text-blue-600 px-6 py-3 rounded font-bold hover:bg-gray-200">
          Shop Now
        </button>
      </section>

      <section id="shop" className="py-16 px-8 bg-gray-100">
        <h3 className="text-3xl font-bold mb-8 text-center">Our Badges</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded shadow hover:shadow-lg">
              <div className="h-40 bg-gray-300 flex items-center justify-center mb-4">
                <span className="text-xl font-bold">{product.name}</span>
              </div>
              <p className="font-bold mb-2">${product.price.toFixed(2)}</p>
              <button 
                onClick={() => setSelectedProduct(product)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Customize
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p>© 2025 CarBadge Shop. All rights reserved.</p>
        <p>Follow us on social media: 👍 📷 🐦</p>
      </footer>

      {selectedProduct && 
        <BadgeModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
}

export default App;
