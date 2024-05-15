import { useState } from 'react';

export default function TodoInput({ onSubmit }) {
	const [todoText, setTodoText] = useState('');

	const handleInputChange = (e) => setTodoText(e.target.value);
	const handleFormSubmit = (e) => {
		e.preventDefault();
		onSubmit(todoText);
		setTodoText('');
	};

	return (
		<form
			className="flex items-center px-3 py-2 bg-gray-50 rounded-lg shadow-inner mb-4"
			onSubmit={handleFormSubmit}
		>
			<input
				className="flex-1 bg-transparent text-lg outline-none"
				value={todoText}
				onChange={handleInputChange}
				placeholder="Enter a new task"
			/>
			<button
				className="px-2 py-1 text-2xl leading-5 rounded-md text-white bg-gray-200"
				onClick={handleFormSubmit}
			>
				+
			</button>
		</form>
	);
}
