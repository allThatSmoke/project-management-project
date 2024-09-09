import { useState } from 'react';

import TasksList from './TasksList'

export default function Tasks({selectedProjectTasks, onAddTask, onDeleteTask}){

	const [enteredTask, setEnteredTask] = useState('');

	function handleChange(event){
		setEnteredTask(event.target.value);
	}

	function handleClick(){
		if (enteredTask.trim() === ''){
			return;
		} else {
			onAddTask(enteredTask)
		}
		setEnteredTask('');
	}

	return (
		<div>
			<h1 className="text-xl font-bold text-stone-900 mb-4">Tasks</h1>
			<div className="flex mb-8">
			<input
				type="text"
				className="w-64 px-2 py-1 rounded-sm bg-stone-200"
				onChange={handleChange}
				value={enteredTask}
      		/>
      		<button
        		className="text-stone-700 hover:text-stone-950 ml-2"
        		onClick={handleClick}
      		> Add task</button>
			</div>
			<TasksList selectedProjectTasks={selectedProjectTasks} onDeleteTask={onDeleteTask} />
		</div>
	)
}