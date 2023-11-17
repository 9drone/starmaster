export interface Teacher {
  id: string;
  lectures: Lecture[];
}

export interface Lecture {
  id: string;
  title: string;
  src: string;
  date?: Date;
  labels: string[];
}

export interface Label {
  id: string;
  name: string;
  type: string;
}

export const TYPE = {
  RATING: "rating",
  RACE: "race",
  ENEMY_RACE: "enemyrace",
  BUILD: "build",
  ENEMY_BUILD: "enemybuild",
  MAP: "map"
};

export const LABEL_CLASS_MAP = {
  [TYPE.RATING]: "label-warning",
  [TYPE.RACE]: "label-success",
  [TYPE.ENEMY_RACE]: "label-danger",
  [TYPE.BUILD]: "label-success",
  [TYPE.ENEMY_BUILD]: "label-danger",
  [TYPE.MAP]: "label-info",
};
