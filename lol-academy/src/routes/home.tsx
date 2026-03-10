import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => {
    return (<h1>Home</h1>);
  }
})