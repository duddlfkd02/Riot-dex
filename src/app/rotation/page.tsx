"use client";

import { useEffect, useState } from "react";
import { getChampionRotation } from "@/utils/riotApi";

export default function ChampionRotationPage() {
  const [rotation, setRotation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRotation() {
      try {
        const data = await getChampionRotation();
        console.log("API 응답 데이터:", data);
        setRotation(data);
      } catch (error) {
        console.error("Fetch Error:", error);
        setError("로테이션 데이터를 가져오는 중 문제가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    }

    fetchRotation();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!rotation) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>챔피언 로테이션</h1>
    </div>
  );
}
