export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>

      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">
          ${typeof product.price === "number" ? product.price.toFixed(2) : product.price}
        </p>
      </div>
    </div>
  );
}
