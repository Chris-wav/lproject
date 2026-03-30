import CategoryCard from "./CategoryCard";
import { Link } from "@tanstack/react-router";
import { categories } from "../../data/content";
import { useGameContext } from "../../context/GameContext";

const Categories = () => {
  const { completedLessonIds } = useGameContext();

  const getProgress = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId);
    if (!category) return 0;
    const completed = category.lessons.filter((l) =>
      completedLessonIds.has(l.id),
    ).length;
    return Math.round((completed / category.lessons.length) * 100);
  };

  return (
    <div className="flex flex-col gap-4 mt-6 px-4 pb-5">
      <div className="flex justify-between items-center px-2">
        <span className="font-[710] font-display text-2xl py-2">Categories</span>
        <a href="">See all</a>
      </div>
      {categories.map((category) => (
        <Link key={category.id} to="/category/$id" params={{ id: category.id }}>
          <CategoryCard
            category={category.title}
            icon={category.icon}
            lessons={category.lessons.length}
            progress={getProgress(category.id)}
            id={category.id}
          />
        </Link>
      ))}
    </div>
  );
};

export default Categories;
