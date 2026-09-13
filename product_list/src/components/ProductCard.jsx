function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />{" "}
      <div className="product-info">
        <h2>{product.title}</h2> <p>{product.description}</p>{" "}
        <p>${product.price}</p> <span>{product.category}</span>{" "}
      </div>{" "}
    </div>
  );
}
export default ProductCard;
