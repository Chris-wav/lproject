interface CompletedLessonCardProps {
  icon: React.ReactNode;
  title: string;
  category: string;
  difficulty: string;
  score: number;
  total: number;
}

const CompletedLessonCard = ({
  icon,
  title,
  category,
  difficulty,
  score,
  total,
}: CompletedLessonCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm">
      <div className="w-10 h-10 rounded-xl bg-[#0BC4E3]/12 flex items-center justify-center text-xl flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <p className="font-display font-[800] text-sm text-[#1a1a2e]">
          {title}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">
          {category} · {difficulty}
        </p>
      </div>
      <span className="font-display font-[800] text-sm text-[#27AE60]">
        {score}/{total}
      </span>
    </div>
  );
};
export default CompletedLessonCard;
