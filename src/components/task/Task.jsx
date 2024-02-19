import './Task.sass'
import 'air-datepicker/air-datepicker.css';
import {DropDownMenu} from './dropdown/DropDownMenu';
import { useDispatch } from 'react-redux';
import { toggleCurrentTask } from '../../redux/tasks/tasks.slice';
import {Draggable} from 'react-beautiful-dnd'

export default function Task(item) {
    const task = item.item.data
    const id = task.id
    const dispatch = useDispatch();
    const active = () => dispatch(toggleCurrentTask({id}))
  return (
    <Draggable draggableId={id} key={id} index={item.index}>
        {(provided) => (
            <div className={`Task ${task.active === true ? "active" : ""}`} 
            {...provided.dragHandleProps} 
            {...provided.draggableProps} 
            ref={provided.innerRef}>
                <div className='Task_btn' onClick={active}>
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
                <DropDownMenu task={task}/>
            </div>
        )}
    </Draggable>
  )}
