import { NavLink, useNavigate } from "react-router";
import useCartStore from "../store/cartStore";
import useAuthStore from "../store/authStore";

function Navbar() {
  const navigate = useNavigate();
  const cart = useCartStore((state) => state.cart);
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  function handleLogout() {
    logout();
    navigate("/login");
  }
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ];
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex min-h-[73px] max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="text-xl font-bold tracking-tight text-zinc-900"
        >
          Nexus Store
        </NavLink>
        <nav className="flex flex-wrap items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition ${isActive ? "bg-zinc-100 text-zinc-900" : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"}`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 text-sm font-medium transition ${isActive ? "bg-zinc-100 text-zinc-900" : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"}`
            }
          >
            Cart ({cartCount})
          </NavLink>
          {user ? (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition ${isActive ? "bg-zinc-100 text-zinc-900" : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"}`
                }
              >
                Dashboard
              </NavLink>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700"
            >
              Login
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
