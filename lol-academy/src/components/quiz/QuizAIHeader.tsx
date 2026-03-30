import { ArrowLeft } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { useGameContext } from "../../context/GameContext";

const MAX_LIVES = 5;

interface QuizAiHeaderProps {
  currentIndex: number;
  totalQuestions: number;
}

const QuizAiHeader = ({ currentIndex, totalQuestions }: QuizAiHeaderProps) => {
  const { lives } = useGameContext();
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center p-4 w-full">
      <button
        onClick={() => navigate({ to: "/" })}
        className="flex items-center justify-center text-black bg-white h-[40px] w-[40px] rounded-2xl"
      >
        <ArrowLeft className="w-4 h-4" />
      </button>
      <div className="flex flex-col gap-1 flex-1 mx-3">
        <span className="text-sm text-gray-400">
          Question {currentIndex + 1} of {totalQuestions}
        </span>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-[#0BC4E3] h-1.5 rounded-full transition-all"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>
      <div>
        {Array.from({ length: MAX_LIVES }).map((_, i) => (
          <span key={i} className={i < lives ? "" : "opacity-30"}>❤️</span>
        ))}
      </div>
    </div>
  );
};

export default QuizAiHeader;
