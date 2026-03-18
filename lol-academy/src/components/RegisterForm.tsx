import { useState } from "react";
import { signUp } from "../lib/auth";
import { Link } from "@tanstack/react-router";
import LoginForm from "./LoginForm";
import { useNavigate } from "@tanstack/react-router";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signUp({ username, email, password });
    navigate({ to: "/" });
  };

  return (
    <div className="px-6 py-8 flex flex-col gap-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-[11px] font-black text-[#2C2A3A] uppercase tracking-widest">
            Summoner name
          </label>
          <input
            type="text"
            placeholder="xX_YourName_Xx"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-white border-2 border-[#2C2A3A] rounded-xl px-4 py-3 text-[15px] font-bold text-[#2C2A3A] placeholder:text-gray-300 focus:outline-none focus:border-[#1DB87A]"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[11px] font-black text-[#2C2A3A] uppercase tracking-widest">
            Email
          </label>
          <input
            type="email"
            placeholder="noob@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white border-2 border-[#2C2A3A] rounded-xl px-4 py-3 text-[15px] font-bold text-[#2C2A3A] placeholder:text-gray-300 focus:outline-none focus:border-[#1DB87A]"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[11px] font-black text-[#2C2A3A] uppercase tracking-widest">
            Password
          </label>
          <input
            type="password"
            placeholder="Hopefully not 1234"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white border-2 border-[#2C2A3A] rounded-xl px-4 py-3 text-[15px] font-bold text-[#2C2A3A] placeholder:text-gray-300 focus:outline-none focus:border-[#1DB87A]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#1DB87A] text-white font-black text-base py-4 rounded-xl tracking-wide"
        >
          Start climbing ranks
        </button>

        <div className="flex items-center gap-2 my-1">
          <div className="flex-1 h-[1.5px] bg-[#2C2A3A] opacity-10" />
          <span className="text-[11px] text-gray-300 font-bold">
            already in?
          </span>
          <div className="flex-1 h-[1.5px] bg-[#2C2A3A] opacity-10" />
        </div>
        <Link to="/login">
          <button
            type="button"
            className="w-full border-2 border-[#2C2A3A] text-[#2C2A3A] font-black text-sm py-3 rounded-xl"
          >
            Sign in
          </button>
        </Link>

        <p className="text-center text-xs text-gray-400 font-bold">
          500 XP waiting for you today{" "}
          <span className="text-[#1DB87A] font-black">🔥</span>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
