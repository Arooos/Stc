import React from 'react'
import Task from '../task/Task'
import './Column.sass'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import {Droppable} from 'react-beautiful-dnd'

export default function Column({status, title,}) {
	//получил значения из хранилища
	const tasks = useSelector((state) => state.tasksReducer.tasks);

	//преобразую объект в массив
	const tasksObj = Object.keys(tasks).map(function(key) {
		return {id: key, "data": tasks[key]}})

	//фильтр задач по колонкам
	const filterTask = useMemo(() => (tasksObj.filter((value) => value.data.status === status)), [tasksObj])
	const count = Object.entries(filterTask).length;
	return (
		<div className='Column'>
			<Droppable droppableId={status}>
				{(provided) => (
				<div {...provided.droppableProps} ref={provided.innerRef}>
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
					{Object.values(filterTask).map((item, index) => 
					<Task key={item.id} item={item} index={index}/>)}
					{provided.placeholder}
				</div>
				)}
				
			</Droppable>
			
		</div>
	)
}
