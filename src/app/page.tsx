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

  // 랜덤 이미지를 빌드 시점에 한 번 선택
  const champions: ChampionData[] = Object.values(championsData).map(
    (champion) => ({
      id: champion.id,
      name: champion.name,
    })
  );

  const getRandomImageUrl = (champions: ChampionData[]) => {
    const randomChampion =
      champions[Math.floor(Math.random() * champions.length)];
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${randomChampion.id}_0.jpg`;
  };

  // 빌드 시점에 고정된 이미지 URL 생성
  const randomImageUrl1 = getRandomImageUrl(champions);
  const randomImageUrl2 = getRandomImageUrl(champions);
  const randomImageUrl3 = getRandomImageUrl(champions);

  return (
    <div className="flex flex-col gap-5 justify-center items-center text-center">
      <h1>리그 오브 레전드 정보 앱</h1>
      <p>Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</p>

      <>
        <Link href={"/champions"}>
          <div>
            <Image
              src={randomImageUrl1}
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
              src={randomImageUrl2}
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
              src={randomImageUrl3}
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

export const revalidate = false;
