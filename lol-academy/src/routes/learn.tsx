import { createFileRoute } from "@tanstack/react-router";
import TopBarLearnPage from "../components/TopBarLearnPage";
import { categories } from "../data/content";
import CategoriesLearn from "../components/CategoriesLearnPage";
import AiTrainCard from "../components/AiTrainCard";

export const Route = createFileRoute("/learn")({
  component: LearnPage,
});

function LearnPage() {
  return (
    <div className="flex flex-col gap-5 justify-center  ">
      <TopBarLearnPage />
      <AiTrainCard />
      <span className="font-display font-800 text-2xl pl-3">Categories</span>
      {categories.map((category) => (
        <CategoriesLearn key={category.id} category={category} progress={50} />
      ))}
    </div>
  );
}
