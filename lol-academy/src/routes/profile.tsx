import { createFileRoute } from "@tanstack/react-router";
import SummonerCard from "../components/SummonerCard";
import MilestoneCard from "../components/MilestoneCard";

export const Route = createFileRoute("/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  const stats = [
    { icon: "🔥", title: "12", description: "Day Streak" },
    { icon: "✅", title: "47", description: "Correct" },
    { icon: "📚", title: "8", description: "Lessons" },
  ];
  return (
    <div className="flex flex-col items-start gap-5 w-full mt-5 ">
      <h1 className="text-5xl font-display pl-6">Profile</h1>
      <SummonerCard />
      <div className="mt-5 grid grid-cols-3 gap-3 w-[90%] mx-auto">
        {stats.map((stat, index) => (
          <MilestoneCard
            key={index}
            icon={stat.icon}
            title={stat.title}
            description={stat.description}
          />
        ))}
      </div>
    </div>
  );
}
