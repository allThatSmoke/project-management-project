export default function TasksLists({selectedProjectTasks, onDeleteTask}){
	console.log( selectedProjectTasks );

	if (selectedProjectTasks === undefined){
		return <h1>This project doesn't have any tasks yet</h1>
	} else {
		return (selectedProjectTasks.map((task) => {
			return (
				<ul className="p-4 mt-2 rounded-md bg-stone-100">
					<span key={task.id} className="flex justify-between">
						<li>{task.text}</li><button className="mx-2 text-stone-700 hover:text-red-500" onClick={() => onDeleteTask(task.id)}>Delete</button>
					</span>
				</ul>
			)
		}))
	}
}