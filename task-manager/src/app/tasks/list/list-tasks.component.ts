import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  tasks: Task[]

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.listAll();
  } 

  listAll():Task[]{
    return this.taskService.getAll();
  }

  remove($event:Event, task:Task):void{
    $event.preventDefault();
    if(confirm('Do you want to remove the task "' +  task.name +'"?')){
      this.taskService.delete(task.id);
      this.tasks = this.listAll();
    }
  }
  
}
