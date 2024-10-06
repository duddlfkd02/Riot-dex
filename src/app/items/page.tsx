import { Golds } from "@/types/Items";
import { fetchItemList } from "@/utils/serverApi";
import { ItemCard } from "@/components/ItemCard";

type ItemsProps = {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  gold: Golds;
  tags: string[];
  image: { full: string };
};

export default async function ItemPage() {
  const itemData = await fetchItemList();

  if (!itemData) {
    return <div>아이템 목록을 불러오는 중 오류가 발생했습니다.</div>;
  }
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  const items: ItemsProps[] = Object.entries(itemData).map(([id, item]) => ({
    name: item.name,
    description: item.description,
    colloq: item.colloq,
    plaintext: item.plaintext,
    image: item.image,
    gold: item.gold,
    tags: item.tags,
  }));

  return (
    <div className="flex flex-col justify-center items-center gap-6  bg-gray-950 min-h-screen">
      <h1 className="main-title">아이템 목록</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-4 mx-20">
        {items.map((item) => (
          <ItemCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}
