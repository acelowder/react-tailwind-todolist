import { Routes, Route } from 'react-router-dom';
import TodoApp from './components/TodoApp';

function App() {
	return (
		<main className="flex justify-center">
			<Routes>
				<Route path="/todo" element={<TodoApp />} />
			</Routes>
		</main>
	);
}

export default App;
