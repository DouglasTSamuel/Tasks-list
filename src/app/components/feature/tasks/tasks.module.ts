import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [TasksListComponent, TaskComponent],
  imports: [CommonModule],
  exports: [TasksListComponent, TaskComponent],
})
export class TasksModule {}
