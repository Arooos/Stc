import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        currentTask: null,
    },
    reducers: {
        addTask(state, action) {
            state.tasks.push(action.payload);
            console.log(action.payload);
        },
        
        toggleCurrentTask(state, action) {
            const tasksObj = Object.entries(state.tasks).map(item => item)
            console.log(tasksObj);
        //     (function(key) {
        //         return {tasks: state.tasks[key]}})
        //     state.tasks = tasksObj.filter(task => task.id !== action.payload.id)
        },
    }
})

export const {toggleCurrentTask, addTask} = taskSlice.actions;
export default taskSlice.reducer;