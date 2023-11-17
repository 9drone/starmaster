import { Label, Lecture, Teacher, TYPE } from "../app/lecture/models/lecture.model";

export const ZELOT_LECTURES: Lecture[] = [
  {
    id: "1",
    title: "토스전 973 vs 게이트 더블 강의",
    src: "https://www.youtube.com/embed/DlmYk_PTNzQ?start=1&end=450",
    date: new Date(2023, 2, 27),
    labels: ["1600", "Z", "vsP", "overpool", "vsGateway", "973", "hydraBreak", "polypoid"],
  },
  {
    id: "2",
    title: "테란전 3가스 취소 후 뮤탈올인 강의",
    src: "https://www.youtube.com/embed/DlmYk_PTNzQ?start=533&end=1095",
    date: new Date(2023, 2, 27),
    labels: ["1900", "Z", "vsT", "11hatchery", "vsBarrack", "cancel3hatchery", "mutalAllin", "vermeer"],
  },
  {
    id: "3",
    title: "토스전 3해처리 저글링 올인 vs 게이트 더블 강의",
    src: "https://www.youtube.com/embed/DlmYk_PTNzQ?start=1183&end=1095",
    date: new Date(2023, 2, 27),
    labels: ["1500", "Z", "vsP", "overpool", "vsGateway", "3hatcheryZergling", "butter"],
  },
  {
    id: "4",
    title: "토스전 3해처리 저글링 올인 vs 뛰는 게이트 더블 강의",
    src: "https://www.youtube.com/embed/DlmYk_PTNzQ?start=1534&end=1894",
    date: new Date(2023, 2, 27),
    labels: ["2000", "Z", "vsP", "overpool", "vsGateway", "zealotattack", "3hatcheryZergling", "butter"],
  },
  {
    id: "5",
    title: "테란전 럴커 올인 vs 큰입막 배럭 더블 이후 메카닉 강의",
    src: "https://www.youtube.com/embed/DlmYk_PTNzQ?start=1898&end=2461",
    date: new Date(2023, 2, 27),
    labels: ["1800", "Z", "vsT", "11hatchery", "vsBarrack", "barrackblocking", "mechanic", "lurkerAllin", "vermeer"],
  },
  {
    id: "6",
    title: "테란전 가드라 vs 배럭 더블 강의",
    src: "https://www.youtube.com/embed/DlmYk_PTNzQ?start=2474&end=3142",
    date: new Date(2023, 2, 27),
    labels: ["1900", "Z", "vsT", "11hatchery", "vsBarrack", "guardianhydra", "neosylphid"],
  },
  {
    id: "7",
    title: "테란전 가드라 vs 배럭 더블 강의",
    src: "https://www.youtube.com/embed/DlmYk_PTNzQ?start=3158&end=3810",
    date: new Date(2023, 2, 27),
    labels: ["1900", "Z", "vsT", "11hatchery", "vsBarrack", "guardianhydra", "vermeer"],
  },
  {
    id: "8",
    title: "테란전 럴커 올인 vs 큰입막 배럭 더블 이후 메카닉 강의",
    src: "https://www.youtube.com/embed/DlmYk_PTNzQ?start=3844&end=4318",
    date: new Date(2023, 2, 27),
    labels: ["1700", "Z", "vsT", "11hatchery", "vsBarrack", "barrackblocking", "mechanic", "lurkerAllin", "polypoid"],
  },
  {
    id: "9",
    title: "토스전 3해처리 저글링 올인 vs 뛰는 게이트 더블 강의",
    src: "https://www.youtube.com/embed/DlmYk_PTNzQ?start=4342&end=4680",
    date: new Date(2023, 2, 27),
    labels: ["2000", "Z", "vsP", "overpool", "vsGateway", "zealotattack", "3hatcheryZergling", "neosylphid"],
  },
  {
    id: "10",
    title: "토스전 3해처리 저글링 올인 vs 본진 2게이트 강의",
    src: "https://www.youtube.com/embed/DlmYk_PTNzQ?start=4708&end=5050",
    date: new Date(2023, 2, 27),
    labels: ["2000", "Z", "vsP", "overpool", "vsBase2Gateway", "3hatcheryZergling", "butter"],
  },
  {
    id: "11",
    title: "테란전 뮤탈 히드라 vs 111 강의 (패배)",
    src: "https://www.youtube.com/embed/DlmYk_PTNzQ?start=5084&end=6050",
    date: new Date(2023, 2, 27),
    labels: ["2100", "Z", "vsT", "11hatchery", "vs111", "mutalhydraAllin", "hydralurker", "vermeer"],
  },
  {
    id: "12",
    title: "저그전 오버풀 드론 가스 vs 가로세로 11앞마당 강의",
    src: "https://www.youtube.com/embed/DlmYk_PTNzQ?start=6077&end=6496",
    date: new Date(2023, 2, 27),
    labels: ["Z", "vsZ", "overpooldgdd", "vs11Hatchery", "vermeer"],
  },
  {
    id: "13",
    title: "토스전 3해처리 저글링 올인 vs 게이트 더블 강의",
    src: "https://www.youtube.com/embed/DlmYk_PTNzQ?start=6518&end=6873",
    date: new Date(2023, 2, 27),
    labels: ["1900", "Z", "vsP", "overpool", "vsGateway", "3hatcheryZergling", "butter"],
  },
  {
    id: "14",
    title: "저그전 오버풀 드론 가스 vs 본진 투해처리 강의",
    src: "https://www.youtube.com/embed/DlmYk_PTNzQ?start=6903&end=7392",
    date: new Date(2023, 2, 27),
    labels: ["1900", "Z", "vsZ", "overpooldgdd", "vsBase2Hatchery", "butter"],
  },
  {
    id: "15",
    title: "저그전 오버풀 드론 가스 vs 9발업 강의",
    src: "https://www.youtube.com/embed/DlmYk_PTNzQ?start=7414&end=7877",
    date: new Date(2023, 2, 27),
    labels: ["2100", "Z", "vsZ", "overpooldgdd", "vs9PoolSpeed", "vermeer"],
  },
  {
    id: "16",
    title: "테란전 뮤링 올인 vs 팩토리 더블 강의",
    src: "https://www.youtube.com/embed/DlmYk_PTNzQ?start=7889&end=8450",
    date: new Date(2023, 2, 27),
    labels: ["2000", "Z", "vsT", "11hatchery", "vsFactory", "mechanic", "mutallingAllin", "vermeer"],
  },
  {
    id: "17",
    title: "저그전 오버풀 드론 가스 저글링 뚫기 vs 오버풀 강의",
    src: "https://www.youtube.com/embed/DlmYk_PTNzQ?start=8483&end=8774",
    date: new Date(2023, 2, 27),
    labels: ["2000", "Z", "vsZ", "overpooldgdd", "vsOverpool", "zerglingBreak", "vermeer"],
  },
  {
    id: "18",
    title: "토스전 저글링 올인 vs 원서치로 본 선게이트 강의",
    src: "https://www.youtube.com/embed/DlmYk_PTNzQ?start=8793&end=9113",
    date: new Date(2023, 2, 27),
    labels: ["2000", "Z", "vsP", "overpool", "vsOnesearchGateway", "zerglingBreak", "neosylphid"],
  },
  {
    id: "19",
    title: "저그전 오버풀 드론 가스 vs 대각 11앞마당 강의",
    src: "https://www.youtube.com/embed/DlmYk_PTNzQ?start=9148&end=9614",
    date: new Date(2023, 2, 27),
    labels: ["1800", "Z", "vsZ", "overpooldgdd", "vs11Hatchery", "polypoid"],
  },
  {
    id: "20",
    title: "저그전 오버풀 드론 가스 vs 선가스 강의",
    src: "https://www.youtube.com/embed/DlmYk_PTNzQ?start=9628&end=10057",
    date: new Date(2023, 2, 27),
    labels: ["2100", "Z", "vsZ", "overpooldgdd", "vsGas", "butter"],
  },
];

