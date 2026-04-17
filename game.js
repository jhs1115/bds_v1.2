const GRADES = [
  { id: "ethereal", name: "에테리얼", chance: 1 / 1000000000, chanceRange: [1, 1000000000], color: "#ff7bd5", sellPrice: 500 },
  { id: "divine", name: "디바인", chance: 1 / 5000000, chanceRange: [1, 5000000], color: "#ff9b7a", sellPrice: 200 },
  { id: "mythic", name: "신화", chance: 1 / 100000, chanceRange: [1, 100000], color: "#ff5e73", sellPrice: 80 },
  { id: "legend", name: "전설", chance: 1 / 15000, chanceRange: [1, 15000], color: "#b68cff", sellPrice: 30 },
  { id: "epic", name: "에픽", chance: 1 / 1500, chanceRange: [1, 1500], color: "#ffd76f", sellPrice: 15 },
  { id: "rare", name: "레어", chance: 1 / 120, chanceRange: [1, 120], color: "#78dd93", sellPrice: 8 },
  { id: "uncommon", name: "언커먼", chance: 1 / 30, chanceRange: [1, 30], color: "#78b7ff", sellPrice: 3 },
  { id: "common", name: "커먼", chance: 1 / 6, chanceRange: [1, 10], color: "#c4cbe0", sellPrice: 1 },
];

const CHARACTERS = [
  { name: "별수호 궁수", grade: "common", emoji: "🏹", atk: 25, range: 102, speed: 1.0, cost: 200, baseChance: 20 },
  { name: "구름 검객", grade: "common", emoji: "⚔️", atk: 30, range: 75, speed: 1.2, cost: 250, baseChance: 30 },
  { name: "촛불 학자", grade: "common", emoji: "🕯️", atk: 10, range: 110, speed: 0.9, cost: 700, baseChance: 40 },
  { name: "부메랑 투척병", grade: "rare", emoji: "🪃", atk: 40, range: 110, speed: 1.1, cost: 250, baseChance: 700 },
  { name: "숲의 정령", grade: "uncommon", emoji: "🌿", atk: 150, range: 150, speed: 1.6, cost: 1200, baseChance: 80 },
  { name: "백은 기사", grade: "uncommon", emoji: "🛡️", atk: 55, range: 80, speed: 1.5, cost: 600, baseChance: 100 },
  { name: "농장", grade: "uncommon", emoji: "🌾", atk: 0, range: 0, speed: 0, cost: 350, farmIncome: 70, baseChance: 130 },
  { name: "서리 척후병", grade: "uncommon", emoji: "🧊", atk: 15, range: 140, speed: 0.3, cost: 500, baseChance: 160 },
  { name: "청록 포수", grade: "uncommon", emoji: "🎯", atk: 60, range: 140, speed: 1.0, cost: 400, baseChance: 190 },
  { name: "달빛 요정", grade: "rare", emoji: "🧚", atk: 90, range: 130, speed: 1.3, cost: 400, baseChance: 320 },
  { name: "별마법사", grade: "mythic", emoji: "🔮", atk: 300, range: 230, speed: 0.25, cost: 2000, splashRadius: 130, baseChance: 200000 },
  { name: "폭풍 창기사", grade: "rare", emoji: "⚡", atk: 100, range: 80, speed: 1.5, cost: 700, baseChance: 450 },
  { name: "수호 사제", grade: "rare", emoji: "📿", atk: 80, range: 120, speed: 0.9, cost: 1000, baseChance: 600 },
  { name: "천둥 사제", grade: "epic", emoji: "⛈️", atk: 50, range: 120, speed: 1.5, cost: 500, baseChance: 1500 },
  { name: "사신 기사", grade: "epic", emoji: "💀", atk: 300, range: 90, speed: 1.0, cost: 1500, baseChance: 1800 },
  { name: "화염 사수", grade: "epic", emoji: "🔥", atk: 25, range: 150, speed: 4.5, cost: 1000, baseChance: 2100 },
  { name: "사령관", grade: "epic", emoji: "🎖️", atk: 0, range: 120, speed: 0, cost: 900, auraBuff: 0.12, baseChance: 2600 },
  { name: "광휘 창병", grade: "epic", emoji: "🗡️", atk: 230, range: 110, speed: 0.8, cost: 1200, baseChance: 3000 },
  { name: "태엽 포격수", grade: "epic", emoji: "⚙️", atk: 100, range: 170, speed: 1.2, cost: 2000, baseChance: 3600 },
  { name: "드래곤 소환사", grade: "mythic", emoji: "🐉", atk: 100, range: 160, speed: 1.0, cost: 300, baseChance: 100000 },
  { name: "빛의 작곡가", grade: "legend", emoji: "🎼", atk: 0, range: 140, speed: 0, cost: 1200, songMode: "attack", baseChance: 15000 },
  { name: "무영 암살자", grade: "legend", emoji: "🌒", atk: 50, range: 90, speed: 1.5, cost: 600, baseChance: 20000 },
  { name: "레인저", grade: "legend", emoji: "🦅", atk: 2000, range: 400, speed: 0.1, cost: 3000, baseChance: 30000 },
  { name: "태양신 아폴로", grade: "divine", emoji: "☀️", atk: 40, range: 150, speed: 10, cost: 1500, baseChance: 3000000 },
  { name: "성운을 다루는자, 노바", grade: "ethereal", emoji: "🌌", atk: 250, range: 300, speed: 1.1, cost: 4500, swordDamage: 2000, swordSplashRadius: 146, baseChance: 700000000 },
  { name: "천공의 심판자", grade: "divine", emoji: "👼", atk: 480, range: 248, speed: 1.95, cost: 2200, baseChance: 5000000 },
  { name: "디아블로", grade: "ethereal", emoji: "😈", atk: 500, range: 280, speed: 2.2, cost: 3300, baseChance: 500000000 },
];

const ENEMY_TYPES = [
  { name: "슬라임", emoji: "🟢", hp: 34, atk: 4, speed: 1.0, reward: 16, color: "#7ce88b" },
  { name: "고블린 정찰병", emoji: "👺", hp: 28, atk: 7, speed: 1.28, reward: 20, color: "#ffb062" },
  { name: "멧돼지", emoji: "🐗", hp: 108, atk: 12, speed: 0.86, reward: 28, color: "#cb7d55" },
  { name: "검은 마도사", emoji: "🧙", hp: 104, atk: 16, speed: 1.08, reward: 34, color: "#cdd6e8" },
  { name: "돌 골렘", emoji: "🪨", hp: 248, atk: 24, speed: 0.68, reward: 52, color: "#7a9366" },
  { name: "붉은 드래곤", emoji: "🐲", hp: 616, atk: 52, speed: 1.08, reward: 90, color: "#ff7468" },
  { name: "용암 정령", emoji: "🌋", hp: 122, atk: 18, speed: 1.06, reward: 36, color: "#ff7f50", mapIds: ["lava"] },
  { name: "화염 도끼병", emoji: "🪓", hp: 204, atk: 28, speed: 0.9, reward: 48, color: "#ff9f63", mapIds: ["lava"] },
  { name: "마그마 골렘", emoji: "🧱", hp: 392, atk: 42, speed: 0.7, reward: 70, color: "#ff6b4d", mapIds: ["lava"] },
  { name: "폴른 정령", emoji: "🜂", hp: 148, atk: 22, speed: 1.08, reward: 42, color: "#d46cff", mapIds: ["fallen"] },
  { name: "폴른 학살자", emoji: "🪓", hp: 248, atk: 34, speed: 0.94, reward: 56, color: "#ff7aa8", mapIds: ["fallen"] },
  { name: "폴른 거신", emoji: "🗿", hp: 468, atk: 50, speed: 0.76, reward: 84, color: "#9f72ff", mapIds: ["fallen"] },
];

const FALLEN_ENEMY_VARIANTS = {
  "슬라임": { name: "폴른 슬라임", emoji: "🟣", color: "#bb78ff" },
  "고블린 정찰병": { name: "폴른 추적자", emoji: "😈", color: "#c86bff" },
  "멧돼지": { name: "타락한 비스트", emoji: "🐺", color: "#b46fff" },
  "검은 마도사": { name: "공허 사제", emoji: "🔮", color: "#d59bff" },
  "돌 골렘": { name: "저주 골렘", emoji: "🪦", color: "#9a63ff" },
  "붉은 드래곤": { name: "폴른 와이번", emoji: "🦇", color: "#ff8cf0" },
  "용암 정령": { name: "타락한 정령", emoji: "🜏", color: "#c970ff" },
  "화염 도끼병": { name: "폴른 도끼병", emoji: "⚚", color: "#d778ff" },
  "마그마 골렘": { name: "공허 거신", emoji: "🗿", color: "#b07cff" },
  "폴른 정령": { name: "폴른 정령", emoji: "🜂", color: "#d46cff" },
  "폴른 학살자": { name: "폴른 학살자", emoji: "🪓", color: "#ff7aa8" },
  "폴른 거신": { name: "폴른 거신", emoji: "🗿", color: "#9f72ff" },
};

const MAPS = [
  {
    id: "meadow",
    name: "초원 관문",
    path: [
      { x: 0, y: 200 },
      { x: 150, y: 200 },
      { x: 150, y: 100 },
      { x: 350, y: 100 },
      { x: 350, y: 350 },
      { x: 550, y: 350 },
      { x: 550, y: 200 },
      { x: 700, y: 200 },
    ],
    groundTop: "#8ecf9c",
    groundBottom: "#558a66",
    pathOuter: "#aa7b43",
    pathInner: "#d6b17a",
    deco: ["🌳", "🌲", "✨", "🍄"],
    difficulty: "보통",
    startMoney: 700,
    finalWave: 20,
    bonusEnemyCount: 0,
    waveRewardBonus: 0,
    coinRewardBonus: 0,
    enemyScale: 1,
    midBosses: {
      15: {
        name: "고목 수호자",
        emoji: "🌲",
        hp: 24000,
        atk: 58,
        speed: 0.18,
        reward: 620,
        color: "#b7d98a",
      },
    },
    finalBoss: {
      name: "초원의 군주 바르그",
      emoji: "🦌",
      hp: 39000,
      atk: 95,
      speed: 0.24,
      reward: 1800,
      coinReward: 42,
      color: "#ffe28a",
    },
  },
  {
    id: "lava",
    name: "용암 심장부",
    path: [
      { x: 24, y: 220 },
      { x: 170, y: 220 },
      { x: 170, y: 90 },
      { x: 610, y: 90 },
      { x: 610, y: 390 },
      { x: 250, y: 390 },
      { x: 250, y: 160 },
      { x: 700, y: 160 },
    ],
    groundTop: "#5a1d12",
    groundBottom: "#241008",
    pathOuter: "#8b2b12",
    pathInner: "#ff8b2c",
    deco: ["🌋", "🔥", "🪨", "💥"],
    difficulty: "중간",
    startMoney: 700,
    finalWave: 30,
    bonusEnemyCount: 1,
    waveRewardBonus: 30,
    coinRewardBonus: 1,
    enemyScale: 1.16,
    midBosses: {
      15: {
        name: "용암 거신",
        emoji: "🗿",
        hp: 28500,
        atk: 74,
        speed: 0.19,
        reward: 760,
        color: "#ff9b63",
      },
      25: {
        name: "화산의 심장",
        emoji: "☄️",
        hp: 37200,
        atk: 96,
        speed: 0.17,
        reward: 980,
        color: "#ff6d49",
      },
    },
    finalBoss: {
      name: "용암마왕 이그니스",
      emoji: "🐲",
      hp: 56000,
      atk: 135,
      speed: 0.26,
      reward: 3200,
      coinReward: 70,
      color: "#ff8e5c",
    },
  },
  {
    id: "fallen",
    name: "폴른 가든",
    path: [
      { x: 0, y: 108 },
      { x: 220, y: 108 },
      { x: 220, y: 214 },
      { x: 520, y: 214 },
      { x: 520, y: 330 },
      { x: 176, y: 330 },
      { x: 176, y: 430 },
      { x: 700, y: 430 },
    ],
    groundTop: "#3a1d56",
    groundBottom: "#170c29",
    pathOuter: "#5b2d88",
    pathInner: "#b27cff",
    deco: ["🌒", "🥀", "🪦", "✨"],
    difficulty: "상급",
    startMoney: 700,
    finalWave: 40,
    bonusEnemyCount: 2,
    waveRewardBonus: 50,
    coinRewardBonus: 2,
    enemyScale: 1.34,
    midBosses: {
      10: {
        name: "타락한 정원지기",
        emoji: "🪦",
        hp: 19800,
        atk: 48,
        speed: 0.2,
        reward: 520,
        color: "#d1a8ff",
      },
      20: {
        name: "비틀린 수호수",
        emoji: "🌳",
        hp: 50000,
        atk: 82,
        speed: 0.18,
        reward: 880,
        color: "#b287ff",
      },
      30: {
        name: "몰락의 사도",
        emoji: "👁️",
        hp: 40000,
        atk: 112,
        speed: 0.78,
        reward: 1260,
        color: "#ff89c8",
      },
    },
    finalBoss: {
      name: "폴른 가든의 왕",
      emoji: "👑",
      hp: 200000,
      atk: 160,
      speed: 0.14,
      reward: 4200,
      coinReward: 100,
      color: "#ff9ce3",
    },
  },
];

const GACHA_CHESTS = [
  {
    id: "common",
    name: "일반 상자",
    emoji: "📦",
    cost: 5,
    hint: "커먼과 언커먼 중심의 가벼운 소환",
    weights: { common: 70, uncommon: 24, rare: 5.6, epic: 1.6, legend: 0.42, mythic: 0.08, divine: 0.008, ethereal: 0.0008 },
  },
  {
    id: "shiny",
    name: "빛나는 상자",
    emoji: "✨",
    cost: 20,
    hint: "레어 이상을 노릴 수 있는 중급 상자",
    weights: { common: 39, uncommon: 30, rare: 17, epic: 7.2, legend: 2.6, mythic: 0.82, divine: 0.16, ethereal: 0.02 },
  },
  {
    id: "brilliant",
    name: "찬란한 상자",
    emoji: "🌟",
    cost: 70,
    hint: "상위 등급에 도전할 수 있는 고급 상자",
    weights: { common: 14, uncommon: 22, rare: 30, epic: 19, legend: 10.5, mythic: 4.6, divine: 1.35, ethereal: 0.18 },
  },
];

const BASE_TOWERS = [
  {
    id: "base-basic-tower",
    name: "나무 포탑",
    emoji: "🪵",
    atk: 10,
    range: 90,
    speed: 0.9,
    cost: 150,
    grade: "common",
    gradeData: GRADES.find((grade) => grade.id === "common"),
    isBase: true,
  },
];

const MIN_UNIT_DISTANCE = 46;
const MAX_TOTAL_PLACED_UNITS = 40;
const MAX_UPGRADE_LEVEL = 4;
const UPGRADE_COST_MULTIPLIERS = [0.4, 0.75, 1.15, 1.8];
const GRADE_UPGRADE_MULTIPLIERS = {
  common: 0.9,
  uncommon: 1,
  rare: 1.08,
  epic: 1.2,
  legend: 1.38,
  mythic: 1.65,
  divine: 1.95,
  ethereal: 2.35,
};
const UPGRADE_COST_PROFILES = {
  default: UPGRADE_COST_MULTIPLIERS,
  farm: [0.45, 0.75, 1.25, 2.05],
  composer: [0.45, 0.7, 1.35, 2.2],
};
const UPGRADE_COST_OVERRIDES = {
  "성운을 다루는자, 노바": {
    3: 30000,
  },
  "부메랑 투척병": {
    3: 1000,
  },
};
const UPGRADE_EFFECT_PROFILES = {
  farm: [40, 60, 120, 180],
  composer: [
    { rangePercent: 0.04 },
    { rangePercent: 0.05, songAtkBonus: 0.05, songDiscountBonus: 0.05, songRangeBonus: 0.1 },
    { rangePercent: 0.06 },
    { rangePercent: 0.08, songAtkBonus: 0.05, songDiscountBonus: 0.05, songRangeBonus: 0.1 },
  ],
  commander: [
    { rangePercent: 0.08, auraBuff: 0.03 },
    { rangePercent: 0.08, auraBuff: 0.03 },
    { rangePercent: 0.1, auraBuff: 0.03 },
    { rangePercent: 0.12, auraBuff: 0.04 },
  ],
  nova: [
    { swordDamageFlat: 250, rangePercent: 0.04 },
    { swordDamageFlat: 250, atkPercent: 0.08 },
    { swordDamageFlat: 250, rangePercent: 0.06 },
    { swordDamageFlat: 250, speedOverride: 0.5, trueSwordEveryAttack: true },
  ],
  ethereal: [
    { atkPercent: 0.22, rangePercent: 0.12 },
    { atkPercent: 0.24, rangePercent: 0.1 },
    { atkPercent: 0.18, speedPercent: 0.16 },
    { atkPercent: 0.24, rangePercent: 0.18, speedPercent: 0.2 },
  ],
  grade: {
    common: [
      { rangePercent: 0.1, atkPercent: 0.04 },
      { atkPercent: 0.14, rangePercent: 0.06 },
      { atkPercent: 0.12, speedPercent: 0.14 },
      { atkPercent: 0.22, rangePercent: 0.1, speedPercent: 0.16 },
    ],
    uncommon: [
      { rangePercent: 0.1, atkPercent: 0.05 },
      { atkPercent: 0.15, rangePercent: 0.08 },
      { atkPercent: 0.13, speedPercent: 0.16 },
      { atkPercent: 0.24, rangePercent: 0.12, speedPercent: 0.18 },
    ],
    rare: [
      { rangePercent: 0.12, atkPercent: 0.06 },
      { atkPercent: 0.18, rangePercent: 0.1 },
      { atkPercent: 0.16, speedPercent: 0.18 },
      { atkPercent: 0.28, rangePercent: 0.16, speedPercent: 0.22 },
    ],
  },
  default: [
    { rangePercent: 0.12, atkPercent: 0.05 },
    { atkPercent: 0.18, rangePercent: 0.1 },
    { atkPercent: 0.15, speedPercent: 0.18 },
    { atkPercent: 0.32, rangePercent: 0.18, speedPercent: 0.24 },
  ],
  named: {
    "숲의 정령": [
      { rangePercent: 0.12, atkPercent: 0.05 },
      { atkPercent: 0.2, rangePercent: 0.1 },
      { atkPercent: 0.16, speedPercent: 0.18 },
      { atkPercent: 0.28, rangePercent: 0.16, speedPercent: 0.22 },
    ],
    "별마법사": [
      { rangePercent: 0.12, atkPercent: 0.06, splashRadiusFlat: 16 },
      { atkPercent: 0.2, rangePercent: 0.1, splashRadiusFlat: 18 },
      { atkPercent: 0.18, speedPercent: 0.1, splashRadiusFlat: 20 },
      { atkPercent: 0.36, rangePercent: 0.18, speedPercent: 0.14, splashRadiusFlat: 24 },
    ],
    "레인저": [
      { atkPercent: 0.12 },
      { atkPercent: 0.16 },
      { atkPercent: 0.22 },
      { attackOverride: 6000, speedOverride: 0.05, projectileSpeedMultiplier: 3.2, splashRadiusFlat: 82, splashDamageFlat: 500 },
    ],
  },
};

let coins = 0;
let ownedChars = [];
let equippedCharIds = ["base-basic-tower"];

let bMoney = 700;
let bWave = 0;
let bBaseHp = 100;
let bRunning = false;
let bSpawnDone = false;
let bGameOver = false;
let placedUnits = [];
let enemies = [];
let projectiles = [];
let floatingTexts = [];
let selectedUnit = null;
let draggingTower = null;
let dragX = 0;
let dragY = 0;
let battleControlsReady = false;
let battleMessageTimer = null;
let lobbyTime = 0;
let currentMap = MAPS[0];
let destroyTimeCooldown = 0;
let activeBlackHole = null;
let showPathGuide = false;
let activeBoss = null;
let battleCleared = false;
let battleSpeed = 1;
let autoStartWave = false;
let previewMode = false;
let mapSelectView = "mode";
let previewDamageTotal = 0;
let previewDamageEvents = [];
let selectedCodexCharacterId = null;
let areaIndicators = [];
const usedCodes = new Set();
const audioSettings = {
  master: 0.7,
  ui: 0.7,
  gacha: 0.85,
  battle: 0.75,
  skill: 0.9,
};
let audioContext = null;

const lobbyCanvas = document.getElementById("lobbyCanvas");
const battleCanvas = document.getElementById("battleCanvas");
const lctx = lobbyCanvas.getContext("2d");
const bctx = battleCanvas.getContext("2d");

const LOBBY_ZONES = [
  { x: 20, y: 20, w: 120, h: 66, label: "패치노트", color: "#8fb7ff", action: "patchNotes", emoji: "📝" },
  { x: 150, y: 250, w: 140, h: 86, label: "가챠 소환", color: "#ff8f70", action: "gacha", emoji: "📦" },
  { x: 380, y: 360, w: 140, h: 86, label: "가방 열기", color: "#82b7ff", action: "bag", emoji: "🎒" },
  { x: 610, y: 250, w: 140, h: 86, label: "전투 입장", color: "#7fe7c4", action: "battle", emoji: "⚔️" },
  { x: 770, y: 384, w: 90, h: 74, label: "도감 열기", color: "#c18bff", action: "codex", emoji: "📚" },
  { x: 770, y: 470, w: 90, h: 74, label: "코드 입력", color: "#ffd27e", action: "code", emoji: "🔑" },
];

const player = { x: 450, y: 300, size: 20, speed: 3, color: "#82b7ff" };
const keys = {};
let nearZone = null;

const DESTROY_TIME_SKILL = {
  name: "Destroy Time",
  cooldown: 60,
  duration: 5.5,
  radius: 180,
  dps: 320,
  pullStrength: 360,
};

const PREVIEW_MAP = {
  id: "preview",
  name: "자유 연습장",
  path: [
    { x: 340, y: 240 },
    { x: 660, y: 240 },
  ],
  groundTop: "#241138",
  groundBottom: "#10081e",
  pathOuter: "#36204c",
  pathInner: "#6b42aa",
  deco: ["✨", "🕯️", "🎯", "💫"],
  finalWave: 1,
};

function normalizeContentData() {
  const mythicGrade = GRADES.find((grade) => grade.id === "mythic");
  if (mythicGrade) mythicGrade.name = "\uC2E0\uD654";

  const meadowMap = MAPS.find((map) => map.id === "meadow");
  if (meadowMap) meadowMap.name = "\uCD08\uC6D0 \uAD00\uBB38";

  const lavaMap = MAPS.find((map) => map.id === "lava");
  if (lavaMap) lavaMap.name = "\uC6A9\uC554 \uC2EC\uC7A5\uBD80";

  CHARACTERS.forEach((character) => {
    const grade = getGradeData(character.grade);
    character.baseChance = character.baseChance || Math.max(1, Math.round(1 / (grade.chance || 1)));
    character.dropWeight = 1 / character.baseChance;
  });

}

function getMapById(mapId) {
  return MAPS.find((map) => map.id === mapId) || MAPS[0];
}

function getGradeChanceText(grade) {
  if (!grade) return "1/1";
  return `1/${Math.max(1, Math.round(1 / (grade.chance || 1))).toLocaleString()}`;
}

function getCharacterChanceText(characterOrGrade) {
  if (!characterOrGrade) return "1/1";
  if (typeof characterOrGrade.baseChance === "number") {
    return `1/${Math.max(1, Math.round(characterOrGrade.baseChance)).toLocaleString()}`;
  }
  return getGradeChanceText(characterOrGrade);
}

function getBaseChanceLabel(characterOrGrade) {
  return `기본 확률 ${getCharacterChanceText(characterOrGrade)}`;
}

function getStatEmoji(label = "") {
  if (label.includes("공격") || label.includes("검 데미지")) return "🗡️";
  if (label.includes("공속") || label.includes("속도")) return "⏳";
  if (label.includes("사거리") || label.includes("조준") || label.includes("범위")) return "🎯";
  if (label.includes("배치 비용") || label.includes("코인") || label.includes("머니")) return "💰";
  if (label.includes("웨이브 수익")) return "🌾";
  if (label.includes("설치")) return "🧱";
  if (label.includes("확률")) return "✨";
  if (label.includes("보유")) return "📦";
  return "✦";
}

function decorateStatLabel(label = "") {
  return `${getStatEmoji(label)} ${label}`;
}

function formatCharacterStatTokens(character, options = {}) {
  const { includeCost = false, includeLimit = false, includeQuantity = false, includeSword = false } = options;
  const tokens = [];
  const placementLimit = Math.min(getUnitPlacementLimit(character), MAX_TOTAL_PLACED_UNITS);

  if (character.farmIncome) {
    tokens.push(`${decorateStatLabel("웨이브 수익")} ${character.farmIncome}`);
  } else if (character.name === "사령관") {
    tokens.push(`${decorateStatLabel("오라 범위")} ${character.range}`);
    tokens.push(`${decorateStatLabel("오라 공속")} +${Math.round((character.auraBuff || 0.18) * 100)}%`);
  } else {
    tokens.push(`${decorateStatLabel("공격력")} ${character.atk.toLocaleString()}`);
    tokens.push(`${decorateStatLabel("사거리")} ${character.range.toLocaleString()}`);
    tokens.push(`${decorateStatLabel("공속")} ${Number(character.speed || 0).toFixed(2)}`);
  }

  if (includeSword && character.name === "성운을 다루는자, 노바") {
    tokens.push(`${decorateStatLabel("검 데미지")} ${getNovaSwordDamage(character).toLocaleString()}`);
  }
  if (includeCost) {
    tokens.push(`${decorateStatLabel("배치 비용")} ${character.cost.toLocaleString()}`);
  }
  if (includeLimit) {
    if (placementLimit < MAX_TOTAL_PLACED_UNITS) {
      tokens.push(`${decorateStatLabel("최대 설치")} ${placementLimit}개`);
    }
  }
  if (includeQuantity) {
    tokens.push(`${decorateStatLabel("보유 수량")} X ${character.quantity || 1}`);
  }

  return tokens;
}

function getBattleCoinReward(result = "gameover") {
  if (previewMode) return 0;
  const mapCoinBonus = currentMap.coinRewardBonus || 0;
  if (result === "clear") {
    const clearBonus = Math.max(12, Math.round(currentMap.finalWave * 1.8 + mapCoinBonus * currentMap.finalWave * 0.75));
    return clearBonus + (currentMap.finalBoss?.coinReward || 0);
  }
  return Math.max(2, Math.round(Math.max(1, bWave) * (1.15 + mapCoinBonus * 0.24)));
}

