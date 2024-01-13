import { column } from "../../board/BoardData";
// import { useDispatch } from "react-redux";
import './DropDownMenu.css'

export default function DropDownMenu (item) {
    console.log(item);
    const task = item.task.item.data
    // get All task


    // const dispatch = useDispatch();

    // const handler = (event) => {
    //     const oldTask = tasks[id]

    //     const updateTask = { ...oldTask, status: event.carrentTarget.value}

    //     dispatch(updateTask(updatedTask))
    // }

    // console.log(task);
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
                    {/* <div className='dropdown_deadlines_icon'><img src='' alt='plus'/></div> */}
                </div>
            </div>
            <div className='dropdown_categories'>
                <div className='dropdown_categories_title'>Категория</div>
                <select className='dropdown_categories_list' defaultValue={task.status}>
                    {
                        Object.values(column).map(item =>
                        <option key={item.id} value={item.status} className='dropdown_categories_list_item'>{item.title}</option>
                    )}
                </select>
            </div>
        </div>
)}