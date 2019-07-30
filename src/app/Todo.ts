export interface Todo {
    task: string;
    createdDate: string;
    delivery: string;
    status: 'pending' | 'doing' | 'completed';
}
