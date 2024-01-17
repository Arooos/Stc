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
            //меняет 
            const oldTask = state.tasks[action.payload.id];
            const updatedTask = {...oldTask, active: !state.tasks[action.payload.id].active}
            state.tasks = {...state.tasks, [action.payload.id]: updatedTask}

            const disableTaskID = state.currentTask.id
            if (disableTaskID === action.payload.id) {
                //Если в currentTask есть задача, меняем active на false и отчищаем currentTask
                const Task = state.tasks[disableTaskID];
                const updTask = {...Task, active: state.tasks[disableTaskID].active}
                state.tasks = {...state.tasks, [disableTaskID]: updTask}
                state.currentTask = {}
            }
            else if (disableTaskID !== undefined) {
                //Если в currentTask задача отличная от выбранной, меняем active на true и записываем активную задачу в currentTask
                const Task = state.tasks[disableTaskID];
                const updTask = {...Task, active: !state.tasks[disableTaskID].active}
                state.tasks = {...state.tasks, [disableTaskID]: updTask}
                const activeTask = state.tasks[action.payload.id]
                state.currentTask = {...activeTask}
            }
            else {
                //Если currentTask пустой
                const activeTask = state.tasks[action.payload.id]
                state.currentTask = {...activeTask}
            }
        },

        changeStatus(state, action) {
            const oldTask = state.tasks[action.payload.id];
            const updatedTask = {...oldTask, status: action.payload.status, active: !state.tasks[action.payload.id].active, deadline: state.tasks[action.payload.id].deadline}
            state.tasks = {...state.tasks, [action.payload.id]: updatedTask}
            state.currentTask = {}
        },
    },
});

export const {toggleCurrentTask, addTask, changeStatus} = taskSlice.actions;
export default taskSlice.reducer;