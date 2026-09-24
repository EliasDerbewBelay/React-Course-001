import { useState } from "react";
import { useNavigate } from "react-router";
import useAuthStore from "../store/authStore";

function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  function handleSubmit(event) {
    event.preventDefault();

    if (!email || !password) {
      return;
    }

    login(email);

    navigate("/dashboard");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <div>
          <p className="text-sm font-medium text-zinc-500">Nexus Store</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-zinc-900">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-zinc-600">
            Sign in to continue to your account.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-zinc-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}
export default Login;
