import { writable } from 'svelte/store';

export interface ITodoItem {
	id: number;
	name: string;
	done: boolean;
}

export const todoList = writable<ITodoItem[]>([
	{
		id: 1,
		name: 'Walk the dog',
		done: true
	},
	{
		id: 2,
		name: 'Update my resume',
		done: false
	},
	{
		id: 3,
		name: 'Clean my room',
		done: false
	}
]);

export function addTodo(name: string) {
	const newTodo = { done: false, name, id: Date.now() + Math.random() * 10 };
	todoList.update((prev) => [...prev, newTodo]);
}
export function deleteTodo(id: number) {
	todoList.update((prev) => {
		return prev.filter((todo) => todo.id !== id);
	});
}
export function clearTodo() {
	todoList.set([]);
}


