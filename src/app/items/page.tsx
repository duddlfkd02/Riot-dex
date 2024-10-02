import { fetchItemList } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

type ItemsProps = {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  image: { full: string };
};

const ItemCard = ({ item }: { item: ItemsProps }) => {
  return (
    <Link href={`/items/${item.name}`}>
      <div>
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
          alt={item.name}
          width={100}
          height={100}
        />
        <h2 className="mt-2 text-lg font-semibold">{item.name}</h2>
        <p className="text-gray-500">{item.plaintext}</p>
      </div>
    </Link>
  );
};

export default async function ItemPage() {
  const itemData = await fetchItemList();

  if (!itemData) {
    return <div>아이템 목록을 불러오는 중 오류가 발생했습니다.</div>;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const items: ItemsProps[] = Object.entries(itemData).map(([id, item]) => ({
    name: item.name,
    description: item.description,
    colloq: item.colloq,
    plaintext: item.plaintext,
    image: item.image,
  }));
  return (
    <div>
      <h1>아이템 목록</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items.map((item) => (
          <ItemCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}
