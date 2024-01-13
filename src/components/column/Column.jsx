import React from 'react'
import Task from '../task/Task'
import './Column.css'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'

export default function Column({status, title,}) {

	const tasks = useSelector((state) => state.tasksReducer.tasks);


	const tasksObj = Object.keys(tasks).map(function(key) {
		return {"id": key, "data": tasks[key]}})
	const filterTask = useMemo(() => (tasksObj.filter((value) => value.data.status === status)), [tasksObj])
	const count = Object.entries(filterTask).length;
		// console.log(filterTask);
	return (
		<div className='Column'>
			<div className={`Column_head ${status}`}>
				<div className='Column_head_item'>
					<div className='Column_head_item_title'>{title}</div>
					<div className="Column_head_item_count">{count}</div>
				</div>
				<div className="Column_head_icons">
					<img className='Column_head_icons_1' src="../img/column.png" alt='#'/>
					<img className='Column_head_icons_2' src="../img/column.png" alt='#'/>
				</div>
			</div>
			{Object.values(filterTask).map(item => 
			<Task key={item.id} item={item}/>)}
		</div>
	)
}
