import { useNavigate } from "react-router";
import useAuthStore from "../store/authStore";

function Dashboard() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  
  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-zinc-500"> Account </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-900">
              Dashboard
            </h1>
            <p className="mt-3 text-zinc-600">Welcome back, {user?.email}.</p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}
export default Dashboard;
