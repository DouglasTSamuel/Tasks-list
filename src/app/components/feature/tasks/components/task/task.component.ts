import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task = {
    id: 0,
    description: '',
    completed: false,
  };
  constructor() {}

  ngOnInit(): void {}

  toogleTask(): void {
    this.task.completed = !this.task.completed;
  }
}
