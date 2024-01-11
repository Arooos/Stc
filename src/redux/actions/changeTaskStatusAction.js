export const changeStatus = (id, status, newStatus) => {
    return (dispatch) => {
        return dispatch({type: 'ChangeStatus',id, status, newStatus})
    }
}