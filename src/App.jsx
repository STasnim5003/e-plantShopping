import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

function App() {
  return (
    <Router>
      <nav style={{ background: 'green', padding: '10px' }}>
        <Link to="/" style={{ color: 'white', margin: '10px' }}>Home</Link>
        <Link to="/plants" style={{ color: 'white', margin: '10px' }}>Plants</Link>
        <Link to="/cart" style={{ color: 'white', margin: '10px' }}>Cart</Link>
        <Link to="/about" style={{ color: 'white', margin: '10px' }}>About Us</Link>
      </nav>
      <Routes>
        <Route path="/" element={
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <p>Welcome to Paradise Nursery — your one-stop shop for beautiful houseplants.</p>
<h1>Welcome to Paradise Nursery</h1>
<Link to="/plants">
  <button className="get-started-button">Get Started</button>
</Link>
          </div>
        } />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;