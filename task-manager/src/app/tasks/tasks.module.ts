import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule } from  '@angular/forms';

import { TaskService, TaskDoneDirective} from './shared';
import { ListTasksComponent } from './list';
import { AddTaskComponent } from './add';
import { EditTaskComponent } from './edit';

@NgModule({
  declarations: [ListTasksComponent, AddTaskComponent, EditTaskComponent, TaskDoneDirective],
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
