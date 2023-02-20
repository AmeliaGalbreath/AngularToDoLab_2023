import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IToDo } from './interfaces/todo';
import { TaskRepositoryService } from './todo-list/task-repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

tasks: IToDo[] = [];

constructor(private todoListRepo: TaskRepositoryService) { }

ngOnInit(): void {
  this.tasks = this.todoListRepo.getTasks();
}

addTask(form:NgForm){
  console.log('submitted form:',form.form);
  const taskTitle = form.form.value.task;
  const newTask = {task: taskTitle, completed: false};
  console.log('new task object:',newTask)
  this.tasks.push(newTask);
}

completeTask(index: number){
  this.tasks[index].completed = true;
}


}
