import { useMutation } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { getFeedbackFromAi } from "../services/feedback";
import { useEffect, useState } from "react";
import { useQuizContext } from "../context/QuizContext";
import XpCardResults from "../components/results/XpCardResults";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/results/ai")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { questions, userAnswers, champion, topic, difficulty } =
    useQuizContext();
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);

  const score =
    questions?.filter((q, i) => q.correct === userAnswers[i]).length ?? 0;
  const total = questions?.length ?? 0;

  const { mutate, isPending } = useMutation({
    mutationFn: getFeedbackFromAi,
    onSuccess: (data) => setAiFeedback(data),
    onError: () =>
      setAiFeedback("Great effort! Keep grinding and you'll master this. 💪"),
  });

  useEffect(() => {
    if (!questions || questions.length === 0) return;
    mutate({ questions, userAnswers, champion, topic, difficulty });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#EDEAE3]">
      <div className="flex flex-col items-center gap-4 p-6 text-center">
        <div className="w-24 h-24 rounded-full bg-[#FFF8E1] flex items-center justify-center">
          <span className="text-5xl">
            {score === total ? "🏆" : score >= total / 2 ? "⚡" : "💪"}
          </span>
        </div>
        <div className="flex flex-col gap-0.5 items-center">
          <h2 className="font-display font-[800] text-2xl text-[#1a1a2e]">Quiz</h2>
          <h2 className="font-display font-[800] text-2xl text-[#1a1a2e]">Complete!</h2>
        </div>
        <div className="bg-white rounded-2xl p-5 w-full shadow-sm">
          <p className="font-display font-[800] text-5xl text-[#1a1a2e]">
            {score}
            <span className="text-2xl text-gray-300">/{total}</span>
          </p>
          <p className="font-body text-gray-400 text-sm mt-1">correct answers</p>
          <div className="w-full bg-gray-100 rounded-full h-2 mt-3">
            <div
              className="bg-[#0BC4E3] h-2 rounded-full transition-all duration-500"
              style={{ width: total > 0 ? `${(score / total) * 100}%` : "0%" }}
            />
          </div>
        </div>
      </div>

      <XpCardResults score={score} />

      <div className="mx-4 mt-4 bg-[#1A1A2E] rounded-2xl p-5">
        <p className="text-[#0BC4E3] font-display font-bold text-sm mb-2">
          🤖 Coach Feedback
        </p>
        {isPending ? (
          <div className="flex gap-1 items-center">
            <span className="w-2 h-2 rounded-full bg-[#0BC4E3] animate-bounce [animation-delay:0ms]" />
            <span className="w-2 h-2 rounded-full bg-[#0BC4E3] animate-bounce [animation-delay:150ms]" />
            <span className="w-2 h-2 rounded-full bg-[#0BC4E3] animate-bounce [animation-delay:300ms]" />
          </div>
        ) : (
          <p className="text-white font-body text-sm leading-relaxed">{aiFeedback}</p>
        )}
      </div>

      <div className="items-center flex flex-col mt-5">
        <hr className="border-0 h-px bg-[#1E4E5A] mt-4 w-[350px] opacity-50" />
        <button
          onClick={() => navigate({ to: "/learn" })}
          className="w-[91%] rounded-[8px] bg-[#0BC6E2] h-[45px] flex items-center justify-center text-white mt-5 mx-auto"
        >
          <span className="font-display text-lg">Continue</span>
          <ArrowRight className="ml-1 w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
