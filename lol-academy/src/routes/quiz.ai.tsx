import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQuizContext } from "../context/QuizContext";
import AIQuestionCard from "../components/AIQuestionCard";
import { useGameContext } from "../context/GameContext";
import LivesModal from "../components/LivesModal";

export const Route = createFileRoute("/quiz/ai")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  let isCorrect = false;
  const { submitAnswer, lives } = useGameContext();
  const { questions } = useQuizContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  useEffect(() => {
    if (questions && currentIndex > questions.length - 1) {
      navigate({ to: "/quiz/results" });
    }
  }, [currentIndex, questions]);
  if (!questions || questions.length === 0) return null;

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    const isCorrect = index === currentQuestion.correct;
    submitAnswer(isCorrect);
  };
  if (lives === 0) return <LivesModal />;
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
