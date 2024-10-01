"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getChampionRotation } from "@/utils/riotApi";
import { fetchChampionList } from "@/utils/serverApi"; // 챔피언 목록
import Link from "next/link";

type ChampionData = {
  id: string;
  key: string;
  title: string;
  name: string;
  image: { full: string };
};

export default function ChampionRotationPage() {
  const [rotation, setRotation] = useState<number[]>([]); // id , 배열로 담기
  const [champions, setChampions] = useState<{
    [key: string]: ChampionData;
  } | null>(null);
  // 챔피언 목록

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const rotationData = await getChampionRotation();
        setRotation(rotationData.freeChampionIds);

        const championData = await fetchChampionList();
        setChampions(championData);
      } catch (error) {
        console.error("Fetch Error:", error);
        setError("로테이션 데이터를 가져오는 중 문제가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!rotation || !champions) {
    return <div>로테이션 또는 챔피언 데이터를 불러오는 중입니다...</div>;
  }

  return (
    <div className="bg-black text-red-500">
      <h1 className="text-3xl font-bold mb-4">챔피언 로테이션</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {rotation.map((id) => {
          const champion = Object.values(champions).find((champion) => {
            return champion.key === id.toString();
          });

          if (!champion) {
            return null;
          }

          return (
            <Link
              key={champion.id}
              href={`/champion/${name}`} //TODO 추후 링크 변경하기
              className="border rounded p-4 hover:shadow-lg"
            >
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.id}.png`}
                alt={champion.name}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="mt-2 text-xl font-semibold">{champion.name}</h3>
              <p className="text-gray-500">{champion.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
