import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";
function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError("Unable to load products.");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return (
      <div className="status">
        {" "}
        <h2>Loading products...</h2>{" "}
      </div>
    );
  }
  if (error) {
    return (
      <div className="status error">
        {" "}
        <h2>{error}</h2>
      </div>
    );
  }
  return (
    <div className="app">
      <div className="search">
        <input
          className="search-input"
          type="text"
          placeholder="search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <h1>Product Store</h1>
      <div className="products">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
export default App;
