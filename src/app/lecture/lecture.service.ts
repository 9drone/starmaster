import { Injectable } from '@angular/core';
import { LABELS, ZELOT } from '../../const/lecture';
import { Label, TYPE } from './models/lecture.model';

@Injectable()
export class LectureService {
  activeFilter: string[] = [];

  constructor(
  ) {}

  loadLectures() {
    if (this.activeFilter.length) {
      return ZELOT.lectures.filter((lecture) => {
        return this.activeFilter.every((filter) => {
          return lecture.labels.includes(filter);
        });
      });
    }
    return ZELOT.lectures;
  }

  loadLabels() {
    return LABELS;
  }

  loadFilters() {
    return LABELS.reduce((result: string[], label) => {
      if ([TYPE.ENEMY_RACE, TYPE.BUILD, TYPE.ENEMY_BUILD].includes(label.type)) {
        result.push(label.id);
      }
      return result;
    }, []);
  }

  loadLabelsMap() {
    return LABELS.reduce((result: { [key: string]: Label }, label) => {
      result[label.id] = label;
      return result;
    }, {});
  }
}
