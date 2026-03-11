import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/category/$id")({
  component: () => {
    return <h1>Category</h1>;
  },
});
