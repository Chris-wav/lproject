import { Outlet, createRootRoute, useNavigate } from "@tanstack/react-router";
import BottomNav from "../components/BottomNav";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const RootComponent = () => {
  const { authLoading, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !authLoading &&
      !isLoggedIn &&
      location.pathname !== "/login" &&
      location.pathname !== "/register"
    ) {
      navigate({ to: "/login" });
    }
  }, [authLoading, isLoggedIn, navigate]);

  if (authLoading) return null;
  if (
    !isLoggedIn &&
    location.pathname !== "/login" &&
    location.pathname !== "/register"
  )
    return null;

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto pb-20 bg-[#EDEAE3]">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
