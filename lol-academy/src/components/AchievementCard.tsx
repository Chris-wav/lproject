import React from "react";
interface AchievementCardProps {
  icon: string;
  title: string;
  description: string;
  bg: string;
  locked: boolean;
}
const AchievementCard = ({
  icon,
  title,
  description,
  bg,
  locked,
}: AchievementCardProps) => {
  return (
    <div
      className={`bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm ${locked ? "opacity-50" : ""}`}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
        style={{ background: bg }}
      >
        {icon}
      </div>
      <div className="flex-1">
        <p className="font-display font-[800] text-sm text-[#1a1a2e]">
          {title}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">{description}</p>
      </div>
      <span className="text-lg">{locked ? "🔒" : "✅"}</span>
    </div>
  );
};
export default AchievementCard;
