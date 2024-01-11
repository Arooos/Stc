import { initialState } from "../state/StateTasks";

const state = (state = initialState, action) => {
    switch (action.type) {
        case 'ChangeStatus': 
                return state.map((task) => (task.id === action.id) ? {...task, status: action.newStatus} : task)
        default: return state
    }
};

export default state