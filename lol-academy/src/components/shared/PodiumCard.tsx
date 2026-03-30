
interface PodiumCardProps {
  player: { username: string; xp: number; avatar?: string | null };
  rank: 1 | 2 | 3;
  isMe: boolean;
  tall?: boolean;
}

const MEDAL = ["🥇", "🥈", "🥉"];
const HEIGHTS = { 1: "h-24", 2: "h-16", 3: "h-14" };

function PodiumCard({ player, rank, isMe, tall }: PodiumCardProps) {
  return (
    <div className={`flex flex-col items-center gap-1 ${tall ? "mb-0" : "mb-0"}`}>
      <span className="text-2xl">{MEDAL[rank - 1]}</span>
      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${isMe ? "bg-[#0BC4E3]" : "bg-[#1A1A2E]"}`}>
        {player.avatar ?? "🎮"}
      </div>
      <p className={`font-display text-xs font-bold text-center max-w-[70px] truncate ${isMe ? "text-[#0BC4E3]" : "text-[#1A1A2E]"}`}>
        {player.username}
      </p>
      <p className="text-xs text-gray-400">{player.xp} XP</p>
      <div className={`w-[70px] ${HEIGHTS[rank]} rounded-t-xl ${rank === 1 ? "bg-[#FFD700]" : rank === 2 ? "bg-[#C0C0C0]" : "bg-[#CD7F32]"} opacity-60`} />
    </div>
  );
}

export default PodiumCard;
