function ProductCard({ product }) {
  return (
    <div className="product-card">
      {" "}
      <img src={product.image} alt={product.title} />{" "}
      <div className="product-content">
        {" "}
        <h2>{product.title}</h2> <p className="price"> ${product.price} </p>{" "}
        <p className="category"> {product.category} </p>{" "}
      </div>{" "}
    </div>
  );
}
export default ProductCard;
