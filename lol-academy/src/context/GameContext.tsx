import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuth } from "./AuthContext";
import supabase from "../lib/supabase";

interface GameContextType {
  lives: number;
  xp: number;
  level: number;
  streak: number;
  correctAnswers: number;
  completedLessonIds: Set<string>;
  submitAnswer: (isCorrect: boolean) => void;
  completeLesson: (lessonId: string) => void;
}

export const GameContext = createContext<GameContextType | null>(null);

export const useGameContext = () => {
  const ctx = useContext(GameContext);
  if (!ctx)
    throw new Error("useGameContext must be used within GameContextProvider");
  return ctx;
};

export const GameContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { profile, user } = useAuth();
  const [lives, setLives] = useState(5);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [completedLessonIds, setCompletedLessonIds] = useState<Set<string>>(
    new Set(),
  );

  const level = Math.floor(xp / 1000);

  useEffect(() => {
    if (profile) {
      setLives(profile.lives);
      setXp(profile.xp);
      setStreak(profile.streak);
      setCorrectAnswers(profile.correct_answers);
      setCompletedLessonIds(new Set(profile.completed_lesson_ids));
    }
  }, [profile]);

  const completeLesson = useCallback(
    async (lessonId: string) => {
      if (!user) return;
      if (completedLessonIds.has(lessonId)) return; // ← duplicate check
      const newIds = new Set(completedLessonIds);
      newIds.add(lessonId);
      setCompletedLessonIds(newIds);
      await supabase
        .from("profiles")
        .update({ completed_lesson_ids: Array.from(newIds) })
        .eq("id", user.id);
    },
    [user, completedLessonIds],
  );

  const submitAnswer = async (isCorrect: boolean) => {
    if (!user) return;

    if (isCorrect) {
      const newXp = xp + 10;
      const newCorrectAnswers = correctAnswers + 1;
      setXp(newXp);
      setCorrectAnswers(newCorrectAnswers);
      await supabase
        .from("profiles")
        .update({ xp: newXp, correct_answers: newCorrectAnswers })
        .eq("id", user.id);
    } else {
      if (lives <= 0) return;
      const newLives = lives - 1;
      setLives(newLives);
      await supabase
        .from("profiles")
        .update({ lives: newLives })
        .eq("id", user.id);
    }
  };

  return (
    <GameContext.Provider
      value={{
        lives,
        xp,
        level,
        streak,
        correctAnswers,
        completedLessonIds,
        submitAnswer,
        completeLesson,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
