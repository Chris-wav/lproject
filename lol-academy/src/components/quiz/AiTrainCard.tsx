import { useNavigate } from "@tanstack/react-router";
import { useQuizContext } from "../../context/QuizContext";

const AiTrainCard = () => {
  const {
    generateQuiz, setChampion, setDifficulty, setTopic,
    champion, topic, difficulty, isPending,
  } = useQuizContext();
  const navigate = useNavigate();

  return (
    <div className="w-[95%] mx-auto bg-[#2C2A3A] rounded-2xl p-4 relative overflow-hidden">
      <div className="absolute w-24 h-24 rounded-full bg-[#1DB87A] opacity-10 -top-5 -right-5" />
      <span className="bg-[#1DB87A] text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase">
        ✦ AI TRAIN
      </span>
      <h2 className="text-white text-lg font-black mt-2">Personalized Quiz</h2>
      <p className="text-gray-500 text-xs font-semibold mb-4">
        AI generates questions based on your choices
      </p>
      <div className="flex flex-col gap-2 mb-4">
        <select value={champion} onChange={(e) => setChampion(e.target.value)}
          className="bg-[#3D3B4A] text-white text-sm font-bold rounded-xl px-4 py-2.5 border-none outline-none">
          <option value="yasuo">🗡️ Champion — Yasuo</option>
          <option value="vi">⚡ Champion — Vi</option>
          <option value="zed">🎯 Champion — Zed</option>
          <option value="vayne">🏹 Champion — Vayne</option>
        </select>
        <select value={topic} onChange={(e) => setTopic(e.target.value)}
          className="bg-[#3D3B4A] text-white text-sm font-bold rounded-xl px-4 py-2.5 border-none outline-none">
          <option value="jungle">📍 Topic — Jungling</option>
          <option value="vision-control">👁️ Topic — Vision Control</option>
          <option value="wave-management">📊 Topic — Wave Management</option>
          <option value="trading">⚔️ Topic — Trading</option>
        </select>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}
          className="bg-[#3D3B4A] text-white text-sm font-bold rounded-xl px-4 py-2.5 border-none outline-none">
          <option value="beginner">⭐ Difficulty — Beginner</option>
          <option value="intermediate">⭐⭐ Difficulty — Intermediate</option>
          <option value="advanced">⭐⭐⭐ Difficulty — Advanced</option>
        </select>
      </div>
      <button
        className="w-full bg-[#1DB87A] text-white font-black text-sm py-3 rounded-xl"
        onClick={() => generateQuiz(() => navigate({ to: "/quiz/ai" }))}
        disabled={isPending}
      >
        {isPending ? "Generating..." : "Generate Quiz →"}
      </button>
    </div>
  );
};

export default AiTrainCard;
