const TITLE_ICON = '📝';
const TITLE_TEXT = 'To - Do List';

export default function TodoTitle() {
	return (
		<>
			<h1 className="-mt-1 mb-8 text-2xl font-bold">
				<span className="mr-3">{TITLE_ICON}</span>
				{TITLE_TEXT}
			</h1>
		</>
	);
}
