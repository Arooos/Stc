import React from 'react'
import Task from '../task/Task'
import './Column.css'


export default function Column({className, title,}) {

	return (
		<div className='Column'>
			<div className={`Column_head ${className}`}>
				<div className='Column_head_item'>
					<div className='Column_head_item_title'>{title}</div>
					<div className="Column_head_item_count">3</div>
				</div>
				<div className="Column_head_icons">
					<img className='Column_head_icons_1' src="../img/column.png" alt='#'/>
					<img className='Column_head_icons_2' src="../img/column.png" alt='#'/>
				</div>
			</div>
			<Task/>
		</div>
	)
}
