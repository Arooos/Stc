import './Task.css'
import '../column/Column.css'
import React, {useState} from 'react';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import { column } from '../board/BoardData';

console.log();

export default function Task({status, title, date, time, executor}) {

new AirDatepicker('#DateTime', {
    timepicker: true,
    dateTimeSeparatorstring: ",",
})

    const [Active, setActive] = useState(false);
    
  return (
    
    // Карточка 
    <div className={`Task ${Active ? "active" : ""}`}>
        <div className='Task_btn' onClick={() => setActive(!Active)}>
            <div className='Task_main'>
                <div className='Task_main_title'>{title}</div>
                <div className={`Task_main_deadlines ${status}`}>
                    <div className='Task_main_deadlines_date'>{date},</div>
                    <div className='Task_main_deadlines_time'>{time}</div>
                </div>
                <div className='Task_main_info'>
                    <div className='Task_main_info_executor'>{executor}</div>
                    <div className='Task_main_info_comm'>
                        <div className='Task_main_info_comm_icon'><img src='../img/task_img/Comment.png' alt='comments'></img>   2</div>
                        <div className='Task_main_info_comm_file'><img src='../img/task_img/file.png' alt='file'></img>   6</div>
                    </div>
                </div>
            </div>
        </div>
        {/* Выподающие меню карточки */}
        <div className={`dropdown ${Active ? "active" : ""}`}>
            <div className='dropdown_title'>{title}</div>
            <div className='dropdown_executor'>
                <div className='dropdown_executor_title title'>Исполнитель</div>
                <div className='dropdown_executor_wrapper'>
                    <select className='dropdown_executor_wrapper_list'>
                        <option className='dopdown_executor_wrapper_list_item'>Петров А.А</option>
                        <option className='dropdown_executor_wrapper_list_item'>Иванов С.С</option>
                        <option className='dropdown_executor_wrapper_item'>Сидоров Б.И</option>
                    </select>
                    <img className='dropdown_executor_wrapper_list_img' src='../img/plus.png' alt='plus'/>
                </div>
            </div>

            <div className='dropdown_deadlines'>
                <div className='dropdown_deadlines_title title'>Крайний срок</div>
                <div className='dropdown_deadlines_wrapper'>
                    <input type='text' id='DateTime' className='dropdown_deadlines_body_input'/>
                    {/* <div className='dropdown_deadlines_icon'><img src='' alt='plus'/></div> */}
                </div>
            </div>
                
            <div className='dropdown_categories'>
                <div className='dropdown_categories_title'>Категория</div>
                <select className='dropdown_categories_list' defaultValue={status}>
                    {
                        Object.values(column).map(item =>
                        <option key={item.id} value={item.status} className='dropdown_categories_list_item'>{item.title}</option>
                    )}
                </select>
            </div>
        </div>
    </div>
  )
}