export const ZELOT: Teacher = {
  id: "zelot",
  banner: "assets/images/zelot.jpg",
  lectures: ZELOT_LECTURES,
}

export const LABELS: Label[] = [
  {
    id: "1500",
    name: "1500++",
    type: TYPE.RATING,
  },
  {
    id: "1600",
    name: "1600++",
    type: TYPE.RATING,
  },
  {
    id: "1700",
    name: "1700++",
    type: TYPE.RATING,
  },
  {
    id: "1800",
    name: "1800++",
    type: TYPE.RATING,
  },
  {
    id: "1900",
    name: "1900++",
    type: TYPE.RATING,
  },
  {
    id: "2000",
    name: "2000++",
    type: TYPE.RATING,
  },
  {
    id: "2100",
    name: "2100++",
    type: TYPE.RATING,
  },
  {
    id: "Z",
    name: "저그",
    type: TYPE.RACE,
  },
  {
    id: "T",
    name: "테란",
    type: TYPE.RACE,
  },
  {
    id: "P",
    name: "프로토스",
    type: TYPE.RACE,
  },
  {
    id: "vsZ",
    name: "vs 저그",
    type: TYPE.ENEMY_RACE,
  },
  {
    id: "vsT",
    name: "vs 테란",
    type: TYPE.ENEMY_RACE,
  },
  {
    id: "vsP",
    name: "vs 프로토스",
    type: TYPE.ENEMY_RACE,
  },
  {
    id: "vsForge",
    name: "vs 포지 더블",
    type: TYPE.ENEMY_BUILD,
  },
  {
    id: "vsGateway",
    name: "vs 선게이트",
    type: TYPE.ENEMY_BUILD,
  },
  {
    id: "vsOnesearchGateway",
    name: "vs 원서치로 본 선게이트",
    type: TYPE.ENEMY_BUILD,
  },
  {
    id: "vsBase2Gateway",
    name: "vs 본진 2게이트",
    type: TYPE.ENEMY_BUILD,
  },
  {
    id: "zealotattack",
    name: "뛰는 질럿",
    type: TYPE.ENEMY_BUILD,
  },
  {
    id: "vsBarrack",
    name: "vs 배럭 더블",
    type: TYPE.ENEMY_BUILD,
  },
  {
    id: "vsFactory",
    name: "vs 팩토리 더블",
    type: TYPE.ENEMY_BUILD,
  },
  {
    id: "vs111",
    name: "vs 111",
    type: TYPE.ENEMY_BUILD,
  },
  {
    id: "barrackblocking",
    name: "큰입구 막기",
    type: TYPE.ENEMY_BUILD,
  },
  {
    id: "mechanic",
    name: "메카닉",
    type: TYPE.ENEMY_BUILD,
  },
  {
    id: "vsGas",
    name: "vs 선가스",
    type: TYPE.ENEMY_BUILD,
  },
  {
    id: "vs11Hatchery",
    name: "vs 11앞마당",
    type: TYPE.ENEMY_BUILD,
  },
  {
    id: "vsOverpool",
    name: "vs 오버풀",
    type: TYPE.ENEMY_BUILD,
  },
  {
    id: "vs9PoolSpeed",
    name: "vs 9드론 발업",
    type: TYPE.ENEMY_BUILD,
  },
  {
    id: "vsBase2Hatchery",
    name: "vs 본진 2해처리",
    type: TYPE.ENEMY_BUILD,
  },
  {
    id: "973",
    name: "973",
    type: TYPE.BUILD,
  },
  {
    id: "guardianhydra",
    name: "가드라",
    type: TYPE.BUILD,
  },
  {
    id: "hydralurker",
    name: "히드라 럴커",
    type: TYPE.BUILD,
  },
  {
    id: "overpool",
    name: "오버풀",
    type: TYPE.BUILD,
  },
  {
    id: "overpooldgdd",
    name: "오버풀 드론 가스",
    type: TYPE.BUILD,
  },
  {
    id: "11hatchery",
    name: "11앞",
    type: TYPE.BUILD,
  },
  {
    id: "3hatcheryZergling",
    name: "3해처리 저글링 올인",
    type: TYPE.BUILD,
  },
  {
    id: "zerglingBreak",
    name: "저글링 뚫기",
    type: TYPE.BUILD,
  },
  {
    id: "hydraBreak",
    name: "히드라 뚫기",
    type: TYPE.BUILD,
  },
  {
    id: "mutalAllin",
    name: "뮤탈리스크 올인",
    type: TYPE.BUILD,
  },
  {
    id: "lurkerAllin",
    name: "럴커 올인",
    type: TYPE.BUILD,
  },
  {
    id: "mutallingAllin",
    name: "저글링 뮤탈 올인",
    type: TYPE.BUILD,
  },
  {
    id: "mutalhydraAllin",
    name: "뮤탈 히드라 올인",
    type: TYPE.BUILD,
  },
  {
    id: "cancel3hatchery",
    name: "3멀티 취소",
    type: TYPE.BUILD,
  },
  {
    id: "polypoid",
    name: "폴리포이드",
    type: TYPE.MAP,
  },
  {
    id: "vermeer",
    name: "버미어",
    type: TYPE.MAP,
  },
  {
    id: "butter",
    name: "버터",
    type: TYPE.MAP,
  },
  {
    id: "neosylphid",
    name: "네오 실피드",
    type: TYPE.MAP,
  },
];
