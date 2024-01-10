
const initialState = [
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
    ];

const state = (state = initialState, action) => {
    switch (action.type) {
        case 'ChangeStatus': 
            console.log(action.id)
            console.log(action.newStatus);
            // return Object.assign({}, state.tasks, {
                
            //     tasks: state.tasks.map((task, status) => {
            //         if (status !== action.status) {
            //             return Object.assign({}, test, {
            //                 status: action.newStatus,
            //             });
            //         }
            //         return task;
            //     })
            // });

            return state.map((task) => (task.id === action.id) ? {...task, status: action.newStatus} : task)
            
        
        default: return state
    }
};

export const changeStatus = (id, status, newStatus) => {
    return (dispatch) => {
        return dispatch({type: 'ChangeStatus',id, status, newStatus})
    }
}

export default state
