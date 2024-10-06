"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import { getChampionRotation } from "@/utils/riotApi";
import { fetchChampionList } from "@/utils/serverApi";
import { ChampionData, Champion } from "@/types/Champion"; // ChampionData 타입을 가져옴

const useChampionList = () => {
  return useQuery({
    queryKey: ["championList"],
    queryFn: fetchChampionList,
    staleTime: 1000 * 60 * 5, // 5분 동안 캐시
  });
};

const useChampionRotation = () => {
  return useQuery({
    queryKey: ["championRotation"],
    queryFn: getChampionRotation,
    enabled: false, // refetch를 통해 데이터를 가져옵니다.
  });
};

const Rotation = () => {
  const {
    data: championData,
    isLoading: isChampionLoading,
    isError: isChampionError,
  } = useChampionList();

  const {
    data: rotateData,
    isLoading: isRotateLoading,
    isError: isRotateError,
    refetch: fetchRotation,
  } = useChampionRotation();

  useEffect(() => {
    if (championData) {
      fetchRotation();
    }
  }, [championData, fetchRotation]);

  if (isChampionLoading || isRotateLoading) return <div>로딩중...</div>;
  if (isChampionError || isRotateError) return <div>에러가 발생했습니다.</div>;

  // championData와 rotation 데이터가 존재할 때만 처리
  const champions: ChampionData | undefined = championData?.data;
  const rotation: number[] | undefined = rotateData?.freeChampionIds;

  return (
    <div className="flex flex-col justify-center items-center gap-6 bg-gray-950 min-h-screen">
      <h1 className="main-title">챔피언 로테이션</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-4 ">
        {rotation?.map((id: number) => {
          // champion을 Object.values에서 찾기
          const champion = champions
            ? Object.values(champions).find(
                (champion) => champion.key === id.toString()
              )
            : undefined;

          if (!champion) return null;

          return (
            <Link
              key={champion.id}
              href={`/champions/${champion.id}`}
              className="text-center"
            >
              <div className="rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out p-4 text-center">
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.id}.png`}
                  alt={champion.name}
                  width={100}
                  height={100}
                  className="object-cover mx-auto hover:shadow-purple-100/20 hover:shadow-2xl"
                />
                <h3 className="text-md font-semibold text-purple-500 truncate mt-5">
                  {champion.name}
                </h3>
                <p className="text-sm text-gray-400 break-words mt-4">
                  {champion.title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Rotation;
