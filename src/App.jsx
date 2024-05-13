import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {
	return (
		<main className="flex justify-center align-center h-screen">
			<div className="panel">
				<h1>
					TO <b>-</b> DO LIST
				</h1>
				<TodoInput />
				<TodoList />
			</div>
		</main>
	);
}

export default App;
