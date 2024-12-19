export async function addProduct(product) {
    try {
      const res = await fetch('http://localhost/ReactApp3/backend/add_product.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      });
      return await res.json();
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  
  export async function fetchProducts() {
    try {
      const res = await fetch('http://localhost/ReactApp3/backend/fetch_products.php');
      return await res.json();
    } catch (err) {
      console.error(err);
      return null;
    }
  }