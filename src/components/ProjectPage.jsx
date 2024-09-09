import Tasks from "./Tasks";

export default function ProjectPage({selectedProject, onDeleteProject, selectedProjectTasks, onAddTask, onDeleteTask}){	
	
	const formattedDate = new Date(selectedProject.dueDate).toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	})
	
	return (
		<div className="py-16 flex flex-col gap-4 w-[35rem]">
			<div className="flex justify-between">
				<h1 className="text-3xl font-bold text-stone-700">{selectedProject.title}</h1>
				<button className="text-stone-600 hover:text-stone-900" onClick={() => onDeleteProject(selectedProject.id)}>Delete</button>
			</div>
			<p className="text-stone-500">{formattedDate}</p>
			<p className="text-stone-900 whitespace-pre-wrap">{selectedProject.description}</p>
			<hr className="h-1 bg-gray-300"></hr>
			<Tasks selectedProjectTasks={selectedProjectTasks} onAddTask={onAddTask} onDeleteTask={onDeleteTask}/>
		</div>);
}