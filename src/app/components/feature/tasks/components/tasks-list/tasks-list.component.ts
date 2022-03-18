import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  tasks: Array<Task> = [
    { id: 1, description: 'Criar um projeto básico', completed: false },
    {
      id: 2,
      description: 'Colocar o lixo para fora até as 19h',
      completed: false,
    },
    { id: 3, description: 'Fazer o jantar até as 22h', completed: false },
    {
      id: 4,
      description: 'Reunião de alinhamento dia 18/07 as 14h',
      completed: false,
    },
    {
      id: 5,
      description: 'Reunião de alinhamento projeto bradesco 18/07 as 16h',
      completed: false,
    },
    { id: 6, description: 'Criar conteúdo da aula', completed: false },
  ];

  filteredTask:Array<Task> = this.tasks;

  filterTask(event: any) {
    const searchValue = event.target.value;
    if (searchValue.length > 0) {
      return (this.filteredTask = this.tasks.filter(
        (item) =>
          item.description.toUpperCase().search(searchValue.toUpperCase()) > -1
      ));
    }
    return (this.filteredTask = this.tasks);
  }

  constructor() {}

  ngOnInit(): void {}
}
