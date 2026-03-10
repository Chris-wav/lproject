/* @refresh reload */
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { createRoot } from "react-dom/client";
import "./index.css";

//create new router instance
const router = createRouter({ routeTree });

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
