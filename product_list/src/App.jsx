import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

export default function App() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProduct(data);
        console.log(data);
      } catch {
        setError("Unable to load data");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, []);

  if (loading) {
    return (
      <div className="status-container">
        <div className="status-message">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-container">
        <div className="status-message error">Error has happened: {error}</div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Product Store</h1>
      </header>

      <main className="product-grid">
        {product.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </main>
    </div>
  );
}
