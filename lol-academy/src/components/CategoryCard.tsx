import React from "react";

interface Props {
  category: string;
  icon: string;
  lessons: number;
  progress: number;
  id: string;
}

const CategoryCard = ({ category, icon, lessons, progress, id }: Props) => {
  return (
    <div className="flex items-center justify-between bg-white rounded-2xl px-4 py-3 shadow-sm">
      {/* Icon */}
      <div className="bg-cyan-100 rounded-xl w-12 h-12 flex items-center justify-center text-2xl shrink-0">
        {icon}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 flex-1 mx-3">
        <span className="font-bold text-[15px] text-gray-900">{category}</span>
        <span className="text-xs text-gray-400">{lessons} lessons</span>
        <div className="w-full bg-gray-100 rounded-full h-1.5">
          <div
            className="bg-cyan-400 h-1.5 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Arrow */}
      <span className="text-gray-300 text-lg shrink-0">›</span>
    </div>
  );
};

export default CategoryCard;
