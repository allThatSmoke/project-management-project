export default function ProjectPage({selectedProject, onDeleteProject}){
	return (
	<div className="py-16 flex flex-col gap-4 w-[32rem]">
		<div className="flex justify-between">
			<h1 className="text-2xl font-bold text-stone-900">{selectedProject.title}</h1>
			<button onClick={() => onDeleteProject(selectedProject.id)}>Delete</button>
		</div>
		<p className="text-stone-500">{selectedProject.dueDate}</p>
		<p className="text-stone-900">{selectedProject.description}</p>
		<hr className="h-1 bg-gray-300"></hr>
	</div>);
}