import { fetchItemList } from "@/utils/serverApi";
import Image from "next/image";

type ItemDetailProps = {
  params: { name: string };
};

export default async function ItemDetailPage({ params }: ItemDetailProps) {
  const decodedName = decodeURIComponent(params.name);

  const itemData = await fetchItemList();

  if (!itemData) {
    return <div>아이템 정보를 불러오는 중 오류가 발생했습니다.</div>;
  }

  // params.name에 해당하는 아이템 찾기
  const item = Object.values(itemData).find((i) => i.name === decodedName);

  if (!item) {
    return <div>아이템 정보를 불러오는 중 오류가 발생했습니다.</div>;
  }
  return (
    <div>
      <h1>{item.name}</h1>
      <h2>{item.tags.join(", ")}</h2>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
        alt={item.name}
        width={200}
        height={200}
      />
      <p>{item.plaintext}</p>

      <h3>Golds</h3>
      <ul>
        <li>Base: {item.gold.base}</li>
        <li>Purchasable: {item.gold.purchasable ? "Yes" : "No"}</li>
        <li>Total: {item.gold.total}</li>
        <li>Sell: {item.gold.sell}</li>
      </ul>
    </div>
  );
}
