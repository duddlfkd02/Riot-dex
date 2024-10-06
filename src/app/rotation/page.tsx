"use client";

import { useEffect, useState } from "react";
import { getChampionRotation } from "@/utils/riotApi";
import { fetchChampionList } from "@/utils/serverApi";
import { RotationCard } from "@/components/RotationCard";

type ChampionData = {
  id: string;
  key: string;
  title: string;
  name: string;
  image: { full: string };
};

export default function ChampionRotationPage() {
  const [rotation, setRotation] = useState<number[]>([]);
  const [champions, setChampions] = useState<{
    [key: string]: ChampionData;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const [rotationData, championData] = await Promise.all([
        getChampionRotation(),
        fetchChampionList(),
      ]);

      setRotation(rotationData.freeChampionIds || []);
      setChampions(championData || {});
    } catch (error) {
      console.error("Fetch Error:", error);
      setError("로테이션 데이터를 가져오는 중 문제가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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
    <div className="flex flex-col justify-center items-center gap-6  bg-gray-950 min-h-screen">
      <h1 className="main-title">챔피언 로테이션</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-4 ">
        {rotation.map((id) => {
          const champion = Object.values(champions).find((champion) => {
            return champion.key === id.toString();
          });

          if (!champion) {
            return null;
          }

          return <RotationCard key={champion.id} champion={champion} />;
        })}
      </div>
    </div>
  );
}
