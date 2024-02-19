
import { useEffect } from "react";
import {Board} from "./components/board/Board"
import { useDispatch } from "react-redux";
import { addTask } from "./redux/tasks/tasks.slice";

function App() {
  const dispatch = useDispatch();
  //useEffect setTimeout addTask
  useEffect(() => {
    setTimeout(() => {
      dispatch(addTask({
        1:{
          id: '1',
          status: 'Todo',
          title: 'Расстановка отряда',
          deadline: 'Без срока',
          executor: 'Петров А.А',
          active: false
        },
        2:{
            id: '2',
            status: 'Plan',
            title: 'Починить ноутбук',
            deadline: '31 марта, 19:00',
            executor: 'Петров А.А',  
            active: false
        },
        3:{
            id: '3',
            status: 'Done',
            title: 'Выполнить задачу',
            deadline: 'Выполнено',
            executor: 'Петров А.А',  
            active: false
        },
        4:{
            id: '4',
            status: 'Done',
            title: 'Убрать рабочее место',
            deadline: 'Выполнено',
            executor: 'Петров А.А',  
            active: false
        },
        5:{
            id: '5',
            status: 'Running',
            title: 'Помыть машину',
            deadline: '31 марта, 19:00',
            executor: 'Петров А.А',  
            active: false
        }
      }))
    }, 600)
  })

  return (
    <div className="App">
        <Board/>
    </div>
  );
}

export default App;
