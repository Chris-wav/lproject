import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQuizContext } from "../context/QuizContext";
import AIQuestionCard from "../components/AIQuestionCard";

export const Route = createFileRoute("/quiz/ai")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { questions } = useQuizContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  if (!questions || questions.length === 0) return null;
  if (currentIndex > questions.length - 1) {
    useEffect(() => {
      navigate({ to: "/results/$id" });
    }, []);
    return null;
  }
  const currentQuestion = questions[currentIndex];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
  };

  return (
    <div className="flex flex-col h-screen bg-[#EDEAE3]">
      <AIQuestionCard
        question={currentQuestion}
        onAnswer={handleAnswer}
        selectedAnswer={selectedAnswer}
      />
      <button
        onClick={() => {
          setSelectedAnswer(null);
          setCurrentIndex((prev) => prev + 1);
        }}
        disabled={selectedAnswer === null}
        className="w-[90%] mx-auto bg-[#1DB87A] text-white font-black py-4 rounded-xl"
      >
        Continue →
      </button>
    </div>
  );
}
