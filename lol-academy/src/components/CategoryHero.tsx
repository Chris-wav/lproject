import type { Lesson } from "../types/types";

interface Props {
  title: string;
  icon: string;
  lessons: Lesson[];
  description: string;
  progress: number;
}

const CategoryHero = ({
  title,
  icon,
  lessons,
  description,
  progress,
}: Props) => {
  const totalQuestions = lessons.reduce(
    (acc, lesson) => acc + lesson.questions.length,
    0,
  );

  const [first, ...rest] = title.split(" ");
  const second = rest.join(" ");

  return (
    <div className="bg-[#1A1A2E] rounded-[24px] mx-4 mt-4 p-5 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="rounded-full bg-circle-bg w-[110px] h-[110px] absolute right-[-20px] top-[-20px]" />
      <div className="rounded-full bg-circle-bg w-[60px] h-[60px] absolute right-[60px] bottom-[-20px]" />

      {/* Top row: icon + title + meta */}
      <div className="flex items-center gap-4 mb-4 relative z-10">
        <div className="bg-cyan-400/20 rounded-[16px] w-14 h-14 flex items-center justify-center text-3xl flex-shrink-0">
          {icon}
        </div>
        <div>
          <div className="font-display font-[800] text-white text-[22px]">
            {title}
          </div>
          <div className="text-white/40 text-[12px] mt-1">
            {lessons.length} lessons · {totalQuestions} questions
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-white/50 text-[13px] leading-relaxed mb-4 relative z-10">
        {description}
      </p>

      {/* Progress bar */}
      <div className="relative z-10">
        <div className="flex justify-between text-[11px] mb-1.5">
          <span className="text-white/30">Overall Progress</span>
          <span className="text-cyan-400 font-[600]">{progress}%</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-1.5">
          <div
            className="bg-cyan-400 h-1.5 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryHero;
