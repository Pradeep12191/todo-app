import { Component, Input } from '@angular/core';
import { Todo } from '../Todo';
import { TodoService } from '../todo.service';

@Component({
    selector: 'todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
    @Input() todo: Todo;
    @Input() todoIndex;

    statusList = [
        { id: 'pending', value: 'Pending', color: 'red' },
        { id: 'doing', value: 'Doing', color: 'orange' },
        { id: 'completed', value: 'Completed', color: 'green' },
    ]

    constructor(
        private todoService: TodoService
    ){

    }

    onStatusClick(status) {
        this.todo.status = status.id;
    }

    getStatus(statusId) {
        return this.statusList.find(status => status.id === statusId)
    }
    deleteTodo() {
        this.todoService.deleteTodo(this.todoIndex)
    }
}
