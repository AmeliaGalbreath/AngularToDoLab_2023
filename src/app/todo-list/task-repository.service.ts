import { Injectable } from '@angular/core';
import { IToDo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TaskRepositoryService {

  constructor() { }

  getTasks(): IToDo[] {
    return [
      {task: "Let dog out",completed: true},
      {task: "Brush teeth",completed: true},
      {task: "Shower",completed: false},
      {task: "Feed pets",completed: true},
      {task: "Make breakfast",completed: false},
      {task: "Do laundry",completed: false},
    ]
  }

}
