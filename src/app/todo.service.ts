import { Todo } from './Todo';

export class TodoService {
    private todos: Todo[] = [
        { task: 'Prepare the Invoice', time: 'Yesterday', delivery: '09.00 Am', status: 'pending' },
        { task: 'Code furiously', time: 'Yesterday', delivery: '09.00 Am', status: 'pending' },
        { task: 'Do user study', time: 'Yesterday', delivery: '09.00 Am', status: 'pending' },
        { task: 'Write paper', time: 'Yesterday', delivery: '09.00 Am', status: 'pending' },
        { task: 'Have a life!!', time: 'Yesterday', delivery: '09.00 Am', status: 'pending' },
        { task: 'Responsive design', time: 'Yesterday', delivery: '09.00 Am', status: 'pending' },
        { task: 'Upload to Git', time: 'Yesterday', delivery: '09.00 Am', status: 'pending' },
    ];

    getTodos() {
        return this.todos;
    }
}
