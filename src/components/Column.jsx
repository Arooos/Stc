import React from 'react';
import Task from './Task'
import '../Style/Column.css'

export default function Column({ id, title }) {
		let Todo;
		let Plan;
		let Work;
		let Done;

	if ( id === "1" ) {
		Todo = true;
	} else if (id === "2") {
		Plan = true;
	} else if (id === "3") {
		Work = true;
	} else if (id === "4") {
		Done = true;
	}

	return (
		<div className='Column'>
			<div className={`Column_head ${Todo ? "Todo" : ""} ${Plan ? "Plan" : ""} ${Work ? "Work" : ""} ${Done ? "Done" : ""}`}>
				<div className='Column_head_item'>
					<div className='Column_head_item_title'>{title}</div>
					<div className="Column_head_item_count">3</div>
				</div>
				<div className="Column_head_icons">
					{/* Скорее всего в дизайне были иконки вместо крестиков. 
					Тогда бы я назвал класс не "Column_head_icons_1"; "Column_head_icons_2", а описал иконки */}
					<img className='Column_head_icons_1' src="../img/column.png" alt='#'/>
					<img className='Column_head_icons_2' src="../img/column.png" alt='#'/>
				</div>
			</div>
			<Task Todo={Todo} Plan={Plan} Work={Work} Done={Done}/>
		</div>
	)
}