function showBattleResultOverlay(state, title, message, coinReward) {
  const overlay = document.getElementById("battleOverlay");
  const card = document.getElementById("battleOverlayCard");
  const titleEl = document.getElementById("battleOverlayTitle");
  const textEl = document.getElementById("battleOverlayText");
  overlay.dataset.state = state;
  card.dataset.state = state;
  titleEl.textContent = title;
  textEl.innerHTML = `
    <span class="battleOverlayMessage">${message}</span>
    <span class="battleOverlayReward">획득 코인 <strong>🪙 ${coinReward.toLocaleString()}</strong></span>
  `;
  overlay.style.display = "flex";
}

function spawnNovaImpactEffect(x, y, radius) {
  spawnAreaIndicator(x, y, radius * 1.04, "rgba(166, 231, 255, 0.98)", {
    fillAlpha: 0.28,
    lineWidth: 6,
    life: 0.72,
    style: "nova-bloom",
    ringCount: 3,
    glowScale: 1.7,
  });
  spawnAreaIndicator(x, y, radius * 0.7, "rgba(225, 248, 255, 0.96)", {
    fillAlpha: 0.14,
    lineWidth: 3,
    life: 0.48,
    style: "nova-bloom",
    ringCount: 2,
    glowScale: 1.1,
  });
  spawnAreaIndicator(x, y, radius * 1.34, "rgba(104, 156, 255, 0.82)", {
    fillAlpha: 0.08,
    lineWidth: 2,
    life: 0.94,
    style: "nova-bloom",
    ringCount: 2,
    glowScale: 2.2,
  });
}

function getEnemyDisplayData(enemy) {
  if (enemy?.isFallen) {
    const variant = FALLEN_ENEMY_VARIANTS[enemy.baseName || enemy.name] || FALLEN_ENEMY_VARIANTS[enemy.name];
    if (variant) return variant;
  }
  return { name: enemy.name, emoji: enemy.emoji, color: enemy.color };
}

function getMidBossForWave(map, wave) {
  if (!map || !map.midBosses) return null;
  return map.midBosses[wave] || null;
}

function isBossWaveForMap(map, wave) {
  return wave === map.finalWave || Boolean(getMidBossForWave(map, wave));
}

function getUnitPlacementLimit(unit) {
  if (!unit) return MAX_TOTAL_PLACED_UNITS;
  if (unit.grade === "ethereal") return 1;
  if (unit.grade === "divine") return 2;
  if (unit.name === "빛의 작곡가") return 1;
  if (unit.name === "무영 암살자") return 5;
  if (unit.name === "천둥 사제") return 4;
  if (unit.name === "사령관") return 3;
  if (unit.name === "태엽 포격수") return 4;
  if (unit.farmIncome) return 8;
  return MAX_TOTAL_PLACED_UNITS;
}

function getPlacedCountForUnit(unit) {
  if (!unit) return 0;
  return placedUnits.filter((placedUnit) => placedUnit.name === unit.name).length;
}

function renderBattleModeCards() {
  const mapCardList = document.getElementById("mapCardList");
  if (!mapCardList) return;
  mapCardList.innerHTML = "";

  const title = document.getElementById("mapSelectTitle");
  const desc = document.getElementById("mapSelectDesc");
  const backBtn = document.getElementById("mapBackBtn");
  if (title) title.textContent = "전투 모드 선택";
  if (desc) desc.textContent = "일반 전장, 자유 연습장, 향후 추가될 특수 모드 중에서 원하는 전투 방식을 선택하세요.";
  if (backBtn) backBtn.textContent = "로비로 돌아가기";

  const modeCards = [
    {
      key: "normal",
      badge: "기본 진행",
      title: "일반모드",
      desc: "맵을 선택하고 웨이브를 돌파하는 기본 디펜스 모드",
      detail: "전장 선택으로 이동",
      style: {
        background: "linear-gradient(135deg, #7fcf98, #4f8c6b)",
        boxShadow: "0 16px 34px rgba(96, 186, 126, 0.24)",
      },
      onClick: () => openNormalMapSelect(),
    },
    {
      key: "practice",
      badge: "자유 테스트",
      title: "연습장",
      desc: "무한 머니와 무적 더미가 있는 일자 전장에서 자유롭게 실험",
      detail: "연습장 입장 선택으로 이동",
      style: {
        background: "linear-gradient(135deg, #7d8cff, #3d4fb6)",
        boxShadow: "0 16px 34px rgba(98, 120, 255, 0.24)",
      },
      onClick: () => openPracticeSelect(),
    },
    {
      key: "special",
      badge: "준비중",
      title: "특수모드",
      desc: "추후 추가될 이벤트/도전 전투용 모드",
      detail: "나중에 업데이트 예정",
      style: {
        background: "linear-gradient(135deg, #6b6f7f, #323646)",
        boxShadow: "0 16px 34px rgba(66, 72, 94, 0.22)",
      },
      disabled: true,
    },
  ];

  modeCards.forEach((mode) => {
    const button = document.createElement("button");
    button.className = "mapCard";
    Object.assign(button.style, mode.style);
    button.disabled = Boolean(mode.disabled);
    button.innerHTML = `
      <span class="mapBadge">${mode.badge}</span>
      <strong>${mode.title}</strong>
      <span>${mode.desc}</span>
      <span>${mode.detail}</span>
    `;
    if (mode.onClick) button.addEventListener("click", mode.onClick);
    mapCardList.appendChild(button);
  });
}

function renderMapCards() {
  const mapCardList = document.getElementById("mapCardList");
  if (!mapCardList) return;
  mapCardList.innerHTML = "";

  const title = document.getElementById("mapSelectTitle");
  const desc = document.getElementById("mapSelectDesc");
  const backBtn = document.getElementById("mapBackBtn");
  if (title) title.textContent = "일반 맵 선택";
  if (desc) desc.textContent = "전장마다 동선, 적 구성, 최종 보스 웨이브가 다릅니다. 전장 특성에 맞는 편성을 준비해 보세요.";
  if (backBtn) backBtn.textContent = "모드 선택으로 돌아가기";

  MAPS.forEach((map) => {
    const button = document.createElement("button");
    button.className = "mapCard";
    const descByMap = {
      meadow: "넓은 초원과 곡선 길이 있는 기본 전장",
      lava: "길고 뜨거운 순환 동선, 중앙 타워 섬이 있는 화산 전장",
      fallen: "긴 S자 동선과 연속 보스 구간이 이어지는 타락 정원",
    };
    const cardStyles = {
      meadow: {
        background: "linear-gradient(135deg, #7fcf98, #4f8c6b)",
        boxShadow: "0 16px 34px rgba(96, 186, 126, 0.24)",
      },
      lava: {
        background: "linear-gradient(135deg, #ff944b, #c94622)",
        boxShadow: "0 16px 34px rgba(255, 103, 62, 0.28)",
      },
      fallen: {
        background: "linear-gradient(135deg, #8d63d9, #512a86)",
        boxShadow: "0 16px 34px rgba(142, 103, 233, 0.28)",
      },
    };
    Object.assign(button.style, cardStyles[map.id] || {});
    button.innerHTML = `
      <span class="mapBadge">${map.difficulty} 난이도</span>
      <strong>${map.name}</strong>
      <span>${descByMap[map.id] || "전장"}</span>
      <span>최종 웨이브 ${map.finalWave} · 시작 머니 ${map.startMoney}</span>
    `;
    button.addEventListener("click", () => selectMap(map.id));
    mapCardList.appendChild(button);
  });
}

function renderPracticeEntryCard() {
  const mapCardList = document.getElementById("mapCardList");
  if (!mapCardList) return;
  mapCardList.innerHTML = "";

  const title = document.getElementById("mapSelectTitle");
  const desc = document.getElementById("mapSelectDesc");
  const backBtn = document.getElementById("mapBackBtn");
  if (title) title.textContent = "연습장 입장";
  if (desc) desc.textContent = "무한 머니로 자유롭게 배치하고, 움직이지 않는 무적 더미에게 피해를 시험할 수 있습니다.";
  if (backBtn) backBtn.textContent = "모드 선택으로 돌아가기";

  const button = document.createElement("button");
  button.className = "mapCard";
  Object.assign(button.style, {
    background: "linear-gradient(135deg, #7d8cff, #3d4fb6)",
    boxShadow: "0 16px 34px rgba(98, 120, 255, 0.24)",
  });
  button.innerHTML = `
    <span class="mapBadge">자유 테스트</span>
    <strong>연습장 입장</strong>
    <span>일자 길 · 무한 머니 · 무적 더미</span>
    <span>유닛 배치와 DPS 실험을 바로 시작합니다</span>
  `;
  button.addEventListener("click", openPracticeMode);
  mapCardList.appendChild(button);
}

function renderCodexCollection() {
  const collection = document.getElementById("codexCollection");
  if (!collection) return;
  collection.innerHTML = "";

  getCodexCharacters().forEach((character) => {
    const characterKey = getCharacterKey(character);
    const grade = getGradeData(character.grade);
    const owned = hasOwnedCharacter(character);
    const card = document.createElement("div");
    card.className = `codexCard${owned ? " is-owned" : ""}`;
    card.style.borderColor = `${grade.color}44`;
    card.innerHTML = `
      <div class="codexCardHeader">
        <div class="codexCardEmoji">${character.emoji}</div>
        <div>
          <div class="card-name" style="color:${grade.color}">${character.name}</div>
          <div class="card-grade" style="color:${grade.color}">[${grade.name}]</div>
        </div>
      </div>
      <div class="codexMeta">
        ${owned ? "보유 중" : "미보유"}<br>
        ${getBaseChanceLabel(character)}<br>
        ${
          owned
            ? formatCharacterStatTokens(character, { includeCost: true, includeSword: true }).join(" · ")
            : "스펙은 획득 후 확인 가능"
        }
      </div>
    `;

    card.addEventListener("mouseenter", (event) => showCodexTooltip(character, owned, event));
    card.addEventListener("mousemove", moveCodexTooltip);
    card.addEventListener("mouseleave", hideCodexTooltip);

    collection.appendChild(card);
  });

  renderCodexDetail();
}

function getCodexRoleLabel(character) {
  const roleByName = {
    "나무 포탑": "기본 타워",
    "별수호 궁수": "원거리 일반타워",
    "구름 검객": "근거리 타워",
    "촛불 학자": "유틸 원거리타워",
    "부메랑 투척병": "레어 튕김타워",
    "숲의 정령": "원거리 DPS타워",
    "백은 기사": "근거리 전열타워",
    "농장": "서포트타워",
    "서리 척후병": "CC타워",
    "청록 포수": "원거리 일반타워",
    "달빛 요정": "원거리 일반타워",
    "별마법사": "원거리 DPS타워",
    "폭풍 창기사": "근거리 CC타워",
    "수호 사제": "서포트타워",
    "천둥 사제": "연쇄 CC타워",
    "사신 기사": "근거리 후반타워",
    "화염 사수": "광역 DPS타워",
    "사령관": "오라 서포트타워",
    "광휘 창병": "관통 라인타워",
    "태엽 포격수": "후반 DPS타워",
    "드래곤 소환사": "값싼 신화 타워",
    "빛의 작곡가": "메인 서포트타워",
    "무영 암살자": "근거리 연계타워",
    "레인저": "메인 장거리 DPS타워",
    "태양신 아폴로": "디바인 화염 포격타워",
    "성운을 다루는자, 노바": "에테리얼 저격타워",
    "천공의 심판자": "디바인 하이엔드 타워",
    "디아블로": "에테리얼 최종타워",
  };
  return roleByName[character.name] || "전투 타워";
}

function renderCodexDetail() {
  const detail = document.getElementById("codexDetail");
  if (!detail) return;
  detail.style.display = "none";
  detail.innerHTML = "";
}

function getCodexTooltipHtml(character, owned) {
  const grade = getGradeData(character.grade);
  const specialLines = owned ? getUnitSpecialDescription(character) : [];
  const installLimit = getUnitPlacementLimit(character);
  const ownedEntry = ownedChars.find((ownedCharacter) => ownedCharacter.id === getCharacterKey(character));
  const quantity = character.isBase || character.id === "base-basic-tower" ? 1 : ownedEntry?.quantity || 0;
  const statSummary = owned
    ? formatCharacterStatTokens(character, { includeCost: true, includeSword: true }).join(" · ")
    : "미보유 상태에서는 상세 스펙이 잠겨 있습니다.";
  const installText = installLimit < MAX_TOTAL_PLACED_UNITS ? `최대 설치 ${installLimit}` : "";
  const descriptionHtml = owned ? [
    `${getCodexRoleLabel(character)}로 설계된 유닛입니다.`,
    ...specialLines,
  ]
    .map((line) => `<div class="codexTooltipLine">${line}</div>`)
    .join("") : "";

  return `
    <div class="codexTooltipHeader">
      <div class="codexTooltipEmoji">${character.emoji}</div>
      <div>
        <div class="codexTooltipName">${character.name}</div>
        <div class="codexTooltipGrade" style="color:${grade.color}">[${grade.name}] · ${getBaseChanceLabel(character)}</div>
      </div>
    </div>
    <div class="codexTooltipMeta">
      ${owned ? `보유 수량 ${quantity}` : "미보유"}<br>
      ${statSummary}
    </div>
    ${installText ? `<div class="codexTooltipLimit">${installText}</div>` : ""}
    ${owned ? `<div class="codexTooltipLines">${descriptionHtml}</div>` : ""}
  `;
}

function moveCodexTooltip(event) {
  const tooltip = document.getElementById("codexTooltip");
  if (!tooltip || tooltip.style.display === "none") return;
  const offset = 18;
  const maxX = window.innerWidth - tooltip.offsetWidth - 12;
  const maxY = window.innerHeight - tooltip.offsetHeight - 12;
  const left = Math.min(maxX, event.clientX + offset);
  const top = Math.min(maxY, event.clientY + offset);
  tooltip.style.left = `${Math.max(12, left)}px`;
  tooltip.style.top = `${Math.max(12, top)}px`;
}

function showCodexTooltip(character, owned, event) {
  const tooltip = document.getElementById("codexTooltip");
  if (!tooltip) return;
  tooltip.innerHTML = getCodexTooltipHtml(character, owned);
  tooltip.style.display = "block";
  moveCodexTooltip(event);
}

function hideCodexTooltip() {
  const tooltip = document.getElementById("codexTooltip");
  if (!tooltip) return;
  tooltip.style.display = "none";
}

function createPreviewDummy() {
  return {
    name: "연습용 더미",
    baseName: "연습용 더미",
    emoji: "🎯",
    hp: Number.MAX_SAFE_INTEGER,
    maxHp: Number.MAX_SAFE_INTEGER,
    atk: 0,
    speed: 0,
    reward: 0,
    color: "#f2d7ff",
    pathIndex: 0,
    x: PREVIEW_MAP.path[0].x,
    y: 240,
    id: Date.now() + Math.random(),
    isBoss: false,
    defeated: false,
    isTrainingDummy: true,
  };
}

function openPracticeMode() {
  previewMode = true;
  currentMap = PREVIEW_MAP;
  resetBattleState();
  showScreen("battleScreen");
  renderTowerShop();
  ensureBattleControls();
  placedUnits = [];
  enemies = [createPreviewDummy()];
  selectedUnit = null;
  previewDamageTotal = 0;
  previewDamageEvents = [];
  bMoney = 999999999;
  bWave = 1;
  bBaseHp = 999;
  bRunning = true;
  bSpawnDone = true;
  bGameOver = false;
  battleCleared = false;
  showPathGuide = false;
  updateBattleUI();
  showUnitInfo(null);
}

function getDestroyTimeCasterLevel() {
  const caster = getDestroyTimeCaster();
  return caster ? caster.upgradeLevel || 0 : 0;
}

function getDestroyTimeStats(level = getDestroyTimeCasterLevel()) {
  const isOverdrive = level >= 4;
  return {
    cooldown: DESTROY_TIME_SKILL.cooldown,
    duration: isOverdrive ? DESTROY_TIME_SKILL.duration * 1.35 : DESTROY_TIME_SKILL.duration,
    radius: isOverdrive ? DESTROY_TIME_SKILL.radius * 1.5 : DESTROY_TIME_SKILL.radius * (level >= 2 ? 1.12 : 1),
    dps: isOverdrive ? DESTROY_TIME_SKILL.dps * 2.35 : DESTROY_TIME_SKILL.dps * (1 + Math.max(0, level - 2) * 0.28),
    pullStrength: isOverdrive ? DESTROY_TIME_SKILL.pullStrength * 1.8 : DESTROY_TIME_SKILL.pullStrength * (1 + Math.max(0, level - 2) * 0.16),
    isOverdrive,
  };
}

function markEnemyDefeated(enemy, rewardMultiplier = 1) {
  if (!enemy || enemy.defeated) return;
  if (enemy.isTrainingDummy) {
    return;
  }
  enemy.defeated = true;
  const moneyReward = enemy.isBoss ? 0 : Math.floor((enemy.reward || 0) * rewardMultiplier * 0.7);
  if (moneyReward > 0) {
    bMoney += moneyReward;
    spawnFloatingText(enemy.x, enemy.y - 12, `+${moneyReward}G`, "#ffd68d");
  }

  if (enemy.isBoss || enemy.isMidBoss) {
    activeBoss = null;
  }
}

function spawnWaveEnemy(baseType, wave, extraScale = 1, overrides = {}) {
  const mapScale = currentMap.enemyScale || 1;
  const earlyWaveEase = wave <= 5 ? 0.72 : wave <= 8 ? 0.86 : 1;
  const postSevenBuff = wave >= 7 ? 1.08 : 1;
  const fallenEarlyBuff = currentMap.id === "fallen" && wave <= 8 ? 1.12 : 1;
  const hpScale = (1 + wave * 0.13 + Math.max(0, wave - 6) * 0.07) * mapScale * extraScale * earlyWaveEase * postSevenBuff * 1.5;
  const atkScale = (1 + wave * 0.07 + Math.max(0, wave - 8) * 0.03) * (1 + (mapScale - 1) * 0.65) * (wave <= 7 ? 0.8 : 1) * (wave >= 7 ? 1.06 : 1);
  const rewardScale = (1 + wave * 0.1 + (mapScale - 1) * 0.8) * (wave >= 7 ? 1.05 : 1);
  return {
    ...baseType,
    maxHp: Math.floor((overrides.hp || baseType.hp) * hpScale * fallenEarlyBuff),
    hp: Math.floor((overrides.hp || baseType.hp) * hpScale * fallenEarlyBuff),
    atk: Math.floor((overrides.atk || baseType.atk) * atkScale),
    reward: Math.floor((overrides.reward || baseType.reward) * rewardScale),
    speed: Number(((overrides.speed || baseType.speed) * (overrides.speedScale || 1)).toFixed(2)),
    baseName: baseType.name,
    pathIndex: 1,
    x: currentMap.path[0].x,
    y: currentMap.path[0].y,
    id: Date.now() + Math.random(),
    isBoss: false,
    defeated: false,
    coinReward: overrides.coinReward || 0,
    isFallen: currentMap.id === "fallen",
  };
}

function spawnBossEnemy(bossData) {
  const boss = {
    ...bossData,
    maxHp: Math.floor(bossData.hp * 1.5),
    hp: Math.floor(bossData.hp * 1.5),
    pathIndex: 1,
    x: currentMap.path[0].x,
    y: currentMap.path[0].y,
    id: Date.now() + Math.random(),
    isBoss: true,
    defeated: false,
  };
  activeBoss = boss;
  return boss;
}

function spawnMidBossEnemy(bossData) {
  const boss = {
    ...bossData,
    maxHp: Math.floor(bossData.hp * 1.5),
    hp: Math.floor(bossData.hp * 1.5),
    pathIndex: 1,
    x: currentMap.path[0].x,
    y: currentMap.path[0].y,
    id: Date.now() + Math.random(),
    isBoss: false,
    isMidBoss: true,
    defeated: false,
  };
  activeBoss = boss;
  return boss;
}

function getAvailableEnemyPool(mapId) {
  return ENEMY_TYPES.filter((enemy) => !enemy.mapIds || enemy.mapIds.includes(mapId));
}

function enterBattleClear() {
  if (battleCleared) return;
  battleCleared = true;
  bRunning = false;
  draggingTower = null;
  const battleCoinReward = getBattleCoinReward("clear");
  coins += battleCoinReward;
  activeBoss = null;
  showBattleResultOverlay("clear", "게임 클리어", `${currentMap.name} 제압 성공!<br>전장을 정리하고 보상을 챙겨 귀환합니다.`, battleCoinReward);
  playBattleSound("clear");
  updateLobbyUI();
  updateGachaUI();
  updateBattleUI();
}

function setBattleSpeed(nextSpeed) {
  battleSpeed = nextSpeed;
  ["speedBtn1", "speedBtn15", "speedBtn2"].forEach((id) => {
    const button = document.getElementById(id);
    if (!button) return;
    const targetSpeed = Number(button.dataset.speed || "1");
    button.classList.toggle("is-active", targetSpeed === battleSpeed);
  });
}

function toggleAutoStartWave() {
  autoStartWave = !autoStartWave;
  playUISound(autoStartWave ? "toggleOn" : "toggleOff");
  updateBattleUI();
}

function ensureAudioContext() {
  if (!audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    audioContext = new AudioCtx();
  }
  if (audioContext.state === "suspended") {
    audioContext.resume().catch(() => {});
  }
  return audioContext;
}

function getCategoryVolume(category) {
  const effectiveCategory = category === "skill" ? "battle" : category;
  return (audioSettings.master || 0) * (audioSettings[effectiveCategory] || 0);
}

