import { ChampionInfoType } from "@/types/Champion";
import Link from "next/link";
import Image from "next/image";

type ChampionProps = {
  id: string;
  name: string;
  title: string;
  blurb: string;
  image: { full: string };
  info: ChampionInfoType;
};
// 카드 컴포넌트
export const ChampionCard = ({ champion }: { champion: ChampionProps }) => {
  return (
    <Link href={`/champions/${champion.id}`}>
      <div className=" rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out p-4 text-center">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.id}.png`}
          alt={champion.name}
          width={100}
          height={100}
          className="object-cover mx-auto hover:shadow-purple-100/20 hover:shadow-2xl"
        />
        <h2 className="text-md font-semibold text-purple-500 truncate mt-5">
          {champion.name}
        </h2>
        <p className="text-sm text-gray-400 break-words mt-4">
          {champion.title}
        </p>
      </div>
    </Link>
  );
};
