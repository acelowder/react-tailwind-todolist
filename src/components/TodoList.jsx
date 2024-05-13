import React from 'react';
import TodoTask from './TodoTask';

export default function TodoList({ todos }) {
	return (
		<ul className="flex flex-col">
			{todos.map((todo, index) => {
				return <TodoTask key={index} todo={todo} />;
			})}
		</ul>
	);
}
