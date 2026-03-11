import { createFileRoute } from "@tanstack/react-router";
import TopBar from "../components/TopBar";
import Level from "../components/Level";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <TopBar />
      <Level />
    </>
  );
}
