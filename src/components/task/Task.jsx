import './Task.css'
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import DropDownMenu from './dropdown/DropDownMenu';
import { useDispatch } from 'react-redux';
import { toggleCurrentTask } from '../../redux/tasks/tasks.slice';


export default function Task(item) {

    new AirDatepicker('#DateTime', {
        timepicker: true,
        dateTimeSeparatorstring: ",",
    })

    const task = item.item.data
    // console.log(task);
    const id = task.id

    const dispatch = useDispatch();
    const handler = () => dispatch(toggleCurrentTask({id}))
    // const handler = (event) => {
    //     const oldTask = task[id];
    //     const updateTask = { ...oldTask, status: event.currentTarget.value}
    //     dispatch(updateTask(updateTask))
    // }
  return (
    // Карточка 
    <div className={`Task ${task.active === true ? "active" : ""}`}>
        <div className='Task_btn' onClick={handler}>
            <div className='Task_main'>
                <div className='Task_main_title'>{task.title}</div>
                <div className={`Task_main_deadlines ${task.status}`}>
                    <div className='Task_main_deadlines_date'>{task.deadline}</div>
                </div>
                <div className='Task_main_info'>
                    <div className='Task_main_info_executor'>{task.executor}</div>
                    <div className='Task_main_info_comm'>
                        <div className='Task_main_info_comm_icon'><img src='../img/task_img/Comment.png' alt='comments'></img>   2</div>
                        <div className='Task_main_info_comm_file'><img src='../img/task_img/file.png' alt='file'></img>   6</div>
                    </div>
                </div>
            </div>
        </div>
        {/* Выподающие меню карточки  */}
        <DropDownMenu task={task}/>
    </div>
  )}
