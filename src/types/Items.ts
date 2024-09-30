export type Item = {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  gold: {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
  };
  tags: string[];
  maps: {
    [key: number]: boolean;
  };
  stats: {
    [key: string]: number;
  };
};

// 아이템 데이터 전체
export type ItemData = {
  [key: string]: Item;
};
