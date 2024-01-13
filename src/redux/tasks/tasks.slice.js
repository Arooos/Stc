import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: {
            1:{
                id: '1',
                status: 'Todo',
                title: 'Расстановка отряда',
                deadline: 'Без срока',
                executor: 'Петров А.А',
            },
            2:{
                id: '2',
                status: 'Plan',
                title: 'Починить ноутбук',
                deadline: '31 марта, 19:00',
                executor: 'Петров А.А',  
            },
            3:{
                id: '3',
                status: 'Done',
                title: 'Выполнить задачу',
                deadline: 'Выполнено',
                executor: 'Петров А.А',  
            },
            4:{
                id: '4',
                status: 'Done',
                title: 'Убрать рабочее место',
                deadline: 'Выполнено',
                executor: 'Петров А.А',  
            },
            5:{
                id: '5',
                status: 'Running',
                title: 'Помыть машину',
                deadline: '31 марта, 19:00',
                executor: 'Петров А.А',  
            }
        },
        currentTask: null,
    },
    reducers: {
        // addTask(state) {
        //     state.tasks.push({})
        // },
        toggleCurrentTask(state, actoin) {},
    }
})

export const {toggleCurrentTask} = taskSlice.actions;
export default taskSlice.reducer;