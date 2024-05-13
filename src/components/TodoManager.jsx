import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoTitle from './TodoTitle';

export default function TodoManager() {
	const [todos, setTodos] = useState([
		'This is your task list',
		'Click on a task to complete it',
		'Drag and drop to change the order',
	]);

	function handleAddTodo(todo) {
		setTodos([...todos, todo]);
	}

	return (
		<div className="flex flex-col w-96 bg-white rounded-2xl p-6 m-6 shadow-md">
			<TodoTitle />
			<TodoInput handleAddTodo={handleAddTodo} />
			<TodoList todos={todos} />
		</div>
	);
}
