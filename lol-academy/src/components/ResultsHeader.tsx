interface ResultsHeaderProps {
  score: number;
  total: number;
  lessonTitle: string;
  lessonDifficulty: "beginner" | "intermediate";
}
const ResultsHeader = ({
  score,
  total,
  lessonTitle,
  lessonDifficulty,
}: ResultsHeaderProps) => {
  const isIntermediate = lessonDifficulty === "intermediate";
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="flex flex-col items-center gap-4 p-6 text-center">
      <div className="w-24 h-24 rounded-full bg-[#FFF8E1] flex items-center justify-center">
        <span className="text-5xl">🏆</span>
      </div>

      <div>
        <div className="flex flex-col gap-0.5 items-center">
          <h2 className="font-display font-[800] text-2xl text-[#1a1a2e]">
            Lesson
          </h2>
          <h2 className="font-display font-[800] text-2xl text-[#1a1a2e]">
            Complete!
          </h2>
        </div>
      </div>
      <div className="flex items-center gap-2 ">
        <p className="font-body text-gray-400 text-sm mt-1 my-auto">
          {lessonTitle}
        </p>

        <span
          className={`px-3 py-1 rounded-full text-xs font-bold font-body ${isIntermediate ? "bg-[#FFF3E0] text-[#F39C12]" : "bg-[#E8F8F0] text-[#27AE60]"}`}
        >
          {lessonDifficulty.toUpperCase()}
        </span>
      </div>

      <div className="bg-white rounded-2xl p-5 w-full shadow-sm">
        <p className="font-display font-[800] text-5xl text-[#1a1a2e]">
          {score}
          <span className="text-2xl text-gray-300">/{total}</span>
        </p>
        <p className="font-body text-gray-400 text-sm mt-1">correct answers</p>
        <div className="w-full bg-gray-100 rounded-full h-2 mt-3">
          <div
            className="bg-[#0BC4E3] h-2 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ResultsHeader;
