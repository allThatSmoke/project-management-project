import { forwardRef } from "react"

const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"

const Input = forwardRef(function Input({ label, textarea, ...props }, ref){
	return (
	<p className="flex flex-col gap-1 my-4">
		<label className="uppercase text-sm font-bold text-stone-500">{label}</label>
		{ textarea ? <textarea className={classes} {...props} ref={ref} /> : 
			<input className={classes} {...props} ref={ref} /> }
	</p>
	)
})

export default Input;