function playTone({ frequency = 440, duration = 0.16, volume = 0.2, type = "sine", category = "ui", glideTo = null }) {
  const ctx = ensureAudioContext();
  if (!ctx) return;
  const gainValue = volume * getCategoryVolume(category);
  if (gainValue <= 0.0001) return;

  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
  if (glideTo) {
    oscillator.frequency.exponentialRampToValueAtTime(glideTo, ctx.currentTime + duration);
  }
  gain.gain.setValueAtTime(0.0001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(gainValue, ctx.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
  oscillator.connect(gain);
  gain.connect(ctx.destination);
  oscillator.start();
  oscillator.stop(ctx.currentTime + duration + 0.03);
}

function playChord(frequencies, options = {}) {
  frequencies.forEach((frequency, index) => {
    window.setTimeout(() => {
      playTone({ frequency, ...options });
    }, index * 45);
  });
}

function playUISound(kind = "click") {
  if (kind === "toggleOn") {
    playChord([420, 560], { duration: 0.12, volume: 0.18, type: "triangle", category: "ui" });
    return;
  }
  if (kind === "toggleOff") {
    playTone({ frequency: 280, glideTo: 200, duration: 0.14, volume: 0.15, type: "triangle", category: "ui" });
    return;
  }
  playTone({ frequency: 360, glideTo: 430, duration: 0.11, volume: 0.13, type: "triangle", category: "ui" });
}

function playGachaSound(gradeId) {
  if (gradeId === "ethereal") {
    return;
  }
  if (gradeId === "divine") {
    playChord([320, 400, 520], { duration: 0.55, volume: 0.2, type: "triangle", category: "gacha" });
    return;
  }
  playTone({ frequency: 320, glideTo: 520, duration: 0.22, volume: 0.16, type: "triangle", category: "gacha" });
}

function playEtherealRevealSound() {
  playChord([90, 140, 210, 320, 480], { duration: 1.4, volume: 0.28, type: "sawtooth", category: "gacha" });
  window.setTimeout(() => {
    playChord([160, 240, 360, 540], { duration: 1.2, volume: 0.22, type: "triangle", category: "gacha" });
  }, 420);
  window.setTimeout(() => {
    playTone({ frequency: 110, glideTo: 55, duration: 1.8, volume: 0.24, type: "sawtooth", category: "gacha" });
  }, 120);
}

function playEtherealPrepareSound() {
  playTone({ frequency: 70, glideTo: 44, duration: 1.2, volume: 0.22, type: "sawtooth", category: "gacha" });
  window.setTimeout(() => {
    playTone({ frequency: 96, glideTo: 66, duration: 0.9, volume: 0.16, type: "triangle", category: "gacha" });
  }, 180);
}

function playBattleSound(kind = "place") {
  const presets = {
    place: { frequency: 220, glideTo: 290, duration: 0.16, volume: 0.14, type: "square" },
    upgrade: { frequency: 640, glideTo: 420, duration: 0.14, volume: 0.15, type: "square" },
    wave: { frequency: 180, glideTo: 120, duration: 0.28, volume: 0.18, type: "sawtooth" },
    sell: { frequency: 260, glideTo: 210, duration: 0.12, volume: 0.13, type: "triangle" },
    clear: { frequency: 500, glideTo: 760, duration: 0.35, volume: 0.2, type: "triangle" },
    gameover: { frequency: 220, glideTo: 90, duration: 0.45, volume: 0.18, type: "sawtooth" },
  };
  const preset = presets[kind] || presets.place;
  playTone({ ...preset, category: "battle" });
}

function playSkillSound(kind = "destroyTime") {
  if (kind === "destroyTimeOverdrive") {
    playChord([110, 170, 280, 430], { duration: 0.42, volume: 0.24, type: "sawtooth", category: "battle" });
    window.setTimeout(() => {
      playTone({ frequency: 82, glideTo: 48, duration: 0.34, volume: 0.2, type: "triangle", category: "battle" });
    }, 40);
    return;
  }
  playChord([126, 190, 320], { duration: 0.34, volume: 0.22, type: "triangle", category: "battle" });
  window.setTimeout(() => {
    playTone({ frequency: 88, glideTo: 52, duration: 0.28, volume: 0.18, type: "sawtooth", category: "battle" });
  }, 36);
}

function updateAudioSliderLabels() {
  ["master", "ui", "gacha", "battle", "skill"].forEach((key) => {
    const valueEl = document.getElementById(`${key}VolumeVal`);
    if (!valueEl) return;
    if (key === "skill") {
      valueEl.textContent = "전투 연동";
      return;
    }
    valueEl.textContent = `${Math.round((audioSettings[key] || 0) * 100)}%`;
  });
}

function initSettingsPanel() {
  const openBtn = document.getElementById("settingsOpenBtn");
  const closeBtn = document.getElementById("settingsCloseBtn");
  const panel = document.getElementById("settingsPanel");
  if (!openBtn || !closeBtn || !panel) return;

  openBtn.addEventListener("click", () => {
    panel.style.display = "flex";
    playUISound("click");
  });
  closeBtn.addEventListener("click", () => {
    panel.style.display = "none";
    playUISound("click");
  });
  panel.addEventListener("click", (event) => {
    if (event.target === panel) {
      panel.style.display = "none";
    }
  });

  ["master", "ui", "gacha", "battle", "skill"].forEach((key) => {
    const slider = document.getElementById(`${key}Volume`);
    if (!slider) return;
    slider.value = Math.round((audioSettings[key] || 0) * 100);
    if (key === "skill") {
      slider.disabled = true;
      return;
    }
    slider.addEventListener("input", () => {
      audioSettings[key] = Number(slider.value) / 100;
      updateAudioSliderLabels();
      playUISound("click");
    });
  });

  const skillLabel = document.querySelector('label[for="skillVolume"]');
  if (skillLabel) {
    skillLabel.innerHTML = '스킬 사운드 <span id="skillVolumeVal">전투 연동</span>';
  }

  updateAudioSliderLabels();
}

function ensureBattleSkillUI() {
  if (document.getElementById("battleSkillPanel")) return;

  const panel = document.createElement("button");
  panel.id = "battleSkillPanel";
  panel.type = "button";
  panel.style.display = "none";
  panel.innerHTML = `
    <span class="skillHotkey">F</span>
    <span class="skillEyebrow">Ethereal Skill</span>
    <strong class="skillName">Destroy Time</strong>
    <span id="battleSkillStatus" class="skillStatus">\uC5D0\uD14C\uB9AC\uC5BC Lv.2 \uD544\uC694</span>
  `;
  panel.addEventListener("click", () => {
    useDestroyTime();
  });
  document.getElementById("battleScreen").appendChild(panel);
}

function refreshBattleSkillUIText() {
  const panel = document.getElementById("battleSkillPanel");
  if (!panel) return;

  panel.innerHTML = `
    <span class="skillHotkey">F</span>
    <span class="skillEyebrow">Ethereal Skill</span>
    <strong class="skillName">Destroy Time</strong>
    <span id="battleSkillStatus" class="skillStatus">에테리얼 Lv.2 필요</span>
  `;
  panel.onclick = () => {
    useDestroyTime();
  };
}

function applyUIText() {
  const lobbyStats = document.querySelectorAll("#lobbyUI span");
  if (lobbyStats[0]) lobbyStats[0].innerHTML = '\uD83E\uDE99 \uCF54\uC778 <strong id="coinVal">0</strong>';
  if (lobbyStats[1]) lobbyStats[1].innerHTML = '\uD83E\uDDD9 \uBCF4\uC720 \uC720\uB2DB <strong id="ownedVal">0</strong>';
  if (lobbyStats[2]) lobbyStats[2].innerHTML = '\uD83C\uDF92 \uAC00\uBC29 <strong id="bagVal">0</strong>/5';

  const battleStats = document.querySelectorAll("#battleTop span");
  if (battleStats[0]) battleStats[0].innerHTML = '\uD83D\uDDFA\uFE0F \uB9F5 <strong id="bMapNameVal">\uCD08\uC6D0 \uAD00\uBB38</strong>';
  if (battleStats[1]) battleStats[1].innerHTML = `\uD83C\uDF0A \uC6E8\uC774\uBE0C <strong id="bWaveVal">0/${currentMap.finalWave}</strong>`;
  if (battleStats[2]) battleStats[2].innerHTML = '\uD83C\uDFF0 \uAE30\uC9C0 HP <strong id="bBaseHpVal">100</strong>';
  if (battleStats[3]) battleStats[3].innerHTML = '\uD83D\uDCB0 \uBA38\uB2C8 <strong id="bMoneyVal">500</strong>';
  if (battleStats[4]) battleStats[4].innerHTML = '\uD83E\uDE99 \uCF54\uC778 <strong id="bCoinVal">0</strong>';
  if (battleStats[5]) battleStats[5].innerHTML = `\uD83E\uDDF1 \uC124\uCE58 <strong id="bPlacedVal">0/${MAX_TOTAL_PLACED_UNITS}</strong>`;

  const interactHint = document.getElementById("interactHint");
  if (interactHint && !nearZone) interactHint.textContent = "[ E ] \uC0C1\uD638\uC791\uC6A9";

  const startButton = document.getElementById("bStartWaveBtn");
  if (startButton) startButton.textContent = "\uD83C\uDF0A \uC6E8\uC774\uBE0C \uC2DC\uC791";

  const unitInfoTitle = document.querySelector("#unitInfo h3");
  if (unitInfoTitle) unitInfoTitle.textContent = "\uD83E\uDDE9 \uC720\uB2DB \uC815\uBCF4";
}

function getDestroyTimeCaster() {
  return placedUnits.find((unit) => unit.name === "디아블로" && (unit.upgradeLevel || 0) >= 2) || null;
}

function useDestroyTime() {
  if (!bRunning || bGameOver) return false;
  const caster = getDestroyTimeCaster();
  if (!caster || destroyTimeCooldown > 0) return false;
  const skillStats = getDestroyTimeStats(caster.upgradeLevel || 0);

  const spawnPoint = currentMap.path[0];
  activeBlackHole = {
    x: spawnPoint.x + 34,
    y: spawnPoint.y,
    radius: skillStats.radius,
    duration: skillStats.duration,
    life: skillStats.duration,
    casterId: caster.id,
    overdrive: skillStats.isOverdrive,
  };
  destroyTimeCooldown = skillStats.cooldown;
  spawnFloatingText(activeBlackHole.x, activeBlackHole.y - 26, "Destroy Time", "#ff8df6");
  showBattleMsg(skillStats.isOverdrive ? "💥 Destroy Time : Abyss Overdrive" : "\uD83D\uDCA5 Destroy Time \uBC1C\uB3D9");
  playSkillSound(skillStats.isOverdrive ? "destroyTimeOverdrive" : "destroyTime");
  updateBattleUI();
  return true;
}

function updateDestroyTime(dt) {
  if (bRunning && destroyTimeCooldown > 0) {
    destroyTimeCooldown = Math.max(0, destroyTimeCooldown - dt);
  }

  if (!activeBlackHole) return;

  activeBlackHole.life -= dt;
  if (activeBlackHole.life <= 0) {
    activeBlackHole = null;
    return;
  }

  enemies.forEach((enemy) => {
    const dx = activeBlackHole.x - enemy.x;
    const dy = activeBlackHole.y - enemy.y;
    const distance = Math.hypot(dx, dy) || 1;
    if (distance > activeBlackHole.radius) return;

    const pullRatio = 1 - distance / activeBlackHole.radius;
    if (!enemy.isTrainingDummy) {
      const pullForce = DESTROY_TIME_SKILL.pullStrength * pullRatio * dt;
      enemy.x += (dx / distance) * pullForce;
      enemy.y += (dy / distance) * pullForce;
    }
    const damage = DESTROY_TIME_SKILL.dps * pullRatio * dt;
    if (enemy.isTrainingDummy) {
      recordPreviewDamage(damage);
    } else {
      enemy.hp -= damage;
    }

    if (enemy.hp <= 0) {
      if (enemy.isTrainingDummy) {
        return;
      } else {
        bMoney += enemy.reward;
        spawnFloatingText(enemy.x, enemy.y - 12, `${enemy.reward}G`, "#ffd68d");
      }
    }
  });

  enemies = enemies.filter((enemy) => enemy.hp > 0);
}

function showScreen(id) {
  ["lobbyScreen", "gachaScreen", "mapSelectScreen", "bagScreen", "codexScreen", "battleScreen"].forEach((screenId) => {
    document.getElementById(screenId).style.display = "none";
  });
  document.getElementById(id).style.display = "flex";
}

function getGradeData(id) {
  return GRADES.find((grade) => grade.id === id) || GRADES[GRADES.length - 1];
}

function getCharacterKey(character) {
  if (character.id) return character.id;
  return `${character.grade}:${character.name}`;
}

function getOwnedTotalCount() {
  return ownedChars.reduce((sum, character) => sum + (character.quantity || 1), 0);
}

function getWindJavelinBounceCount(level = 0) {
  const bounceByLevel = [2, 3, 4, 5, 6];
  return bounceByLevel[Math.max(0, Math.min(MAX_UPGRADE_LEVEL, level))] || 2;
}

function getProjectileStyleForUnit(unit) {
  if (!unit) return "default";
  const styleByName = {
    "디아블로": "diablo-orb",
    "나무 포탑": "wood-pellet",
    "별수호 궁수": "arrow-shot",
    "구름 검객": "cloud-slash",
    "태양신 아폴로": "apollo-sun",
    "촛불 학자": "candle-flame",
    "부메랑 투척병": "boomerang",
    "숲의 정령": "leaf-bolt",
    "백은 기사": "silver-lance",
    "서리 척후병": "ice-shard",
    "청록 포수": "teal-shot",
    "달빛 요정": "moon-spark",
    "별마법사": "arcane-orb",
    "폭풍 창기사": "storm-spear",
    "수호 사제": "priest-bead",
    "천둥 사제": "thunder-chain",
    "사신 기사": "reaper-blade",
    "화염 사수": "flame-spray",
    "광휘 창병": "radiant-pierce",
    "태엽 포격수": "gear-shell",
    "드래곤 소환사": "dragon-bolt",
    "성운을 다루는자, 노바": "nova-basic",
    "무영 암살자": "shadow-dagger",
    "레인저": "ranger-shot",
  };
  return styleByName[unit.name] || "default";
}

function getProjectileSpeedForUnit(unit) {
  const speedByName = {
    "나무 포탑": 280,
    "별수호 궁수": 340,
    "구름 검객": 320,
    "태양신 아폴로": 340,
    "촛불 학자": 250,
    "부메랑 투척병": 300,
    "숲의 정령": 330,
    "백은 기사": 300,
    "서리 척후병": 260,
    "청록 포수": 420,
    "달빛 요정": 360,
    "별마법사": 230,
    "폭풍 창기사": 340,
    "수호 사제": 250,
    "천둥 사제": 360,
    "사신 기사": 320,
    "화염 사수": 260,
    "광휘 창병": 330,
    "태엽 포격수": 250,
    "드래곤 소환사": 300,
    "성운을 다루는자, 노바": 520,
    "무영 암살자": 360,
    "레인저": 520,
  };
  return speedByName[unit.name] || 300;
}

function hasDestroyTimeSkill(unit) {
  return unit?.name === "디아블로";
}

function getNovaSwordDamage(unit) {
  return unit?.swordDamage || (5000 + ((unit?.upgradeLevel || 0) * 500));
}

function getCommanderSpeedBuff(unit) {
  if (!unit || unit.name === "사령관") return 0;
  return placedUnits
    .filter(
      (other) =>
        other.name === "사령관" &&
        other.id !== unit.id &&
        Math.hypot(other.x - unit.x, other.y - unit.y) <= other.range
    )
    .reduce((maxBuff, commander) => Math.max(maxBuff, commander.auraBuff || 0.18), 0);
}

function getThunderPriestProfile(unit) {
  const level = unit.upgradeLevel || 0;
  if (level >= 4) {
    return { atk: Math.round(unit.atk * 4.2), speed: 0.5, chains: 4, stun: 1 };
  }
  if (level >= 3) {
    return { atk: Math.round(unit.atk * 2.8), speed: 0.4, chains: 3, stun: 0.8 };
  }
  const stunByLevel = [0, 0, 0.05];
  return { atk: unit.atk, speed: unit.speed, chains: 1 + level, stun: stunByLevel[level] ?? 0 };
}

function getComposerRangeColor(unit) {
  const mode = unit?.songMode || "attack";
  if (mode === "discount") return "#7fe7a4";
  if (mode === "range") return "#bf8cff";
  return "#ff8d7b";
}

function getRangeIndicatorColor(unit) {
  if (unit?.name === "빛의 작곡가") return getComposerRangeColor(unit);
  return unit?.gradeData?.color || "#ffffff";
}

function getComposerSongData(unit) {
  const level = unit?.upgradeLevel || 0;
  const mode = unit?.songMode || "attack";
  if (level >= 4) {
    return { mode, atkPercent: 0.05, discountPercent: 0.05, rangePercent: 0.1 };
  }
  const selectedAtk = [0.1, 0.1, 0.05, 0.05][level] || 0.1;
  const selectedDiscount = [0.1, 0.1, 0.05, 0.05][level] || 0.1;
  const selectedRange = [0.2, 0.2, 0.1, 0.1][level] || 0.2;
  const selected = {
    attack: { atkPercent: selectedAtk, discountPercent: 0, rangePercent: 0 },
    discount: { atkPercent: 0, discountPercent: selectedDiscount, rangePercent: 0 },
    range: { atkPercent: 0, discountPercent: 0, rangePercent: selectedRange },
  }[mode];
  return {
    mode,
    atkPercent: selected?.atkPercent || 0,
    discountPercent: selected?.discountPercent || 0,
    rangePercent: selected?.rangePercent || 0,
  };
}

function getRangerWaveAuraPercent(unit) {
  if (!unit || unit.name !== "레인저" || (unit.upgradeLevel || 0) < 2 || (unit.rangerWaveAuraTime || 0) <= 0) return 0;
  return 0.15;
}

function getSupportEffects(unit) {
  if (!unit) return { attackPercent: 0, rangePercent: 0, speedPercent: 0, discountPercent: 0 };

  const speedPercent = getCommanderSpeedBuff(unit);
  let attackPercent = 0;
  let rangePercent = 0;
  let rangerRangePercent = 0;
  let discountPercent = 0;

  placedUnits.forEach((other) => {
    if (other.id === unit.id) return;
    const distance = Math.hypot(other.x - unit.x, other.y - unit.y);

    if (other.name === "빛의 작곡가" && distance <= other.range) {
      const songData = getComposerSongData(other);
      attackPercent += songData.atkPercent;
      rangePercent += songData.rangePercent;
      discountPercent += songData.discountPercent;
    }

    if (other.name === "레인저" && distance <= 100) {
      rangerRangePercent += getRangerWaveAuraPercent(other);
    }
  });

  rangePercent += Math.min(rangerRangePercent, 0.225);
  discountPercent = Math.min(discountPercent, 0.3);

  return { attackPercent, rangePercent, speedPercent, discountPercent };
}

function changeComposerSong(unit, nextMode) {
  if (!unit || unit.name !== "빛의 작곡가") return;
  if ((unit.songMode || "attack") === nextMode) return;
  if ((unit.songChangeCooldown || 0) > 0) {
    showBattleMsg(`노래 변경 대기 ${Math.ceil(unit.songChangeCooldown)}초`);
    return;
  }
  unit.songMode = nextMode;
  unit.songChangeCooldown = 10;
  showBattleMsg(`빛의 작곡가 · ${nextMode === "attack" ? "파괴의 노래" : nextMode === "discount" ? "풍요의 노래" : "시야의 노래"}`);
  showUnitInfo(unit);
}

function getUnitSpecialDescription(unit) {
  if (!unit) return [];
  const lines = {
    "나무 포탑": ["기본 지급 타워", "특수 능력 없음"],
    "별수호 궁수": ["초반 배치가 쉬운 무난한 원거리 딜러"],
    "구름 검객": ["근거리 범위 베기", "짧은 사거리 대신 주변을 함께 공격"],
    "촛불 학자": ["강철 속성 해제 전문", "강철 관련 효과는 추후 시스템과 함께 적용 예정"],
    "부메랑 투척병": [`부메랑이 추가로 튕김`, `현재 최대 ${getWindJavelinBounceCount(unit.upgradeLevel || 0)}회 튕김`],
    "숲의 정령": ["설치 비용이 높지만 성장 기대치가 좋은 원거리 DPS"],
    "백은 기사": ["근거리 전열형", "보스 패턴 도발 효과는 추후 시스템과 함께 적용 예정"],
    "농장": ["전투 공격 없음", "웨이브 종료마다 머니를 생산"],
    "서리 척후병": ["빙결 사격", "일반 적을 0.5초간 얼림 · 보스 면역", "느린 공속으로 꾸준히 빙결을 거는 제어형 타워"],
    "청록 포수": ["무난하고 안정적인 초반 원거리 딜러"],
    "달빛 요정": ["초반에 쓰기 좋은 빠른 원거리 딜러"],
    "별마법사": ["신화 광역 폭발 딜러", "폭발 중심부는 추가 피해를 주며 강화할수록 폭발 범위가 커짐"],
    "폭풍 창기사": ["근거리 충격 창격", "일반 적 2초 기절 · 보스 면역 · 내부 쿨타임 10초"],
    "수호 사제": ["웨이브 시작 시 기지 회복", "웨이브마다 기지 HP를 10 회복"],
    "천둥 사제": ["연쇄 번개", "Lv.2부터 매우 짧은 기절이 추가", "Lv.3부터는 느려지지만 강한 광역 제어기로 변함"],
    "사신 기사": ["후반형 근거리 딜러", "보스 패턴 CC 면역은 추후 시스템과 함께 적용 예정"],
    "화염 사수": ["초고속 화염 분사", "범위 피해를 주는 화염 공격", "강철 속성 해제는 추후 시스템과 함께 적용 예정"],
    "사령관": ["지원 오라", "사거리 내 아군의 공격속도 증가", "만렙 기준 최대 버프량 25%"],
    "광휘 창병": ["빛의 관통 일격", "직선 상의 적을 함께 관통해 공격"],
    "태엽 포격수": ["집중 포화", "같은 적을 계속 때릴수록 공격속도가 최대 +5까지 증가", "사거리는 짧아졌지만 고정 화력은 유지"],
    "드래곤 소환사": ["값싼 신화 초반 타워", "초반 배치 부담이 적은 무난한 딜러"],
    "빛의 작곡가": ["메인 서포트 전설", "파괴/풍요/시야의 노래 중 하나를 선택", "만렙 시 선택한 노래는 유지되고 나머지 노래도 소량 적용"],
    "무영 암살자": ["근거리 암살형", "Lv.2부터 3번째 공격마다 회전 베기 발동", "Lv.4부터 회전 베기 범위가 크게 증가 · 최대 설치 5"],
    "레인저": ["초장거리 저격 특화", "웨이브 시작 사거리 버프는 Lv.2 이상부터 활성화", "만렙 시 초고속 탄환과 붉은 폭발 화력으로 마무리"],
    "태양신 아폴로": ["화염 구체 발사", "폭발 범위 피해를 주며 강철 속성 해제 예정", "정열의 불꽃과 함께 강림하는 디바인 포격 타워"],
    "성운을 다루는자, 노바": ["공격할 때마다 우주의 검이 1개씩 공전", "검이 발사되면 영롱한 성운 폭발을 일으켜 범위 피해", "Lv.4부터는 매 공격마다 검 폭발 발사"],
    "디아블로": ["에테리얼 DPS타워로 설계됨", "Lv.2 달성 시 Destroy Time 스킬 개방"],
  };
  return lines[unit.name] || [];
}

function hasOwnedCharacter(character) {
  if (character.isBase || character.id === "base-basic-tower") return true;
  return ownedChars.some((owned) => owned.id === getCharacterKey(character));
}

function getCodexCharacters() {
  return [...BASE_TOWERS, ...CHARACTERS].sort((a, b) => {
    const gradeA = GRADES.findIndex((grade) => grade.id === a.grade);
    const gradeB = GRADES.findIndex((grade) => grade.id === b.grade);
    return gradeB - gradeA;
  });
}

function roundToNearestFive(value) {
  return Math.max(100, Math.round(value / 100) * 100);
}

function getUpgradeCostProfile(unit) {
  if (unit.farmIncome) return UPGRADE_COST_PROFILES.farm;
  if (unit.name === "빛의 작곡가") return UPGRADE_COST_PROFILES.composer;
  return UPGRADE_COST_PROFILES.default;
}

function getUpgradeCostOverride(unit, level) {
  return UPGRADE_COST_OVERRIDES[unit.name]?.[level] ?? null;
}

function getUpgradeEffectProfile(unit) {
  if (unit.farmIncome) return UPGRADE_EFFECT_PROFILES.farm;
  if (unit.name === "빛의 작곡가") return UPGRADE_EFFECT_PROFILES.composer;
  if (unit.name === "사령관") return UPGRADE_EFFECT_PROFILES.commander;
  if (unit.name === "성운을 다루는자, 노바") return UPGRADE_EFFECT_PROFILES.nova;
  if (unit.grade === "ethereal") return UPGRADE_EFFECT_PROFILES.ethereal;
  return (
    UPGRADE_EFFECT_PROFILES.named[unit.name] ||
    UPGRADE_EFFECT_PROFILES.grade[unit.grade] ||
    UPGRADE_EFFECT_PROFILES.default
  );
}

function getUpgradeCost(unit) {
  const level = unit.upgradeLevel || 0;
  if (level >= MAX_UPGRADE_LEVEL) return null;
  const gradeMultiplier = GRADE_UPGRADE_MULTIPLIERS[unit.grade] || 1;
  const baseCost = unit.baseCost || unit.cost || 200;
  const supportEffects = getSupportEffects(unit);
  const overrideCost = getUpgradeCostOverride(unit, level);
  if (overrideCost != null) {
    return roundToNearestFive(overrideCost * (1 - supportEffects.discountPercent));
  }
  const profile = getUpgradeCostProfile(unit);
  const etherealCostBonus = unit.grade === "ethereal" ? 1.1 : 1;
  return roundToNearestFive(baseCost * profile[level] * gradeMultiplier * etherealCostBonus * (1 - supportEffects.discountPercent));
}

function getUpgradeEffects(unit, level = (unit.upgradeLevel || 0) + 1) {
  if (unit.farmIncome) {
    return { farmIncome: getUpgradeEffectProfile(unit)[level - 1] || 0 };
  }

  const baseEffects = getUpgradeEffectProfile(unit)[level - 1] || {};
  const burstBias = unit.baseAtk >= 100 ? 0.04 : 0;
  const rapidBias = unit.baseSpeed >= 1.4 ? 0.03 : 0;
  const longRangeBias = unit.baseRange >= 150 ? 0.03 : 0;

  return {
    atkPercent: (baseEffects.atkPercent || 0) + burstBias,
    rangePercent: (baseEffects.rangePercent || 0) + longRangeBias,
    speedPercent: (baseEffects.speedPercent || 0) + rapidBias,
    attackOverride: baseEffects.attackOverride,
    swordDamageFlat: baseEffects.swordDamageFlat || 0,
    splashRadiusFlat: baseEffects.splashRadiusFlat || 0,
    splashDamageFlat: baseEffects.splashDamageFlat || 0,
    projectileSpeedMultiplier: baseEffects.projectileSpeedMultiplier || 1,
    speedOverride: baseEffects.speedOverride,
    trueSwordEveryAttack: baseEffects.trueSwordEveryAttack || false,
    skillUnlock: hasDestroyTimeSkill(unit) && level >= 2,
    skillOverdrive: hasDestroyTimeSkill(unit) && level >= 4,
  };
}

function getUpgradeSummary(unit) {
  const nextLevel = (unit.upgradeLevel || 0) + 1;
  if (nextLevel > MAX_UPGRADE_LEVEL) return [];

  const effects = getUpgradeEffects(unit, nextLevel);
  const pieces = [];
  if (effects.atkPercent) {
    const gain = Math.round(unit.atk * effects.atkPercent);
    pieces.push({ label: decorateStatLabel("공격력"), value: `+${gain}` });
  }
  if (effects.rangePercent) {
    const gain = Math.round(unit.range * effects.rangePercent);
    pieces.push({ label: decorateStatLabel("사거리"), value: `+${gain}` });
  }
  if (effects.auraBuff) {
    pieces.push({ label: decorateStatLabel("오라 공속"), value: `+${Math.round(effects.auraBuff * 100)}%` });
  }
  if (effects.speedPercent) {
    const gain = Number((unit.speed * effects.speedPercent).toFixed(2));
    pieces.push({ label: decorateStatLabel("공속"), value: `${gain >= 0 ? "+" : ""}${gain}` });
  }
  if (effects.attackOverride != null) {
    pieces.push({ label: decorateStatLabel("공격력"), value: `${effects.attackOverride.toLocaleString()}로 변경` });
  }
  if (effects.speedOverride != null) {
    pieces.push({ label: decorateStatLabel("공속"), value: `${effects.speedOverride.toFixed(2)}로 변경` });
  }
  if (effects.swordDamageFlat) {
    pieces.push({ label: decorateStatLabel("검 데미지"), value: `+${effects.swordDamageFlat}` });
  }
  if (effects.splashRadiusFlat) {
    pieces.push({ label: decorateStatLabel("폭발 범위"), value: `+${effects.splashRadiusFlat}` });
  }
  if (effects.splashDamageFlat) {
    pieces.push({ label: decorateStatLabel("폭발 피해"), value: `+${effects.splashDamageFlat}` });
  }
  if (effects.projectileSpeedMultiplier && effects.projectileSpeedMultiplier > 1.01) {
    pieces.push({ label: decorateStatLabel("탄속"), value: `${effects.projectileSpeedMultiplier.toFixed(1)}배` });
  }
  if (effects.farmIncome) pieces.push({ label: decorateStatLabel("웨이브 수익"), value: `+${effects.farmIncome}` });
  if (effects.songAtkBonus) pieces.push({ label: decorateStatLabel("노래 공격 보너스"), value: `+${Math.round(effects.songAtkBonus * 100)}% (전 모드)` });
  if (effects.songDiscountBonus) pieces.push({ label: decorateStatLabel("노래 할인 보너스"), value: `+${Math.round(effects.songDiscountBonus * 100)}% (전 모드)` });
  if (effects.songRangeBonus) pieces.push({ label: decorateStatLabel("노래 사거리 보너스"), value: `+${Math.round(effects.songRangeBonus * 100)}% (전 모드)` });
  if (unit.name === "부메랑 투척병") {
    const currentBounces = getWindJavelinBounceCount(unit.upgradeLevel || 0);
    const nextBounces = getWindJavelinBounceCount(nextLevel);
    if (nextBounces > currentBounces) {
      pieces.push({ label: decorateStatLabel("튕김"), value: `${nextBounces}회` });
    }
  }
  if (unit.name === "무영 암살자" && nextLevel === 2) pieces.push({ label: decorateStatLabel("회전 베기"), value: "3타마다 범위 베기 300" });
  if (unit.name === "무영 암살자" && nextLevel === 3) pieces.push({ label: decorateStatLabel("회전 베기"), value: "범위 베기 400" });
  if (unit.name === "무영 암살자" && nextLevel === 4) pieces.push({ label: decorateStatLabel("회전 베기"), value: "범위 확대 · 범위 베기 500" });
  if (unit.name === "레인저" && nextLevel === 4) pieces.push({ label: decorateStatLabel("붉은 폭발"), value: "적중 시 주변 500 피해" });
  if (unit.name === "빛의 작곡가" && nextLevel === 2) pieces.push({ label: decorateStatLabel("노래 조율"), value: "선택 노래 5% / 시야 10%" });
  if (unit.name === "빛의 작곡가" && nextLevel === 4) pieces.push({ label: decorateStatLabel("피날레"), value: "선택 버프 유지 + 나머지 소량 적용" });
  if (unit.name === "성운을 다루는자, 노바" && nextLevel === 4) pieces.push({ label: decorateStatLabel("진정한 검"), value: "매 공격마다 발사" });
  if (effects.skillUnlock && nextLevel === 2) pieces.push({ label: decorateStatLabel("스킬 강화"), value: "Destroy Time 개방" });
  if (effects.skillOverdrive && nextLevel === 4) pieces.push({ label: decorateStatLabel("스킬 강화"), value: "심연 과부하 활성화" });
  return pieces;
}

function applyUpgrade(unit) {
  if (!unit || (unit.upgradeLevel || 0) >= MAX_UPGRADE_LEVEL) return false;

  const cost = getUpgradeCost(unit);
  if (cost === null || bMoney < cost) return false;

  bMoney -= cost;
  const nextLevel = (unit.upgradeLevel || 0) + 1;
  const effects = getUpgradeEffects(unit, nextLevel);

  if (effects.atkPercent) {
    unit.atk = Math.round(unit.atk * (1 + effects.atkPercent));
  }
  if (effects.attackOverride != null) {
    unit.atk = effects.attackOverride;
  }
  if (effects.rangePercent) {
    unit.range = Math.round(unit.range * (1 + effects.rangePercent));
  }
  if (effects.auraBuff) {
    unit.auraBuff = Number(((unit.auraBuff || 0) + effects.auraBuff).toFixed(2));
  }
  if (effects.speedPercent) {
    unit.speed = Number((unit.speed * (1 + effects.speedPercent)).toFixed(2));
  }
  if (effects.speedOverride != null) {
    unit.speed = effects.speedOverride;
  }
  if (effects.swordDamageFlat) {
    unit.swordDamage = getNovaSwordDamage(unit) + effects.swordDamageFlat;
  }
  if (effects.splashRadiusFlat) {
    unit.splashRadius = Math.round((unit.splashRadius || 0) + effects.splashRadiusFlat);
  }
  if (effects.splashDamageFlat) {
    unit.splashDamage = Math.round((unit.splashDamage || 0) + effects.splashDamageFlat);
  }
  if (effects.projectileSpeedMultiplier && effects.projectileSpeedMultiplier !== 1) {
    unit.projectileSpeedMultiplier = Number(((unit.projectileSpeedMultiplier || 1) * effects.projectileSpeedMultiplier).toFixed(2));
  }
  if (effects.trueSwordEveryAttack) {
    unit.trueSwordEveryAttack = true;
  }
  if (effects.farmIncome) {
    unit.farmIncome += effects.farmIncome;
  }

  unit.upgradeLevel = nextLevel;
  spawnFloatingText(unit.x, unit.y - 38, `강화 Lv.${unit.upgradeLevel}!`, "#9ef0ff");
  showBattleMsg(`${unit.name} 강화 완료`);
  playBattleSound("upgrade");
  showUnitInfo(unit);
  updateBattleUI();
  return true;
}

function addOwnedCharacter(baseCharacter) {
  const key = getCharacterKey(baseCharacter);
  const existing = ownedChars.find((character) => character.id === key);
  if (existing) {
    existing.quantity += 1;
    return existing;
  }

  const stacked = {
    ...baseCharacter,
    id: key,
    quantity: 1,
  };
  ownedChars.push(stacked);
  return stacked;
}

function getCanvasPoint(event, canvas) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  return {
    x: (event.clientX - rect.left) * scaleX,
    y: (event.clientY - rect.top) * scaleY,
  };
}

function isUnitOverlapping(x, y) {
  return placedUnits.some((unit) => Math.hypot(x - unit.x, y - unit.y) < MIN_UNIT_DISTANCE);
}

function showBattleMsg(message) {
  const button = document.getElementById("bStartWaveBtn");
  const defaultText = bRunning ? "⚔️ 웨이브 진행 중" : "🌊 웨이브 시작";
  clearTimeout(battleMessageTimer);
  button.textContent = message;
  battleMessageTimer = setTimeout(() => {
    button.textContent = bGameOver ? "💀 게임 오버" : defaultText;
  }, 1400);
}

function spawnFloatingText(x, y, text, color = "#fff4b3") {
  floatingTexts.push({
    x,
    y,
    text,
    color,
    life: 1.2,
    maxLife: 1.2,
  });
}

function spawnAreaIndicator(x, y, radius, color = "rgba(255,255,255,0.8)", options = {}) {
  areaIndicators.push({
    x,
    y,
    radius,
    color,
    fillAlpha: options.fillAlpha ?? 0.12,
    lineWidth: options.lineWidth ?? 3,
    life: options.life ?? 0.42,
    maxLife: options.life ?? 0.42,
    label: options.label || "",
    style: options.style || "default",
    ringCount: options.ringCount ?? 1,
    glowScale: options.glowScale ?? 1.2,
  });
}

function updateAreaIndicators(dt) {
  areaIndicators.forEach((indicator) => {
    indicator.life -= dt;
  });
  areaIndicators = areaIndicators.filter((indicator) => indicator.life > 0);
}

function recordPreviewDamage(amount) {
  if (!previewMode || amount <= 0) return;
  previewDamageTotal += amount;
  previewDamageEvents.push({ amount, life: 1 });
}

function updatePreviewDamage(dt) {
  previewDamageEvents = previewDamageEvents
    .map((item) => ({ ...item, life: item.life - dt }))
    .filter((item) => item.life > 0);
}

function getPreviewDps() {
  return Math.round(previewDamageEvents.reduce((sum, item) => sum + item.amount, 0));
}

function grantFarmIncome() {
  let totalIncome = 0;
  let totalHeal = 0;
  placedUnits.forEach((unit) => {
    if (unit.farmIncome) {
      bMoney += unit.farmIncome;
      totalIncome += unit.farmIncome;
      spawnFloatingText(unit.x, unit.y - 28, `+${unit.farmIncome}`, "#ffe08a");
    }
    if (unit.name === "수호 사제") {
      totalHeal += 10;
      spawnFloatingText(unit.x, unit.y - 46, "+10 HP", "#9ff4ff");
    }
  });
  if (totalHeal > 0) {
    bBaseHp = Math.min(100, bBaseHp + totalHeal);
  }
  return { totalIncome, totalHeal };
}

function updateSupportTimers(dt) {
  placedUnits.forEach((unit) => {
    if (unit.name === "빛의 작곡가") {
      unit.songChangeCooldown = Math.max(0, (unit.songChangeCooldown || 0) - dt);
    }
    if (unit.name === "레인저") {
      unit.rangerWaveAuraTime = Math.max(0, (unit.rangerWaveAuraTime || 0) - dt);
    }
  });
}


function updateLobby() {
  if (keys.w) player.y -= player.speed;
  if (keys.s) player.y += player.speed;
  if (keys.a) player.x -= player.speed;
  if (keys.d) player.x += player.speed;

  player.x = Math.max(player.size, Math.min(lobbyCanvas.width - player.size, player.x));
  player.y = Math.max(player.size, Math.min(lobbyCanvas.height - player.size, player.y));

  nearZone = null;
  LOBBY_ZONES.forEach((zone) => {
    const closeEnough =
      player.x > zone.x - 60 &&
      player.x < zone.x + zone.w + 60 &&
      player.y > zone.y - 60 &&
      player.y < zone.y + zone.h + 60;
    if (closeEnough) nearZone = zone;
  });

  const hint = document.getElementById("interactHint");
  hint.style.display = nearZone ? "block" : "none";
  if (nearZone) {
    hint.textContent = `[ E ] ${nearZone.label}`;
  }
}

function drawLobbyLegacy() {}

function updateLobbyUI() {
  document.getElementById("coinVal").textContent = coins;
  document.getElementById("ownedVal").textContent = getOwnedTotalCount();
  document.getElementById("bagVal").textContent = equippedCharIds.length;
}

function drawLobby() {
  lobbyTime += 0.016;
  lctx.clearRect(0, 0, lobbyCanvas.width, lobbyCanvas.height);

  const sky = lctx.createLinearGradient(0, 0, 0, lobbyCanvas.height);
  sky.addColorStop(0, "#31548a");
  sky.addColorStop(0.45, "#182a4f");
  sky.addColorStop(1, "#08111f");
  lctx.fillStyle = sky;
  lctx.fillRect(0, 0, lobbyCanvas.width, lobbyCanvas.height);

  const dawnGlow = lctx.createRadialGradient(450, 105, 24, 450, 105, 320);
  dawnGlow.addColorStop(0, "rgba(255, 214, 154, 0.28)");
  dawnGlow.addColorStop(0.5, "rgba(141, 194, 255, 0.16)");
  dawnGlow.addColorStop(1, "rgba(12, 18, 36, 0)");
  lctx.fillStyle = dawnGlow;
  lctx.fillRect(0, 0, lobbyCanvas.width, 330);

  lctx.fillStyle = "#172741";
  lctx.beginPath();
  lctx.ellipse(176, 106, 82, 28, 0.18, 0, Math.PI * 2);
  lctx.ellipse(708, 128, 92, 30, -0.1, 0, Math.PI * 2);
  lctx.fill();

  lctx.fillStyle = "rgba(255,255,255,0.05)";
  for (let i = 0; i < 22; i += 1) {
    const wobble = Math.sin(lobbyTime * 0.8 + i * 1.7) * 6;
    lctx.beginPath();
    lctx.arc(34 + i * 40, 54 + (i % 4) * 18 + wobble, 1.5 + (i % 3), 0, Math.PI * 2);
    lctx.fill();
  }

  lctx.fillStyle = "#2a425d";
  lctx.beginPath();
  lctx.moveTo(0, 392);
  lctx.bezierCurveTo(130, 340, 236, 350, 318, 390);
  lctx.lineTo(318, 422);
  lctx.lineTo(0, 422);
  lctx.closePath();
  lctx.fill();

  lctx.beginPath();
  lctx.moveTo(lobbyCanvas.width, 392);
  lctx.bezierCurveTo(780, 340, 664, 350, 582, 402);
  lctx.lineTo(582, 422);
  lctx.lineTo(lobbyCanvas.width, 422);
  lctx.closePath();
  lctx.fill();

  const ground = lctx.createLinearGradient(0, 390, 0, 600);
  ground.addColorStop(0, "#346f59");
  ground.addColorStop(0.55, "#214d40");
  ground.addColorStop(1, "#122e28");
  lctx.fillStyle = ground;
  lctx.fillRect(0, 390, lobbyCanvas.width, 210);

  const plaza = lctx.createLinearGradient(0, 0, 0, 600);
  plaza.addColorStop(0, "#3d7597");
  plaza.addColorStop(1, "#1f4058");
  lctx.fillStyle = plaza;
  lctx.beginPath();
  lctx.moveTo(90, 600);
  lctx.lineTo(228, 420);
  lctx.lineTo(672, 420);
  lctx.lineTo(810, 600);
  lctx.closePath();
  lctx.fill();

  lctx.strokeStyle = "rgba(255,255,255,0.08)";
  lctx.lineWidth = 2;
  for (let i = 0; i < 9; i += 1) {
    const x = 138 + i * 78;
    lctx.beginPath();
    lctx.moveTo(x, 600);
    lctx.lineTo(450, 420);
    lctx.stroke();
  }

  for (let i = 0; i < 6; i += 1) {
    const y = 452 + i * 24;
    lctx.beginPath();
    lctx.moveTo(184 - i * 18, y);
    lctx.lineTo(716 + i * 18, y);
    lctx.stroke();
  }

  const lanterns = [
    { x: 156, y: 235, sway: 0.9 },
    { x: 744, y: 235, sway: 2.1 },
  ];

  lanterns.forEach((lantern) => {
    const swing = Math.sin(lobbyTime * 1.5 + lantern.sway) * 6;
    lctx.strokeStyle = "rgba(255, 231, 199, 0.5)";
    lctx.lineWidth = 2;
    lctx.beginPath();
    lctx.moveTo(lantern.x, 160);
    lctx.lineTo(lantern.x + swing, 214);
    lctx.stroke();

    const glow = lctx.createRadialGradient(lantern.x + swing, 225, 6, lantern.x + swing, 225, 44);
    glow.addColorStop(0, "rgba(255, 226, 162, 0.34)");
    glow.addColorStop(1, "rgba(255, 226, 162, 0)");
    lctx.fillStyle = glow;
    lctx.beginPath();
    lctx.arc(lantern.x + swing, 225, 42, 0, Math.PI * 2);
    lctx.fill();

    lctx.fillStyle = "#ffd697";
    lctx.beginPath();
    lctx.roundRect(lantern.x - 12 + swing, 212, 24, 28, 8);
    lctx.fill();
  });

  [
    { x: 205, y: 455, pulse: 0 },
    { x: 695, y: 455, pulse: 1.3 },
  ].forEach((fountain) => {
    const pulse = 0.82 + Math.sin(lobbyTime * 2.4 + fountain.pulse) * 0.1;
    const glow = lctx.createRadialGradient(fountain.x, fountain.y, 4, fountain.x, fountain.y, 48);
    glow.addColorStop(0, "rgba(150, 226, 255, 0.48)");
    glow.addColorStop(1, "rgba(150, 226, 255, 0)");
    lctx.fillStyle = glow;
    lctx.beginPath();
    lctx.arc(fountain.x, fountain.y, 46, 0, Math.PI * 2);
    lctx.fill();

    lctx.fillStyle = "#18344f";
    lctx.beginPath();
    lctx.arc(fountain.x, fountain.y, 30, 0, Math.PI * 2);
    lctx.fill();
    lctx.strokeStyle = "rgba(223, 247, 255, 0.45)";
    lctx.lineWidth = 3;
    lctx.stroke();

    lctx.fillStyle = `rgba(122, 216, 255, ${pulse})`;
    lctx.beginPath();
    lctx.arc(fountain.x, fountain.y, 16 + pulse * 4, 0, Math.PI * 2);
    lctx.fill();
  });

  lctx.strokeStyle = "rgba(255,255,255,0.06)";
  for (let x = 0; x < lobbyCanvas.width; x += 75) {
    lctx.beginPath();
    lctx.moveTo(x, 0);
    lctx.lineTo(x, 360);
    lctx.stroke();
  }

  lctx.fillStyle = "rgba(13, 20, 36, 0.42)";
  lctx.beginPath();
  lctx.roundRect(248, 34, 404, 96, 28);
  lctx.fill();
  lctx.strokeStyle = "rgba(255, 222, 188, 0.2)";
  lctx.lineWidth = 2;
  lctx.stroke();

  const titleGlow = lctx.createLinearGradient(0, 44, 0, 128);
  titleGlow.addColorStop(0, "rgba(255, 209, 150, 0.98)");
  titleGlow.addColorStop(1, "rgba(255, 242, 220, 0.96)");
  lctx.fillStyle = titleGlow;
  lctx.font = "bold 38px 'Segoe UI'";
  lctx.textAlign = "center";
  lctx.fillText("가챠 디펜스 로비", lobbyCanvas.width / 2, 78);
  lctx.font = "15px 'Segoe UI'";
  lctx.fillStyle = "rgba(244,248,255,0.82)";
  lctx.fillText("광장을 거닐며 소환과 편성, 전투 준비를 진행하세요", lobbyCanvas.width / 2, 106);

  LOBBY_ZONES.forEach((zone) => {
    const isNear = nearZone === zone;
    const centerX = zone.x + zone.w / 2;
    const centerY = zone.y + zone.h / 2;
    const glowRadius = isNear ? 86 : 64;
    const glow = lctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, glowRadius);
    glow.addColorStop(0, `${zone.color}${isNear ? "88" : "44"}`);
    glow.addColorStop(1, `${zone.color}00`);
    lctx.fillStyle = glow;
    lctx.beginPath();
    lctx.arc(centerX, centerY + 6, glowRadius, 0, Math.PI * 2);
    lctx.fill();

    lctx.fillStyle = "rgba(9, 14, 28, 0.28)";
    lctx.beginPath();
    lctx.ellipse(centerX, zone.y + zone.h + 10, zone.w * 0.43, 16, 0, 0, Math.PI * 2);
    lctx.fill();

    const cardFill = lctx.createLinearGradient(zone.x, zone.y, zone.x, zone.y + zone.h);
    cardFill.addColorStop(0, isNear ? zone.color : `${zone.color}e0`);
    cardFill.addColorStop(1, isNear ? "#fff0d4" : `${zone.color}a8`);
    lctx.fillStyle = cardFill;
    lctx.strokeStyle = isNear ? "#fff9f0" : "rgba(255,247,239,0.76)";
    lctx.lineWidth = isNear ? 4 : 2;
    lctx.beginPath();
    lctx.roundRect(zone.x, zone.y, zone.w, zone.h, 22);
    lctx.fill();
    lctx.stroke();

    lctx.fillStyle = "rgba(255,255,255,0.16)";
    lctx.beginPath();
    lctx.roundRect(zone.x + 10, zone.y + 10, zone.w - 20, 20, 12);
    lctx.fill();

    lctx.fillStyle = "#1b1520";
    lctx.font = "28px 'Segoe UI Emoji'";
    lctx.fillText(zone.emoji, centerX, zone.y + 34);
    lctx.font = "bold 15px 'Segoe UI'";
    lctx.fillText(zone.label, centerX, zone.y + 61);
  });

  lctx.fillStyle = "rgba(0,0,0,0.22)";
  lctx.beginPath();
  lctx.ellipse(player.x, player.y + 22, 24, 10, 0, 0, Math.PI * 2);
  lctx.fill();

  const playerGlow = lctx.createRadialGradient(player.x, player.y, 4, player.x, player.y, 38);
  playerGlow.addColorStop(0, "rgba(180, 227, 255, 0.42)");
  playerGlow.addColorStop(1, "rgba(180, 227, 255, 0)");
  lctx.fillStyle = playerGlow;
  lctx.beginPath();
  lctx.arc(player.x, player.y, 38, 0, Math.PI * 2);
  lctx.fill();

  lctx.fillStyle = player.color;
  lctx.beginPath();
  lctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
  lctx.fill();
  lctx.strokeStyle = "white";
  lctx.lineWidth = 3;
  lctx.stroke();
  lctx.font = "18px 'Segoe UI Emoji'";
  lctx.fillStyle = "white";
  lctx.fillText("\uD83E\uDDD9", player.x, player.y + 8);

  lctx.fillStyle = "rgba(9,14,28,0.46)";
  lctx.beginPath();
  lctx.roundRect(288, 548, 324, 34, 17);
  lctx.fill();
  lctx.strokeStyle = "rgba(255,255,255,0.1)";
  lctx.lineWidth = 1.5;
  lctx.stroke();
  lctx.fillStyle = "rgba(247,249,255,0.82)";
  lctx.font = "13px 'Segoe UI'";
  lctx.fillText("WASD 이동 · E 상호작용", lobbyCanvas.width / 2, 570);
}

