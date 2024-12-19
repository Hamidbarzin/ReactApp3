import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddProduct from './pages/AddProduct';
import ProductList from './pages/ProductList';

function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ marginRight: 10 }}>Add Product</Link>
        <Link to="/products">Product List</Link>
      </nav>

      <Routes>
        <Route path="/" element={<AddProduct />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;