import type { Question } from "../../types/types";

interface QuestionCardProps {
  question: Question;
  categoryTitle: string;
  categoryIcon: string;
}

const QuestionCard = ({ question, categoryTitle, categoryIcon }: QuestionCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-5 w-full">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">{categoryIcon}</span>
        <span className="text-xs text-gray-400 font-semibold">{categoryTitle}</span>
      </div>
      <p className="font-bold text-[#2C2A3A] text-base">{question.scenario}</p>
    </div>
  );
};

export default QuestionCard;
