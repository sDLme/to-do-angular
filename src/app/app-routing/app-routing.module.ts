import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateTaskComponent } from '../create-task/create-task.component';
import {TasksListComponent} from '../tasks-list/tasks-list.component';

const routes: Routes = [
  {
    path: '',
    component: TasksListComponent,
  }, {
    path: 'create',
    component:  CreateTaskComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
