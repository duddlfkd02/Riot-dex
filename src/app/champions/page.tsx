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
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.id}.png`}
        alt={champion.name}
        width={100}
        height={100}
      />
      <h2>{champion.name}</h2>
      <p>{champion.title}</p>
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
    <div>
      <h1>챔피언 목록</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {champions.map((champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
}
export const revalidate = 86400;
