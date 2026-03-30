import { useGameContext } from "../../context/GameContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

const LivesModal = () => {
  const { lives } = useGameContext();
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(30 * 60);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev < 1) { clearInterval(interval); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-[#EDEAE3]">
      <div className="bg-white rounded-3xl p-8 w-[90%] max-w-sm text-center flex flex-col gap-5">
        <div className="flex justify-center gap-2">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`text-3xl ${i < lives ? "text-red-500" : "text-gray-200"}`}>♥</span>
          ))}
        </div>
        <div className="bg-[#FFF0F0] rounded-2xl p-4">
          <h1 className="text-xl font-black text-[#E24B4A] mb-1">Out of lives!</h1>
          <p className="text-sm text-[#E24B4A] opacity-80">You ran out of hearts. Take a break and come back soon.</p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-400">Next life in</span>
          <span className="text-4xl font-black text-[#2C2A3A]">{formatTime(secondsLeft)}</span>
        </div>
        <div className="flex flex-col gap-3">
          <button className="bg-[#1DB87A] text-white font-black py-4 rounded-2xl text-sm">
            Watch ad for a free life
          </button>
          <button onClick={() => navigate({ to: "/" })}
            className="border border-gray-200 text-gray-400 font-bold py-4 rounded-2xl text-sm">
            Go back to home
          </button>
        </div>
      </div>
    </div>
  );
};

export default LivesModal;
