import { Component, OnInit } from '@angular/core';
import { TasksService } from "../../services/tasks.service";
import { Router } from "@angular/router";
import { Task } from "../../models/task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  selectedTask: Task = new Task();

  edit: boolean = false;

  constructor(private tasksService: TasksService, private router: Router) { }

  ngOnInit(): void {
    this.getTasks();
  }

  clear() {
    this.selectedTask = new Task();
    this.edit = false;
  }

  getTasks() {
    this.tasksService.getTasks().subscribe(
      res => {
        this.tasks = res;        
      },
      err => {
        this.router.navigate(['/']);
      }
    );
  }

  addTask() {
    this.tasksService.createTask(this.selectedTask).subscribe(
      res => {
        this.getTasks();
        this.selectedTask = new Task();
      },
      err => console.log(err)
    );
  }

  editTask(task: Task) {
    this.selectedTask = task;
    this.edit = true;
  }

  updateTask() {
    this.tasksService.updateTask(this.selectedTask).subscribe(
      res => {
        this.getTasks();
        this.selectedTask = new Task();
        this.edit = false;
      },
      err => console.log(err)
    );
  }

  deleteTask() {
    this.tasksService.deleteTask(this.selectedTask._id).subscribe(
      res => {
        this.getTasks();
        this.selectedTask = new Task();
        this.edit = false;
      },
      err => console.log(err)
    )
  }

  completeTask() {
    this.selectedTask.status = 'COMPLETED';
    this.tasksService.updateTask(this.selectedTask).subscribe(
      res => {
        this.getTasks();
      },
      err => console.log(err) 
    )  
  }
}
