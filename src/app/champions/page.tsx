import { fetchChampionList } from "@/utils/serverApi";
import Image from "next/image";

export default async function ChampionsPage() {
  const champions = await fetchChampionList();

  if (!champions) {
    return <div>챔피언 데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  return (
    <div>
      <h1>챔피언 목록</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Object.entries(champions).map(([id, champion]) => (
          <div
            key={id}
            style={{
              border: "1px solid #fff",
              margin: "10px",
              padding: "10px",
            }}
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.id}.png`}
              alt={champion.name}
              width={100}
              height={100}
            />
            <h2>{champion.name}</h2>
            <p>{champion.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
