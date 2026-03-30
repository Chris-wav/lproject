import type { Lesson } from "../../types/types";
import React from "react";

interface LessonsCardProps {
  lesson: Lesson;
  index: number;
}

const LessonsCard: React.FC<LessonsCardProps> = ({ lesson, index }) => {
  const isIntermediate = lesson.difficulty === "intermediate";
  const numBg = isIntermediate ? "bg-[#FFF3E0]" : "bg-[#E8F8F0]";
  const numColor = isIntermediate ? "text-[#F39C12]" : "text-[#27AE60]";
  const badgeBg = isIntermediate ? "bg-[#FFF3E0]" : "bg-[#E8F8F0]";
  const badgeColor = isIntermediate ? "text-[#F39C12]" : "text-[#27AE60]";

  return (
    <div className="flex gap-2 p-4 bg-white rounded-[16px] mb-4 items-center w-[90vw]">
      <span className={`font-display ${numBg} ${numColor} p-5 rounded-[20px] text-2xl shrink-0`}>
        {index + 1}
      </span>
      <div>
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-body font-bold">{lesson.title}</h3>
        </div>
        <div className="flex justify-between items-center gap-4 mt-1">
          <p className={`${badgeBg} ${badgeColor} font-bold font-body px-2 py-1 rounded-[12px] text-xs`}>
            {lesson.difficulty.toUpperCase()}
          </p>
          <p className="text-gray-300 font-body">{lesson.questions?.length} questions</p>
        </div>
      </div>
    </div>
  );
};

export default LessonsCard;
