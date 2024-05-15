import React, { useState } from 'react';
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

	const addTodo = (todo) =>
		setTodos([...todos, { id: uuidv4(), text: todo }]);

	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const editTodo = (id, newTodoText) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						text: newTodoText,
					};
				}
				return todo;
			})
		);
	};

	const toggleTodo = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}
				return todo;
			})
		);
	};

	return (
		<div
			style={{ width: 500 }}
			className="todo flex flex-col max-w-full p-6 m-6 bg-white rounded-2xl shadow-md"
		>
			<TodoTitle />
			<TodoInput onSubmit={addTodo} />
			<hr className="mt-2 border-gray-300" />
			<TodoList
				todos={todos}
				onDelete={removeTodo}
				onEdit={editTodo}
				onToggle={toggleTodo}
			/>
		</div>
	);
}
