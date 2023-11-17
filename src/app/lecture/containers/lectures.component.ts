import { Component, OnInit } from '@angular/core';
import { Lecture } from '../models/lecture.model';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.scss']
})
export class LecturesComponent implements OnInit {
  selected: Lecture | null;

  constructor(
  ) { }

  ngOnInit() {
  }

  selectLecture(lecture: Lecture) {
    this.selected = lecture;
  }

  closeLecture() {
    this.selected = null;
  }
}
