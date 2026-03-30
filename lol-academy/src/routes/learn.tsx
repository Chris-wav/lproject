import { createFileRoute } from "@tanstack/react-router";
import TopBarLearnPage from "../components/learn/TopBarLearnPage";
import { categories } from "../data/content";
import CategoriesLearn from "../components/learn/CategoriesLearnPage";
import AiTrainCard from "../components/quiz/AiTrainCard";
import { useGameContext } from "../context/GameContext";
import type { Category } from "../types/types";

export const Route = createFileRoute("/learn")({
  component: LearnPage,
});

function LearnPage() {
  const { completedLessonIds } = useGameContext();

  const getCategoryProgress = (category: Category) => {
    const completed = category.lessons.filter((l) =>
      completedLessonIds.has(l.id),
    ).length;
    return Math.round((completed / category.lessons.length) * 100);
  };

  return (
    <div className="flex flex-col gap-5 justify-center">
      <TopBarLearnPage />
      <AiTrainCard />
      <span className="font-display font-800 text-2xl pl-3">Categories</span>
      {categories.map((category) => (
        <CategoriesLearn
          key={category.id}
          category={category}
          progress={getCategoryProgress(category)}
        />
      ))}
    </div>
  );
}
