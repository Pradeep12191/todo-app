import { Todo } from './Todo';

export class TodoService {
    private todos: Todo[] = [
        { task: 'Prepare the Invoice', createdDate: 'Tue Jul 30 2019"', delivery: '09.00 Am', status: 'pending' },
        { task: 'Code furiously', createdDate: 'Mon Jul 29 2019"', delivery: '09.00 Am', status: 'pending' },
        { task: 'Do user study', createdDate: 'Sun Jul 28 2019"', delivery: '09.00 Am', status: 'pending' },
        { task: 'Write paper', createdDate: 'Sat Jul 27 2019"', delivery: '09.00 Am', status: 'pending' },
        { task: 'Have a life!!', createdDate: 'Fri Jul 26 2019"', delivery: '09.00 Am', status: 'pending' },
        { task: 'Responsive design', createdDate: 'Thu Jul 25 2019"', delivery: '09.00 Am', status: 'pending' },
        { task: 'Upload to Git', createdDate: 'Wed Jul 24 2019"', delivery: '09.00 Am', status: 'pending' },
    ];

    getTodos() {
        return this.todos;
    }

    addTodo(todo: Todo) {
        this.todos.push(todo);
    }

    deleteTodo(index) {
        this.todos.splice(index, 1)
    }
}
