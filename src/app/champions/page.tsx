import { fetchChampionList } from "@/utils/serverApi";
import { ChampionCard } from "@/components/ChampionCard";
import { Champion } from "@/types/Champion";

type ChampionProps = Omit<Champion, "key" | "stats">;

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
