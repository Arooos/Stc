const initialState = {
    tasks: {},
}

const state = (state = initialState, action) => {
    switch (action.type) {
        case 'ChangeStatus':
                console.log(action.deadline) 
                // return state.map((task) => (task.id === action.id) ? {...task, status: action.newStatus} : task)
                // return state.map((task) => (
                //     (task.id === action.id) ?
                //     ((action.newStatus === 'Todo') ? 
                //     {...task, status: action.newStatus, deadline: 'Без срока'} : 
                //         (action.newStatus === 'Done') ? 
                //         {...task, status: action.newStatus, deadline: 'Выполнено'} : {...task, status: action.newStatus, deadline: action.deadline}) : 
                //              task))
        // case 'addTask': {
        //     const newState = { ...state.tasks};
        //     newState[action.id] = action;
        // }
        // case 'updateTASK': {
        //     const newState = { ...state.tasks};
        //     newState[action.id] = action;
        // }
        default: return state
    }
};

export default state