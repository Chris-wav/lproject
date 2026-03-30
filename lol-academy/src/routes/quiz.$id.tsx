import { createFileRoute } from "@tanstack/react-router";
import QuestionCard from "../components/quiz/QuestionCard";
import type { Option, Question } from "../types/types";
import { categories } from "../data/content";
import OptionCard from "../components/quiz/OptionCard";
import { ArrowRight } from "lucide-react";
import useQuiz from "../hooks/useQuiz";
import QuizHeader from "../components/quiz/QuizHeader";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/quiz/$id")({
  component: QuizPage,
});

function QuizPage() {
  const id = Route.useParams().id;
  const category = categories.find((c) => c.lessons.some((l) => l.id === id));
  const lesson = categories.flatMap((c) => c.lessons).find((l) => l.id === id);

  const navigate = useNavigate();
  const {
    currentQuestionIndex,
    selectedOption,
    isAnswerCorrect,
    lives,
    handleAnswer,
    handleContinue,
    hasAnswered,
    answers,
  } = useQuiz(lesson?.questions ?? []);

  if (!lesson) {
    return <div>Lesson not found</div>;
  }
  const correct = answers.filter(
    (answer, index) => answer === lesson.questions[index].correctAnswer,
  ).length;

  if (currentQuestionIndex >= lesson.questions.length) {
    navigate({
      to: "/results/$id",
      params: { id: lesson.id },
      search: { score: correct, total: lesson.questions.length },
    });
    return null;
  }

  return (
    <div className="flex flex-col gap-4 p-4 items-start justify-start">
      <QuizHeader
        index={currentQuestionIndex}
        totalQuestions={lesson.questions.length}
        lives={lives}
      />
      <QuestionCard
        question={lesson.questions[currentQuestionIndex]}
        categoryTitle={category.title}
        categoryIcon={category.icon}
      />
      {lesson.questions[currentQuestionIndex].options.map((option, index) => (
        <div
          className="w-[91%] ml-[15px]"
          key={index}
          onClick={() => handleAnswer(option.id)}
        >
          <OptionCard
            key={index}
            optionDescription={option.text}
            index={index}
            isSelected={selectedOption === option.id}
            isCorrect={
              option.id === lesson.questions[currentQuestionIndex].correctAnswer
            }
            hasAnswered={selectedOption !== null}
          />
        </div>
      ))}
      {hasAnswered && (
        <div
          className={`w-[91%] mx-auto rounded-2xl p-4 flex gap-3 items-start ${isAnswerCorrect ? "bg-[#F0FBF4] border-2 border-[#27AE60]" : "bg-[#FFF0EE] border-2 border-[#E74C3C]"}`}
        >
          <span className="text-xl flex-shrink-0">
            {isAnswerCorrect ? "✅" : "❌"}
          </span>
          <div>
            <p
              className={`font-display font-[800] text-sm mb-1 ${isAnswerCorrect ? "text-[#27AE60]" : "text-[#E74C3C]"}`}
            >
              {isAnswerCorrect ? "Correct!" : "Not quite!"}
            </p>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              {lesson.questions[currentQuestionIndex].explanation}
            </p>
          </div>
        </div>
      )}
      <button
        onClick={handleContinue}
        className="flex items-center justify-center gap-1 text-sm text-[#1a1a2e] font-[500] bg-[#0BC4E3] bg-opacity-10 px-3 py-1 rounded-lg mt-2 w-[91%] h-[50px] mx-auto"
      >
        Continue <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
