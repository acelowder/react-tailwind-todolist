import { useState } from 'react';

export default function TodoInput({ onSubmit }) {
	const [inputText, setInputText] = useState('');

	const handleInputChange = (e) => setInputText(e.target.value);
	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (!inputText.trim()) return;
		onSubmit(inputText);
		setInputText('');
	};

	return (
		<form
			className="flex items-center px-3 py-2 bg-zinc-700 rounded-lg shadow-inner mb-4"
			onSubmit={handleFormSubmit}
		>
			<input
				className="flex-1 bg-transparent text-sm outline-none placeholder-zinc-500 text-zinc-300"
				value={inputText}
				onChange={handleInputChange}
				placeholder="Enter a new task"
			/>
			<button
				className={`px-1.5 text-lg font-bold leading-5 rounded-md text-zinc-700 transition-all duration-200 ${
					inputText.length > 0
						? 'bg-zinc-400'
						: 'bg-zinc-600 cursor-text'
				}`}
				onClick={handleFormSubmit}
			>
				+
			</button>
		</form>
	);
}
