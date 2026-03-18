import { YasuoPixel } from "../pixelArt/YasuoPixel";
import { VaynePixel } from "../pixelArt/VaynePixel";
import { ViPixel } from "../pixelArt/ViPixel";
import { ZedPixel } from "../pixelArt/ZedPixel";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTagline } from "../services/api";
import { pixelChampions } from "../pixelArt/pixelChampions";
const LoginHeader = () => {
  const index = useMemo(() => {
    const index = Math.floor(Math.random() * pixelChampions.length);
    return index;
  }, []);
  const championToShow = pixelChampions[index].img;
  const nameOfChampion = pixelChampions[index].name;
  const { data } = useQuery({
    queryKey: ["tagline", nameOfChampion],
    queryFn: () => getTagline(nameOfChampion),
  });
  const tagline = data?.tagline!;
  return (
    <div
      className="bg-[#2C2A3A] rounded-b-3xl
 px-6 pt-10 pb-8 flex w-full flex-col items-center gap-3 relative overflow-hidden"
    >
      {/* background circles */}
      <div className="absolute w-44 h-44 rounded-full bg-[#1DB87A] opacity-10 -top-10 -right-10" />
      <div className="absolute w-24 h-24 rounded-full bg-[#FFB800] opacity-10 -bottom-5 -left-5" />

      {/* champion */}
      <div className="relative flex flex-col z-10">
        <span>{championToShow}</span>
      </div>

      {/* pill badge */}
      <span className="bg-[#FFB800] text-[#2C2A3A] text-[10px] font-black px-3 py-1 rounded-full tracking-wide uppercase z-10">
        Daily reminder
      </span>

      {/* tagline */}
      <p className="font-display text-white text-2xl font-black text-center leading-tight max-w-[260px] z-10">
        {tagline ?? "Summoning wisdom..."}
      </p>

      {/* sub */}
      <span className="text-[#555] text-[10px] font-bold tracking-widest uppercase z-10">
        LOL Academy • Level up or log out
      </span>
    </div>
  );
};

export default LoginHeader;
