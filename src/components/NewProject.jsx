import { useRef } from 'react';

import Input from './Input';

export default function NewProject({ onAddProject }){
	
	const titleRef = useRef();
	const descriptionRef = useRef();
	const dueDateRef = useRef();

	function handleCancel() {
		titleRef.current.value = ''
		descriptionRef.current.value = ''
		dueDateRef.current.value = ''
	}

	function handleSave(){
		const enteredTitle = titleRef.current.value;
		const enteredDescription = descriptionRef.current.value;
		const enteredDueDate = dueDateRef.current.value;

		// validation ...
		onAddProject({
			title: enteredTitle,
			description: enteredDescription,
			dueDate: enteredDueDate
		})
	}

	return (
		<div className="w-[35rem] mt-16">
			<menu className="flex items-center justify-end gap-4 my-4">
				<li>
					<button className="text-stone-700 hover:text-stone-950" onClick={handleCancel}>Cancel</button></li>
				<li>
					<button 
						className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
						onClick={handleSave}	
					>
						Save
					</button></li>
			</menu>
			<div>
				<Input type="text" label="Title" ref={titleRef}/>
				<Input label="Description" textarea={true} ref={descriptionRef}/>
				<Input type="date" label="Due Date" ref={dueDateRef}/>
			</div>
		</div>
	)
}