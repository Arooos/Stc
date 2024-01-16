import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: {},
        currentTask: {},
    },
    reducers: {
        addTask(state, action) {
            state.tasks = {...action.payload};
        },
        
        toggleCurrentTask(state, action) {
            const oldTask = state.tasks[action.payload.id];
            const updatedTask = {...oldTask, active: !state.tasks[action.payload.id].active}
            state.tasks = {...state.tasks, [action.payload.id]: updatedTask}
            
            const activeTask = {...state.tasks[action.payload.id]}
            state.currentTask = {...activeTask}
        },

        changeStatus(state, action) {
            console.log(action.event);
            // const oldTask = state.tasks[action.payload.id];
            // const updatedTask = {...oldTask, status: action.payload.status}
            // state.tasks = {...state.tasks, [action.payload.id]: updatedTask}
        },
    },
});

export const {toggleCurrentTask, addTask, changeStatus} = taskSlice.actions;
export default taskSlice.reducer;