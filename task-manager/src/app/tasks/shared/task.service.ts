import { Injectable } from '@angular/core';
import { Task } from './';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }


  getAll():Task[]{
    const tasks = localStorage['tasks'];
    return tasks ? JSON.parse(tasks) : []
  }

  add(task:Task):void{
    const tasks = this.getAll();
    task.id = new Date().getTime();
    tasks.push(task);
    localStorage['tasks'] = JSON.stringify(tasks)
  }
} 
