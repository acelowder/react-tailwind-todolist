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
			className="flex items-center px-3 py-2 mb-3 bg-zinc-700 bg-opacity-50 rounded-lg shadow-inner"
			onSubmit={handleFormSubmit}
		>
			<input
				className="flex-1 bg-transparent outline-none placeholder-zinc-500 text-zinc-300"
				value={inputText}
				onChange={handleInputChange}
				placeholder="Enter a new task"
			/>
			<button
				className={`px-1.5 text-lg font-bold leading-5 rounded-md text-zinc-700 bg-zinc-400 transition-all duration-200 ${
					inputText.length > 0
						? 'bg-opacity-100'
						: 'bg-opacity-30 cursor-not-allowed'
				}`}
				onClick={handleFormSubmit}
			>
				+
			</button>
		</form>
	);
}
