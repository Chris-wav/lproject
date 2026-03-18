import { useContext, createContext } from "react";

interface GameContextType {
  xp: number;
  level: number;
  streak: number;
  completedLessons: string[];
  answers: string[]; 
}
//custom hook for reusability convinience
export const useGame = () => {
  const context = useContext(appContext);
  if (!context) throw new Error("Must be used inside within game provider");
  return context;
};
const appContext = createContext<GameContextType | null>(null);
