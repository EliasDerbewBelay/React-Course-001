import { Link } from "react-router";

function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-64 items-center justify-center bg-zinc-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
          {product.category}
        </p>
        <h2 className="mt-2 line-clamp-2 min-h-12 text-base font-semibold text-zinc-900">
          {product.title}
        </h2>
        <div className="mt-5 flex items-center justify-between gap-4">
          <span className="text-lg font-bold text-zinc-900">
            ${product.price.toFixed(2)}
          </span>
          <Link
            to={`/products/${product.id}`}
            className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
export default ProductCard;
