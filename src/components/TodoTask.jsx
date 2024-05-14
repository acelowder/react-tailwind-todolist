import { MdDragIndicator } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa6';

export default function TodoTask({ todoText, onDeleteTodo, onEditTodo }) {
	const handleEnterKey = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			e.currentTarget.blur();
		}
	};

	return (
		<li className="task flex justify-between items-start min-h-12 px-2 py-2 border-b-2 border-gray-50 last:border-b-0 hover:bg-gray-50 transition duration-200">
			<MdDragIndicator className="mt-2 text-gray-400 hover:cursor-grab hover:text-gray-700 transition duration-200" />
			<input type="checkbox" className="h-4 w-4 mt-2 mx-1"></input>
			<div
				contentEditable
				suppressContentEditableWarning
				className="flex-1 bg-transparent w-auto min-h-8 leading-8 pl-2 pr-6 mr-2"
				onBlur={(e) => onEditTodo(e.target.innerText)}
				onKeyDown={handleEnterKey}
			>
				{todoText}
			</div>
			<FaTrash
				className="mt-2 text-gray-300 hover:text-gray-500 transition duration-200"
				onClick={(e) => onDeleteTodo()}
			/>
		</li>
	);
}
