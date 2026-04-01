import { createFileRoute } from "@tanstack/react-router";
import TopBar from "../components/shared/TopBar";
import Level from "../components/home/Level";
import Categories from "../components/learn/Categories";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <TopBar />
      <Level />
      <Categories />
    </>
  );
}
