import React, { useState } from 'react';

export default function TodoInput({ handleAddTodo }) {
	const [todoText, setTodoText] = useState('');

	const addTodo = () => {
		handleAddTodo(todoText);
		setTodoText('');
	};

	return (
		<header>
			<input
				value={todoText}
				onChange={(e) => {
					setTodoText(e.target.value);
				}}
				placeholder="Enter a new task"
			/>
			<button onClick={addTodo}>+</button>
		</header>
	);
}
