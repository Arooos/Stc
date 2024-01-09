import React from 'react'
import Task from '../task/Task'
import './Column.css'
import { useSelector } from 'react-redux'

export default function Column({status, title,}) {

	// счётчик задач 
	// const count = useSelector((store) => store.count)

	const tasks = useSelector((store) => store.tasks.tasks);
	// const values = Object.values(tasks.tasks)
	const filt = (tasks || []).filter((value) => value.status === status)
	

	return (
		<div className='Column'>
			<div className={`Column_head ${status}`}>
				<div className='Column_head_item'>
					<div className='Column_head_item_title'>{title}</div>
					<div className="Column_head_item_count">2</div>
				</div>
				<div className="Column_head_icons">
					<img className='Column_head_icons_1' src="../img/column.png" alt='#'/>
					<img className='Column_head_icons_2' src="../img/column.png" alt='#'/>
				</div>
			</div>
			{Object.values(filt).map(item => 
			<Task key={item.id} id={item.id} status={item.status} title={item.title} date={item.date} time={item.time} executor={item.executor}/>)}
		</div>
	)
}
