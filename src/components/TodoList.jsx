import TodoTask from './TodoTask';

export default function TodoList({ todos, onDelete, onEdit, onToggle }) {
	return (
		<ul className="flex flex-col">
			{todos.length > 0 ? (
				todos.map((todo, index) => (
					<TodoTask
						key={todo.id}
						todoText={todo.text}
						isCompleted={todo.completed}
						onDelete={() => onDelete(todo.id)}
						onEdit={(newTodoText) => onEdit(todo.id, newTodoText)}
						onToggle={() => onToggle(todo.id)}
					/>
				))
			) : (
				<li className="min-h-12 pt-4 text-md text-center text-zinc-500 text-opacity-80">
					Your list is empty :)
				</li>
			)}
		</ul>
	);
}
