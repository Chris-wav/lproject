import { useMutation } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import { generateQuiz } from "../services/api";

interface Question {
  question: string;
  options: string[];
  correct: number;
}

interface QuizContextType {
  questions: Question[] | null;
  champion: string;
  topic: string;
  difficulty: string;
  setChampion: (champion: string) => void;
  setTopic: (topic: string) => void;
  setDifficulty: (difficulty: string) => void;
  generateQuiz: (onSuccess?: () => void) => void;
  isPending: boolean;
}

export const QuizContext = createContext<QuizContextType>({
  questions: null,
  champion: "yasuo",
  topic: "mid",
  difficulty: "beginner",
  setChampion: () => {},
  setTopic: () => {},
  setDifficulty: () => {},
  generateQuiz: () => {},
  isPending: false,
});

export const useQuizContext = () => useContext(QuizContext);

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [champion, setChampion] = useState("yasuo");
  const [topic, setTopic] = useState("mid");
  const [difficulty, setDifficulty] = useState("beginner");

  const { mutate, isPending } = useMutation({
    mutationFn: () => generateQuiz(champion, topic, difficulty),
    onSuccess: (data) => {
      setQuestions(data.questions);
    },
  });

  return (
    <QuizContext.Provider
      value={{
        questions,
        champion,
        topic,
        difficulty,
        setChampion,
        setTopic,
        setDifficulty,
        generateQuiz: (onSuccess) => mutate(undefined, { onSuccess }),
        isPending,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
