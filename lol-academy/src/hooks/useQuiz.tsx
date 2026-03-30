import { useState } from "react";
import type { Question } from "../types/types";
import { useGameContext } from "../context/GameContext";

const useQuiz = (questions: Question[]) => {
  const { lives, submitAnswer } = useGameContext();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);

  const [answers, setAnswers] = useState<string[]>([]);
  const [hasAnswered, setHasAnswered] = useState(false);
  const handleAnswer = (id: string) => {
    if (hasAnswered) return;
    setHasAnswered(true);
    setSelectedOption(id);
    const isCorrect = id === questions[currentQuestionIndex].correctAnswer;
    setIsAnswerCorrect(isCorrect);
    submitAnswer(isCorrect);
  };

  const handleContinue = () => {
    setAnswers((prev) => [...prev, selectedOption!]);
    setCurrentQuestionIndex((prev) => prev + 1);
    setSelectedOption(null);
    setIsAnswerCorrect(null);
    setHasAnswered(false);
  };
  return {
    currentQuestionIndex,
    selectedOption,
    isAnswerCorrect,
    lives,
    hasAnswered,
    answers,
    handleAnswer,
    handleContinue,
  };
};

export default useQuiz;
