import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
  component: () => {
    return <h1>Profile</h1>;
  },
});
