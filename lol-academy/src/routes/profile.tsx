import { createFileRoute } from "@tanstack/react-router";
import SummonerCard from "../components/SummonerCard";
import MilestoneCard from "../components/MilestoneCard";
import AchievementCard from "../components/AchievementCard";
import CompletedLessonCard from "../components/CompletedLessonCard";

export const Route = createFileRoute("/profile")({
  component: RouteComponent,
});

function RouteComponent() {
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
  const completedLessons = [
    {
      icon: "🗺️",
      title: "Vision Control",
      category: "Map Awareness",
      difficulty: "Beginner",
      score: 3,
      total: 3,
    },
    {
      icon: "⚔️",
      title: "Objective Priority",
      category: "Decision Making",
      difficulty: "Beginner",
      score: 2,
      total: 3,
    },
    {
      icon: "🎯",
      title: "Ability Combos",
      category: "Champion Mechanics",
      difficulty: "Beginner",
      score: 3,
      total: 3,
    },
  ];
  const stats = [
    { icon: "🔥", title: "12", description: "Day Streak" },
    { icon: "✅", title: "47", description: "Correct" },
    { icon: "📚", title: "8", description: "Lessons" },
  ];
  return (
    <div className="flex flex-col items-start gap-5 w-full mt-5 ">
      <h1 className="text-5xl font-display pl-6">Profile</h1>
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
      <h1 className="text-3xl font-display pl-4">Completed lessons</h1>

      <div className="mt-1 grid grid-cols-1 gap-3 w-[90%] mx-auto">
        {completedLessons.map((lesson, index) => (
          <CompletedLessonCard
            key={index}
            icon={lesson.icon}
            title={lesson.title}
            category={lesson.category}
            difficulty={lesson.difficulty}
            score={lesson.score}
            total={lesson.total}
          />
        ))}
      </div>
    </div>
  );
}
