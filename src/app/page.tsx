import Image from "next/image";
import Link from "next/link";
import { fetchChampionList } from "@/utils/serverApi";

type ChampionData = {
  id: string;
  name: string;
};

export default async function Home() {
  const championsData = await fetchChampionList();

  if (!championsData) {
    return <div>챔피언 목록을 불러오는 중 오류가 발생했습니다.</div>;
  }

  const champions: ChampionData[] = Object.values(championsData).map(
    (champion) => ({
      id: champion.id,
      name: champion.name,
    })
  );

  const getRandomImageUrl = (champions: ChampionData[]) => {
    const randaomChampion =
      champions[Math.floor(Math.random() * champions.length)];
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${randaomChampion.id}_0.jpg`;
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center text-center">
      <h1>리그 오브 레전드 정보 앱</h1>
      <p>Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</p>

      <>
        <Link href={"/champions"}>
          <div>
            <Image
              src={getRandomImageUrl(champions)}
              alt="Random Champion"
              width={500}
              height={500}
            />
            <h2>챔피언 목록 보기</h2>
          </div>
        </Link>

        <Link href={"/items"}>
          <div>
            <Image
              src={getRandomImageUrl(champions)}
              alt="Random Champion 3"
              width={500}
              height={500}
            />
            <h2>아이템 목록 보기</h2>
          </div>
        </Link>
        <Link href={"/rotation"}>
          <div>
            <Image
              src={getRandomImageUrl(champions)}
              alt="Random Champion 3"
              width={500}
              height={500}
            />
            <h2>금주 로테이션 확인</h2>
          </div>
        </Link>
      </>
    </div>
  );
}

// export const revalidate = 5;
export const revalidate = 86400;
