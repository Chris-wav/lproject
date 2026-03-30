import { useMutation } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import { generateQuiz } from "../services/api";

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

interface QuizContextType {
  questions: Question[] | null;
  champion: string;
  topic: string;
  difficulty: string;
  userAnswers: number[];
  setChampion: (champion: string) => void;
  setTopic: (topic: string) => void;
  setDifficulty: (difficulty: string) => void;
  generateQuiz: (onSuccess?: () => void) => void;
  recordAnswer: (answerIndex: number) => void;
  resetQuiz: () => void;
  isPending: boolean;
}

export const QuizContext = createContext<QuizContextType>({
  questions: null,
  champion: "yasuo",
  topic: "mid",
  difficulty: "beginner",
  userAnswers: [],
  setChampion: () => {},
  setTopic: () => {},
  setDifficulty: () => {},
  generateQuiz: () => {},
  recordAnswer: () => {},
  resetQuiz: () => {},
  isPending: false,
});

export const useQuizContext = () => useContext(QuizContext);

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [champion, setChampion] = useState("yasuo");
  const [topic, setTopic] = useState("mid");
  const [difficulty, setDifficulty] = useState("beginner");
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const { mutate, isPending } = useMutation({
    mutationFn: () => generateQuiz(champion, topic, difficulty),
    onSuccess: (data) => {
      setQuestions(data.questions);
      setUserAnswers([]); // reset answers when new quiz loads
    },
  });

  const recordAnswer = (answerIndex: number) => {
    setUserAnswers((prev) => [...prev, answerIndex]);
  };

  const resetQuiz = () => {
    setUserAnswers([]);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        champion,
        topic,
        difficulty,
        userAnswers,
        setChampion,
        setTopic,
        setDifficulty,
        generateQuiz: (onSuccess) => mutate(undefined, { onSuccess }),
        recordAnswer,
        resetQuiz,
        isPending,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
