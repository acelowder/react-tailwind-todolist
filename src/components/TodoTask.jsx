import { MdDragIndicator, MdEdit, MdClose } from 'react-icons/md';
import { useState, useRef } from 'react';

export default function TodoTask({ todoText, onDeleteTodo, onEditTodo }) {
	const [isCompleted, setIsCompleted] = useState(false);
	const divRef = useRef(null);

	const toggleCheckbox = (e) => {
		setIsCompleted(!isCompleted);
	};

	const editTodoText = (e) => {
		e.stopPropagation();

		divRef.current.setAttribute('contentEditable', true);
		divRef.current.focus();

		// move cursor to end of text
		const range = document.createRange();
		range.selectNodeContents(divRef.current);
		range.collapse(false); // false means collapse to end
		const selection = window.getSelection();
		selection.removeAllRanges();
		selection.addRange(range);
	};

	const handleEnterKey = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			e.currentTarget.blur();
		}
	};

	const handleDivBlur = (e) => {
		onEditTodo(e.currentTarget.innerText);
		e.currentTarget.setAttribute('contentEditable', false);
	};

	const handleDivClick = (e) => {
		if (e.target === divRef.current) editTodoText(e);
	};

	return (
		<li
			className="task flex justify-between items-start min-h-12 px-2 py-2 border-b-2 border-gray-50 last:border-b-0 hover:bg-gray-50 transition duration-200"
			onClick={toggleCheckbox}
		>
			<MdDragIndicator className="mt-2 text-gray-400 hover:cursor-move hover:text-gray-700 transition duration-200" />
			<input
				type="checkbox"
				className="h-4 w-4 mt-2 mx-1 hover:cursor-pointer"
				checked={isCompleted}
				onChange={toggleCheckbox}
			></input>
			<div
				ref={divRef}
				contentEditable={false}
				suppressContentEditableWarning
				style={{
					textDecoration: isCompleted ? 'line-through' : 'none',
				}}
				className="flex-1 bg-transparent w-fit min-h-8 leading-8 pr-6 mr-2 hover:cursor-text"
				onBlur={handleDivBlur}
				onKeyDown={handleEnterKey}
				onClick={handleDivClick}
			>
				<span className="px-2 select-none hover:cursor-default">
					{todoText}
				</span>
			</div>
			<MdEdit
				className="mt-2 text-gray-400 hover:cursor-pointer hover:text-gray-600 transition duration-200"
				onClick={editTodoText}
			/>
			<MdClose
				className="mt-2 text-gray-400 hover:cursor-pointer hover:text-gray-600 transition duration-200"
				onClick={(e) => {
					e.stopPropagation();
					onDeleteTodo();
				}}
			/>
		</li>
	);
}
