import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

const MAX_LIVES = 5;

interface QuizHeaderProps {
  index: number;
  totalQuestions: number;
  lives: number;
}

const QuizHeader = ({ index, totalQuestions, lives }: QuizHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-4 w-[91%]">
      <Link to="/">
        <button className="flex items-center gap-1 text-black bg-white h-[40px] w-[40px] font-body rounded-2xl justify-center">
          <ArrowLeft />
        </button>
      </Link>
      <div className="flex flex-col gap-1 flex-1 mx-3">
        <span className="text-xs text-gray-400">
          Question {index + 1} of {totalQuestions}
        </span>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-[#0BC4E3] h-1.5 rounded-full transition-all"
            style={{ width: `${((index + 1) / totalQuestions) * 100}%` }}
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

export default QuizHeader;
