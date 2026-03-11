const Level = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-10 relative">
      <svg width="90" height="90" viewBox="0 0 16 16">
        <rect x="4" y="0" width="8" height="1" fill="#C84B31"></rect>
        <rect x="3" y="1" width="10" height="1" fill="#C84B31"></rect>
        <rect x="5" y="2" width="6" height="1" fill="#E85D35"></rect>
        <rect x="3" y="3" width="10" height="6" fill="#F5CFA0"></rect>
        <rect x="4" y="5" width="3" height="2" fill="#1A1A2E"></rect>
        <rect x="9" y="5" width="3" height="2" fill="#1A1A2E"></rect>
        <rect x="5" y="5" width="1" height="1" fill="white"></rect>
        <rect x="10" y="5" width="1" height="1" fill="white"></rect>
        <rect x="7" y="7" width="2" height="1" fill="#D4A574"></rect>
        <rect x="1" y="4" width="2" height="2" fill="#F5CFA0"></rect>
        <rect x="13" y="4" width="2" height="2" fill="#F5CFA0"></rect>
        <rect x="0" y="3" width="2" height="2" fill="#F0E0C0"></rect>
        <rect x="14" y="3" width="2" height="2" fill="#F0E0C0"></rect>
        <rect x="4" y="9" width="8" height="5" fill="#4A7C59"></rect>
        <rect x="5" y="10" width="6" height="3" fill="#5A9C6A"></rect>
        <rect x="2" y="9" width="2" height="4" fill="#4A7C59"></rect>
        <rect x="12" y="9" width="2" height="4" fill="#4A7C59"></rect>
        <rect x="4" y="14" width="3" height="2" fill="#3A5C45"></rect>
        <rect x="9" y="14" width="3" height="2" fill="#3A5C45"></rect>
      </svg>
      <div
        style={{ borderRadius: "var(--radius-chat)" }}
        className="border-2 border-gray-500 bg-white px-2 py-3 text- absolute left-60 bottom-35"
      >
        <span>Ready to climb? Let's practice! 🗺️</span>
      </div>
      <div className="mx-4 mt-4 w-[86%] bg-white rounded-2xl px-4 py-3 flex flex-col gap-2 shadow-sm">
        <div className="flex justify-between w-full">
          <h2 className="text-[10px] font-[700] tracking-widest text-gray-400">
            SUMMONER LEVEL 12
          </h2>
          <span className="text-[10px] font-[700] text-yellow-500">
            620 / 1000 XP
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div className="bg-yellow-400 h-2 rounded-full w-[62%]" />
        </div>
      </div>
    </div>
  );
};

export default Level;
