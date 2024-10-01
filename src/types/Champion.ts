// 기본 챔피언 정보
export type Champion = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  tags: string[];
  partype: string;
  info: ChampionInfoType;
  image: ChampionImage;
  stats: ChampionStats;
  skins: Skin[];
};

// 챔피언의 인포
export type ChampionInfoType = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

// 챔피언 이미지
export type ChampionImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

// 챔피언 스탯
export type ChampionStats = {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
};

// 스킨 타입
export type Skin = {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
};

// 전체 챔피언 데이터 타입
export type ChampionData = {
  [id: string]: Champion;
};
