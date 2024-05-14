import TodoTask from './TodoTask';

export default function TodoList({ todos, onDeleteTodo, onEditTodo }) {
	return (
		<ul className="flex flex-col">
			{todos.map((todoText, index) => {
				return (
					<TodoTask
						key={index}
						todoText={todoText}
						onDeleteTodo={() => onDeleteTodo(index)}
						onEditTodo={(newText) => onEditTodo(index, newText)}
					/>
				);
			})}
		</ul>
	);
}
