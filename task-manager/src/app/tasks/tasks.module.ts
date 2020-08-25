import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule } from  '@angular/forms';

import { TaskService} from './shared';
import { ListTasksComponent } from './list';
import { AddTaskComponent } from './add';

@NgModule({
  declarations: [ListTasksComponent, AddTaskComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    TaskService
  ]
})
export class TasksModule { }
