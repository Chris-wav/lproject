import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQuizContext } from "../context/QuizContext";
import AIQuestionCard from "../components/quiz/AIQuestionCard";
import { useGameContext } from "../context/GameContext";
import LivesModal from "../components/shared/LivesModal";
import QuizAiHeader from "../components/quiz/QuizAIHeader";

export const Route = createFileRoute("/quiz/ai")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { submitAnswer, lives } = useGameContext();
  const { questions, recordAnswer } = useQuizContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  useEffect(() => {
    if (questions && currentIndex >= questions.length) {
      navigate({ to: "/results/ai" });
    }
  }, [currentIndex, questions]);

  if (lives === 0) return <LivesModal />;
  if (!questions || questions.length === 0) return null;
  if (currentIndex >= questions.length) return null;

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    const isCorrect = index === currentQuestion.correct;
    submitAnswer(isCorrect);
    recordAnswer(index);
  };

  return (
    <div className="flex flex-col min-h-full">
      <QuizAiHeader
        currentIndex={currentIndex}
        totalQuestions={questions.length}
      />
      <div className="flex-1 px-4 pb-4">
        <AIQuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          selectedAnswer={selectedAnswer}
        />
      </div>
      <div className="px-4 pb-4">
        <button
          onClick={() => {
            setSelectedAnswer(null);
            setCurrentIndex((prev) => prev + 1);
          }}
          disabled={selectedAnswer === null}
          className="w-full bg-[#1DB87A] disabled:opacity-40 text-white font-black py-4 rounded-xl"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
