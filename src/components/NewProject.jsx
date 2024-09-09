import { useRef } from 'react';

import Input from './Input';
import InputErrorModal from './InputErrorModal';

export default function NewProject({ onAddProject, onProjectCancel }){
	
	const titleRef = useRef();
	const descriptionRef = useRef();
	const dueDateRef = useRef();

	const modal = useRef();

	function handleSave(){
		const enteredTitle = titleRef.current.value;
		const enteredDescription = descriptionRef.current.value;
		const enteredDueDate = dueDateRef.current.value;

		if (enteredTitle.trim() === '' 
			|| enteredDescription.trim() === ''
			|| enteredDueDate.trim() === ''
			){
				modal.current.open();
				return;
			 }

		onAddProject({
			title: enteredTitle,
			description: enteredDescription,
			dueDate: enteredDueDate,
			// initialize array of tasks
			tasks: []
		})
	}

	return (
		<>
			<InputErrorModal ref={modal} buttonCaption="Okay">
				<h2 className="text-xl text-stone-600 font-bold my-4">Invalid Input</h2>
				<p className="text-lg text-stone-600 mb-4">Oops...look like you forgot to enter a value</p>
				<p className="text-lg text-stone-600 mb-4">Please make sure to provide a valid value for every input field </p>
			</InputErrorModal>
			<div className="w-[35rem] mt-16">
				<menu className="flex items-center justify-end gap-4 my-4">
					<li>
						<button className="text-stone-700 hover:text-stone-950" onClick={onProjectCancel}>Cancel</button></li>
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
		</>
	)
}