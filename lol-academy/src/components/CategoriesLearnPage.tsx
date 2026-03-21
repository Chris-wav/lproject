import { Link } from "@tanstack/react-router";
import type { Category } from "../types/types";

interface Props {
  category: Category;
  progress: number;
}

const CategoriesLearn = ({ category, progress }: Props) => {
  return (
    <Link to="/category/$id" params={{ id: category.id }}>
      <div className="flex items-center justify-between bg-white rounded-2xl px-4 py-3 ml-1 shadow-sm w-[98%] ">
        <div className="bg-cyan-100 rounded-xl w-12 h-12 flex items-center justify-center text-2xl shrink-0">
          {category.icon}
        </div>
        <div className="flex flex-col gap-1 flex-1 mx-3">
          <span className="font-bold text-[15px] text-gray-900">
            {category.title}
          </span>
          <span className="text-xs text-gray-400">
            {category.lessons.length} lessons
          </span>
          <div className="w-full bg-gray-100 rounded-full h-1.5">
            <div
              className="bg-cyan-400 h-1.5 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <span className="text-gray-300 text-lg shrink-0">›</span>
      </div>
    </Link>
  );
};
export default CategoriesLearn;
