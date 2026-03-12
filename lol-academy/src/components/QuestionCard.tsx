import { ArrowLeft } from "lucide-react";
import type { Question } from "../types/types";
interface QuestionCardProps {
  question: Question;
  categoryTitle: string;
  categoryIcon: string;
}

const QuestionCard = ({
  question,
  categoryTitle,
  categoryIcon,
}: QuestionCardProps) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex text-[#0BC4E3] bg-[#0bc4e31f] p-10px h-[40px] w-[50%] font-body rounded-2xl justify-center items-center px-2">
        <span>{categoryIcon}</span>
        <span>{categoryTitle}</span>
      </div>
      <div className="bg-white rounded-2xl p-5 ">
        <p>{question.scenario}</p>
      </div>
    </div>
  );
};

export default QuestionCard;
