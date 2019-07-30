import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../Todo';

@Component({
    selector: 'todo-summary',
    templateUrl: './todo-summary.component.html',
    styleUrls: ['./todo-summary.component.scss']
})
export class TodoSummaryComponent {
    todos: Todo[];
    constructor(
        private todoService: TodoService
    ) {
        this.todos = this.todoService.getTodos()
    }

    filterTodos(status){
        return this.todos.filter((todo) => todo.status === status)
    }
}