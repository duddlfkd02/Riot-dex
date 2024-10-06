export async function getChampionRotation() {
  try {
    const response = await fetch("/api/rotation");

    if (!response.ok) {
      throw new Error("데이터를 불러오는 데 실패했습니다.");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("챔피언 로테이션 데이터를 가져오는 중 오류 발생:", error);
    throw error;
  }
}
