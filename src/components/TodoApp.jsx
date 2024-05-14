import React, { useState } from 'react';
import TodoTitle from './TodoTitle';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const initialTodos = [
	'This is your task list',
	'Click on a task to complete it',
	'Drag and drop to change the order',
];

export default function TodoApp() {
	const [todos, setTodos] = useState(initialTodos);

	const handleAddTodo = (todo) => setTodos([...todos, todo]);

	const handleRemoveTodo = (index) =>
		setTodos(todos.filter((_, i) => i !== index));

	const handleEditTodo = (index, newTodo) => {
		const newTodos = [...todos];
		newTodos[index] = newTodo;
		setTodos(newTodos);
	};

	return (
		<div
			style={{ width: 500 }}
			className="todo flex flex-col max-w-full p-6 m-6 bg-white rounded-2xl shadow-md"
		>
			<TodoTitle />
			<TodoInput handleAddTodo={handleAddTodo} />
			<hr className="mt-2 border-gray-300" />
			<TodoList
				todos={todos}
				onDeleteTodo={handleRemoveTodo}
				onEditTodo={handleEditTodo}
			/>
		</div>
	);
}
