import Button from './Button';

const classes = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
const selectClasses  = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-200 bg-stone-800"

export default function SideBar({onStartAddProject, projects, onSelectProject, selectedProjectId }){
	return (
		<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl md:w-72">
			<h2 className="mb-8 text-stone-200 md:text-xl uppercase font-bold">Your Projects</h2>
			<div>
				<Button onClick={onStartAddProject}>+ Add Project</Button>
			</div>
			<div>
				<ul className="mt-8">
					{projects.map((project) => (
						<li  key={project.id}>
							<button 
								onClick={() => onSelectProject(project.id)}
								className={project.id === selectedProjectId ? selectClasses : classes }>
									{project.title}
							</button>
						</li>)
						)}
				</ul>
			</div>
		</aside>
	)
}