function openGacha() {
  showScreen("gachaScreen");
  clearGachaResult();
  renderGachaChests();
  updateGachaUI();
}

function openBag() {
  showScreen("bagScreen");
  renderBagCollection();
}

function openCodex() {
  selectedCodexCharacterId = null;
  hideCodexTooltip();
  showScreen("codexScreen");
  renderCodexCollection();
}

function openCodePrompt() {
  const code = window.prompt("코드를 입력하세요.");
  if (code === null) return;

  const normalizedCode = code.trim().toLowerCase();
  if (!["gimoddi", "farm", "coin", "morecoin", "infinitycoin", "alltower"].includes(normalizedCode)) {
    window.alert("존재하지 않는 코드입니다.");
    return;
  }

  if (usedCodes.has(normalizedCode)) {
    window.alert("이미 사용한 코드입니다.");
    return;
  }

  if (normalizedCode === "coin") {
    coins += 100;
    usedCodes.add(normalizedCode);
    updateLobbyUI();
    updateGachaUI();
    updateBattleUI();
    window.alert("코인 100개를 지급했습니다.");
    return;
  }

  if (normalizedCode === "morecoin") {
    coins += 10000;
    usedCodes.add(normalizedCode);
    updateLobbyUI();
    updateGachaUI();
    updateBattleUI();
    window.alert("코인 10,000개를 지급했습니다.");
    return;
  }

  if (normalizedCode === "infinitycoin") {
    coins += 1000000000;
    usedCodes.add(normalizedCode);
    updateLobbyUI();
    updateGachaUI();
    updateBattleUI();
    window.alert("코인 1,000,000,000개를 지급했습니다.");
    return;
  }

  if (normalizedCode === "farm") {
    const rewardBase = CHARACTERS.find((character) => character.name === "농장");
    const reward = { ...rewardBase, gradeData: getGradeData(rewardBase.grade) };
    addOwnedCharacter(reward);
    usedCodes.add(normalizedCode);
    updateLobbyUI();
    window.alert(`${reward.emoji} ${reward.name} 1개를 지급했습니다. 가방에서 직접 편성해 주세요.`);
    return;
  }

  if (normalizedCode === "gimoddi") {
    ["디아블로", "농장", "천둥 사제"].forEach((name) => {
      const rewardBase = CHARACTERS.find((character) => character.name === name);
      if (!rewardBase) return;
      const reward = { ...rewardBase, gradeData: getGradeData(rewardBase.grade) };
      addOwnedCharacter(reward);
    });
    usedCodes.add(normalizedCode);
    updateLobbyUI();
    window.alert("😈 디아블로, 🌾 농장, ⛈️ 천둥 사제를 지급했습니다.");
    return;
  }

  if (normalizedCode === "alltower") {
    CHARACTERS.forEach((rewardBase) => {
      const reward = { ...rewardBase, gradeData: getGradeData(rewardBase.grade) };
      addOwnedCharacter(reward);
    });
    usedCodes.add(normalizedCode);
    updateLobbyUI();
    updateGachaUI();
    updateBattleUI();
    renderCodexCollection();
    window.alert("📚 모든 타워와 캐릭터를 지급했습니다.");
    return;
  }

  const rewardBase = CHARACTERS.find((character) => character.name === "디아블로") || CHARACTERS[CHARACTERS.length - 1];
  const reward = { ...rewardBase, gradeData: getGradeData(rewardBase.grade) };
  addOwnedCharacter(reward);
  usedCodes.add(normalizedCode);
  updateLobbyUI();
  window.alert(`${reward.emoji} ${reward.name} [${reward.gradeData.name}] 지급 완료! 가방에서 직접 편성해 주세요.`);
}

function openPatchNotes() {
  window.alert(
    [
      "v1.2 패치노트",
      "",
      "- 사령관 버프 적용시 적용된 값으로 표기",
      "- ui 보강",
      "- 게임 오버,클리어 화면 보강",
      "- 패치노트 추가",
      "- 노바의 능력이 관통형에서 폭발형으로 변경",
      "- 도감 버그 수정",
      "- 별마법사,태양신 아폴로,부메랑 투척병 등급 변경",
      "- 폴른 가든 30웨이브 보스 이동속도를 상향",
      "- 찬란한 상자 확률을 상향",
      "- 디아블로 설명 문구조정",
      "- 밸런스 조정",
    ].join("\n")
  );
}

function clearGachaResult() {
  document.getElementById("gachaResult").innerHTML = "";
}

function triggerUltraRareGachaEffect(character) {
  const grade = character.gradeData || getGradeData(character.grade);
  if (!grade || grade.chance > 1 / 5000000) return;
  const isEthereal = grade.id === "ethereal";
  const isNova = character.name === "성운을 다루는자, 노바";
  const isApollo = character.name === "태양신 아폴로";

  const headlineByGrade = {
    divine: "천상이 선택한 존재",
    ethereal: "심연이 이름을 부른 순간",
  };
  const sublineByGrade = {
    divine: "빛이 갈라지고, 별이 축복처럼 쏟아진다",
    ethereal: "시간조차 붕괴하며, 디아블로가 검은 왕좌에서 걸어나온다",
  };
  const auraLabelByGrade = {
    divine: "HOLY DESCENT",
    ethereal: "ABYSSAL CORONATION",
  };
  const headline = isNova
    ? "차원이 검으로 찢어진 순간"
    : isApollo
      ? "태양의 심장이 불타오른 순간"
      : headlineByGrade[grade.id] || `${grade.name} 등장`;
  const subline = isNova
    ? "별빛이 꺼지고, 성운이 붕괴하며, 하늘을 가르는 절대 검과 함께 노바가 현현한다"
    : isApollo
      ? "정열의 불꽃이 하늘을 뒤덮고, 태양신 아폴로가 작열하는 태양의 권능과 함께 현현한다"
      : sublineByGrade[grade.id] || "운명이 완전히 기울었다";
  const auraLabel = isNova
    ? "COSMIC SOVEREIGN"
    : isApollo
      ? "SOLAR IGNITION"
      : auraLabelByGrade[grade.id] || grade.name.toUpperCase();
  const cardClass = `ultraRareCard is-${grade.id}${isNova ? " is-nova" : ""}${isApollo ? " is-apollo" : ""}`;

  const existing = document.getElementById("ultraRareEffect");
  if (existing) existing.remove();

  const effect = document.createElement("div");
  effect.id = "ultraRareEffect";
  effect.className = `is-${grade.id}${isEthereal ? " ethereal-cinematic" : ""}${isNova ? " is-nova" : ""}`;
  if (isEthereal) {
    playEtherealPrepareSound();
  }
  effect.innerHTML = isNova
    ? `
      <div class="novaVoid"></div>
      <div class="novaBlueFlash"></div>
      <div class="novaNebula"></div>
      <div class="novaNebula novaNebula-b"></div>
      <div class="novaStarfield"></div>
      <div class="novaConstellation">
        <span class="novaNode node-a"></span>
        <span class="novaNode node-b"></span>
        <span class="novaNode node-c"></span>
        <span class="novaNode node-d"></span>
        <span class="novaNode node-e"></span>
        <span class="novaNode node-f"></span>
        <span class="novaLine line-a"></span>
        <span class="novaLine line-b"></span>
        <span class="novaLine line-c"></span>
        <span class="novaLine line-d"></span>
        <span class="novaLine line-e"></span>
        <span class="novaLine line-f"></span>
      </div>
      <div class="novaRift"></div>
      <div class="novaRift novaRift-b"></div>
      <div class="novaBladeRain"><span></span><span></span><span></span><span></span><span></span><span></span></div>
      <div class="novaJudgementBlade"></div>
      <div class="novaJudgementCore"></div>
      <div class="novaRevealWrap">
        <div class="novaNameplate">
          <div class="novaAuraLabel">${auraLabel}</div>
          <div class="novaEyebrow">${headline}</div>
          <div class="novaIdentityRow">
            <div class="novaEmoji">${character.emoji}</div>
            <div>
              <div class="novaName" style="color:${grade.color}">${character.name}</div>
              <div class="novaGrade">[${grade.name}] · ${getBaseChanceLabel(character)}</div>
            </div>
          </div>
          <div class="novaLore">${subline}</div>
        </div>
      </div>
    `
    : `
      ${isEthereal ? '<div class="etherealBlackout"></div><div class="etherealSparkle etherealSparkle-a"></div><div class="etherealSparkle etherealSparkle-b"></div><div class="etherealFlash"></div>' : ""}
      ${isApollo ? '<div class="apolloFlameVeil"></div><div class="apolloSunHalo"></div>' : ""}
      <div class="ultraRareBackdrop"></div>
      <div class="ultraRareShockwave shockwave-a"></div>
      <div class="ultraRareShockwave shockwave-b"></div>
      <div class="ultraRareHalo halo-outer"></div>
      <div class="ultraRareHalo halo-inner"></div>
      <div class="ultraRareBurst"></div>
      <div class="ultraRareVeins"></div>
      <div class="ultraRareRunes">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="ultraRareShards">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="ultraRareCardWrap">
        <div class="ultraRareAuraLabel">${auraLabel}</div>
        <div class="${cardClass}" style="border-color:${grade.color}">
          <div class="ultraRareCrest"></div>
          <div class="ultraRareEyebrow">${headline}</div>
          <div class="ultraRareEmoji">${character.emoji}</div>
          <div class="ultraRareName" style="color:${grade.color}">${character.name}</div>
          <div class="ultraRareGrade">[${grade.name}]</div>
          <div class="ultraRareLore">${subline}</div>
          <div class="ultraRareOdds">${getBaseChanceLabel(character)}</div>
        </div>
      </div>
    `;

  document.body.appendChild(effect);
  if (isEthereal) {
    window.setTimeout(() => {
      if (document.body.contains(effect)) {
        playEtherealRevealSound();
      }
    }, 4300);
  }
  window.setTimeout(() => {
    effect.classList.add("is-leaving");
  }, isEthereal ? 8200 : 1600);
  window.setTimeout(() => {
    effect.remove();
  }, isEthereal ? 9400 : 2800);
}

