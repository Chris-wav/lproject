import React, { useState } from "react";
import type { Question } from "../types/types";

const useQuiz = (questions: Question[]) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [lives, setLives] = useState(3);
  const [answers, setAnswers] = useState<string[]>([]);
  const [hasAnswered, setHasAnswered] = useState(false);
  const handleAnswer = (id: string) => {
    setHasAnswered(true);
    setSelectedOption(id);
    if (id === questions[currentQuestionIndex].correctAnswer) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
      setLives((prev) => prev - 1);
    }
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
    handleAnswer,
    handleContinue,
  };
};

export default useQuiz;
