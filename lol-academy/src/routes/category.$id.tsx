import { createFileRoute } from "@tanstack/react-router";
import { categories } from "../data/content";
import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import CategoryHero from "../components/CategoryHero";

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
      </div>
    );
  },
});
