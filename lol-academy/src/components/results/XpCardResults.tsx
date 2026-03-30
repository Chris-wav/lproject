import { useGameContext } from "../../context/GameContext";

interface XpCardResultsProps {
  score: number;
}

const XpCardResults = ({ score }: XpCardResultsProps) => {
  const { xp } = useGameContext();
  const xpInLevel = xp % 1000;
  const barWidth = (xpInLevel / 1000) * 100;

  return (
    <div className="flex justify-between items-center bg-[#1A1A2E] rounded-[20px] p-5 w-[90%] mx-auto mt-2 relative overflow-hidden">
      <span className="font-display text-4xl">⭐</span>
      <div className="flex flex-col">
        <span className="font-display font-lg text-gray-400">XP Earned:</span>
        <span className="font-display font-xl text-amber-500">+{score * 10} XP</span>
      </div>
      <div className="w-[57px] h-[8px] rounded-full bg-zinc-600 overflow-hidden">
        <div className="flex h-full items-center">
          <div className="h-full rounded-full bg-amber-500" style={{ width: `${barWidth}%` }} />
        </div>
      </div>
    </div>
  );
};

export default XpCardResults;
