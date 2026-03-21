import type { AIQuestion } from "../types/types";

interface Props {
  question: AIQuestion;
  onAnswer: (index: number) => void;
  selectedAnswer: number | null;
}

const AIQuestionCard = ({ question, onAnswer, selectedAnswer }: Props) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="bg-white rounded-2xl p-5">
        <p className="font-bold text-[#2C2A3A] text-base">
          {question.question}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className={`rounded-2xl px-4 py-3 text-left font-bold text-sm ${
              selectedAnswer === index
                ? "bg-[#1DB87A] text-white"
                : "bg-white text-[#2C2A3A]"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AIQuestionCard;
