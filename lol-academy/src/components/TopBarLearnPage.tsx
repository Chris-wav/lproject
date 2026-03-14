const TopBarLearnPage = () => {
  return (
    <div className="flex flex-col gap-3 w-full mt-5 px-4">
      <div>
        <h1 className="font-display font-[800] text-2xl text-[#1a1a2e]">
          Learn 📚
        </h1>
        <p className="text-xs text-gray-400 mt-1">3 categories · 6 lessons</p>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm">
        <span className="text-gray-300">🔍</span>
        <input
          type="text"
          placeholder="Search lessons..."
          className="bg-transparent text-sm text-gray-400 outline-none w-full font-body"
        />
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {["All", "Beginner", "Intermediate", "In Progress"].map((chip, i) => (
          <span
            key={i}
            className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${i === 0 ? "bg-[#1a1a2e] text-white" : "bg-white text-gray-400 shadow-sm"}`}
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopBarLearnPage;
