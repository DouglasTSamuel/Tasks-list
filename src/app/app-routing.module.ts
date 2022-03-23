import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/feature/login/login-page/login-page.component';
import { RegisterPageComponent } from './components/feature/login/register-page/register-page.component';
import { TasksListComponent } from './components/feature/tasks/components/tasks-list/tasks-list.component';
import { TasksModule } from './components/feature/tasks/tasks.module';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'tasks', component: TasksListComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    TasksModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
