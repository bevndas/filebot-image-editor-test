import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImageTransformTestComponent} from './image-transform-test/image-transform-test.component';

const routes: Routes = [
  {
    path: 'test',
    component: ImageTransformTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
