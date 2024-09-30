// // src/app/champions/page.tsx (서버 컴포넌트)
// import { Champion } from "@/types/Champion";
// import { fetchChampionList } from "@/utils/server";
// import ChampionsList from "@/components/ChampionList"; // 클라이언트 컴포넌트 import

// export const revalidate = 86400;

// export default async function ChampionsPage() {
//   const championsData = await fetchChampionList();

//   if (!championsData) {
//     return <div>챔피언 데이터를 불러오는 중 오류가 발생했습니다.</div>;
//   }

//   const champions: Champion[] = Object.values(championsData);

//   return <ChampionsList champions={champions} />;
// }
