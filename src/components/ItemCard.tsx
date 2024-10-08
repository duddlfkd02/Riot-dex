import Link from "next/link";
import Image from "next/image";
import { Item } from "@/types/Items";

type ItemsProps = Item;

export const ItemCard = ({ item }: { item: ItemsProps }) => {
  return (
    <Link href={`/items/${item.name}`}>
      <div className=" rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out p-4 text-center">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
          alt={item.name}
          width={100}
          height={100}
          className="object-cover mx-auto hover:shadow-purple-100/20 hover:shadow-2xl"
        />
        <h2 className="text-md font-semibold text-purple-500 truncate mt-5">
          {item.name}
        </h2>
        <p className="text-sm text-gray-400 break-words mt-2">
          {item.plaintext}
        </p>
      </div>
    </Link>
  );
};
