import { createFileRoute } from "@tanstack/react-router";
import LoginHeader from "../components/auth/LoginHeader";
import LoginForm from "../components/auth/LoginForm";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="flex flex-col justify-center w-full pt-4">
      <LoginHeader />
      <LoginForm />
    </div>
  );
}
