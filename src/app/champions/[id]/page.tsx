import { fetchChampionDetail } from "@/utils/serverApi";
import Image from "next/image";
import { Metadata } from "next";

type ChampionDetailProps = {
  params: { id: string };
};

export async function generateMetadata({
  params,
}: ChampionDetailProps): Promise<Metadata> {
  const champion = await fetchChampionDetail(params.id);

  if (!champion) {
    return {
      title: "챔피언을 찾을 수 없습니다.",
    };
  }

  return {
    title: `${champion.name} - ${champion.title}`,
    description: champion.blurb,
  };
}

// 챔피언 상세 페이지
export default async function ChampionDetailPage({
  params,
}: ChampionDetailProps) {
  const champion = await fetchChampionDetail(params.id);

  if (!champion) {
    return <div>챔피언 정보를 불러오는 중 오류가 발생했습니다.</div>;
  }

  return (
    <div>
      <h1>{champion.name}</h1>
      <h2>{champion.title}</h2>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.id}.png`}
        alt={champion.name}
        width={200}
        height={200}
      />
      <p>{champion.blurb}</p>

      <h3>스탯</h3>
      <ul>
        <li>공격력: {champion.stats.attackdamage}</li>
        <li>방어력: {champion.stats.armor}</li>
        <li>마법 저항력: {champion.stats.spellblock}</li>
        <li>이동 속도: {champion.stats.movespeed}</li>
      </ul>
    </div>
  );
}
