import React from "react";
interface MilestoneCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const MilestoneCard = ({ title, icon, description }: MilestoneCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-3 flex flex-col items-center text-center gap-1 shadow-sm">
      <div className="text-2xl mb-1">{icon}</div>
      <span className="font-display font-[800] text-xl text-[#1a1a2e]">
        {title}
      </span>
      <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
        {description}
      </span>
    </div>
  );
};

export default MilestoneCard;
