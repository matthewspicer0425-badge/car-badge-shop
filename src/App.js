
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import FAQ from './pages/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <header className="bg-red-700 text-white p-4 flex justify-between">
        <h1 className="font-bold text-xl">Car Badge Shop</h1>
        <nav className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
        </nav>
      </header>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2025 Car Badge Shop. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
