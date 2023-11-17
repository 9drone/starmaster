import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { LectureService } from '../lecture.service';
import { Label, Lecture, LABEL_CLASS_MAP } from '../models/lecture.model';

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrls: ['./lecture-list.component.scss'],
})
export class LectureListComponent implements OnInit {
  @Output() select = new EventEmitter<Lecture>();
  lectureList: Lecture[] = [];
  labelsMap: { [key: string]: Label };
  labelClassMap = LABEL_CLASS_MAP;
  filters: string[];

  constructor(public lectureService: LectureService) {}

  ngOnInit() {
    this.lectureList = this.lectureService.loadLectures();
    this.labelsMap = this.lectureService.loadLabelsMap();
    this.filters = this.lectureService.loadFilters();
  }

  selectLecture(lecture: Lecture) {
    this.select.emit(lecture);
  }

  toggleFilter(filter: string) {
    if (this.lectureService.activeFilter.includes(filter)) {
      this.lectureService.activeFilter.splice(this.lectureService.activeFilter.indexOf(filter), 1);
    } else {
      this.lectureService.activeFilter.push(filter);
    }
    this.lectureList = this.lectureService.loadLectures();
  }
}
