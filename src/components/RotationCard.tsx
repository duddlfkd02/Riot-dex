import Link from "next/link";
import Image from "next/image";

type ChampionData = {
  id: string;
  key: string;
  title: string;
  name: string;
  image: { full: string };
};

export const RotationCard = ({ champion }: { champion: ChampionData }) => {
  return (
    <Link href={`/champions/${champion.id}`} className="text-center">
      <div className=" rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out p-4 text-center">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.id}.png`}
          alt={champion.name}
          width={100}
          height={100}
          className="object-cover mx-auto hover:shadow-purple-100/20 hover:shadow-2xl"
        />

        <h3 className="text-md font-semibold text-purple-500 truncate mt-5">
          {champion.name}
        </h3>
        <p className="text-sm text-gray-400 break-words mt-4">
          {champion.title}
        </p>
      </div>
    </Link>
  );
};
