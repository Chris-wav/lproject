import { useAuth } from "../context/AuthContext";

const TopBar = () => {
  const { profile } = useAuth();
  return (
    <div className="flex items-start justify-between pt-6 px-4">
      <div>
        <span className="text-sm text-[#9898B0]">Good morning,</span>
        <p className="text-[24px] font-[800] font-display leading-tight">
          {profile?.username} 👋
        </p>
      </div>
      <div className="flex items-center gap-1 px-3 py-2 bg-[#F0E6C8] rounded-2xl border-2 border-[#C89B3C]">
        <span>🔥</span>
        <span className="font-body text-[#8B6914] font-[600] text-sm">
          {profile?.streak} day streak
        </span>
      </div>
    </div>
  );
};

export default TopBar;
