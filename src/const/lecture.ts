import { Label, Lecture, Teacher, TYPE } from "../app/lecture/models/lecture.model";

export const ZELOT_LECTURES: Lecture[] = [
  {
    id: "1",
    title: "토스전 973 vs 게이트 더블 강의",
    src: "https://www.youtube.com/embed/DlmYk_PTNzQ?start=1&end=450",
    date: new Date(2023, 3, 27),
    labels: ["1600", "Z", "vsP", "overpool", "vsGateway", "973", "hydraBreak", "polypoid"],
  },
  {
    id: "2",
    title: "테란전 3가스 취소 후 뮤탈올인 강의",
    src: "https://www.youtube.com/embed/DlmYk_PTNzQ?start=533&end=1095",
    date: new Date(2023, 3, 27),
    labels: ["1900", "Z", "vsT", "11hatchery", "vsBarrack", "cancel3hatchery", "mutalAllin", "vermeer"],
  },
  {
    id: "3",
    title: "토스전 3해처리 저글링 올인 vs 게이트 더블 강의",
    src: "https://www.youtube.com/embed/DlmYk_PTNzQ?start=1183&end=1095",
    date: new Date(2023, 3, 27),
    labels: ["1500", "Z", "vsP", "overpool", "vsGateway", "3hatcheryZergling", "butter"],
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
    id: "1900",
    name: "1900++",
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
    id: "973",
    name: "973",
    type: TYPE.BUILD,
  },
  {
    id: "overpool",
    name: "오버풀",
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
    id: "cancel3hatchery",
    name: "3멀티 취소",
    type: TYPE.BUILD,
  },
  {
    id: "vsForge",
    name: "vs 포지 더블",
    type: TYPE.ENEMY_BUILD,
  },
  {
    id: "vsGateway",
    name: "vs 선 게이트",
    type: TYPE.ENEMY_BUILD,
  },
  {
    id: "vsBarrack",
    name: "vs 배럭 더블",
    type: TYPE.ENEMY_BUILD,
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
];
