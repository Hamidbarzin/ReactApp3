import React, { useState } from 'react';
import { addProduct } from '../services/api';

function AddProduct() {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !brand || !price) {
      alert("Please fill in all fields.");
      return;
    }

    const result = await addProduct({ name, brand, price });
    if (result && result.message) {
      alert(result.message);
      setName('');
      setBrand('');
      setPrice('');
    } else {
      alert("Error adding the product.");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Add a Sports Product</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 300 }}>
        <div>
          <label>Product Name:</label><br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Brand Name:</label><br />
          <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
        </div>
        <div>
          <label>Price:</label><br />
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Submit Product</button>
      </form>
    </div>
  );
}

export default AddProduct;