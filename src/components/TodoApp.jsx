import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoTitle from './TodoTitle';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const initialTodos = [
	{ id: uuidv4(), text: 'This is your task list', completed: false },
	{ id: uuidv4(), text: 'Click on a task to complete it', completed: false },
	{ id: uuidv4(), text: 'Hover to view more options', completed: false },
];

export default function TodoApp() {
	const [todos, setTodos] = useState(initialTodos);

	useEffect(() => {
		if (!localStorage) return;

		let localTodos = localStorage.getItem('todos');
		if (!localTodos) return;

		localTodos = JSON.parse(localTodos).todos;
		setTodos(localTodos);
	}, []);

	const saveLocalTodos = (updatedTodos) => {
		localStorage.setItem('todos', JSON.stringify({ todos: updatedTodos }));
	};

	const addTodo = (todo) => {
		const newTodos = [
			...todos,
			{ id: uuidv4(), text: todo, completed: false },
		];
		saveLocalTodos(newTodos);
		setTodos(newTodos);
	};

	const removeTodo = (id) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		saveLocalTodos(newTodos);
		setTodos(newTodos);
	};

	const editTodo = (id, newTodoText) => {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					text: newTodoText,
				};
			}
			return todo;
		});
		saveLocalTodos(newTodos);
		setTodos(newTodos);
	};

	const toggleTodo = (id) => {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					completed: !todo.completed,
				};
			}
			return todo;
		});
		saveLocalTodos(newTodos);
		setTodos(newTodos);
	};

	return (
		<div
			style={{ width: 500 }}
			className="todo flex flex-col max-w-full p-6 m-6 rounded-lg bg-zinc-800 border border-zinc-700 shadow-lg"
		>
			<TodoTitle />
			<TodoInput onSubmit={addTodo} />
			<hr className="mt-2 border-zinc-500 border-opacity-60" />
			<TodoList
				todos={todos}
				onDelete={removeTodo}
				onEdit={editTodo}
				onToggle={toggleTodo}
			/>
		</div>
	);
}