function openMapSelect() {
  mapSelectView = "mode";
  renderBattleModeCards();
  showScreen("mapSelectScreen");
}

function openNormalMapSelect() {
  mapSelectView = "normal";
  renderMapCards();
  showScreen("mapSelectScreen");
}

function openPracticeSelect() {
  mapSelectView = "practice";
  renderPracticeEntryCard();
  showScreen("mapSelectScreen");
}

function getWeightedGrade(chest) {
  const entries = GRADES.map((grade) => ({
    grade,
    weight: chest.weights[grade.id] || 0,
  })).filter((entry) => entry.weight > 0);

  const totalWeight = entries.reduce((sum, entry) => sum + entry.weight, 0);
  let rand = Math.random() * totalWeight;

  for (const entry of entries) {
    if (rand < entry.weight) return entry.grade;
    rand -= entry.weight;
  }

  return getGradeData("common");
}

function getChestTotalWeight(chest) {
  return GRADES.reduce((sum, grade) => sum + (chest.weights[grade.id] || 0), 0);
}

function getGradePoolWeight(gradeId) {
  return CHARACTERS.filter((character) => character.grade === gradeId).reduce((sum, character) => sum + (character.dropWeight || 1), 0);
}

function getCharacterRollProbability(chest, character) {
  const gradeWeight = chest.weights[character.grade] || 0;
  const chestTotalWeight = getChestTotalWeight(chest) || 1;
  const gradeProbability = gradeWeight / chestTotalWeight;
  const gradePoolWeight = getGradePoolWeight(character.grade) || 1;
  const characterWeight = character.dropWeight || 1;
  return gradeProbability * (characterWeight / gradePoolWeight);
}

function getCharacterOddsText(chest, character) {
  return getBaseChanceLabel(character);
}

function getWeightedCharacterFromGrade(gradeId) {
  const pool = CHARACTERS.filter((character) => character.grade === gradeId);
  const fallbackPool = CHARACTERS.filter((character) => character.grade === "common");
  const targetPool = pool.length ? pool : fallbackPool;
  const totalWeight = targetPool.reduce((sum, character) => sum + (character.dropWeight || 1), 0);
  let rand = Math.random() * totalWeight;

  for (const character of targetPool) {
    rand -= character.dropWeight || 1;
    if (rand <= 0) return character;
  }

  return targetPool[targetPool.length - 1];
}

function rollOnce(chest) {
  const grade = getWeightedGrade(chest);
  const base = getWeightedCharacterFromGrade(grade.id);
  return { ...base, gradeData: getGradeData(base.grade) };
}

function rollGacha(chestId) {
  const chest = GACHA_CHESTS.find((item) => item.id === chestId) || GACHA_CHESTS[0];
  const result = document.getElementById("gachaResult");
  if (coins < chest.cost) {
    result.innerHTML = `<span style="color:#ff8f82">코인이 부족합니다. ${chest.cost} 코인이 필요해요.</span>`;
    return;
  }

  coins -= chest.cost;
  const character = rollOnce(chest);
  const oddsText = getCharacterOddsText(chest, character);
  const ownedCharacter = addOwnedCharacter(character);
  result.innerHTML =
    `<span style="color:${character.gradeData.color};font-weight:700">` +
    `${chest.emoji} ${chest.name}에서 ${character.emoji} ${character.name} [${character.gradeData.name}] 획득! (${oddsText})` +
    `${ownedCharacter.quantity > 1 ? ` · 보유 수량 X ${ownedCharacter.quantity}` : ""}` +
    "</span>";
  playGachaSound(character.grade);
  triggerUltraRareGachaEffect(character);
  updateGachaUI();
  updateLobbyUI();
}

function renderGachaChests() {
  const chestList = document.getElementById("gachaChestList");
  chestList.innerHTML = "";

  const chestThemes = {
    common: {
      border: "rgba(189, 210, 255, 0.34)",
      background: "linear-gradient(135deg, rgba(48, 71, 111, 0.96), rgba(17, 24, 41, 0.98))",
      glow: "0 18px 36px rgba(111, 146, 214, 0.22)",
      title: "#dbe7ff",
      cost: "#b8d2ff",
    },
    shiny: {
      border: "rgba(255, 218, 145, 0.4)",
      background: "linear-gradient(135deg, rgba(114, 76, 21, 0.96), rgba(31, 21, 8, 0.98))",
      glow: "0 18px 36px rgba(255, 191, 90, 0.24)",
      title: "#ffe9ad",
      cost: "#ffd28a",
    },
    brilliant: {
      border: "rgba(255, 145, 190, 0.46)",
      background: "linear-gradient(135deg, rgba(79, 28, 83, 0.98), rgba(16, 10, 34, 0.98))",
      glow: "0 18px 42px rgba(219, 103, 255, 0.28)",
      title: "#ffd6fb",
      cost: "#ffb7e7",
    },
  };

  GACHA_CHESTS.forEach((chest) => {
    const theme = chestThemes[chest.id] || chestThemes.common;
    const button = document.createElement("button");
    button.className = "gachaChestBtn";
    button.style.borderColor = theme.border;
    button.style.background = theme.background;
    button.style.boxShadow = theme.glow;
    button.innerHTML = `
      <span class="gachaChestEmoji">${chest.emoji}</span>
      <strong style="color:${theme.title}">${chest.name}</strong>
      <span class="gachaChestCost" style="color:${theme.cost}">${chest.cost} 코인</span>
      <span class="gachaChestHint">${chest.hint}</span>
    `;
    button.addEventListener("click", () => rollGacha(chest.id));
    chestList.appendChild(button);
  });

  const debugButton = document.createElement("button");
  debugButton.className = "gachaChestBtn";
  debugButton.style.borderColor = "rgba(255, 123, 213, 0.5)";
  debugButton.style.background = "linear-gradient(135deg, rgba(66, 18, 74, 0.96), rgba(18, 8, 34, 0.98))";
  debugButton.innerHTML = `
    <span class="gachaChestEmoji">😈</span>
    <strong style="color:#ff9ce3">임시 디아블로 확정</strong>
    <span class="gachaChestCost">테스트용 즉시 지급</span>
    <span class="gachaChestHint">나중에 삭제할 임시 버튼입니다.</span>
  `;
  debugButton.addEventListener("click", () => {
    const rewardBase = CHARACTERS.find((character) => character.name === "디아블로");
    if (!rewardBase) return;
    const reward = { ...rewardBase, gradeData: getGradeData(rewardBase.grade) };
    const ownedCharacter = addOwnedCharacter(reward);
    const result = document.getElementById("gachaResult");
    result.innerHTML =
      `<span style="color:${reward.gradeData.color};font-weight:700">` +
      `😈 임시 확정 소환으로 ${reward.emoji} ${reward.name} [${reward.gradeData.name}] 획득!` +
      `${ownedCharacter.quantity > 1 ? ` · 보유 수량 X ${ownedCharacter.quantity}` : ""}` +
      "</span>";
    playGachaSound(reward.grade);
    triggerUltraRareGachaEffect(reward);
    updateLobbyUI();
    updateGachaUI();
  });
  chestList.appendChild(debugButton);

  const novaDebugButton = document.createElement("button");
  novaDebugButton.className = "gachaChestBtn";
  novaDebugButton.style.borderColor = "rgba(126, 201, 255, 0.55)";
  novaDebugButton.style.background = "linear-gradient(135deg, rgba(22, 52, 102, 0.98), rgba(7, 15, 38, 0.98))";
  novaDebugButton.innerHTML = `
    <span class="gachaChestEmoji">🌌</span>
    <strong style="color:#bfe7ff">임시 노바 확정</strong>
    <span class="gachaChestCost">테스트용 즉시 지급</span>
    <span class="gachaChestHint">나중에 삭제할 임시 버튼입니다.</span>
  `;
  novaDebugButton.addEventListener("click", () => {
    const rewardBase = CHARACTERS.find((character) => character.name === "성운을 다루는자, 노바");
    if (!rewardBase) return;
    const reward = { ...rewardBase, gradeData: getGradeData(rewardBase.grade) };
    const ownedCharacter = addOwnedCharacter(reward);
    const result = document.getElementById("gachaResult");
    result.innerHTML =
      `<span style="color:${reward.gradeData.color};font-weight:700">` +
      `🌌 임시 확정 소환으로 ${reward.emoji} ${reward.name} [${reward.gradeData.name}] 획득!` +
      `${ownedCharacter.quantity > 1 ? ` · 보유 수량 X ${ownedCharacter.quantity}` : ""}` +
      "</span>";
    playGachaSound(reward.grade);
    triggerUltraRareGachaEffect(reward);
    updateLobbyUI();
    updateGachaUI();
  });
  chestList.appendChild(novaDebugButton);
}

function renderGachaCollection() {
  const collection = document.getElementById("gachaCollection");
  collection.innerHTML = "";

  ownedChars.forEach((character) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.borderColor = character.gradeData.color;
    card.innerHTML = `
      <div class="card-emoji">${character.emoji}</div>
      <div>
        <div class="card-name" style="color:${character.gradeData.color}">${character.name}${(character.quantity || 1) > 1 ? ` X ${character.quantity}` : ""}</div>
        <div class="card-grade" style="color:${character.gradeData.color}">[${character.gradeData.name}]</div>
        <div class="card-stats">${formatCharacterStatTokens(character, { includeSword: true }).join(" · ")}</div>
        <div class="card-stats">${decorateStatLabel("보유 수량")} X ${character.quantity || 1}</div>
      </div>
    `;
    collection.appendChild(card);
  });
}

function renderBagCollection() {
  const bagCollection = document.getElementById("bagCollection");
  const summary = document.getElementById("bagSummary");
  const equippedBagList = document.getElementById("equippedBagList");
  bagCollection.innerHTML = "";
  equippedBagList.innerHTML = "";
  summary.textContent = `선택한 유닛 ${equippedCharIds.length} / 5`;

  const bagItems = [...BASE_TOWERS, ...ownedChars].sort((a, b) => {
    const aEquipped = equippedCharIds.includes(a.id) ? 0 : 1;
    const bEquipped = equippedCharIds.includes(b.id) ? 0 : 1;
    return aEquipped - bEquipped;
  });
  const equippedItems = bagItems.filter((character) => equippedCharIds.includes(character.id));
  for (let i = 0; i < 5; i += 1) {
    const character = equippedItems[i];
    const slot = document.createElement("div");
    slot.className = `equippedSlot${character ? ` bag-grade-${character.grade}` : ""}`;
    if (character) {
      slot.innerHTML = `
        <div class="bagCardEmoji">${character.emoji}</div>
        <strong style="color:${character.gradeData.color}">${character.name}</strong>
        <div class="card-grade">${character.gradeData.name}</div>
        <div class="card-grade">기본 Lv.0</div>
      `;
    } else {
      slot.innerHTML = '<div class="equippedSlotEmpty">빈 슬롯</div>';
    }
    equippedBagList.appendChild(slot);
  }

  bagItems.forEach((character) => {
    const selected = equippedCharIds.includes(character.id);
    const card = document.createElement("div");
    card.className = `bagCard bag-grade-${character.grade}${selected ? " is-selected" : ""}`;
    card.innerHTML = `
      <div class="bagCardHeader">
        <div class="bagCardEmoji">${character.emoji}</div>
        <div>
          <div class="card-name" style="color:${character.gradeData.color}">${character.name}${(character.quantity || 1) > 1 ? ` X ${character.quantity}` : ""}</div>
          <div class="card-grade" style="color:${character.gradeData.color}">[${character.gradeData.name}]</div>
        </div>
      </div>
      <div class="bagCardMeta">
        ${formatCharacterStatTokens(character, { includeCost: true, includeLimit: true, includeQuantity: true, includeSword: true }).join("<br>")}<br>
        ✦ 기본 레벨 Lv.0
      </div>
      <button class="bagToggleBtn">${selected ? "가방에서 빼기" : "가방에 넣기"}</button>
    `;

    card.querySelector(".bagToggleBtn").addEventListener("click", () => {
      toggleBagCharacter(character.id);
    });

    bagCollection.appendChild(card);
  });
}

function toggleBagCharacter(characterId) {
  const index = equippedCharIds.indexOf(characterId);
  if (index >= 0) {
    equippedCharIds.splice(index, 1);
  } else {
    if (equippedCharIds.length >= 5) return;
    equippedCharIds.push(characterId);
  }
  playUISound("click");
  renderBagCollection();
  updateLobbyUI();
}

function updateGachaUI() {
  document.getElementById("gachaCoinVal").textContent = coins;
}

function selectMap(mapId) {
  previewMode = false;
  currentMap = getMapById(mapId);
  document.getElementById("bMapNameVal").textContent = currentMap.name;
  resetBattleState();
  showScreen("battleScreen");
  renderTowerShop();
  ensureBattleControls();
  updateBattleUI();
}

function resetBattleState() {
  bMoney = currentMap.startMoney || 700;
  bWave = 0;
  bBaseHp = 100;
  bRunning = false;
  bSpawnDone = false;
  bGameOver = false;
  battleCleared = false;
  placedUnits = [];
  enemies = [];
  projectiles = [];
  floatingTexts = [];
  areaIndicators = [];
  selectedUnit = null;
  draggingTower = null;
  dragX = 0;
  dragY = 0;
  destroyTimeCooldown = 0;
  activeBlackHole = null;
  activeBoss = null;
  showPathGuide = true;
  previewDamageTotal = 0;
  previewDamageEvents = [];
  document.getElementById("battleOverlay").style.display = "none";
  showUnitInfo(null);
}

function returnToLobby() {
  document.getElementById("battleOverlay").style.display = "none";
  previewMode = false;
  mapSelectView = "mode";
  currentMap = MAPS[0];
  hideCodexTooltip();
  showScreen("lobbyScreen");
  updateLobbyUI();
}

function renderTowerShop() {
  const list = document.getElementById("towerList");
  const shop = document.getElementById("towerShop");
  if (shop) {
    shop.style.display = "flex";
  }
  list.innerHTML = "";

  [...BASE_TOWERS, ...ownedChars]
    .filter((character) => equippedCharIds.includes(character.id))
    .forEach((character) =>
      addTowerCard(list, {
        ...character,
        name: character.name || "유닛",
        isBase: BASE_TOWERS.some((tower) => tower.id === character.id),
      })
    );
}

function addTowerCard(list, tower) {
  const div = document.createElement("div");
  div.className = "towerCard";
  div.style.borderColor = tower.gradeData ? tower.gradeData.color : "#4488ff";
  div.title = tower.name || "이름 없는 타워";
  div.innerHTML = `
    <span class="towerEmoji">${tower.emoji}</span>
    <div class="towerCost">머니 ${tower.cost}</div>
  `;

  div.addEventListener("mousedown", (event) => {
    if (bGameOver) return;
    if (bMoney < tower.cost) {
      showBattleMsg("머니가 부족합니다");
      return;
    }
    draggingTower = { ...tower, gradeData: tower.gradeData || getGradeData("common") };
    event.preventDefault();
  });

  list.appendChild(div);
}

function ensureBattleControls() {
  if (battleControlsReady) return;
  battleControlsReady = true;

  window.addEventListener("mousemove", (event) => {
    if (!draggingTower) return;
    const point = getCanvasPoint(event, battleCanvas);
    dragX = point.x;
    dragY = point.y;
  });

  window.addEventListener("mouseup", (event) => {
    if (!draggingTower) return;

    const point = getCanvasPoint(event, battleCanvas);
    const insideCanvas =
      point.x >= 0 &&
      point.x <= battleCanvas.width &&
      point.y >= 0 &&
      point.y <= battleCanvas.height;

    if (insideCanvas) {
      const unitPlacementLimit = getUnitPlacementLimit(draggingTower);
      const placedSameUnitCount = getPlacedCountForUnit(draggingTower);
      if (placedUnits.length >= MAX_TOTAL_PLACED_UNITS) {
        showBattleMsg(`전체 설치는 ${MAX_TOTAL_PLACED_UNITS}개까지 가능합니다`);
      } else if (placedSameUnitCount >= unitPlacementLimit) {
        showBattleMsg(`${draggingTower.name} 최대 설치 ${unitPlacementLimit}개`);
      } else if (isOnPath(point.x, point.y, currentMap.path)) {
        showBattleMsg("길 위에는 배치할 수 없어요");
      } else if (isUnitOverlapping(point.x, point.y)) {
        showBattleMsg("유닛이 서로 겹치면 안 돼요");
      } else if (bMoney < draggingTower.cost) {
        showBattleMsg("머니가 부족합니다");
      } else {
        bMoney -= draggingTower.cost;
        placedUnits.push({
          ...draggingTower,
          x: point.x,
          y: point.y,
          cooldown: 0,
          baseCost: draggingTower.cost,
          baseAtk: draggingTower.atk || 0,
          baseRange: draggingTower.range || 0,
          baseSpeed: draggingTower.speed || 0,
          baseFarmIncome: draggingTower.farmIncome || 0,
          splashRadius: draggingTower.splashRadius || 0,
          swordSplashRadius: draggingTower.swordSplashRadius || 0,
          upgradeLevel: 0,
          id: Date.now() + Math.random(),
        });
        playBattleSound("place");
        updateBattleUI();
        showBattleMsg(`${draggingTower.name} 배치 완료`);
      }
    }

    draggingTower = null;
  });

  battleCanvas.addEventListener("click", (event) => {
    if (draggingTower || bGameOver) return;
    const point = getCanvasPoint(event, battleCanvas);
    let found = null;

    placedUnits.forEach((unit) => {
      if (Math.hypot(point.x - unit.x, point.y - unit.y) < 22) {
        found = unit;
      }
    });

    selectedUnit = found;
    showUnitInfo(found);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() !== "f") return;
    if (document.getElementById("battleScreen").style.display === "none") return;
    if (useDestroyTime()) {
      event.preventDefault();
    }
  });
}

function isOnPath(x, y, path) {
  for (let i = 0; i < path.length - 1; i += 1) {
    const start = path[i];
    const end = path[i + 1];
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const length = Math.hypot(dx, dy);
    const normalX = -dy / length;
    const normalY = dx / length;
    const pointX = x - start.x;
    const pointY = y - start.y;
    const distance = Math.abs(pointX * normalX + pointY * normalY);
    const progress = (pointX * (dx / length) + pointY * (dy / length)) / length;
    if (distance < 30 && progress >= 0 && progress <= 1) {
      return true;
    }
  }
  return false;
}

