export default function SideBar(){
	return (
		<div className="w-4/12 h-screen bg-black rounded-lg">
			<div className="pl-10 pt-10">
				<p className="text-white text-large font-bold">YOUR PROJECTS</p>
				<button type="button" className="rounded-md p-2 bg-slate-700 text-gray-400 mt-10 hover:bg-slate-500 hover:text-white">+ Add Project</button>
			</div>
		</div>
	)
}