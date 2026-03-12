interface OptionCardProps {
  optionDescription: string;
  index: number;
  hasAnswered: boolean;
  isSelected: boolean;
  isCorrect: boolean;
}
const OptionCard = ({
  optionDescription,
  index,
  hasAnswered,
  isSelected,
  isCorrect,
}: OptionCardProps) => {
  const letters: { [key: number]: string } = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
  };
  let color = "";
  if (hasAnswered) {
    if (isCorrect) {
      color = "border-2 border-[#27AE60] bg-[#F0FBF4]";
    } else if (isSelected) {
      color = "border-2 border-[#E74C3C] bg-[#FFF0EE]";
    }
  }

  return (
    <div
      className={`${color || "bg-white"} flex items-center gap-1 rounded-xl  px-4 py-2 shadow-md w-full `}
    >
      <div className={`w-9 h-9 flex items-center justify-center flex-shrink-0`}>
        <span className="font-display font-[800] text-sm text-[#1a1a2e]">
          {letters[index + 1]}
        </span>
      </div>
      <span className="font-body text-[14px] text-[#333] font-[500]">
        {optionDescription}
      </span>
    </div>
  );
};

export default OptionCard;
