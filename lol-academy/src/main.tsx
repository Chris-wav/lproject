import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { QuizProvider } from "./context/QuizContext";

const router = createRouter({ routeTree });
const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <QuizProvider>
        <RouterProvider router={router} />
      </QuizProvider>
    </AuthProvider>
  </QueryClientProvider>,
);
