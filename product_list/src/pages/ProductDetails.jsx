import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import useCartStore from "../store/cartStore";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    async function getProduct() {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product.");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getProduct();
  }, [id]);
  if (loading) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-zinc-600">Loading product...</p>
      </main>
    );
  }
  if (error) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="font-medium text-red-600">{error}</p>
        <Link
          to="/products"
          className="mt-5 inline-block rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white"
        >
          Back to products
        </Link>
      </main>
    );
  }
  if (!product) {
    return null;
  }
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        to="/products"
        className="text-sm font-medium text-zinc-600 hover:text-zinc-900"
      >
        ← Back to products
      </Link>
      <section className="mt-6 grid gap-10 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
        <div className="flex min-h-[420px] items-center justify-center rounded-2xl bg-zinc-50 p-10">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[380px] max-w-full object-contain"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
            {product.category}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">
            {product.title}
          </h1>
          <p className="mt-5 text-3xl font-bold text-zinc-900">
            ${product.price.toFixed(2)}
          </p>
          <p className="mt-6 leading-7 text-zinc-600">{product.description}</p>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="mt-8 w-full rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
          >
            Add to cart
          </button>
        </div>
      </section>
    </main>
  );
}
export default ProductDetails;
