import { createFileRoute } from "@tanstack/react-router";
import TopBar from "../components/TopBar";
import Level from "../components/Level";
import ContinueLesson from "../components/ContinueLesson";
import Categories from "../components/Categories";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <TopBar />
      <Level />
      <ContinueLesson />
      <Categories />
    </>
  );
}
