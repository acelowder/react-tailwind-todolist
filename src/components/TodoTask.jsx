import { MdEdit, MdClose } from 'react-icons/md';
import { useRef } from 'react';

export default function TodoTask({
	todoText,
	isCompleted,
	onDelete,
	onEdit,
	onToggle,
}) {
	const textFieldRef = useRef(null);

	const moveTextCursorToEnd = () => {
		const range = document.createRange();
		range.selectNodeContents(textFieldRef.current);
		range.collapse(false);
		const selection = window.getSelection();
		selection.removeAllRanges();
		selection.addRange(range);
	};

	const editText = (e) => {
		e.stopPropagation();
		textFieldRef.current.setAttribute('contentEditable', true);
		textFieldRef.current.focus();
		moveTextCursorToEnd();
	};

	const handleEnterKey = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			e.currentTarget.blur();
		}
	};

	const handleDivBlur = (e) => {
		onEdit(e.currentTarget.innerText);
		e.currentTarget.setAttribute('contentEditable', false);
	};

	const handleDivClick = (e) => {
		if (e.target === textFieldRef.current) editText(e);
	};

	return (
		<li
			className="group flex justify-between items-start min-h-12 px-2 py-2 border-b-2 border-gray-50 last:border-b-0 hover:bg-gray-50 transition duration-200"
			onClick={onToggle}
		>
			<input
				type="checkbox"
				className="h-4 w-4 mt-2 mx-1 hover:cursor-pointer group-hover:ml-3 transition-all duration-200"
				checked={isCompleted}
				onChange={onToggle}
			/>
			<div
				ref={textFieldRef}
				contentEditable={false}
				suppressContentEditableWarning
				className={`flex-1 bg-transparent min-h-8 leading-8 pr-6 mx-2 break-all focus:outline-none hover:cursor-text ${
					isCompleted ? 'line-through' : ''
				}`}
				onBlur={handleDivBlur}
				onKeyDown={handleEnterKey}
				onClick={handleDivClick}
			>
				<span className="py-2 select-none hover:cursor-default">
					{todoText}
				</span>
			</div>
			<MdEdit
				className="mt-2 text-gray-400 opacity-0 group-hover:opacity-100 hover:cursor-pointer hover:text-gray-600 transition duration-200"
				onClick={editText}
			/>
			<MdClose
				className="mt-1.5 ml-1 h-5 w-5 text-gray-400 opacity-0 group-hover:opacity-100 hover:cursor-pointer hover:text-gray-600 transition duration-200"
				onClick={(e) => {
					e.stopPropagation();
					onDelete();
				}}
			/>
		</li>
	);
}
