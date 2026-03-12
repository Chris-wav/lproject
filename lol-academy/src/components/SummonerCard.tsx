const SummonerCard = () => {
  return (
    <div className="bg-[#1A1A2E] rounded-[20px] p-5 w-[90%] mx-auto mt-2 relative overflow-hidden text-white">
      {/* Decorative circles */}
      <div className="absolute w-44 h-44 rounded-full bg-[#0BC4E3]/8 -top-14 -right-10" />
      <div className="absolute w-28 h-28 rounded-full bg-[#0BC4E3]/5 -bottom-8 -left-5" />

      {/* Top row */}
      <div className="flex items-center gap-4 relative z-10 mb-5">
        <div className="w-14 h-14 rounded-2xl bg-[#0BC4E3]/20  flex items-center justify-center text-3xl flex-shrink-0">
          <span className="">🎮</span>
        </div>
        <div className="flex-1">
          <p className="font-display font-[800] text-lg">Summoner</p>
          <p className="text-[#0BC4E3] text-xs font-semibold mt-1">
            ⚔️ Gold Strategist
          </p>
        </div>
        <button className="bg-[#0BC4E3]/15 border border-[#0BC4E3]/30 rounded-xl px-3 py-1 text-[#0BC4E3] text-xs font-bold">
          Edit
        </button>
      </div>

      {/* XP Bar */}
      <div className="relative z-10">
        <div className="flex justify-between text-xs text-white/50 mb-2">
          <span>SUMMONER LEVEL 12</span>
          <span>620 / 1000 XP</span>
        </div>
        <div className="bg-white/10 rounded-full h-2">
          <div
            className="bg-[#0BC4E3] h-2 rounded-full"
            style={{ width: "62%" }}
          />
        </div>
        <div className="mt-2 inline-flex items-center gap-1 bg-[#0BC4E3]/15 rounded-full px-3 py-1">
          <span className="text-[#0BC4E3] text-xs font-bold">
            ⚡ 380 XP to next level
          </span>
        </div>
      </div>
    </div>
  );
};

export default SummonerCard;
