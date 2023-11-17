import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { LectureService } from './lecture.service';
import { RouterModule } from '@angular/router';
import { LecturesComponent } from './containers/lectures.component';
import { LectureListComponent } from './components/lecture-list.component';
import { LectureModalComponent } from './components/lecture-modal.component';

@NgModule({
  declarations: [
    LecturesComponent,
    LectureListComponent,
    LectureModalComponent,
  ],
  imports: [CommonModule, ClarityModule, RouterModule],
  providers: [LectureService],
  exports: [],
})
export class LectureModule {}
