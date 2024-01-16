import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: {},
        currentTask: null,
    },
    reducers: {
        addTask(state, action) {
            state.tasks = {...action.payload};
        },
        
        toggleCurrentTask(state, action) {
            console.log(action.payload.id);

            state.tasks = 
            // const tasksObj = Object.values(state.tasks).map(item => item)
            // // console.log(tasksObj);
            // const filterTask = tasksObj.find(task => task.id === action.payload.id) 
            // console.log(filterTask);

            // const tasksObj = Object.entries(state.tasks).map(item => item)
            
            // Object.values(function(key) {
            //     return {tasks: state.tasks[key]}})
            // state.tasks = tasksObj.filter(task => task.id !== action.payload.id)
            // console.log(tasksObj);
        },
    },
});

export const {toggleCurrentTask, addTask} = taskSlice.actions;
export default taskSlice.reducer;