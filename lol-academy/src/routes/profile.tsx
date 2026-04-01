import { createFileRoute } from "@tanstack/react-router";
import SummonerCard from "../components/profile/SummonerCard";
import MilestoneCard from "../components/profile/MilestoneCard";
import AchievementCard from "../components/profile/AchievementCard";
import CompletedLessonCard from "../components/learn/CompletedLessonCard";
import { logOut } from "../lib/auth";
import { useGameContext } from "../context/GameContext";
import { categories } from "../data/content";

export const Route = createFileRoute("/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  const { streak, correctAnswers, completedLessonIds } = useGameContext();

  const completedLessons = Array.from(completedLessonIds)
    .map((id) => categories.flatMap((c) => c.lessons).find((l) => l.id === id))
    .filter((l) => l !== undefined);

  const achievements = [
    {
      icon: "🏆",
      title: "First Victory",
      description: "Complete your first lesson",
      unlocked: true,
      bg: "#FFF8E1",
    },
    {
      icon: "🔥",
      title: "On Fire",
      description: "7 day streak",
      unlocked: true,
      bg: "rgba(11, 196, 227, 0.12)",
    },
    {
      icon: "⭐",
      title: "Perfect Round",
      description: "Score 100% on a lesson",
      unlocked: true,
      bg: "#E8F8F0",
    },
    {
      icon: "🗺️",
      title: "Map Master",
      description: "Complete all map awareness lessons",
      unlocked: false,
      bg: "#f5f5f5",
    },
  ];

  const stats = [
    { icon: "🔥", title: streak, description: "Day Streak" },
    { icon: "✅", title: correctAnswers, description: "Correct" },
    { icon: "📚", title: completedLessonIds.size, description: "Lessons" },
  ];

  return (
    <div className="flex flex-col items-start gap-5 w-full mt-5">
      <div className="flex justify-between items-center w-full px-5">
        <h1 className="text-5xl font-display pl-6">Profile</h1>
        <button
          className="w-30 bg-[#2C2A3A] text-white font-black text-sm p-1 rounded-xl"
          onClick={logOut}
        >
          <span className="text-lg">logout</span>
        </button>
      </div>

      <SummonerCard />

      <div className="mt-1 grid grid-cols-3 gap-3 w-[90%] mx-auto">
        {stats.map((stat, index) => (
          <MilestoneCard
            key={index}
            icon={stat.icon}
            title={stat.title}
            description={stat.description}
          />
        ))}
      </div>

      <h1 className="text-3xl font-display pl-4">Achievements</h1>
      <div className="mt-1 grid grid-cols-1 gap-3 w-[90%] mx-auto">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            icon={achievement.icon}
            title={achievement.title}
            description={achievement.description}
            bg={achievement.bg}
            locked={!achievement.unlocked}
          />
        ))}
      </div>
    </div>
  );
}
