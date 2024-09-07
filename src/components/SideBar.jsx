import Button from './Button';

export default function SideBar({onStartAddProject, projectsState, onSelectProject}){
	return (
		<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl md:w-72">
			<h2 className="mb-8 text-stone-200 md:text-xl uppercase font-bold">Your Projects</h2>
			<div>
				<Button onClick={onStartAddProject}>+ Add Project</Button>
			</div>
			<div>
				<ul className="mt-10">
					{projectsState.projects.map((project) => 
						<li onClick={() => onSelectProject(project.id)} key={project.id} className="my-2 text-stone-400 hover:bg-stone-700 hover:text-stone-200">{project.title}</li>)}
				</ul>
			</div>
		</aside>
	)
}