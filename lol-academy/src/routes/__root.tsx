import { Outlet, createRootRoute } from "@tanstack/react-router";
import BottomNav from "../components/BottomNav";

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col h-screen ">
      <div className="flex-1 overflow-y-auto pb-20  bg-[#EDEAE3]">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  ),
});
