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
    <div className="min-h-screen flex flex-col justify-center items-center gap-4 bg-gray-950 p-8">
      <div className="md:flex flex-cols justify-center text-center">
        <h1 className="text-3xl font-bold text-purple-500">{champion.name}</h1>
        <h2 className="text-md m-2 text-gray-300">{champion.title}</h2>
      </div>
      <div className="flex flex-col  md:flex-row justify-center items-center gap-8">
        <div className="max-w-6xl grid grid-cols-1 gap-6 p-6">
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.id}.png`}
            alt={champion.name}
            width={200}
            height={200}
          />
        </div>

        <div className="flex flex-col justify-center  w-full md:w-1/2 text-gray-600">
          <p className="text-xl font-semibold text-purple-500 mb-4">스탯</p>
          <ul className="flex flex-wrap md:justify-start gap-4 text-gray-500">
            <li>
              공격력:
              {champion.stats.attackdamage}
            </li>
            <li>
              방어력:
              {champion.stats.armor}
            </li>
            <li>
              마법 저항력:
              {champion.stats.spellblock}
            </li>
            <li>
              이동 속도:
              {champion.stats.movespeed}
            </li>
          </ul>
          <p className=" text-gray-400 mt-8 leading-6 italic">
            {champion.blurb}
          </p>
        </div>
      </div>
    </div>
  );
}
