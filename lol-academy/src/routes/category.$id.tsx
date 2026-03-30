import { createFileRoute } from "@tanstack/react-router";
import { categories } from "../data/content";
import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import CategoryHero from "../components/learn/CategoryHero";
import LessonsCard from "../components/learn/LessonsCard";
import { useGameContext } from "../context/GameContext";

export const Route = createFileRoute("/category/$id")({
  component: () => {
    const id = Route.useParams().id;
    const category = categories.find((c) => c.id === id);
    const { completedLessonIds } = useGameContext();

    const progress = category
      ? Math.round(
          (category.lessons.filter((l) => completedLessonIds.has(l.id)).length /
            category.lessons.length) *
            100,
        )
      : 0;

    return (
      <div className="">
        <div className="flex items-center gap-4 p-4">
          <Link to="/">
            <span><ArrowLeft /></span>
          </Link>
          <h1 className="font-[720] font-display text-2xl">{category?.title}</h1>
        </div>
        <CategoryHero
          title={category?.title}
          icon={category?.icon}
          lessons={category?.lessons}
          description={category?.description}
          progress={progress}
        />
        <div className="mt-5 px-4 flex flex-col items-center gap-2 justify-start">
          <span className="font-display font-[800] text-2xl">Lessons</span>
          <div className="flex flex-col items-start gap-2 justify-start">
            {category?.lessons.map((lesson, index) => (
              <Link to="/quiz/$id" params={{ id: lesson.id }} key={lesson.id}>
                <div>
                  <LessonsCard lesson={lesson} index={index} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  },
});
