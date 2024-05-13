import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

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
		<>
			<TodoInput handleAddTodo={handleAddTodo} />
			<TodoList todos={todos} />
		</>
	);
}
