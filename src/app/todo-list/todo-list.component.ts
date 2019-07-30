import { Component, Input } from '@angular/core';
import { Todo } from '../Todo';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
    @Input() todos: Todo[];
    sortDirection;
    sortHeader;
    statusSortOrder = ['completed', 'doing', 'pending']

    headers = [
        { name: 'TIME', sortDirection: '', labelFlex: 65 },
        { name: 'DELIVERY', sortDirection: '', labelFlex: 75 },
        { name: 'STATUS', sortDirection: '', labelFlex: 65 },
    ]

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.todos, event.previousIndex, event.currentIndex)
    }

    sort(header) {
        if (this.sortHeader) {
            if (this.sortHeader == header) {
                header.sortDirection = header.sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                this.sortHeader.sortDirection = ''
                header.sortDirection = 'asc'
            }
        } else {
            header.sortDirection = 'asc'
        }

        if (header.sortDirection === 'asc') {
            if (header.name === 'TIME') {
                this.todos.sort((a, b) => {
                    const date1 = +new Date(a.createdDate);
                    const date2 = +new Date(b.createdDate);
                    return date1 - date2;
                })
            }
            if (header.name === 'STATUS') {
                this.todos.sort((a, b) => {
                    return this.statusSortOrder.indexOf(a.status) - this.statusSortOrder.indexOf(b.status)
                })
            }
        } else {
            if (header.name === 'TIME') {
                this.todos.sort((a, b) => {
                    const date1 = +new Date(a.createdDate);
                    const date2 = +new Date(b.createdDate);
                    return date2 - date1;
                })
            }
            if (header.name === 'STATUS') {
                this.todos.sort((a, b) => {
                    return this.statusSortOrder.indexOf(b.status) - this.statusSortOrder.indexOf(a.status)
                })
            }
        }

        this.sortHeader = header;
    }
}
