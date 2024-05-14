import React, { useState } from 'react';
import Title from './Title';
import TaskInput from './TaskInput';
import List from './List';

export default function TodoList() {
	const [todos, setTodos] = useState([
		'This is your task list',
		'Click on a task to complete it',
		'Drag and drop to change the order',
	]);

	function handleAddTodo(todo) {
		setTodos([...todos, todo]);
	}

	return (
		<div className="flex flex-col bg-white rounded-2xl p-6 m-6 shadow-md w-auto">
			<Title />
			<TaskInput handleAddTodo={handleAddTodo} />
			<hr className="my-2 border-gray-300" />
			<List todos={todos} />
		</div>
	);
}
