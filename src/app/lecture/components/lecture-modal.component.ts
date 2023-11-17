import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Lecture } from '../models/lecture.model';

@Component({
  selector: 'app-lecture-modal',
  templateUrl: './lecture-modal.component.html',
  styleUrls: ['./lecture-modal.component.scss']
})
export class LectureModalComponent implements OnInit {
  @Input() lecture: Lecture | null;
  @Output() close = new EventEmitter<null>();

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
  }

  getVideo(src: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }

  onModalClose() {
    this.close.emit(null);
  }
}