function showUnitInfo(unit) {
  const panel = document.getElementById("unitInfoContent");
  const upgradePanel = document.getElementById("upgradePanel");
  const sellButton = document.getElementById("sellUnitBtn");
  const upgradeButton = document.getElementById("upgradeBtn");

  if (!unit) {
    panel.innerHTML = '<p style="color:#76839e;font-size:13px">배치된 유닛을 클릭하면<br>상세 정보가 표시됩니다.</p>';
    upgradePanel.style.display = "none";
    sellButton.style.display = "none";
    return;
  }

  const grade = unit.gradeData || getGradeData(unit.grade);
  const chanceStr = getBaseChanceLabel(unit);
  const supportEffects = getSupportEffects(unit);
  const effectiveAtk = unit.farmIncome || unit.name === "사령관" ? null : Math.round(unit.atk * (1 + supportEffects.attackPercent));
  const effectiveRange = unit.farmIncome || unit.name === "사령관" ? null : Math.round(unit.range * (1 + supportEffects.rangePercent));
  const effectiveSpeed = unit.farmIncome || unit.name === "사령관" ? null : Number((unit.speed * (1 + supportEffects.speedPercent)).toFixed(2));
  panel.innerHTML = `
    <div style="font-size:40px;text-align:center">${unit.emoji}</div>
    <div style="color:${grade.color};font-weight:700;text-align:center">${unit.name}</div>
    <div style="color:${grade.color};text-align:center;font-size:12px;margin-bottom:8px">[${grade.name}]</div>
    <div>✦ 강화 단계 <strong>Lv.${unit.upgradeLevel || 0} / ${MAX_UPGRADE_LEVEL}</strong></div>
    <div>${decorateStatLabel("기본 확률")} <strong>${chanceStr.replace("기본 확률 ", "")}</strong></div>
    <div>${decorateStatLabel("배치 비용")} <strong>${unit.cost.toLocaleString()}</strong></div>
    ${Math.min(getUnitPlacementLimit(unit), MAX_TOTAL_PLACED_UNITS) < MAX_TOTAL_PLACED_UNITS ? `<div>${decorateStatLabel("최대 설치")} <strong>${Math.min(getUnitPlacementLimit(unit), MAX_TOTAL_PLACED_UNITS)}개</strong></div>` : ""}
    <div>${unit.farmIncome ? `${decorateStatLabel("웨이브 수익")} <strong>${unit.farmIncome}</strong>` : unit.name === "사령관" ? `${decorateStatLabel("오라 범위")} <strong>${unit.range}</strong>` : `${decorateStatLabel("공격력")} <strong>${effectiveAtk.toLocaleString()}</strong>${supportEffects.attackPercent > 0 ? ` <span style="color:#9fe3ff">(버프 반영)</span>` : ""}`}</div>
    <div>${unit.farmIncome ? "✦ 전투 공격 없음" : unit.name === "사령관" ? `${decorateStatLabel("오라 공속")} <strong>+${Math.round((unit.auraBuff || 0.18) * 100)}%</strong>` : `${decorateStatLabel("사거리")} <strong>${effectiveRange.toLocaleString()}</strong>${supportEffects.rangePercent > 0 ? ` <span style="color:#9fe3ff">(버프 반영)</span>` : ""}`}</div>
    <div>${unit.farmIncome ? "✦ 설치 위치가 중요해요" : unit.name === "사령관" ? "✦ 전투 공격 없음" : `${decorateStatLabel("공속")} <strong>${effectiveSpeed.toFixed(2)}</strong>${supportEffects.speedPercent > 0 ? ` <span style="color:#9fe3ff">(버프 반영)</span>` : ""}`}</div>
  `;

  if (unit.name === "성운을 다루는자, 노바") {
    panel.innerHTML += `<div>${decorateStatLabel("검 데미지")} <strong>${getNovaSwordDamage(unit).toLocaleString()}</strong></div>`;
    panel.innerHTML += `<div>✨ 공전 검 <strong>${unit.trueSwordEveryAttack ? "무한 현현" : `${unit.novaSwordCount || 0}/5`}</strong></div>`;
  }

  if (unit.name === "부메랑 투척병") {
    panel.innerHTML += `<div>🪃 현재 튕김 <strong>${getWindJavelinBounceCount(unit.upgradeLevel || 0)}회</strong></div>`;
  }

  if (unit.name === "빛의 작곡가") {
    const songData = getComposerSongData(unit);
    const songName = songData.mode === "attack" ? "파괴의 노래" : songData.mode === "discount" ? "풍요의 노래" : "시야의 노래";
    const attackStyle = songData.mode === "attack" ? "background:linear-gradient(135deg,rgba(255,80,80,0.7),rgba(180,30,30,0.6));border-color:rgba(255,80,80,0.5);" : "background:rgba(255,80,80,0.18);border-color:rgba(255,80,80,0.2);";
    const discountStyle = songData.mode === "discount" ? "background:linear-gradient(135deg,rgba(60,200,80,0.7),rgba(20,120,40,0.6));border-color:rgba(60,200,80,0.5);" : "background:rgba(60,200,80,0.18);border-color:rgba(60,200,80,0.2);";
    const rangeStyle = songData.mode === "range" ? "background:linear-gradient(135deg,rgba(160,80,255,0.7),rgba(80,20,180,0.6));border-color:rgba(160,80,255,0.5);" : "background:rgba(160,80,255,0.18);border-color:rgba(160,80,255,0.2);";
    panel.innerHTML += `
      <div class="upgradePreview">
        <div class="upgradePreviewTitle">현재 음악</div>
        <div style="font-size:12px;color:#fff1d2;line-height:1.6">
          ${songName}<br>
          공격력 +${Math.round(songData.atkPercent * 100)}% · 할인 ${Math.round(songData.discountPercent * 100)}% · 사거리 +${Math.round(songData.rangePercent * 100)}%
        </div>
        <div class="upgradePreviewGrid" style="margin-top:10px">
          <button class="upgradeBtn" style="${attackStyle}" ${unit.songChangeCooldown > 0 ? "disabled" : ""} data-song-mode="attack">파괴의 노래</button>
          <button class="upgradeBtn" style="${discountStyle}" ${unit.songChangeCooldown > 0 ? "disabled" : ""} data-song-mode="discount">풍요의 노래</button>
          <button class="upgradeBtn" style="${rangeStyle}" ${unit.songChangeCooldown > 0 ? "disabled" : ""} data-song-mode="range">시야의 노래</button>
        </div>
        <div style="font-size:11px;color:#aebbd5;margin-top:8px">노래 변경 쿨타임 ${Math.ceil(unit.songChangeCooldown || 0)}초</div>
      </div>
    `;
  }


  if (hasDestroyTimeSkill(unit)) {
    const skillStats = getDestroyTimeStats(unit.upgradeLevel || 0);
    panel.innerHTML += `
      <div class="upgradePreview">
        <div class="upgradePreviewTitle">😈 Destroy Time</div>
        <div style="font-size:12px;color:#f4d4ff;line-height:1.6">
          Lv.2 이상부터 사용 가능<br>
          반경 ${Math.round(skillStats.radius)} · 초당 ${Math.round(skillStats.dps)} 피해<br>
          ${unit.upgradeLevel >= 4 ? "Lv.4 심연 과부하 활성화" : "왼쪽 스킬 버튼 또는 F 키로 발동"}
        </div>
      </div>
    `;
  }

  upgradePanel.style.display = "block";
  const nextCost = getUpgradeCost(unit);
  const nextSummary = getUpgradeSummary(unit);
  if (nextCost === null) {
    upgradeButton.innerHTML = `[E] 최대 업그레이드 완료 <span id="upgradeCost"></span>`;
    upgradeButton.disabled = true;
    upgradeButton.onclick = null;
  } else {
    upgradeButton.innerHTML = `[E] Lv.${(unit.upgradeLevel || 0) + 1} 강화 <span id="upgradeCost"></span>`;
    const upgradeCost = document.getElementById("upgradeCost");
    upgradeButton.disabled = bMoney < nextCost;
    upgradeCost.textContent = `(머니 ${nextCost})`;
    upgradeButton.onclick = () => {
      if (!applyUpgrade(unit)) {
        showBattleMsg("머니가 부족합니다");
      }
    };
    panel.innerHTML += `
      <div class="upgradePreview">
        <div class="upgradePreviewTitle">다음 강화 효과</div>
        <div class="upgradePreviewGrid">
          ${nextSummary
            .map(
              (item) => `
                <div class="upgradeStatChip">
                  <span class="upgradeStatLabel">${item.label}</span>
                  <strong class="upgradeStatValue">${item.value}</strong>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  sellButton.style.display = "block";
  sellButton.textContent = `유닛 판매 (+${Math.floor(unit.cost * 0.5)} 머니)`;
  panel.querySelectorAll("[data-song-mode]").forEach((button) => {
    button.addEventListener("click", () => changeComposerSong(unit, button.dataset.songMode));
  });
  sellButton.onclick = () => {
    bMoney += Math.floor(unit.cost * 0.5);
    placedUnits = placedUnits.filter((placedUnit) => placedUnit.id !== unit.id);
    selectedUnit = null;
    playBattleSound("sell");
    showUnitInfo(null);
    updateBattleUI();
  };
}

function startWave() {
  if (previewMode) return;
  if (bRunning || bGameOver || battleCleared) return;
  showPathGuide = false;

  const supportResult = grantFarmIncome();
  if (supportResult.totalIncome > 0 && supportResult.totalHeal > 0) {
    showBattleMsg(`농장 +${supportResult.totalIncome} 머니 · 기지 +${supportResult.totalHeal} 회복`);
  } else if (supportResult.totalIncome > 0) {
    showBattleMsg(`농장 수익 +${supportResult.totalIncome} 머니`);
  } else if (supportResult.totalHeal > 0) {
    showBattleMsg(`기지 HP +${supportResult.totalHeal} 회복`);
  }

  bWave += 1;
  bRunning = true;
  bSpawnDone = false;
  enemies = [];
  activeBoss = null;
  placedUnits.forEach((unit) => {
    if (unit.name === "레인저") {
      unit.rangerWaveAuraTime = 15;
      spawnFloatingText(unit.x, unit.y - 34, "사거리 오라", "#d9efff");
    }
  });

  const isFinalBossWave = bWave === currentMap.finalWave;
  const currentMidBoss = getMidBossForWave(currentMap, bWave);
  const isMidBossWave = Boolean(currentMidBoss);
  const enemyPool = getAvailableEnemyPool(currentMap.id);
  const maxEnemyIndex = Math.min(Math.floor(bWave / 2) + (currentMap.id === "lava" ? 1 : 0), enemyPool.length - 1);
  const count =
    (4 + bWave * 2 - (bWave <= 5 ? 2 : 0) - (bWave === 10 ? 1 : 0)) +
    (currentMap.bonusEnemyCount || 0) +
    (bWave >= 7 ? 1 : 0);
  const waveNerf = bWave === 10 ? 0.97 : 1;
  const spawnQueue = [];
  for (let i = 0; i < count; i += 1) {
    const baseType = enemyPool[Math.floor(Math.random() * (maxEnemyIndex + 1))];
    spawnQueue.push({ type: "normal", baseType });
  }
  if (isMidBossWave) {
    const insertPos = count > 2 ? Math.floor(Math.random() * (count - 1)) + 1 : count;
    spawnQueue.splice(insertPos, 0, { type: "midboss", data: currentMidBoss });
  }
  if (isFinalBossWave) {
    spawnQueue.push({ type: "finalboss", data: currentMap.finalBoss });
  }

  let spawnIndex = 0;
  const spawnNextEnemy = () => {
    if (bGameOver || battleCleared) {
      bSpawnDone = true;
      return;
    }
    if (spawnIndex >= spawnQueue.length) {
      bSpawnDone = true;
      return;
    }
    const item = spawnQueue[spawnIndex++];
    if (item.type === "normal") {
      enemies.push(spawnWaveEnemy(item.baseType, bWave, waveNerf));
    } else if (item.type === "midboss") {
      enemies.push(spawnMidBossEnemy(item.data));
    } else if (item.type === "finalboss") {
      enemies.push(spawnBossEnemy(item.data));
    }
    window.setTimeout(spawnNextEnemy, (isFinalBossWave ? 620 : 760) / battleSpeed);
  };
  spawnNextEnemy();
  updateBattleUI();
}

function enterGameOver() {
  if (bGameOver) return;
  bGameOver = true;
  bRunning = false;
  draggingTower = null;
  const battleCoinReward = getBattleCoinReward("gameover");
  coins += battleCoinReward;
  showBattleResultOverlay("gameover", "게임 오버", `${bWave} 웨이브까지 버텼습니다.`, battleCoinReward);
  playBattleSound("gameover");
  updateLobbyUI();
  updateGachaUI();
  updateBattleUI();
}

function updateEnemies(dt) {
  enemies.forEach((enemy) => {
    if (enemy.isTrainingDummy) return;
    if (enemy.pathIndex >= currentMap.path.length) return;
    enemy.freezeTime = Math.max(0, (enemy.freezeTime || 0) - dt);
    enemy.stunTime = Math.max(0, (enemy.stunTime || 0) - dt);
    if (enemy.freezeTime > 0 || enemy.stunTime > 0) return;
    const targetPoint = currentMap.path[enemy.pathIndex];
    const dx = targetPoint.x - enemy.x;
    const dy = targetPoint.y - enemy.y;
    const distance = Math.hypot(dx, dy);

    if (distance < 5) {
      enemy.pathIndex += 1;
      if (enemy.pathIndex >= currentMap.path.length) {
        bBaseHp -= Math.floor(enemy.atk * (enemy.isBoss ? 3 : 2));
        enemy.hp = 0;
        if (enemy.isBoss) activeBoss = null;
        if (bBaseHp <= 0) {
          bBaseHp = 0;
          enterGameOver();
        }
      }
    } else {
      enemy.x += (dx / distance) * enemy.speed * 60 * dt;
      enemy.y += (dy / distance) * enemy.speed * 60 * dt;
    }
  });

  enemies = enemies.filter((enemy) => enemy.hp > 0);
}

function updateUnits(dt) {
  placedUnits.forEach((unit) => {
    if (unit.farmIncome || unit.name === "사령관" || unit.name === "빛의 작곡가") return;
    unit.cooldown -= dt;
    unit.specialCooldown = Math.max(0, (unit.specialCooldown || 0) - dt);
    if (unit.cooldown > 0) return;
    const supportEffects = getSupportEffects(unit);
    const effectiveRange = unit.range * (1 + supportEffects.rangePercent);

    let closestEnemy = null;
    let closestDistance = Infinity;

    if (unit.name === "태엽 포격수" && unit.clockworkTargetId != null) {
      const stickyTarget = enemies.find((e) => e.id === unit.clockworkTargetId && e.hp > 0);
      if (stickyTarget && Math.hypot(stickyTarget.x - unit.x, stickyTarget.y - unit.y) < effectiveRange) {
        closestEnemy = stickyTarget;
        closestDistance = Math.hypot(stickyTarget.x - unit.x, stickyTarget.y - unit.y);
      }
    }

    if (!closestEnemy) {
      enemies.forEach((enemy) => {
        const distance = Math.hypot(enemy.x - unit.x, enemy.y - unit.y);
        if (distance < effectiveRange && distance < closestDistance) {
          closestEnemy = enemy;
          closestDistance = distance;
        }
      });
    }

    if (closestEnemy) {
      const commanderSpeedBuff = supportEffects.speedPercent;
      unit.attackCycle = (unit.attackCycle || 0) + 1;
      if (unit.name === "성운을 다루는자, 노바") {
        const attackSpeed = unit.speed;
        const basicDamage = Math.round(unit.atk * (1 + supportEffects.attackPercent));
        const trueSwordDamage = Math.round(getNovaSwordDamage(unit) * (1 + supportEffects.attackPercent));
        const nextSwordCount = (unit.novaSwordCount || 0) + 1;
        const shouldFireTrueSword = unit.trueSwordEveryAttack || nextSwordCount >= 5;

        projectiles.push({
          x: unit.x,
          y: unit.y,
          originX: unit.x,
          originY: unit.y,
          target: closestEnemy,
          atk: basicDamage,
          color: unit.gradeData.color,
          speed: getProjectileSpeedForUnit(unit) * 0.92,
          style: "nova-basic",
          hitTargetIds: new Set(),
          done: false,
        });

        if (shouldFireTrueSword) {
          projectiles.push({
            x: unit.x,
            y: unit.y,
            originX: unit.x,
            originY: unit.y,
            target: closestEnemy,
            atk: trueSwordDamage,
            color: unit.gradeData.color,
            speed: getProjectileSpeedForUnit(unit),
            style: "nova-true-sword",
            splashRadius: unit.swordSplashRadius || 146,
            splashRatio: 1,
            hitTargetIds: new Set(),
            done: false,
            isNovaTrueSword: true,
          });
          unit.novaSwordCount = 0;
        } else {
          unit.novaSwordCount = nextSwordCount;
        }

        unit.cooldown = 1 / (attackSpeed * (1 + commanderSpeedBuff));
        return;
      }
      const assassinSwingDamage = unit.name === "무영 암살자" && (unit.upgradeLevel || 0) >= 2 && unit.attackCycle % 3 === 0
        ? 100 + ((unit.upgradeLevel || 0) * 100)
        : 0;
      const assassinSwingRadius = assassinSwingDamage > 0 ? ((unit.upgradeLevel || 0) >= 4 ? 122 : 82) : 0;
      const bounceCount = unit.name === "부메랑 투척병" ? getWindJavelinBounceCount(unit.upgradeLevel || 0) : 0;
      const splashRadius =
        unit.name === "구름 검객" ? 44 :
        unit.name === "태양신 아폴로" ? 72 :
        unit.name === "별마법사" ? (unit.splashRadius || 130) :
        unit.name === "레인저" && (unit.upgradeLevel || 0) >= 4 ? (unit.splashRadius || 82) :
        unit.name === "화염 사수" ? 54 :
        assassinSwingDamage > 0 ? assassinSwingRadius :
        0;
      const splashRatio =
        unit.name === "구름 검객" ? 1 :
        unit.name === "태양신 아폴로" ? 0.9 :
        unit.name === "별마법사" ? 0.65 :
        unit.name === "레인저" && (unit.upgradeLevel || 0) >= 4 ? 0 :
        unit.name === "화염 사수" ? 0.8 :
        assassinSwingDamage > 0 ? 0 :
        0;
      const freezeDuration = unit.name === "서리 척후병" ? 0.5 : 0;
      const stunDuration = unit.name === "폭풍 창기사" && unit.specialCooldown <= 0 ? 2 : 0;
      const thunderProfile = unit.name === "천둥 사제" ? getThunderPriestProfile(unit) : null;
      const linePierceLength = unit.name === "광휘 창병" ? 190 : 0;
      const linePierceWidth = unit.name === "광휘 창병" ? 28 : 0;
      const chainRange = unit.name === "천둥 사제" ? 130 : 0;
      const chainCount = thunderProfile ? thunderProfile.chains : 0;
      const clockworkBonus = unit.name === "태엽 포격수" ? Math.min(5, unit.clockworkSpeedBonus || 0) : 0;
      const attackSpeed = thunderProfile ? thunderProfile.speed : unit.speed + clockworkBonus;
      const attackDamage = Math.round((thunderProfile ? thunderProfile.atk : unit.atk) * (1 + supportEffects.attackPercent));
      const projectileStun = thunderProfile ? thunderProfile.stun : stunDuration;
      projectiles.push({
        x: unit.x,
        y: unit.y,
        originX: unit.x,
        originY: unit.y,
        target: closestEnemy,
        atk: attackDamage,
        color: unit.gradeData.color,
        speed: getProjectileSpeedForUnit(unit) * (unit.projectileSpeedMultiplier || 1),
        style: getProjectileStyleForUnit(unit),
        maxed: unit.grade === "ethereal" && (unit.upgradeLevel || 0) >= 4,
        bouncesLeft: bounceCount,
        splashRadius,
        splashRatio,
        splashCenterX: assassinSwingDamage > 0 ? unit.x : null,
        splashCenterY: assassinSwingDamage > 0 ? unit.y : null,
        assassinSwingDamage,
        splashDamageFlat: unit.name === "레인저" && (unit.upgradeLevel || 0) >= 4 ? (unit.splashDamage || 500) : 0,
        freezeDuration,
        stunDuration: projectileStun,
        chainCount,
        chainRange,
        linePierceLength,
        linePierceWidth,
        hitTargetIds: new Set(),
        done: false,
      });
      if (stunDuration > 0) {
        unit.specialCooldown = 10;
      }
      if (unit.name === "태엽 포격수") {
        if (unit.clockworkTargetId !== closestEnemy.id) {
          unit.clockworkTargetId = closestEnemy.id;
          unit.clockworkSpeedBonus = 0;
        } else {
          unit.clockworkSpeedBonus = Math.min(5, (unit.clockworkSpeedBonus || 0) + 0.1);
        }
      }
      unit.cooldown = 1 / (attackSpeed * (1 + commanderSpeedBuff));
    }
  });
}

function updateProjectiles(dt) {
  projectiles.forEach((projectile) => {
    if (!projectile.target || projectile.target.hp <= 0) {
      projectile.done = true;
      return;
    }

    const dx = projectile.target.x - projectile.x;
    const dy = projectile.target.y - projectile.y;
    const distance = Math.hypot(dx, dy);

    if (distance < 10) {
      projectile.hitTargetIds = projectile.hitTargetIds || new Set();
      if (projectile.target.id != null) {
        projectile.hitTargetIds.add(projectile.target.id);
      }
      const hitEnemy = (enemy, damage, isPrimaryHit = false) => {
        if (enemy.isTrainingDummy) {
          recordPreviewDamage(damage);
          return;
        }
        enemy.hp -= damage;
        if (isPrimaryHit && !enemy.isBoss && projectile.freezeDuration > 0) {
          enemy.freezeTime = Math.max(enemy.freezeTime || 0, projectile.freezeDuration);
          spawnFloatingText(enemy.x, enemy.y - 18, "빙결", "#a9f0ff");
        }
        if (isPrimaryHit && !enemy.isBoss && projectile.stunDuration > 0) {
          enemy.stunTime = Math.max(enemy.stunTime || 0, projectile.stunDuration);
          spawnFloatingText(enemy.x, enemy.y - 18, "기절", "#fff29d");
        }
        if (enemy.hp <= 0) {
          markEnemyDefeated(enemy);
          updateBattleUI();
        }
      };

      const primaryDamage = projectile.style === "arcane-orb"
        ? Math.round(projectile.atk * 1.5)
        : projectile.atk;
      hitEnemy(projectile.target, primaryDamage, true);

      if (projectile.splashRadius > 0) {
        const splashX = projectile.assassinSwingDamage > 0 ? projectile.splashCenterX ?? projectile.originX : projectile.target.x;
        const splashY = projectile.assassinSwingDamage > 0 ? projectile.splashCenterY ?? projectile.originY : projectile.target.y;
        if (projectile.assassinSwingDamage > 0) {
          spawnAreaIndicator(splashX, splashY, projectile.splashRadius, "rgba(236, 208, 255, 0.92)", {
            fillAlpha: 0.16,
            lineWidth: 4,
            life: 0.32,
            style: "shadow-spin",
          });
        } else if (projectile.style === "arcane-orb") {
          spawnAreaIndicator(splashX, splashY, projectile.splashRadius, "rgba(182, 144, 255, 0.95)", {
            fillAlpha: 0.2,
            lineWidth: 4,
            life: 0.46,
            style: "arcane-bloom",
          });
        } else if (projectile.style === "ranger-shot" && projectile.splashDamageFlat > 0) {
          spawnAreaIndicator(splashX, splashY, projectile.splashRadius, "rgba(255, 104, 104, 0.96)", {
            fillAlpha: 0.18,
            lineWidth: 5,
            life: 0.4,
            style: "crimson-burst",
            ringCount: 2,
          });
        } else if (projectile.style === "nova-true-sword") {
          spawnNovaImpactEffect(splashX, splashY, projectile.splashRadius);
        }
        enemies.forEach((enemy) => {
          if (enemy === projectile.target || enemy.hp <= 0) return;
          if (Math.hypot(enemy.x - splashX, enemy.y - splashY) > projectile.splashRadius) return;
          let splashDamage = projectile.assassinSwingDamage > 0
            ? projectile.assassinSwingDamage
            : projectile.splashDamageFlat > 0
              ? projectile.splashDamageFlat
              : Math.max(1, Math.round(projectile.atk * projectile.splashRatio));
          if (projectile.style === "arcane-orb" && Math.hypot(enemy.x - splashX, enemy.y - splashY) <= projectile.splashRadius * 0.35) {
            splashDamage = Math.round(splashDamage * 1.5);
          }
          hitEnemy(enemy, splashDamage, false);
        });
      }
      if (projectile.linePierceLength > 0) {
        const lineDx = projectile.target.x - projectile.originX;
        const lineDy = projectile.target.y - projectile.originY;
        const lineLength = Math.hypot(lineDx, lineDy) || 1;
        const dirX = lineDx / lineLength;
        const dirY = lineDy / lineLength;
        enemies.forEach((enemy) => {
          if (enemy === projectile.target || enemy.hp <= 0) return;
          const relX = enemy.x - projectile.originX;
          const relY = enemy.y - projectile.originY;
          const forward = relX * dirX + relY * dirY;
          const side = Math.abs(relX * -dirY + relY * dirX);
          if (forward < 0 || forward > projectile.linePierceLength || side > projectile.linePierceWidth) return;
          hitEnemy(enemy, projectile.isNovaTrueSword ? projectile.atk : Math.max(1, Math.round(projectile.atk * 0.8)), false);
        });
      }
      if (projectile.chainCount > 0) {
        let chainOrigin = projectile.target;
        for (let chainIndex = 0; chainIndex < projectile.chainCount; chainIndex += 1) {
          const nextTarget = enemies
            .filter(
              (enemy) =>
                enemy.hp > 0 &&
                enemy !== chainOrigin &&
                !projectile.hitTargetIds.has(enemy.id) &&
                Math.hypot(enemy.x - chainOrigin.x, enemy.y - chainOrigin.y) <= projectile.chainRange
            )
            .sort(
              (a, b) =>
                Math.hypot(a.x - chainOrigin.x, a.y - chainOrigin.y) -
                Math.hypot(b.x - chainOrigin.x, b.y - chainOrigin.y)
            )[0];
          if (!nextTarget) break;
          projectile.hitTargetIds.add(nextTarget.id);
          spawnFloatingText(nextTarget.x, nextTarget.y - 16, "연쇄", "#d7c1ff");
          hitEnemy(nextTarget, Math.max(1, Math.round(projectile.atk * 0.82)), true);
          chainOrigin = nextTarget;
        }
      }
      if (projectile.style === "boomerang" && projectile.bouncesLeft > 0) {
        const nextTarget = enemies
          .filter(
            (enemy) =>
              enemy !== projectile.target &&
              enemy.hp > 0 &&
              !projectile.hitTargetIds.has(enemy.id) &&
              Math.hypot(enemy.x - projectile.target.x, enemy.y - projectile.target.y) <= 150
          )
          .sort(
            (a, b) =>
              Math.hypot(a.x - projectile.target.x, a.y - projectile.target.y) -
              Math.hypot(b.x - projectile.target.x, b.y - projectile.target.y)
          )[0];

        if (nextTarget) {
          projectile.x = projectile.target.x;
          projectile.y = projectile.target.y;
          projectile.target = nextTarget;
          projectile.bouncesLeft -= 1;
          return;
        }
      }
      projectile.done = true;
    } else {
      projectile.x += (dx / distance) * projectile.speed * dt;
      projectile.y += (dy / distance) * projectile.speed * dt;
    }
  });

  projectiles = projectiles.filter((projectile) => !projectile.done);
}

function updateFloatingTexts(dt) {
  floatingTexts.forEach((item) => {
    item.life -= dt;
    item.y -= 24 * dt;
  });
  floatingTexts = floatingTexts.filter((item) => item.life > 0);
}

function updateDestroyTime(dt) {
  if (bRunning && destroyTimeCooldown > 0) {
    destroyTimeCooldown = Math.max(0, destroyTimeCooldown - dt);
  }

  if (!activeBlackHole) return;
  const caster = placedUnits.find((unit) => unit.id === activeBlackHole.casterId) || null;
  const skillStats = getDestroyTimeStats(caster ? caster.upgradeLevel || 0 : 0);

  activeBlackHole.life -= dt;
  if (activeBlackHole.life <= 0) {
    activeBlackHole = null;
    return;
  }

  enemies.forEach((enemy) => {
    const dx = activeBlackHole.x - enemy.x;
    const dy = activeBlackHole.y - enemy.y;
    const distance = Math.hypot(dx, dy) || 1;
    if (distance > activeBlackHole.radius) return;

    const pullRatio = 1 - distance / activeBlackHole.radius;
    if (!enemy.isBoss && !enemy.isMidBoss) {
      const pullForce = skillStats.pullStrength * pullRatio * dt;
      enemy.x += (dx / distance) * pullForce;
      enemy.y += (dy / distance) * pullForce;
    }
    enemy.hp -= skillStats.dps * pullRatio * dt;

    if (enemy.hp <= 0) {
      markEnemyDefeated(enemy, skillStats.isOverdrive ? 1.15 : 1);
    }
  });

  enemies = enemies.filter((enemy) => enemy.hp > 0);
}

function checkWaveEnd() {
  if (previewMode) return;
  if (!bSpawnDone || enemies.length !== 0 || !bRunning) return;

  bRunning = false;
  if (bWave === currentMap.finalWave) {
    enterBattleClear();
    return;
  }

  const waveMoneyReward = Math.floor((80 + bWave * 35 + (currentMap.waveRewardBonus || 0)) * 0.7);
  bMoney += waveMoneyReward;
  spawnFloatingText(battleCanvas.width / 2, 54, `+${waveMoneyReward} 머니`, "#9ff7c2");
  showBattleMsg(`웨이브 클리어! +${waveMoneyReward} 머니`);
  updateBattleUI();
  if (autoStartWave && !battleCleared && !bGameOver) {
    window.setTimeout(() => {
      if (!bRunning && !bGameOver && !battleCleared && document.getElementById("battleScreen").style.display !== "none") {
        startWave();
      }
    }, 3000 / battleSpeed);
  }
}

function drawBattleDecor() {
  const spots = [
    { x: 70, y: 64, emoji: currentMap.deco[0] },
    { x: 628, y: 88, emoji: currentMap.deco[1] },
    { x: 96, y: 430, emoji: currentMap.deco[2] },
    { x: 630, y: 412, emoji: currentMap.deco[3] },
  ];

  bctx.font = "28px 'Segoe UI Emoji'";
  spots.forEach((spot) => {
    bctx.fillText(spot.emoji, spot.x, spot.y);
  });
}

function drawBattle() {
  bctx.clearRect(0, 0, battleCanvas.width, battleCanvas.height);

  const ground = bctx.createLinearGradient(0, 0, 0, battleCanvas.height);
  ground.addColorStop(0, currentMap.groundTop);
  ground.addColorStop(1, currentMap.groundBottom);
  bctx.fillStyle = ground;
  bctx.fillRect(0, 0, battleCanvas.width, battleCanvas.height);

  if (currentMap.id === "fallen") {
    const fallenMist = bctx.createRadialGradient(350, 220, 40, 350, 220, 420);
    fallenMist.addColorStop(0, "rgba(173, 91, 255, 0.18)");
    fallenMist.addColorStop(0.5, "rgba(112, 52, 173, 0.12)");
    fallenMist.addColorStop(1, "rgba(28, 10, 48, 0)");
    bctx.fillStyle = fallenMist;
    bctx.fillRect(0, 0, battleCanvas.width, battleCanvas.height);
  }

  bctx.strokeStyle = "rgba(255,255,255,0.08)";
  bctx.lineWidth = 1;
  for (let x = 0; x < battleCanvas.width; x += 40) {
    bctx.beginPath();
    bctx.moveTo(x, 0);
    bctx.lineTo(x, battleCanvas.height);
    bctx.stroke();
  }
  for (let y = 0; y < battleCanvas.height; y += 40) {
    bctx.beginPath();
    bctx.moveTo(0, y);
    bctx.lineTo(battleCanvas.width, y);
    bctx.stroke();
  }

  drawBattleDecor();

  bctx.strokeStyle = currentMap.pathOuter;
  bctx.lineWidth = 58;
  bctx.lineCap = "round";
  bctx.lineJoin = "round";
  bctx.beginPath();
  bctx.moveTo(currentMap.path[0].x, currentMap.path[0].y);
  currentMap.path.forEach((point) => bctx.lineTo(point.x, point.y));
  bctx.stroke();

  bctx.strokeStyle = currentMap.pathInner;
  bctx.lineWidth = 48;
  bctx.beginPath();
  bctx.moveTo(currentMap.path[0].x, currentMap.path[0].y);
  currentMap.path.forEach((point) => bctx.lineTo(point.x, point.y));
  bctx.stroke();

  bctx.textAlign = "center";

  if (showPathGuide) {
    bctx.strokeStyle = "rgba(255, 244, 176, 0.8)";
    bctx.fillStyle = "rgba(255, 244, 176, 0.92)";
    bctx.lineWidth = 3;

    const guideOffset = (performance.now() * 0.12) % 56;
    for (let i = 0; i < currentMap.path.length - 1; i += 1) {
      const start = currentMap.path[i];
      const end = currentMap.path[i + 1];
      const dx = end.x - start.x;
      const dy = end.y - start.y;
      const segmentLength = Math.hypot(dx, dy);
      if (!segmentLength) continue;

      const ux = dx / segmentLength;
      const uy = dy / segmentLength;

      for (let dist = 26 + guideOffset; dist < segmentLength - 18; dist += 56) {
        const x = start.x + ux * dist;
        const y = start.y + uy * dist;
        const angle = Math.atan2(dy, dx);

        bctx.save();
        bctx.translate(x, y);
        bctx.rotate(angle);
        bctx.beginPath();
        bctx.moveTo(-10, -7);
        bctx.lineTo(10, 0);
        bctx.lineTo(-10, 7);
        bctx.closePath();
        bctx.fill();
        bctx.restore();
      }
    }
  }

  if (activeBlackHole) {
    const pulse = 0.82 + Math.sin(activeBlackHole.life * 8) * 0.08;
    const overdrive = activeBlackHole.overdrive;
    const swirl = performance.now() * 0.0024;
    const outer = bctx.createRadialGradient(
      activeBlackHole.x,
      activeBlackHole.y,
      8,
      activeBlackHole.x,
      activeBlackHole.y,
      activeBlackHole.radius
    );
    outer.addColorStop(0, overdrive ? "rgba(10, 0, 18, 0.98)" : "rgba(20, 4, 35, 0.95)");
    outer.addColorStop(0.24, overdrive ? "rgba(255, 95, 225, 0.44)" : "rgba(177, 74, 255, 0.28)");
    outer.addColorStop(0.35, overdrive ? "rgba(133, 45, 255, 0.56)" : "rgba(112, 45, 158, 0.45)");
    outer.addColorStop(1, "rgba(112, 45, 158, 0)");
    bctx.fillStyle = outer;
    bctx.beginPath();
    bctx.arc(activeBlackHole.x, activeBlackHole.y, activeBlackHole.radius, 0, Math.PI * 2);
    bctx.fill();

    const halo = bctx.createRadialGradient(
      activeBlackHole.x,
      activeBlackHole.y,
      0,
      activeBlackHole.x,
      activeBlackHole.y,
      activeBlackHole.radius * 1.18
    );
    halo.addColorStop(0, overdrive ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.14)");
    halo.addColorStop(0.18, overdrive ? "rgba(255, 193, 255, 0.2)" : "rgba(255, 168, 245, 0.16)");
    halo.addColorStop(0.5, "rgba(144, 74, 255, 0.12)");
    halo.addColorStop(1, "rgba(144, 74, 255, 0)");
    bctx.fillStyle = halo;
    bctx.beginPath();
    bctx.arc(activeBlackHole.x, activeBlackHole.y, activeBlackHole.radius * 1.18, 0, Math.PI * 2);
    bctx.fill();

    bctx.strokeStyle = overdrive ? "rgba(255, 186, 255, 0.88)" : "rgba(250, 165, 255, 0.6)";
    bctx.lineWidth = overdrive ? 4 : 2;
    bctx.beginPath();
    bctx.arc(activeBlackHole.x, activeBlackHole.y, activeBlackHole.radius * pulse, 0, Math.PI * 2);
    bctx.stroke();

    if (overdrive) {
      bctx.strokeStyle = "rgba(255, 88, 214, 0.5)";
      bctx.lineWidth = 3;
      bctx.beginPath();
      bctx.arc(activeBlackHole.x, activeBlackHole.y, activeBlackHole.radius * (1.08 + pulse * 0.1), 0, Math.PI * 2);
      bctx.stroke();
    }

    bctx.fillStyle = "#090211";
    bctx.beginPath();
    bctx.arc(activeBlackHole.x, activeBlackHole.y, (overdrive ? 34 : 24) + pulse * (overdrive ? 12 : 8), 0, Math.PI * 2);
    bctx.fill();

    if (overdrive) {
      const coreBloom = bctx.createRadialGradient(
        activeBlackHole.x,
        activeBlackHole.y,
        2,
        activeBlackHole.x,
        activeBlackHole.y,
        42
      );
      coreBloom.addColorStop(0, "rgba(255,255,255,0.98)");
      coreBloom.addColorStop(0.18, "rgba(255, 238, 255, 0.95)");
      coreBloom.addColorStop(0.42, "rgba(255, 189, 255, 0.78)");
      coreBloom.addColorStop(0.7, "rgba(182, 118, 255, 0.38)");
      coreBloom.addColorStop(1, "rgba(182, 118, 255, 0)");
      bctx.fillStyle = coreBloom;
      bctx.beginPath();
      bctx.arc(activeBlackHole.x, activeBlackHole.y, 42, 0, Math.PI * 2);
      bctx.fill();

      bctx.strokeStyle = "rgba(255, 247, 255, 0.92)";
      bctx.lineWidth = 3;
      bctx.beginPath();
      bctx.arc(activeBlackHole.x, activeBlackHole.y, 16 + pulse * 2, 0, Math.PI * 2);
      bctx.stroke();

      bctx.fillStyle = "#fff8ff";
      bctx.beginPath();
      bctx.arc(activeBlackHole.x, activeBlackHole.y, 12, 0, Math.PI * 2);
      bctx.fill();

      bctx.fillStyle = "rgba(255, 205, 255, 0.9)";
      bctx.beginPath();
      bctx.arc(activeBlackHole.x - 4, activeBlackHole.y + 2, 5, 0, Math.PI * 2);
      bctx.fill();
    }

    for (let i = 0; i < (overdrive ? 12 : 8); i += 1) {
      const angle = swirl + (Math.PI * 2 * i) / (overdrive ? 12 : 8);
      const orbitRadius = activeBlackHole.radius * (overdrive ? 0.54 : 0.46) + Math.sin(swirl * 2 + i) * 8;
      const starX = activeBlackHole.x + Math.cos(angle) * orbitRadius;
      const starY = activeBlackHole.y + Math.sin(angle) * orbitRadius;
      const starGlow = bctx.createRadialGradient(starX, starY, 1, starX, starY, overdrive ? 12 : 8);
      starGlow.addColorStop(0, "rgba(255,255,255,0.95)");
      starGlow.addColorStop(0.4, overdrive ? "rgba(255, 186, 255, 0.82)" : "rgba(255, 170, 248, 0.62)");
      starGlow.addColorStop(1, "rgba(255, 170, 248, 0)");
      bctx.fillStyle = starGlow;
      bctx.beginPath();
      bctx.arc(starX, starY, overdrive ? 12 : 8, 0, Math.PI * 2);
      bctx.fill();
    }

    if (overdrive) {
      for (let i = 0; i < 8; i += 1) {
        const angle = performance.now() * 0.003 + (Math.PI * 2 * i) / 8;
        const runeX = activeBlackHole.x + Math.cos(angle) * (activeBlackHole.radius * 0.72);
        const runeY = activeBlackHole.y + Math.sin(angle) * (activeBlackHole.radius * 0.72);
        bctx.fillStyle = "rgba(255, 175, 255, 0.82)";
        bctx.beginPath();
        bctx.arc(runeX, runeY, 5, 0, Math.PI * 2);
        bctx.fill();
      }

      bctx.strokeStyle = "rgba(255, 236, 255, 0.34)";
      bctx.lineWidth = 2;
      for (let i = 0; i < 6; i += 1) {
        const angle = swirl * 1.4 + (Math.PI * 2 * i) / 6;
        bctx.beginPath();
        bctx.moveTo(activeBlackHole.x, activeBlackHole.y);
        bctx.lineTo(
          activeBlackHole.x + Math.cos(angle) * activeBlackHole.radius * 0.92,
          activeBlackHole.y + Math.sin(angle) * activeBlackHole.radius * 0.92
        );
        bctx.stroke();
      }

      for (let i = 0; i < 5; i += 1) {
        const petalAngle = -swirl * 1.6 + (Math.PI * 2 * i) / 5;
        const petalX = activeBlackHole.x + Math.cos(petalAngle) * 26;
        const petalY = activeBlackHole.y + Math.sin(petalAngle) * 26;
        const petalGlow = bctx.createRadialGradient(petalX, petalY, 1, petalX, petalY, 12);
        petalGlow.addColorStop(0, "rgba(255,255,255,0.94)");
        petalGlow.addColorStop(0.5, "rgba(255, 200, 255, 0.72)");
        petalGlow.addColorStop(1, "rgba(255, 200, 255, 0)");
        bctx.fillStyle = petalGlow;
        bctx.beginPath();
        bctx.arc(petalX, petalY, 12, 0, Math.PI * 2);
        bctx.fill();
      }
    }

    bctx.fillStyle = "rgba(255, 169, 249, 0.9)";
    bctx.font = `bold ${overdrive ? 18 : 13}px 'Segoe UI'`;
    bctx.fillText(overdrive ? "Destroy Time : Overdrive" : "Destroy Time", activeBlackHole.x, activeBlackHole.y - activeBlackHole.radius - 12);
  }

  placedUnits.forEach((unit) => {
    const isSelected = selectedUnit && selectedUnit.id === unit.id;
    const supportEffects = getSupportEffects(unit);
    const displayRange = unit.range * (1 + supportEffects.rangePercent);
    if (isSelected) {
      const rangeColor = getRangeIndicatorColor(unit);
      bctx.strokeStyle = rangeColor;
      bctx.lineWidth = 3;
      bctx.fillStyle = `${rangeColor}22`;
      bctx.beginPath();
      bctx.arc(unit.x, unit.y, displayRange, 0, Math.PI * 2);
      bctx.fill();
      bctx.beginPath();
      bctx.arc(unit.x, unit.y, displayRange, 0, Math.PI * 2);
      bctx.stroke();
    }

    bctx.fillStyle = `${unit.gradeData.color}aa`;
    bctx.beginPath();
    bctx.arc(unit.x, unit.y, 20, 0, Math.PI * 2);
    bctx.fill();

    bctx.strokeStyle = "#fff7ef";
    bctx.lineWidth = 2;
    bctx.beginPath();
    bctx.arc(unit.x, unit.y, 20, 0, Math.PI * 2);
    bctx.stroke();

    bctx.font = "22px 'Segoe UI Emoji'";
    bctx.fillStyle = "#ffffff";
    bctx.fillText(unit.emoji, unit.x, unit.y + 8);
    bctx.font = "bold 11px 'Segoe UI'";
    bctx.fillStyle = "#fff9d6";
    bctx.fillText(`Lv.${unit.upgradeLevel || 0}`, unit.x, unit.y + 34);

    if (isSelected) {
      bctx.strokeStyle = "#ffffff";
      bctx.lineWidth = 3;
      bctx.setLineDash([5, 4]);
      bctx.beginPath();
      bctx.arc(unit.x, unit.y, 25, 0, Math.PI * 2);
      bctx.stroke();
      bctx.setLineDash([]);
    }

    if (unit.name === "성운을 다루는자, 노바") {
      const swordCount = unit.trueSwordEveryAttack ? 5 : (unit.novaSwordCount || 0);
      for (let i = 0; i < swordCount; i += 1) {
        const angle = performance.now() * 0.003 + ((Math.PI * 2) / Math.max(1, swordCount)) * i;
        const orbitX = unit.x + Math.cos(angle) * 30;
        const orbitY = unit.y + Math.sin(angle) * 30;
        bctx.save();
        bctx.translate(orbitX, orbitY);
        bctx.rotate(angle + Math.PI / 2);
        bctx.fillStyle = "rgba(255, 234, 255, 0.96)";
        bctx.beginPath();
        bctx.moveTo(0, -10);
        bctx.lineTo(4, 7);
        bctx.lineTo(0, 4);
        bctx.lineTo(-4, 7);
        bctx.closePath();
        bctx.fill();
        bctx.strokeStyle = "rgba(255, 120, 244, 0.88)";
        bctx.lineWidth = 1.5;
        bctx.beginPath();
        bctx.moveTo(0, -12);
        bctx.lineTo(0, 10);
        bctx.stroke();
        bctx.restore();
      }
    }
  });

  if (draggingTower && dragX > 0 && dragY > 0) {
    const onPath = isOnPath(dragX, dragY, currentMap.path);
    const overlapping = isUnitOverlapping(dragX, dragY);
    const invalid = onPath || overlapping;

    bctx.strokeStyle = invalid ? "#ff7e74aa" : `${draggingTower.gradeData.color}99`;
    bctx.lineWidth = 2;
    bctx.setLineDash([6, 4]);
    bctx.beginPath();
    bctx.arc(dragX, dragY, draggingTower.range, 0, Math.PI * 2);
    bctx.stroke();
    bctx.setLineDash([]);

    bctx.fillStyle = invalid ? "#ff7e7480" : `${draggingTower.gradeData.color}88`;
    bctx.beginPath();
    bctx.arc(dragX, dragY, 20, 0, Math.PI * 2);
    bctx.fill();

    bctx.font = "22px 'Segoe UI Emoji'";
    bctx.fillStyle = "#fff";
    bctx.fillText(draggingTower.emoji, dragX, dragY + 8);

    if (onPath || overlapping) {
      bctx.fillStyle = "#fff4ed";
      bctx.font = "12px 'Segoe UI'";
      bctx.fillText(onPath ? "길 위에는 배치 불가" : "유닛이 겹칩니다", dragX, dragY - 28);
    }
  }

  enemies.forEach((enemy) => {
    if (!enemy.isTrainingDummy && enemy.pathIndex >= currentMap.path.length) return;
    const displayEnemy = getEnemyDisplayData(enemy);
    const barWidth = 34;
    if (!enemy.isTrainingDummy) {
      bctx.fillStyle = "rgba(0,0,0,0.28)";
      bctx.fillRect(enemy.x - barWidth / 2, enemy.y - 28, barWidth, 6);
      bctx.fillStyle = enemy.isFallen ? displayEnemy.color : "#ff5c61";
      bctx.fillRect(enemy.x - barWidth / 2, enemy.y - 28, barWidth * (enemy.hp / enemy.maxHp), 6);
    }
    if (enemy.isFallen) {
      const fallenGlow = bctx.createRadialGradient(enemy.x, enemy.y, 2, enemy.x, enemy.y, 18);
      fallenGlow.addColorStop(0, "rgba(255,255,255,0.16)");
      fallenGlow.addColorStop(0.55, "rgba(183, 102, 255, 0.24)");
      fallenGlow.addColorStop(1, "rgba(183, 102, 255, 0)");
      bctx.fillStyle = fallenGlow;
      bctx.beginPath();
      bctx.arc(enemy.x, enemy.y, 18, 0, Math.PI * 2);
      bctx.fill();
    }
    bctx.font = "22px 'Segoe UI Emoji'";
    bctx.fillStyle = enemy.isFallen ? "#f4ddff" : "#fff";
    bctx.fillText(displayEnemy.emoji, enemy.x, enemy.y + 8);

    if (enemy.isTrainingDummy) {
      bctx.fillStyle = "#ffeaff";
      bctx.font = "bold 13px 'Segoe UI'";
      bctx.fillText(`입힌 피해: ${Math.floor(previewDamageTotal).toLocaleString()}`, enemy.x, enemy.y - 42);
      bctx.fillStyle = "#dcb9ff";
      bctx.font = "12px 'Segoe UI'";
      bctx.fillText(`초당 DPS: ${getPreviewDps().toLocaleString()}`, enemy.x, enemy.y - 24);
    }
  });

  areaIndicators.forEach((indicator) => {
    const alpha = Math.max(0, indicator.life / indicator.maxLife);
    const fillColor = indicator.color.replace(/[\d.]+\)\s*$/, `${indicator.fillAlpha * alpha})`);
    const strokeColor = indicator.color.replace(/[\d.]+\)\s*$/, `${alpha})`);
    bctx.save();
    if (indicator.style === "nova-bloom") {
      bctx.globalCompositeOperation = "screen";
      const glow = bctx.createRadialGradient(indicator.x, indicator.y, 8, indicator.x, indicator.y, indicator.radius * indicator.glowScale);
      glow.addColorStop(0, `rgba(255,255,255,${0.38 * alpha})`);
      glow.addColorStop(0.2, `rgba(205,243,255,${0.3 * alpha})`);
      glow.addColorStop(0.5, `rgba(108,176,255,${0.2 * alpha})`);
      glow.addColorStop(1, "rgba(108,176,255,0)");
      bctx.fillStyle = glow;
      bctx.beginPath();
      bctx.arc(indicator.x, indicator.y, indicator.radius * indicator.glowScale, 0, Math.PI * 2);
      bctx.fill();
      const coreGlow = bctx.createRadialGradient(indicator.x, indicator.y, 0, indicator.x, indicator.y, indicator.radius * 0.82);
      coreGlow.addColorStop(0, `rgba(255,255,255,${0.3 * alpha})`);
      coreGlow.addColorStop(0.18, `rgba(212,247,255,${0.24 * alpha})`);
      coreGlow.addColorStop(0.58, `rgba(92,142,255,${0.12 * alpha})`);
      coreGlow.addColorStop(1, "rgba(92,142,255,0)");
      bctx.fillStyle = coreGlow;
      bctx.beginPath();
      bctx.arc(indicator.x, indicator.y, indicator.radius * 0.82, 0, Math.PI * 2);
      bctx.fill();
    } else if (indicator.style === "shadow-spin") {
      bctx.globalCompositeOperation = "screen";
      const shadowGlow = bctx.createRadialGradient(indicator.x, indicator.y, 6, indicator.x, indicator.y, indicator.radius * 1.15);
      shadowGlow.addColorStop(0, `rgba(255,255,255,${0.12 * alpha})`);
      shadowGlow.addColorStop(0.28, `rgba(224,180,255,${0.18 * alpha})`);
      shadowGlow.addColorStop(0.7, `rgba(96,58,164,${0.16 * alpha})`);
      shadowGlow.addColorStop(1, "rgba(96,58,164,0)");
      bctx.fillStyle = shadowGlow;
      bctx.beginPath();
      bctx.arc(indicator.x, indicator.y, indicator.radius * 1.15, 0, Math.PI * 2);
      bctx.fill();
    } else if (indicator.style === "crimson-burst") {
      bctx.globalCompositeOperation = "screen";
      const crimsonGlow = bctx.createRadialGradient(indicator.x, indicator.y, 5, indicator.x, indicator.y, indicator.radius * 1.12);
      crimsonGlow.addColorStop(0, `rgba(255,245,240,${0.16 * alpha})`);
      crimsonGlow.addColorStop(0.26, `rgba(255,133,133,${0.2 * alpha})`);
      crimsonGlow.addColorStop(0.64, `rgba(183,24,24,${0.16 * alpha})`);
      crimsonGlow.addColorStop(1, "rgba(183,24,24,0)");
      bctx.fillStyle = crimsonGlow;
      bctx.beginPath();
      bctx.arc(indicator.x, indicator.y, indicator.radius * 1.12, 0, Math.PI * 2);
      bctx.fill();
    }
    bctx.fillStyle = fillColor;
    bctx.strokeStyle = strokeColor;
    bctx.lineWidth = indicator.lineWidth;
    bctx.beginPath();
    bctx.arc(indicator.x, indicator.y, indicator.radius, 0, Math.PI * 2);
    bctx.fill();
    bctx.stroke();
    for (let ringIndex = 0; ringIndex < indicator.ringCount; ringIndex += 1) {
      const ringScale = 0.56 + ringIndex * 0.2;
      bctx.lineWidth = Math.max(2, indicator.lineWidth - ringIndex);
      if (indicator.style === "nova-bloom" || indicator.style === "shadow-spin" || indicator.style === "crimson-burst" || indicator.style === "arcane-bloom") {
        bctx.shadowBlur = 20 - ringIndex * 4;
        bctx.shadowColor =
          indicator.style === "crimson-burst"
            ? `rgba(255,146,146,${alpha * 0.82})`
            : indicator.style === "shadow-spin"
              ? `rgba(216,172,255,${alpha * 0.82})`
              : indicator.style === "arcane-bloom"
                ? `rgba(203,154,255,${alpha * 0.82})`
                : `rgba(174,233,255,${alpha * 0.9})`;
        bctx.beginPath();
        bctx.arc(indicator.x, indicator.y, indicator.radius * ringScale, 0, Math.PI * 2);
        bctx.stroke();
      } else {
        bctx.setLineDash(ringIndex % 2 === 0 ? [10, 6] : [4, 9]);
        bctx.beginPath();
        bctx.arc(indicator.x, indicator.y, indicator.radius * ringScale, 0, Math.PI * 2);
        bctx.stroke();
      }
    }
    bctx.setLineDash([]);
    if (indicator.style === "nova-bloom" || indicator.style === "crimson-burst" || indicator.style === "shadow-spin") {
      bctx.shadowBlur = 0;
      for (let rayIndex = 0; rayIndex < 8; rayIndex += 1) {
        const angle = (Math.PI * 2 * rayIndex) / 8 + performance.now() * 0.0012;
        const inner = indicator.radius * 0.18;
        const outer = indicator.radius * (0.86 + (rayIndex % 2) * 0.1);
        bctx.strokeStyle =
          indicator.style === "crimson-burst"
            ? `rgba(255,198,198,${alpha * 0.34})`
            : indicator.style === "shadow-spin"
              ? `rgba(236,209,255,${alpha * 0.28})`
              : `rgba(218,245,255,${alpha * 0.4})`;
        bctx.lineWidth = 2.2;
        bctx.beginPath();
        bctx.moveTo(indicator.x + Math.cos(angle) * inner, indicator.y + Math.sin(angle) * inner);
        bctx.lineTo(indicator.x + Math.cos(angle) * outer, indicator.y + Math.sin(angle) * outer);
        bctx.stroke();
      }
    }
    if (indicator.label) {
      bctx.fillStyle = `rgba(255,245,255,${alpha})`;
      bctx.font = "bold 13px 'Segoe UI'";
      bctx.fillText(indicator.label, indicator.x, indicator.y - indicator.radius - 12);
    }
    bctx.restore();
  });

  if (activeBoss) {
    const bossBarX = 110;
    const bossBarY = 18;
    const bossBarWidth = battleCanvas.width - 220;
    bctx.fillStyle = "rgba(8, 10, 22, 0.82)";
    bctx.beginPath();
    bctx.roundRect(bossBarX, bossBarY, bossBarWidth, 26, 13);
    bctx.fill();
    bctx.fillStyle = activeBoss.color || "#ff9a7c";
    bctx.beginPath();
    bctx.roundRect(bossBarX + 3, bossBarY + 3, Math.max(10, (bossBarWidth - 6) * (activeBoss.hp / activeBoss.maxHp)), 20, 10);
    bctx.fill();
    bctx.strokeStyle = "rgba(255,255,255,0.2)";
    bctx.lineWidth = 2;
    bctx.beginPath();
    bctx.roundRect(bossBarX, bossBarY, bossBarWidth, 26, 13);
    bctx.stroke();
    bctx.fillStyle = "#fff6ea";
    bctx.font = "bold 14px 'Segoe UI'";
    bctx.fillText(`${activeBoss.emoji} ${activeBoss.name} · HP ${Math.max(0, Math.ceil(activeBoss.hp)).toLocaleString()} / ${activeBoss.maxHp.toLocaleString()}`, battleCanvas.width / 2, 36);
  }

  projectiles.forEach((projectile) => {
    if (projectile.style === "diablo-orb") {
      const orbRadius = projectile.maxed ? 32 : 20;
      const coreRadius = projectile.maxed ? 10 : 6;
      const ringRadius = projectile.maxed ? 14 : 8;
      const glow = bctx.createRadialGradient(projectile.x, projectile.y, 2, projectile.x, projectile.y, orbRadius);
      glow.addColorStop(0, "rgba(255,255,255,0.98)");
      glow.addColorStop(0.18, projectile.maxed ? "rgba(255, 237, 255, 0.98)" : "rgba(255, 199, 255, 0.95)");
      glow.addColorStop(0.38, projectile.maxed ? "rgba(255, 186, 255, 0.9)" : "rgba(255, 199, 255, 0.95)");
      glow.addColorStop(0.62, projectile.maxed ? "rgba(176, 120, 255, 0.72)" : "rgba(199, 120, 255, 0.6)");
      glow.addColorStop(1, "rgba(199, 120, 255, 0)");
      bctx.fillStyle = glow;
      bctx.beginPath();
      bctx.arc(projectile.x, projectile.y, orbRadius, 0, Math.PI * 2);
      bctx.fill();

      if (projectile.maxed) {
        for (let i = 0; i < 4; i += 1) {
          const angle = performance.now() * 0.004 + (Math.PI / 2) * i;
          const shardX = projectile.x + Math.cos(angle) * 18;
          const shardY = projectile.y + Math.sin(angle) * 18;
          const shardGlow = bctx.createRadialGradient(shardX, shardY, 1, shardX, shardY, 10);
          shardGlow.addColorStop(0, "rgba(255,255,255,0.96)");
          shardGlow.addColorStop(0.5, "rgba(255, 176, 255, 0.7)");
          shardGlow.addColorStop(1, "rgba(255, 176, 255, 0)");
          bctx.fillStyle = shardGlow;
          bctx.beginPath();
          bctx.arc(shardX, shardY, 10, 0, Math.PI * 2);
          bctx.fill();
        }
      }

      bctx.strokeStyle = projectile.maxed ? "rgba(255, 244, 255, 0.94)" : "rgba(255, 226, 255, 0.72)";
      bctx.lineWidth = projectile.maxed ? 3 : 2;
      bctx.beginPath();
      bctx.arc(projectile.x, projectile.y, ringRadius, 0, Math.PI * 2);
      bctx.stroke();

      bctx.fillStyle = "#fff7ff";
      bctx.beginPath();
      bctx.arc(projectile.x, projectile.y, coreRadius, 0, Math.PI * 2);
      bctx.fill();

      bctx.fillStyle = projectile.maxed ? "rgba(255, 188, 255, 0.9)" : "rgba(180, 108, 255, 0.78)";
      bctx.beginPath();
      bctx.arc(projectile.x - 2, projectile.y + 1, projectile.maxed ? 5 : 3, 0, Math.PI * 2);
      bctx.fill();
    } else if (projectile.style === "boomerang") {
      bctx.save();
      bctx.translate(projectile.x, projectile.y);
      const angle = Math.atan2(projectile.target.y - projectile.y, projectile.target.x - projectile.x);
      bctx.rotate(angle);
      bctx.strokeStyle = "rgba(146, 246, 226, 0.94)";
      bctx.lineWidth = 4;
      bctx.beginPath();
      bctx.moveTo(-10, -8);
      bctx.quadraticCurveTo(6, -12, 14, 0);
      bctx.quadraticCurveTo(6, 12, -10, 8);
      bctx.stroke();
      bctx.strokeStyle = "rgba(228, 255, 246, 0.9)";
      bctx.lineWidth = 1.6;
      bctx.beginPath();
      bctx.moveTo(-4, -4);
      bctx.quadraticCurveTo(4, 0, -4, 4);
      bctx.stroke();
      bctx.restore();
    } else if (projectile.style === "apollo-sun") {
      const flare = bctx.createRadialGradient(projectile.x, projectile.y, 2, projectile.x, projectile.y, 20);
      flare.addColorStop(0, "rgba(255,255,255,0.98)");
      flare.addColorStop(0.24, "rgba(255, 244, 161, 0.98)");
      flare.addColorStop(0.54, "rgba(255, 162, 68, 0.9)");
      flare.addColorStop(1, "rgba(255, 96, 46, 0)");
      bctx.fillStyle = flare;
      bctx.beginPath();
      bctx.arc(projectile.x, projectile.y, 20, 0, Math.PI * 2);
      bctx.fill();
    } else if (projectile.style === "nova-basic") {
      const orb = bctx.createRadialGradient(projectile.x, projectile.y, 2, projectile.x, projectile.y, 16);
      orb.addColorStop(0, "rgba(255,255,255,0.98)");
      orb.addColorStop(0.24, "rgba(193, 243, 255, 0.98)");
      orb.addColorStop(0.5, "rgba(111, 204, 255, 0.92)");
      orb.addColorStop(0.78, "rgba(72, 128, 255, 0.58)");
      orb.addColorStop(1, "rgba(72, 128, 255, 0)");
      bctx.fillStyle = orb;
      bctx.beginPath();
      bctx.arc(projectile.x, projectile.y, 16, 0, Math.PI * 2);
      bctx.fill();
      bctx.strokeStyle = "rgba(210, 247, 255, 0.88)";
      bctx.lineWidth = 2;
      bctx.beginPath();
      bctx.arc(projectile.x, projectile.y, 8, 0, Math.PI * 2);
      bctx.stroke();
    } else if (projectile.style === "nova-true-sword") {
      bctx.save();
      bctx.translate(projectile.x, projectile.y);
      const angle = Math.atan2(projectile.target.y - projectile.y, projectile.target.x - projectile.x);
      bctx.rotate(angle);
      const bladeGlow = bctx.createLinearGradient(-26, 0, 34, 0);
      bladeGlow.addColorStop(0, "rgba(118, 160, 255, 0)");
      bladeGlow.addColorStop(0.18, "rgba(118, 160, 255, 0.52)");
      bladeGlow.addColorStop(0.48, "rgba(178, 238, 255, 0.98)");
      bladeGlow.addColorStop(0.78, "rgba(110, 206, 255, 0.92)");
      bladeGlow.addColorStop(1, "rgba(118, 160, 255, 0)");
      bctx.strokeStyle = bladeGlow;
      bctx.lineWidth = 8;
      bctx.beginPath();
      bctx.moveTo(-20, 0);
      bctx.lineTo(30, 0);
      bctx.stroke();
      bctx.fillStyle = "rgba(242, 252, 255, 0.98)";
      bctx.beginPath();
      bctx.moveTo(34, 0);
      bctx.lineTo(8, -8);
      bctx.lineTo(12, 0);
      bctx.lineTo(8, 8);
      bctx.closePath();
      bctx.fill();
      bctx.fillStyle = "rgba(210, 247, 255, 0.98)";
      bctx.beginPath();
      bctx.moveTo(-8, -6);
      bctx.lineTo(10, -2);
      bctx.lineTo(10, 2);
      bctx.lineTo(-8, 6);
      bctx.closePath();
      bctx.fill();
      bctx.strokeStyle = "rgba(128, 228, 255, 0.92)";
      bctx.lineWidth = 3.5;
      bctx.beginPath();
      bctx.moveTo(-24, 0);
      bctx.lineTo(36, 0);
      bctx.stroke();
      bctx.fillStyle = "rgba(178, 240, 255, 0.92)";
      bctx.beginPath();
      bctx.arc(-10, 0, 4, 0, Math.PI * 2);
      bctx.fill();
      bctx.restore();
    } else if (projectile.style === "arrow-shot") {
      bctx.save();
      bctx.translate(projectile.x, projectile.y);
      const angle = Math.atan2(projectile.target.y - projectile.y, projectile.target.x - projectile.x);
      bctx.rotate(angle);
      bctx.strokeStyle = "rgba(232, 244, 255, 0.95)";
      bctx.lineWidth = 2;
      bctx.beginPath();
      bctx.moveTo(-10, 0);
      bctx.lineTo(10, 0);
      bctx.stroke();
      bctx.fillStyle = "rgba(198, 226, 255, 0.96)";
      bctx.beginPath();
      bctx.moveTo(12, 0);
      bctx.lineTo(5, -4);
      bctx.lineTo(5, 4);
      bctx.closePath();
      bctx.fill();
      bctx.restore();
    } else if (projectile.style === "cloud-slash") {
      const slash = bctx.createLinearGradient(projectile.x - 12, projectile.y - 12, projectile.x + 12, projectile.y + 12);
      slash.addColorStop(0, "rgba(255,255,255,0)");
      slash.addColorStop(0.5, "rgba(240, 248, 255, 0.95)");
      slash.addColorStop(1, "rgba(163, 216, 255, 0)");
      bctx.strokeStyle = slash;
      bctx.lineWidth = 5;
      bctx.beginPath();
      bctx.moveTo(projectile.x - 10, projectile.y + 10);
      bctx.lineTo(projectile.x + 10, projectile.y - 10);
      bctx.stroke();
    } else if (projectile.style === "candle-flame") {
      const flame = bctx.createRadialGradient(projectile.x, projectile.y, 1, projectile.x, projectile.y, 14);
      flame.addColorStop(0, "rgba(255, 249, 207, 0.96)");
      flame.addColorStop(0.4, "rgba(255, 191, 90, 0.88)");
      flame.addColorStop(0.75, "rgba(255, 111, 62, 0.54)");
      flame.addColorStop(1, "rgba(255, 111, 62, 0)");
      bctx.fillStyle = flame;
      bctx.beginPath();
      bctx.arc(projectile.x, projectile.y, 14, 0, Math.PI * 2);
      bctx.fill();
    } else if (projectile.style === "leaf-bolt") {
      bctx.save();
      bctx.translate(projectile.x, projectile.y);
      const angle = Math.atan2(projectile.target.y - projectile.y, projectile.target.x - projectile.x);
      bctx.rotate(angle);
      bctx.fillStyle = "rgba(157, 241, 169, 0.95)";
      bctx.beginPath();
      bctx.ellipse(0, 0, 11, 6, 0, 0, Math.PI * 2);
      bctx.fill();
      bctx.strokeStyle = "rgba(216, 255, 220, 0.82)";
      bctx.lineWidth = 1.5;
      bctx.beginPath();
      bctx.moveTo(-8, 0);
      bctx.lineTo(8, 0);
      bctx.stroke();
      bctx.restore();
    } else if (projectile.style === "silver-lance") {
      bctx.save();
      bctx.translate(projectile.x, projectile.y);
      const angle = Math.atan2(projectile.target.y - projectile.y, projectile.target.x - projectile.x);
      bctx.rotate(angle);
      bctx.strokeStyle = "rgba(246, 250, 255, 0.95)";
      bctx.lineWidth = 3;
      bctx.beginPath();
      bctx.moveTo(-12, 0);
      bctx.lineTo(10, 0);
      bctx.stroke();
      bctx.fillStyle = "rgba(210, 226, 255, 0.95)";
      bctx.beginPath();
      bctx.moveTo(14, 0);
      bctx.lineTo(5, -5);
      bctx.lineTo(5, 5);
      bctx.closePath();
      bctx.fill();
      bctx.restore();
    } else if (projectile.style === "ice-shard") {
      bctx.save();
      bctx.translate(projectile.x, projectile.y);
      const angle = Math.atan2(projectile.target.y - projectile.y, projectile.target.x - projectile.x);
      bctx.rotate(angle);
      bctx.fillStyle = "rgba(198, 244, 255, 0.95)";
      bctx.beginPath();
      bctx.moveTo(12, 0);
      bctx.lineTo(-6, -5);
      bctx.lineTo(-2, 0);
      bctx.lineTo(-6, 5);
      bctx.closePath();
      bctx.fill();
      bctx.restore();
    } else if (projectile.style === "teal-shot") {
      const shot = bctx.createRadialGradient(projectile.x, projectile.y, 1, projectile.x, projectile.y, 9);
      shot.addColorStop(0, "rgba(255,255,255,0.98)");
      shot.addColorStop(0.35, "rgba(117, 249, 220, 0.95)");
      shot.addColorStop(1, "rgba(117, 249, 220, 0)");
      bctx.fillStyle = shot;
      bctx.beginPath();
      bctx.arc(projectile.x, projectile.y, 9, 0, Math.PI * 2);
      bctx.fill();
    } else if (projectile.style === "moon-spark") {
      const moon = bctx.createRadialGradient(projectile.x, projectile.y, 1, projectile.x, projectile.y, 11);
      moon.addColorStop(0, "rgba(255,255,255,0.98)");
      moon.addColorStop(0.34, "rgba(205, 190, 255, 0.95)");
      moon.addColorStop(0.72, "rgba(157, 130, 255, 0.55)");
      moon.addColorStop(1, "rgba(157, 130, 255, 0)");
      bctx.fillStyle = moon;
      bctx.beginPath();
      bctx.arc(projectile.x, projectile.y, 11, 0, Math.PI * 2);
      bctx.fill();
    } else if (projectile.style === "arcane-orb") {
      const orb = bctx.createRadialGradient(projectile.x, projectile.y, 2, projectile.x, projectile.y, 16);
      orb.addColorStop(0, "rgba(255,255,255,0.98)");
      orb.addColorStop(0.28, "rgba(198, 158, 255, 0.95)");
      orb.addColorStop(0.64, "rgba(108, 89, 255, 0.68)");
      orb.addColorStop(1, "rgba(108, 89, 255, 0)");
      bctx.fillStyle = orb;
      bctx.beginPath();
      bctx.arc(projectile.x, projectile.y, 16, 0, Math.PI * 2);
      bctx.fill();
      bctx.strokeStyle = "rgba(239, 223, 255, 0.82)";
      bctx.lineWidth = 2;
      bctx.beginPath();
      bctx.arc(projectile.x, projectile.y, 8, 0, Math.PI * 2);
      bctx.stroke();
    } else if (projectile.style === "storm-spear") {
      bctx.save();
      bctx.translate(projectile.x, projectile.y);
      const angle = Math.atan2(projectile.target.y - projectile.y, projectile.target.x - projectile.x);
      bctx.rotate(angle);
      bctx.strokeStyle = "rgba(255, 243, 170, 0.95)";
      bctx.lineWidth = 3;
      bctx.beginPath();
      bctx.moveTo(-10, 0);
      bctx.lineTo(10, 0);
      bctx.stroke();
      bctx.strokeStyle = "rgba(255, 239, 120, 0.55)";
      bctx.lineWidth = 2;
      bctx.beginPath();
      bctx.moveTo(-2, -7);
      bctx.lineTo(3, 0);
      bctx.lineTo(-2, 7);
      bctx.stroke();
      bctx.restore();
    } else if (projectile.style === "priest-bead") {
      const bead = bctx.createRadialGradient(projectile.x, projectile.y, 1, projectile.x, projectile.y, 10);
      bead.addColorStop(0, "rgba(255,255,255,0.98)");
      bead.addColorStop(0.4, "rgba(255, 219, 159, 0.95)");
      bead.addColorStop(1, "rgba(255, 219, 159, 0)");
      bctx.fillStyle = bead;
      bctx.beginPath();
      bctx.arc(projectile.x, projectile.y, 10, 0, Math.PI * 2);
      bctx.fill();
    } else if (projectile.style === "thunder-chain") {
      const bolt = bctx.createRadialGradient(projectile.x, projectile.y, 1, projectile.x, projectile.y, 14);
      bolt.addColorStop(0, "rgba(255,255,255,0.98)");
      bolt.addColorStop(0.25, "rgba(255, 247, 142, 0.96)");
      bolt.addColorStop(0.7, "rgba(164, 133, 255, 0.7)");
      bolt.addColorStop(1, "rgba(164, 133, 255, 0)");
      bctx.fillStyle = bolt;
      bctx.beginPath();
      bctx.arc(projectile.x, projectile.y, 14, 0, Math.PI * 2);
      bctx.fill();
    } else if (projectile.style === "reaper-blade") {
      bctx.save();
      bctx.translate(projectile.x, projectile.y);
      const angle = Math.atan2(projectile.target.y - projectile.y, projectile.target.x - projectile.x);
      bctx.rotate(angle);
      bctx.fillStyle = "rgba(236, 244, 255, 0.96)";
      bctx.beginPath();
      bctx.moveTo(14, 0);
      bctx.lineTo(2, -6);
      bctx.lineTo(-12, 0);
      bctx.lineTo(2, 6);
      bctx.closePath();
      bctx.fill();
      bctx.restore();
    } else if (projectile.style === "flame-spray") {
      const flame = bctx.createRadialGradient(projectile.x, projectile.y, 1, projectile.x, projectile.y, 18);
      flame.addColorStop(0, "rgba(255, 246, 194, 0.98)");
      flame.addColorStop(0.32, "rgba(255, 178, 74, 0.96)");
      flame.addColorStop(0.62, "rgba(255, 95, 48, 0.72)");
      flame.addColorStop(1, "rgba(255, 95, 48, 0)");
      bctx.fillStyle = flame;
      bctx.beginPath();
      bctx.arc(projectile.x, projectile.y, 18, 0, Math.PI * 2);
      bctx.fill();
    } else if (projectile.style === "radiant-pierce") {
      bctx.save();
      bctx.translate(projectile.x, projectile.y);
      const angle = Math.atan2(projectile.target.y - projectile.y, projectile.target.x - projectile.x);
      bctx.rotate(angle);
      bctx.strokeStyle = "rgba(255, 241, 186, 0.96)";
      bctx.lineWidth = 3;
      bctx.beginPath();
      bctx.moveTo(-14, 0);
      bctx.lineTo(12, 0);
      bctx.stroke();
      bctx.fillStyle = "rgba(255, 250, 226, 0.96)";
      bctx.beginPath();
      bctx.moveTo(16, 0);
      bctx.lineTo(6, -5);
      bctx.lineTo(6, 5);
      bctx.closePath();
      bctx.fill();
      bctx.restore();
    } else if (projectile.style === "gear-shell") {
      const gear = bctx.createRadialGradient(projectile.x, projectile.y, 1, projectile.x, projectile.y, 12);
      gear.addColorStop(0, "rgba(255,255,255,0.98)");
      gear.addColorStop(0.28, "rgba(214, 229, 255, 0.95)");
      gear.addColorStop(0.7, "rgba(136, 179, 255, 0.62)");
      gear.addColorStop(1, "rgba(136, 179, 255, 0)");
      bctx.fillStyle = gear;
      bctx.beginPath();
      bctx.arc(projectile.x, projectile.y, 12, 0, Math.PI * 2);
      bctx.fill();
      bctx.strokeStyle = "rgba(235, 244, 255, 0.88)";
      bctx.lineWidth = 2;
      bctx.beginPath();
      bctx.arc(projectile.x, projectile.y, 6, 0, Math.PI * 2);
      bctx.stroke();
    } else if (projectile.style === "dragon-bolt") {
      const ember = bctx.createRadialGradient(projectile.x, projectile.y, 1, projectile.x, projectile.y, 13);
      ember.addColorStop(0, "rgba(255,255,255,0.96)");
      ember.addColorStop(0.3, "rgba(255, 182, 88, 0.95)");
      ember.addColorStop(0.68, "rgba(255, 106, 62, 0.7)");
      ember.addColorStop(1, "rgba(255, 106, 62, 0)");
      bctx.fillStyle = ember;
      bctx.beginPath();
      bctx.arc(projectile.x, projectile.y, 13, 0, Math.PI * 2);
      bctx.fill();
    } else if (projectile.style === "shadow-dagger") {
      bctx.save();
      bctx.translate(projectile.x, projectile.y);
      const angle = Math.atan2(projectile.target.y - projectile.y, projectile.target.x - projectile.x);
      bctx.rotate(angle);
      bctx.fillStyle = "rgba(228, 220, 255, 0.96)";
      bctx.beginPath();
      bctx.moveTo(12, 0);
      bctx.lineTo(-4, -4);
      bctx.lineTo(-10, 0);
      bctx.lineTo(-4, 4);
      bctx.closePath();
      bctx.fill();
      bctx.restore();
    } else if (projectile.style === "ranger-shot") {
      bctx.save();
      bctx.translate(projectile.x, projectile.y);
      const angle = Math.atan2(projectile.target.y - projectile.y, projectile.target.x - projectile.x);
      bctx.rotate(angle);
      bctx.strokeStyle = "rgba(226, 244, 255, 0.96)";
      bctx.lineWidth = 3;
      bctx.beginPath();
      bctx.moveTo(-16, 0);
      bctx.lineTo(14, 0);
      bctx.stroke();
      bctx.fillStyle = "rgba(180, 231, 255, 0.96)";
      bctx.beginPath();
      bctx.moveTo(18, 0);
      bctx.lineTo(7, -5);
      bctx.lineTo(7, 5);
      bctx.closePath();
      bctx.fill();
      bctx.restore();
    } else if (projectile.style === "wood-pellet") {
      bctx.fillStyle = "rgba(189, 142, 102, 0.94)";
      bctx.beginPath();
      bctx.arc(projectile.x, projectile.y, 5, 0, Math.PI * 2);
      bctx.fill();
    } else {
      bctx.fillStyle = projectile.color;
      bctx.beginPath();
      bctx.arc(projectile.x, projectile.y, 5, 0, Math.PI * 2);
      bctx.fill();
    }
  });

  floatingTexts.forEach((item) => {
    const alpha = Math.max(0, item.life / item.maxLife);
    bctx.save();
    bctx.globalAlpha = alpha;
    bctx.fillStyle = item.color;
    bctx.font = "bold 18px 'Segoe UI'";
    bctx.textAlign = "center";
    bctx.fillText(item.text, item.x, item.y);
    bctx.restore();
  });
}

