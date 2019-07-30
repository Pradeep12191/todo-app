export interface Todo {
    task: string;
    time: string;
    delivery: string;
    status: 'pending' | 'doing' | 'completed';
}
