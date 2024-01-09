
const initialState = {
    tasks: [
        {
            id: '1',
            status: 'Todo',
            title: 'Расстановка отряда',
            date: '31 марта',
            time: '19:00',
            executor: 'Петров А.А',
        },
        {
            id: '2',
            status: 'Plan',
            title: 'Починить ноутбук',
            date: '31 марта',
            time: '19:00',
            executor: 'Петров А.А',  
        },
        {
            id: '3',
            status: 'Done',
            title: 'Выполнить задачу',
            date: '25 марта',
            time: '18:00',
            executor: 'Петров А.А',  
        },
        {
            id: '4',
            status: 'Done',
            title: 'Убрать рабочее место',
            date: '3 января',
            time: '10:00',
            executor: 'Петров А.А',  
        },
        {
            id: '5',
            status: 'Running',
            title: 'Помыть машину',
            date: '3 января',
            time: '10:00',
            executor: 'Петров А.А',  
        }
    ],
    count: 0,
};

const state = (state = initialState, action) => {
    switch (action.type) {
        case 'ChangeStatus': {
            // console.log(action.id)
            // console.log(action.newStatus);
            // setTasks(tasks.map((task) => (task.id === action.id) ? {...state, tasks.status: newStatus} : task));

            return {
                ...state,
                if (tasks.id === id)
                
                
            }
        }
        default: return state
    }
};

export const changeStatus = (id, newStatus) => {
    return (dispatch) => {
        return dispatch({type: 'ChangeStatus', id, newStatus})
    }
}

export default state