function updateBattleUI() {
  document.getElementById("bMapNameVal").textContent = currentMap.name;
  const waveEl = document.getElementById("bWaveVal");
  const isBossWave = !previewMode && isBossWaveForMap(currentMap, bWave);
  waveEl.textContent = previewMode ? "연습장" : `${bWave}/${currentMap.finalWave}`;
  waveEl.style.color = isBossWave ? "#ff6b6b" : "";
  waveEl.style.textShadow = isBossWave ? "0 0 16px rgba(255, 86, 86, 0.45)" : "";
  document.getElementById("bBaseHpVal").textContent = previewMode ? "∞" : Math.max(0, bBaseHp);
  document.getElementById("bMoneyVal").textContent = previewMode ? "∞" : bMoney;
  document.getElementById("bCoinVal").textContent = coins;
  document.getElementById("bPlacedVal").textContent = `${placedUnits.length}/${MAX_TOTAL_PLACED_UNITS}`;
  const bossBar = document.getElementById("bossBar");
  const bossBarFill = document.getElementById("bossBarFill");
  const bossBarText = document.getElementById("bossBarText");
  const autoStartBtn = document.getElementById("autoStartBtn");
  const previewControlRow = document.getElementById("previewControlRow");
  const controlRow = document.getElementById("battleControlRow");
  const towerShop = document.getElementById("towerShop");

  const startButton = document.getElementById("bStartWaveBtn");
  startButton.disabled = previewMode || bRunning || bGameOver || battleCleared;
  if (previewMode) {
    startButton.textContent = "연습장 진행 중";
  } else if (!bRunning && !bGameOver && !battleCleared) {
    startButton.textContent = "\uD83C\uDF0A \uC6E8\uC774\uBE0C \uC2DC\uC791";
  } else if (bRunning) {
    startButton.textContent = "\u2694\uFE0F \uC6E8\uC774\uBE0C \uC9C4\uD589 \uC911";
  } else if (battleCleared) {
    startButton.textContent = "🏆 클리어 완료";
  } else {
    startButton.textContent = "\uD83D\uDC80 \uAC8C\uC784 \uC624\uBC84";
  }

  if (autoStartBtn) {
    autoStartBtn.textContent = autoStartWave ? "자동 시작 켜짐" : "자동 시작 꺼짐";
    autoStartBtn.classList.toggle("is-active", autoStartWave);
  }

  if (previewControlRow) {
    previewControlRow.style.display = previewMode ? "flex" : "none";
  }
  if (controlRow) {
    controlRow.style.display = previewMode ? "none" : "flex";
  }
  if (towerShop) {
    towerShop.style.display = "flex";
  }

  if (bossBar && bossBarFill && bossBarText) {
    if (previewMode) {
      bossBar.style.display = "none";
    } else if (activeBoss) {
      bossBar.style.display = "block";
      bossBarFill.style.width = `${Math.max(0, (activeBoss.hp / activeBoss.maxHp) * 100)}%`;
      bossBarFill.style.background = `linear-gradient(90deg, ${activeBoss.color || "#ff8d6c"}, #ffd26d)`;
      bossBarText.textContent = `${activeBoss.emoji} ${activeBoss.name} · HP ${Math.max(0, Math.ceil(activeBoss.hp)).toLocaleString()} / ${activeBoss.maxHp.toLocaleString()}`;
    } else {
      bossBar.style.display = "none";
    }
  }

  const skillPanel = document.getElementById("battleSkillPanel");
  const skillStatus = document.getElementById("battleSkillStatus");
  const caster = getDestroyTimeCaster();
  if (skillPanel && skillStatus) {
    if (caster) {
      const casterLevel = caster.upgradeLevel || 0;
      skillPanel.style.display = "flex";
      skillPanel.disabled = !bRunning || destroyTimeCooldown > 0 || bGameOver;
      if (bGameOver) {
        skillStatus.textContent = "\uC804\uD22C \uC885\uB8CC";
      } else if (!bRunning) {
        skillStatus.textContent = "\uC6E8\uC774\uBE0C \uC9C4\uD589 \uC911\uC5D0\uB9CC \uC0AC\uC6A9 \uAC00\uB2A5";
      } else if (destroyTimeCooldown > 0) {
        skillStatus.textContent = `\uCFE8\uD0C0\uC784 ${Math.ceil(destroyTimeCooldown)}\uCD08`;
      } else if (casterLevel >= 4) {
        skillStatus.textContent = "심연 과부하 준비 완료";
      } else {
        skillStatus.textContent = "\uD074\uB9AD \uB610\uB294 F \uD0A4\uB85C \uC0AC\uC6A9";
      }
    } else {
      skillPanel.style.display = "none";
    }
  }

  if (selectedUnit) {
    const liveSelectedUnit = placedUnits.find((unit) => unit.id === selectedUnit.id) || null;
    if (!liveSelectedUnit) {
      selectedUnit = null;
      showUnitInfo(null);
    } else {
      selectedUnit = liveSelectedUnit;
      const upgradeButton = document.getElementById("upgradeBtn");
      if (upgradeButton && upgradeButton.style.display !== "none") {
        const nextCost = getUpgradeCost(liveSelectedUnit);
        upgradeButton.disabled = nextCost === null ? true : bMoney < nextCost;
        const upgradeCostEl = document.getElementById("upgradeCost");
        if (upgradeCostEl && nextCost !== null) upgradeCostEl.textContent = `(머니 ${nextCost})`;
      }
      if (liveSelectedUnit.name === "빛의 작곡가") {
        const cooldownEl = document.querySelector("#unitInfoContent .upgradePreview div[style*='aebbd5']");
        if (cooldownEl) {
          const cd = Math.ceil(liveSelectedUnit.songChangeCooldown || 0);
          cooldownEl.textContent = `노래 변경 쿨타임 ${cd}초`;
        }
        document.querySelectorAll("[data-song-mode]").forEach((btn) => {
          btn.disabled = (liveSelectedUnit.songChangeCooldown || 0) > 0;
        });
      }
    }
  }
}

