import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { CreateTaskComponent } from "./create-task/create-task.component";
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, CreateTaskComponent, CreateTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string; 
  @Input({required: true}) name!: string;
  isAddingTask: boolean = false;

  constructor(private tasksService: TasksService) {
  } 

  get selectedUserTasks() {
    return this.tasksService.getUsersTasks(this.userId);
  }

  onStartAddTask() {
    console.log(`Add Task Button is clicked`);
    this.isAddingTask = true;
  }

  onCloseTask() {
    this.isAddingTask = false;
  }

}
