import { Link } from "react-router";
import useCartStore from "../store/cartStore";

function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  
  if (cart.length === 0) {
    return (
      <main className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 text-2xl">
            🛒
          </div>
          <h1 className="mt-5 text-2xl font-bold text-zinc-900">
            Your cart is empty
          </h1>
          <p className="mt-2 text-zinc-600">
            Add some products before checking your cart.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-flex rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
          >
            Browse products
          </Link>
        </div>
      </main>
    );
  }
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-zinc-500">Shopping cart </p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-900">
            Your Cart
          </h1>
        </div>
        <button
          type="button"
          onClick={clearCart}
          className="text-sm font-medium text-red-600 hover:text-red-700"
        >
          Clear cart
        </button>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
        <div className="space-y-4">
          {cart.map((item) => (
            <article
              key={item.id}
              className="flex flex-col gap-5 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center"
            >
              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-zinc-50 p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  {item.category}
                </p>
                <h2 className="mt-1 font-semibold text-zinc-900">
                  {item.title}
                </h2>
                <p className="mt-2 font-semibold text-zinc-900">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => decreaseQuantity(item.id)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition hover:bg-zinc-50"
                >
                  −
                </button>
                <span className="w-6 text-center text-sm font-semibold">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => increaseQuantity(item.id)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition hover:bg-zinc-50"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                onClick={() => removeFromCart(item.id)}
                className="text-sm font-medium text-red-600 hover:text-red-700"
              >
                Remove
              </button>
            </article>
          ))}
        </div>
        <aside className="h-fit rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">Order summary</h2>
          <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-5">
            <span className="text-zinc-600">Total</span>
            <span className="text-xl font-bold text-zinc-900">
              ${total.toFixed(2)}
            </span>
          </div>
          <button
            type="button"
            className="mt-6 w-full rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
          >
            Checkout
          </button>
        </aside>
      </div>
    </main>
  );
}
export default Cart;
