import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      if (data) setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Registered Product List</h2>
      {products.length > 0 ? (
        <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products have been registered yet.</p>
      )}
    </div>
  );
}

export default ProductList;