import TodoTask from './TodoTask';

export default function TodoList({ todos, onDeleteTodo, onEditTodo }) {
	return (
		<ul className="flex flex-col">
			{todos.map((todo, index) => {
				return (
					<TodoTask
						key={todo.id}
						todoText={todo.text}
						onDeleteTodo={() => onDeleteTodo(todo.id)}
						onEditTodo={(newTodoText) =>
							onEditTodo(todo.id, newTodoText)
						}
					/>
				);
			})}
		</ul>
	);
}
