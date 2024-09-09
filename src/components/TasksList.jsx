export default function TasksLists({selectedProjectTasks, onDeleteTask}){
	console.log( selectedProjectTasks );

	if (selectedProjectTasks === undefined){
		return <h1>This project doesn't have any tasks yet</h1>
	} else {
		// add <ul> tag
		return (selectedProjectTasks.map((task) => {
			return (
				<span key={task.id} className="flex">
					<li>{task.text}</li><button className="mx-4" onClick={() => onDeleteTask(task.id)}>Delete</button>
				</span>
			)
		}))
	}
}