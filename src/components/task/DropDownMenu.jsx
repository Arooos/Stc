import React from 'react';
import '../Style/Dropdown.css';

export default function DropDownMenu() {

  return (
    <div className="dropdown">
        <div className='dropdown_title'>Расстановка отряда</div>
        <div className='dropdown_executor'>
            <div className='dropdown_executor_title'>Исполнитель</div>
        </div>

        <div className='dropdown_deadlines'>
            <div className='dropdown_deadlines_title'>Крайний срок</div>
            <div className='dropdown_deadlines_body'>
                <div className='dropdown_deadlines_date'>31 марта</div>
                <div className='dropdown_deadlines_time'>19:00</div>
                <div className='dropdown_deadlines_icon'><img src='../img/plus.png' alt='plus'/></div>
            </div>
        </div>
            
        <div className='dropdown_categories'>

            <div className='dropdown_categories_title'>Категория</div>
            <select className='dropdown_list'>
                <option className='Dropdown_list_item'>Неразобранные задачи</option>
                <option className='Dropdown_list_item'>Profile</option>
                <option className='Dropdown_list_item'>Profile</option>
            </select>
        </div>
    </div>
  )
}
