import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data, isLoading, isError } = useProducts();


  if (isLoading) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-zinc-600">Loading products...</p>{" "}
      </main>
    );
  }

  if (isError) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="font-medium text-red-600">{error}</p>{" "}
      </main>
    );
  }

  const categories = [
    "all",
    ...new Set(data.map((product) => product.category)),
  ];

  const filteredProducts = data.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div>
        <p className="text-sm font-medium text-zinc-500"> Nexus Store </p>{" "}
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-900">
          Products{" "}
        </h1>{" "}
        <p className="mt-2 text-zinc-600">
          Browse, search, and filter our products.{" "}
        </p>{" "}
      </div>{" "}
      <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex-1">
            <label htmlFor="search" className="sr-only">
              Search products{" "}
            </label>{" "}
            <input
              id="search"
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search products..."
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10"
            />{" "}
          </div>{" "}
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-700 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "all" ? "All categories" : category}{" "}
              </option>
            ))}{" "}
          </select>{" "}
        </div>{" "}
        <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4">
          <p className="text-sm text-zinc-500">
            {filteredProducts.length} product{" "}
            {filteredProducts.length !== 1 ? "s" : ""}{" "}
          </p>{" "}
          {searchTerm || selectedCategory !== "all" ? (
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
            >
              Clear filters{" "}
            </button>
          ) : null}{" "}
        </div>{" "}
      </section>{" "}
      {filteredProducts.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-zinc-300 bg-white p-12 text-center">
          <h2 className="text-lg font-semibold text-zinc-900">
            No products found{" "}
          </h2>{" "}
          <p className="mt-2 text-sm text-zinc-600">
            Try a different search term or category.{" "}
          </p>{" "}
        </div>
      ) : (
        <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}{" "}
        </section>
      )}{" "}
    </main>
  );
}
export default Products;
