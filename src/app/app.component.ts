import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './Todo';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todos: Todo[];

  constructor(
    private todoService: TodoService
  ) {
    this.todos = this.todoService.getTodos();
  }

}
