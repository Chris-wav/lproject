import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getLeaderboard } from "../services/leaderboard";
import { useAuth } from "../context/AuthContext";
import PodiumCard from "../components/shared/PodiumCard";


export const Route = createFileRoute("/ranks")({
  component: RouteComponent,
});


function RouteComponent() {
  const { user } = useAuth();
  const { data: players, isLoading } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: getLeaderboard,
  });

  return (
    <div className="flex flex-col gap-4 px-4 pt-6 pb-4">
      <h1 className="text-5xl font-display pl-2">Ranks</h1>

      {/* Top 3 podium */}
      {!isLoading && players && players.length >= 3 && (
        <div className="flex items-end justify-center gap-3 mt-2 mb-2">
          {/* 2nd */}
          <PodiumCard player={players[1]} rank={2} isMe={players[1].id === user?.id} />
          {/* 1st */}
          <PodiumCard player={players[0]} rank={1} isMe={players[0].id === user?.id} tall />
          {/* 3rd */}
          <PodiumCard player={players[2]} rank={3} isMe={players[2].id === user?.id} />
        </div>
      )}

      {/* Rest of the list */}
      {isLoading ? (
        <div className="flex justify-center mt-10">
          <span className="text-gray-400 font-body">Loading...</span>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {players?.slice(3).map((player, index) => (
            <div
              key={player.id}
              className={`flex items-center gap-3 p-3 rounded-2xl ${player.id === user?.id ? "bg-[#0BC4E3] bg-opacity-10 border border-[#0BC4E3]" : "bg-white"}`}
            >
              <span className="font-display text-lg w-6 text-center text-gray-400">
                {index + 4}
              </span>
              <div className="w-9 h-9 rounded-full bg-[#1A1A2E] flex items-center justify-center text-lg">
                {player.avatar ?? "🎮"}
              </div>
              <div className="flex-1">
                <p className={`font-display font-bold text-sm ${player.id === user?.id ? "text-[#0BC4E3]" : "text-[#1A1A2E]"}`}>
                  {player.username}
                  {player.id === user?.id && " (You)"}
                </p>
                <p className="text-xs text-gray-400">{player.xp} XP</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs">🔥</span>
                <span className="text-xs font-bold text-gray-500">{player.streak}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
