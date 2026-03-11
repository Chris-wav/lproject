import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute("/home")({
  component: () => {
    return (<h1>Home</h1>);
  }
})