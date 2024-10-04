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
    <div className="min-h-screen flex flex-col justify-center items-center gap-10 bg-gray-950 p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-500">{item.name}</h1>
        <h2 className="text-lg text-gray-300 mt-2">{item.tags.join(", ")}</h2>
      </div>
      <div className="flex gap-10">
        <div className="max-w-6xl grid grid-cols-1">
          <div className="flex flex-col items-center">
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
              alt={item.name}
              width={200}
              height={200}
              className="mt-4"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center  text-gray-600">
          <ul className="space-y-2 text-gray-500">
            <p className="text-xl font-semibold text-purple-500 mb-4">
              골드 정보
            </p>
            <li>
              <span className="font-bold">베이스 가격: </span>
              {item.gold.base}
            </li>
            <li>
              <span className="font-bold">구매 가능 여부: </span>
              {item.gold.purchasable ? "가능" : "불가능"}
            </li>
            <li>
              <span className="font-bold">총 가격: </span>
              {item.gold.total}
            </li>
            <li>
              <span className="font-bold">판매 가격: </span>
              {item.gold.sell}
            </li>
          </ul>
          <p className=" text-gray-400 mt-14 leading-6 italic">
            {item.plaintext}
          </p>
        </div>
      </div>
    </div>
  );
}
