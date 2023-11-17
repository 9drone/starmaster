import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LecturesComponent } from './lecture/containers/lectures.component';

const routes: Routes = [
  {
    path: 'main',
    component: LecturesComponent,
    pathMatch: 'full',
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
