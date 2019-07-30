import { Component, Input } from '@angular/core';
import { Todo } from '../Todo';

@Component({
    selector: 'todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
    @Input() todo: Todo;
}
