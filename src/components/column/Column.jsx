import React from 'react'
import Task from '../task/Task'
import './Column.css'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
// import tasksSlice from '../../redux/tasks/tasks.slice'

export default function Column({status, title,}) {
	//получил значения из хранилища
	const tasks = useSelector((state) => state.tasksReducer.tasks);

	//преобразую объект в массив
	const tasksObj = Object.keys(tasks).map(function(key) {
		return {"id": key, "data": tasks[key]}})

	//фильтр задач по колонкам
	const filterTask = useMemo(() => (tasksObj.filter((value) => value.data.status === status)), [tasksObj])
	const count = Object.entries(filterTask).length;
	return (
		<div className='Column'>
			<div className={`Column_head ${status}`}>
				<div className='Column_head_item'>
					<div className='Column_head_item_title'>{title}</div>
					<div className="Column_head_item_count">{""}</div>
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
