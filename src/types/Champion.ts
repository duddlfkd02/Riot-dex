// 기본 챔피언 정보
export type Champion = {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: ChampionInfoType;
  image: ChampionImage;
  stats: ChampionStats;
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
  movespeed: number;
  armor: number;
  spellblock: number;
  attackdamage: number;
};

// 전체 챔피언 데이터 타입
export type ChampionData = {
  [id: string]: Champion;
};
