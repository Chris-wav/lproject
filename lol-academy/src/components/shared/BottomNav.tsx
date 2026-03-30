import { Link, useRouterState } from "@tanstack/react-router";
import { useLocation } from "@tanstack/react-router";
const BottomNav = () => {
  const { pathname } = useLocation();
  const { location } = useRouterState();
  const hideBottomBar = pathname === "/login" || pathname === "/register";
  if (hideBottomBar) return null;

  const tabs = [
    { to: "/", icon: "🏠", label: "Home" },
    { to: "/learn", icon: "📚", label: "Learn" },
    { to: "/ranks", icon: "🏆", label: "Ranks" },
    { to: "/profile", icon: "👤", label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg  px-4 py-2 z-50">
      <div className="flex justify-around items-center">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.to;
          return (
            <Link key={tab.to} to={tab.to}>
              <div className="flex flex-col items-center gap-1 px-4 py-1">
                <span className="text-2xl">{tab.icon}</span>
                <span
                  className={`text-xs font-semibold ${isActive ? "text-cyan-500" : "text-gray-400"}`}
                >
                  {tab.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
