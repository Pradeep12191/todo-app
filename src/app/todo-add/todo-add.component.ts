import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
    selector: 'todo-add',
    templateUrl: './todo-add.component.html',
    styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {
    todoForm: FormGroup

    constructor(
        private fb: FormBuilder,
        private todoService: TodoService
    ) {
        this.todoForm = this.fb.group({
            task: [null, Validators.required],
            delivery: [null, Validators.required]
        })
    }

    addTodo() {
        this.todoService.addTodo({
            task: this.todoForm.value.task,
            delivery: this.todoForm.value.delivery,
            createdDate: new Date().toDateString(),
            status: 'pending'
        })
        this.todoForm.reset()
    }
}