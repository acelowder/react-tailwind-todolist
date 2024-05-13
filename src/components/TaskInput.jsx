import { useState } from 'react';
import './TaskInput.css';

export default function TaskInput({ handleAddTodo }) {
	const [todoText, setTodoText] = useState('');

	const addTodo = () => {
		handleAddTodo(todoText);
		setTodoText('');
	};

	return (
		<form
			className="todo-input-form flex items-center p-2 bg-gray-50 rounded-lg shadow-inner mb-4"
			onSubmit={(e) => e.preventDefault()}
		>
			<input
				className="flex-1 bg-transparent text-lg outline-none"
				value={todoText}
				onChange={(e) => {
					setTodoText(e.target.value);
				}}
				placeholder="Enter a new task"
			/>
			<button
				className="rounded-md bg-gray-50 px-2 py-1 text-2xl leading-5 transition-all duration-200"
				onClick={addTodo}
			>
				+
			</button>
		</form>
	);
}
