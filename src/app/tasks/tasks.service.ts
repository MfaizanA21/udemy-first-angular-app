import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService {

    private tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31'
        },
        {
          id: 't2',
          userId: 'u3',
          title: 'Master .Net',
          summary: 'Learn all the basic and advanced features of .Net & how to apply them.',
          dueDate: '2025-12-31'
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Master SQL',
          summary: 'Learn all the basic and advanced features of SQL & how to apply them.',
          dueDate: '2025-12-31'
        }
    ];
    constructor() {
      const tasks = localStorage.getItem('tasks');

      if(tasks) {
        this.tasks = JSON.parse(tasks);
      }
    }
    getUsersTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId)
    }

    addTasks(taskData: NewTaskData, userId: string) {
        this.tasks.push({
            userId: userId,
            id: new Date().getTime().toString(),
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
        })
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
    }

    private saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}