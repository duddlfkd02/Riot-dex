import { fetchChampionList } from "@/utils/serverApi";
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
const ChampionCard = ({ champion }: { champion: ChampionProps }) => {
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

//목록 보여지는 곳
export default async function ChampionsPage() {
  const championData = await fetchChampionList();

  if (!championData) {
    return <div>챔피언 데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  const champions: ChampionProps[] = Object.entries(championData).map(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([id, champion]) => ({
      id: champion.id,
      name: champion.name,
      title: champion.title,
      image: champion.image,
      info: champion.info,
      blurb: champion.blurb,
    })
  );

  return (
    <div className="flex flex-col justify-center items-center gap-6  bg-gray-950 min-h-screen">
      <h1 className="main-title">챔피언 목록</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-4">
        {champions.map((champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
}
