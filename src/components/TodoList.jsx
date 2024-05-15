import TodoTask from './TodoTask';

export default function TodoList({ todos, onDelete, onEdit, onToggle }) {
	
	return (
		<ul className="flex flex-col">
			{todos.map((todo, index) => {
				return (
					<TodoTask
						key={todo.id}
						todoText={todo.text}
						isCompleted={todo.completed}
						onDelete={() => onDelete(todo.id)}
						onEdit={(newTodoText) => onEdit(todo.id, newTodoText)}
						onToggle={() => onToggle(todo.id)}
					/>
				);
			})}
		</ul>
	);
}
