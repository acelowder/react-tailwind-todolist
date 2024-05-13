import Task from './Task';

export default function List({ todos }) {
	return (
		<ul className="flex flex-col">
			{todos.map((todo, index) => {
				return <Task key={index} todo={todo} />;
			})}
		</ul>
	);
}
