import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuth } from "./AuthContext";
import supabase from "../lib/supabase";

const MAX_LIVES = 5;
const REFILL_INTERVAL_MINUTES = 30;

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
  const [lives, setLives] = useState(MAX_LIVES);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [completedLessonIds, setCompletedLessonIds] = useState<Set<string>>(new Set());

  const level = Math.floor(xp / 1000);

  useEffect(() => {
    if (!profile) return;

    // Lives refill logic
    const lastRefill = profile.last_refill_at ? new Date(profile.last_refill_at) : null;
    const now = new Date();
    const minutesSinceRefill = lastRefill
      ? (now.getTime() - lastRefill.getTime()) / 1000 / 60
      : Infinity;

    if (profile.lives < MAX_LIVES && minutesSinceRefill >= REFILL_INTERVAL_MINUTES) {
      // Πόσες φορές έχει περάσει το interval
      const refillCount = Math.floor(minutesSinceRefill / REFILL_INTERVAL_MINUTES);
      const newLives = Math.min(profile.lives + refillCount, MAX_LIVES);

      setLives(newLives);
      supabase
        .from("profiles")
        .update({ lives: newLives, last_refill_at: now.toISOString() })
        .eq("id", profile.id);
    } else {
      setLives(profile.lives);
    }

    setXp(profile.xp);
    setStreak(profile.streak);
    setCorrectAnswers(profile.correct_answers);
    setCompletedLessonIds(new Set(profile.completed_lesson_ids));
  }, [profile]);

  const completeLesson = useCallback(
    async (lessonId: string) => {
      if (!user) return;
      if (completedLessonIds.has(lessonId)) return;

      const newIds = new Set(completedLessonIds);
      newIds.add(lessonId);
      setCompletedLessonIds(newIds);

      const today = new Date().toISOString().split("T")[0];
      const lastPlayed = profile?.last_played?.split("T")[0] ?? null;

      let newStreak = streak;
      if (lastPlayed === null) {
        newStreak = 1;
      } else {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split("T")[0];

        if (lastPlayed === yesterdayStr) {
          newStreak = streak + 1;
        } else if (lastPlayed === today) {
          newStreak = streak;
        } else {
          newStreak = 1;
        }
      }

      setStreak(newStreak);
      await supabase
        .from("profiles")
        .update({
          completed_lesson_ids: Array.from(newIds),
          streak: newStreak,
          last_played: new Date().toISOString(),
        })
        .eq("id", user.id);
    },
    [user, completedLessonIds, streak, profile],
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
