import { Task } from "./ColumnData"

const initialState = {
    tasks: {},
}

export default (state = initialState, action) => {
    task = Task
  switch (action.type) {

  case "addTask":
    return { ...state, Task: }

  default:
    return state
  }
}
