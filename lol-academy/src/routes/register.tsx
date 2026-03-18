import { createFileRoute } from "@tanstack/react-router";
import RegisterForm from "../components/RegisterForm";
import LoginHeader from "../components/LoginHeader";

export const Route = createFileRoute("/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col">
      <LoginHeader />
      <RegisterForm />
    </div>
  );
}
