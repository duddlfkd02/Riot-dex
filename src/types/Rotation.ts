export type Image = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type LevelTip = {
  label: string[];
  effect: string[];
};

export type Spell = {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: LevelTip;
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  datavalues: Record<string, unknown>;
  effect: number[][] | null;
  effectBurn: (string | null)[];
  vars: Record<string, unknown>[];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: Image;
  resource: string;
};

// 패시브 스킬
export type Passive = {
  name: string;
  description: string;
  image: Image;
};

// 스킨 정보
export type Skin = {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
};

// 챔피언 정보
export type ChampionInfo = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

// 챔피언 스탯 타입
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

// 챔피언 타입
export type Champion = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: Image;
  skins: Skin[];
  lore: string;
  blurb: string;
  allytips: string[];
  enemytips: string[];
  tags: string[];
  partype: string;
  info: ChampionInfo;
  stats: ChampionStats;
  spells: Spell[];
  passive: Passive;
  recommended: unknown[];
};

// 전체 챔피언 데이터를 저장하는 타입
export type ChampionData = {
  [key: string]: Champion;
};