let battleLastTime = 0;
function battleLoop(timestamp) {
  const dt = Math.min((timestamp - battleLastTime) / 1000, 0.1) * battleSpeed;
  battleLastTime = timestamp;

  if (document.getElementById("battleScreen").style.display !== "none") {
    updateDestroyTime(dt);
    updateSupportTimers(dt);
    updateAreaIndicators(dt);
    if (previewMode) {
      updatePreviewDamage(dt);
    }
    if (bRunning) {
      updateEnemies(dt);
      updateUnits(dt);
      updateProjectiles(dt);
      updateFloatingTexts(dt);
      checkWaveEnd();
    } else {
      updateFloatingTexts(dt);
    }
    drawBattle();
    updateBattleUI();
  }

  requestAnimationFrame(battleLoop);
}


function lobbyLoop() {
  if (document.getElementById("lobbyScreen").style.display !== "none") {
    updateLobby();
    drawLobby();
    updateLobbyUI();
  }
  requestAnimationFrame(lobbyLoop);
}

document.addEventListener("keydown", (event) => {
  keys[event.key.toLowerCase()] = true;
  if (
    event.key.toLowerCase() === "e" &&
    document.getElementById("battleScreen").style.display !== "none" &&
    selectedUnit &&
    !draggingTower &&
    !bGameOver
  ) {
    const upgraded = applyUpgrade(selectedUnit);
    if (!upgraded) {
      const nextCost = getUpgradeCost(selectedUnit);
      showBattleMsg(nextCost === null ? "이미 최대 업그레이드입니다" : "머니가 부족합니다");
    }
    event.preventDefault();
    return;
  }
  if (event.key.toLowerCase() === "e" && nearZone && document.getElementById("lobbyScreen").style.display !== "none") {
    playUISound("toggleOn");
    if (nearZone.action === "gacha") openGacha();
    if (nearZone.action === "bag") openBag();
    if (nearZone.action === "battle") openMapSelect();
    if (nearZone.action === "codex") openCodex();
    if (nearZone.action === "code") openCodePrompt();
    if (nearZone.action === "patchNotes") openPatchNotes();
  }
});

document.addEventListener("keyup", (event) => {
  keys[event.key.toLowerCase()] = false;
});

document.getElementById("gachaBackBtn").addEventListener("click", () => {
  playUISound("toggleOff");
  clearGachaResult();
  showScreen("lobbyScreen");
});
document.getElementById("bagBackBtn").addEventListener("click", () => {
  playUISound("toggleOff");
  showScreen("lobbyScreen");
});
document.getElementById("codexBackBtn").addEventListener("click", () => {
  playUISound("toggleOff");
  showScreen("lobbyScreen");
});
document.getElementById("mapBackBtn").addEventListener("click", () => {
  playUISound("toggleOff");
  if (mapSelectView === "mode") {
    showScreen("lobbyScreen");
  } else {
    mapSelectView = "mode";
    renderBattleModeCards();
    showScreen("mapSelectScreen");
  }
});
document.getElementById("bStartWaveBtn").addEventListener("click", startWave);
document.getElementById("autoStartBtn").addEventListener("click", toggleAutoStartWave);
document.getElementById("speedBtn1").dataset.speed = "1";
document.getElementById("speedBtn15").dataset.speed = "1.5";
document.getElementById("speedBtn2").dataset.speed = "2";
document.getElementById("speedBtn1").addEventListener("click", () => setBattleSpeed(1));
document.getElementById("speedBtn15").addEventListener("click", () => setBattleSpeed(1.5));
document.getElementById("speedBtn2").addEventListener("click", () => setBattleSpeed(2));
document.getElementById("battleOverlayBackBtn").addEventListener("click", () => {
  playUISound("toggleOff");
  returnToLobby();
});
document.getElementById("previewBackBtn").addEventListener("click", () => {
  playUISound("toggleOff");
  returnToLobby();
});

normalizeContentData();
applyUIText();
renderBattleModeCards();
ensureBattleSkillUI();
refreshBattleSkillUIText();
initSettingsPanel();
setBattleSpeed(1);
showScreen("lobbyScreen");
updateLobbyUI();
updateGachaUI();
updateBattleUI();
requestAnimationFrame(lobbyLoop);
requestAnimationFrame(battleLoop);
