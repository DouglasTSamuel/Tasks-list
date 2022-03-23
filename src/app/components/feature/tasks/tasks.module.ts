import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskComponent } from './components/task/task.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TasksListComponent,
    TaskComponent,
    TasksPageComponent
    ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TasksPageComponent
  ],
})
export class TasksModule {}
