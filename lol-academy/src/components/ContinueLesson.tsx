import { Play } from "lucide-react";

const ContinueLesson = () => {
  
  return (
    <div className=" flex justify-between w-[90%] bg-[#1A1A2E] rounded-[20px] h-auto mx-auto mt-7 relative overflow-hidden">
      <div className="h-[75px] flex">
        <div className="rounded-full bg-circle-bg w-[90px] h-[90px] absolute right-[-15px] bottom-7   "></div>
        <span className="p-6 h-px bg-[#0BC4E3] w-[30px] block my-auto mx-4  flex justify-center items-center  text-white text-xl font-bold rounded-[10px]">
          🗺️
        </span>
        <div className="flex flex-col justify-center  gap-1">
          <span className=" text-gray-400   text-sm ">Continue Lesson</span>
          <span className="text-white text-lg font-bold ">Vision control</span>
        </div>
      </div>

      <button className="mr-10 text-white bg-[#2a2a3e] w-10 h-10 rounded-full my-auto flex justify-center items-center">
        <Play size={16} fill="white" />
      </button>
    </div>
  );
};

export default ContinueLesson;
