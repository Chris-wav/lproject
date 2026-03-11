import { createFileRoute } from "@tanstack/react-router";
import { categories } from "../data/content";
import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import CategoryHero from "../components/CategoryHero";
import LessonsCard from "../components/LessonsCard";

export const Route = createFileRoute("/category/$id")({
  component: () => {
    const id = Route.useParams().id;
    const category = categories.find((c) => c.id === id);
    return (
      <div className="">
        <div className="flex items-center gap-4 p-4">
          <Link to="/">
            <span>
              <ArrowLeft />
            </span>
          </Link>
          <h1 className="font-[720] font-display text-2xl">
            {category?.title}
          </h1>
        </div>
        <CategoryHero
          title={category?.title}
          icon={category?.icon}
          lessons={category?.lessons}
          description={category?.description}
          progress={Math.floor(Math.random() * 100) + 1}
        />
        <div className="mt-5 px-4 flex flex-col items-center gap-2 justify-start">
          <span className="font-display font-[800] text-2xl">Lessons</span>
          <div className="flex flex-col items-start gap-2 justfy-start">
            {category?.lessons.map((lesson, index) => (
              <Link to="/quiz/$id" params={{ id: lesson.id }}>
                <div key={lesson.id}>
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
