import {combineReducers, configureStore} from '@reduxjs/toolkit'
import taskSlice from './tasks/tasks.slice'


const rootReducer = combineReducers({
    tasksReducer: taskSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})

export default store;