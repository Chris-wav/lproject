import { createFileRoute } from "@tanstack/react-router";
import ResultsHeader from "../components/ResultsHeader";
import { categories } from "../data/content";
import XpCardResults from "../components/XpCardResults";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/results/$id")({
  validateSearch: (search: Record<string, unknown>) => ({
    score: Number(search.score ?? 0),
    total: Number(search.total ?? 0),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const { score, total } = Route.useSearch();
  const { id } = Route.useParams();

  const lesson = categories.flatMap((c) => c.lessons).find((l) => l.id === id);
  const category = categories.find((c) => c.lessons.some((l) => l.id === id));
  return (
    <div>
      <ResultsHeader
        score={score}
        total={total}
        lessonTitle={lesson?.title ?? "Unknown Lesson"}
        lessonDifficulty={lesson?.difficulty ?? "beginner"}
      />
      <XpCardResults />
      <div className="items-center flex flex-col mt-5">
        <hr className="border-0 h-px bg-[#1E4E5A] mt-4 w-[350px] opacity-50" />
        <Link
          to="/category/$id"
          params={{ id: category?.id ?? "" }}
          className="w-[91%] rounded-[8px] bg-[#0BC6E2]  text-[10px] font-semibold leading-none mt-5 mx-auto"
        >
          <button className="w-[100%] h-[45px] flex items-center justify-center text-white">
            <span className="font-display text-lg">Continue</span>
            <ArrowRight className="ml-1 w-3 h-3" />
          </button>
        </Link>
        <button className="border-1 border-gray-500 opacity-100 w-[91%] h-[45px] rounded-[8px] bg-none flex items-center justify-center text-[10px] font-semibold leading-none mt-5 mx-auto">
          <span className="font-display text-lg">Review Questions</span>
        </button>
      </div>
    </div>
  );
}
