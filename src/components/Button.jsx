export default function Button({children, ...props}){
	return (
		<button 
			className="rounded-md px-4 py-2 text-xs md:text-base bg-slate-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" 
			{...props}
		>
				{children}
		</button>
	)
}