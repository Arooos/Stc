
import { column } from "../../board/BoardData";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../../redux/tasks/tasks.slice";
import './DropDownMenu.sass'

export function DropDownMenu (item) {
    const task = item.task;
    const id = task.id;
    const dispatch = useDispatch();
    const handler = (event) => {
        const status = event.currentTarget.value;
        console.log(status);
        dispatch(changeStatus({status, id}))
    }

    return (
        <div className={`dropdown ${task.active === true ? "active" : ""}`}>
             <div className='dropdown_title'>{task.title}</div>
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
                    <div className='dropdown_deadlines_icon'><img src='../img/task_img/Calendar.png' alt='календарь'/></div>
                </div>
            </div>
            <div className='dropdown_categories'>
                <div className='dropdown_categories_title'>Категория</div>
                <select className='dropdown_categories_list' defaultValue={task.status} onChange={handler}>
                    {
                        Object.values(column).map(item =>
                        <option key={item.id} value={item.status} className='dropdown_categories_list_item'>{item.title}</option>
                    )}
                </select>
            </div>
        </div> 
    )}