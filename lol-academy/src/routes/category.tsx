import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute("/category")({
  component: () => {
    return <h1>Category</h1>;
  },
})