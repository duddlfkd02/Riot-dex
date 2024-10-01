import { ChampionData, Champion } from "@/types/Champion";

export async function fetchChampionList(): Promise<ChampionData | null> {
  try {
    const versionResponse = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    const versions = await versionResponse.json();
    const latestVersion = versions[0];

    const championResponse = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion.json`
    );
    const championData = await championResponse.json();
    return championData.data as ChampionData;
  } catch (error) {
    console.error("챔피언 데이터를 불러오는 중 오류가 발생했습니다.", error);
    return null;
  }
}

export async function fetchChampionDetail(
  id: string
): Promise<Champion | null> {
  try {
    const versionResponse = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    const versions = await versionResponse.json();
    const latestVersion = versions[0];

    const championDetailResponse = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion/${id}.json`
    );
    const championDetailData = await championDetailResponse.json();
    return championDetailData.data[id];
  } catch (error) {
    console.error("챔피언 상세 정보를 불러오는 중 오류가 발생했습니다.", error);
    return null;
  }
}

export async function fetchItemList() {
  try {
    const versionResponse = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    const versions = await versionResponse.json();
    const latestVersion = versions[0];

    const itemResponse = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/item.json`
    );
    const itemData = await itemResponse.json();
    return itemData.data;
  } catch (error) {
    console.error("아이템 데이터를 불러오는 중 오류가 발생했습니다.", error);
    return null;
  }
}
