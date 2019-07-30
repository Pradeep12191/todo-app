import { Component, Input } from '@angular/core';
import { Todo } from '../Todo';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
    @Input() todos: Todo[];
}
