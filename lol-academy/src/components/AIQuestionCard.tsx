import type { AIQuestion } from "../types/types";

interface Props {
  question: AIQuestion;
  onAnswer: (index: number) => void;
  selectedAnswer: number | null;
  champion: string;
}

const labels = ["A", "B", "C", "D"];

const AIQuestionCard = ({
  question,
  onAnswer,
  selectedAnswer,
  champion,
}: Props) => {
  const hasAnswered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === question.correct;

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="bg-white rounded-2xl p-5">
        <p className="font-bold text-[#2C2A3A] text-base">
          {question.question}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {question.options.map((option, index) => {
          let style = "bg-white text-[#2C2A3A] border border-gray-100";
          if (hasAnswered) {
            if (index === question.correct)
              style = "bg-[#E8F8F0] text-[#1DB87A] border border-[#1DB87A]";
            else if (index === selectedAnswer)
              style = "bg-[#FFF0F0] text-[#E24B4A] border border-[#E24B4A]";
          } else if (selectedAnswer === index) {
            style = "bg-[#0bc4e31f] text-[#0BC4E3] border border-[#0BC4E3]";
          }

          return (
            <button
              key={index}
              onClick={() => !hasAnswered && onAnswer(index)}
              className={`rounded-2xl px-4 py-3 text-left font-bold text-sm flex items-center gap-3 ${style}`}
            >
              <span className="font-black text-xs">{labels[index]}</span>
              {option}
            </button>
          );
        })}
      </div>

      {hasAnswered && (
        <div
          className={`rounded-2xl p-4 ${isCorrect ? "bg-[#E8F8F0] border border-[#1DB87A]" : "bg-[#FFF0F0] border border-[#E24B4A]"}`}
        >
          <p
            className={`font-black text-sm mb-1 ${isCorrect ? "text-[#1DB87A]" : "text-[#E24B4A]"}`}
          >
            {isCorrect ? "✓ Correct!" : "✗ Not quite!"}
          </p>
          <p className="text-sm text-gray-600">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default AIQuestionCard;
