import * as AT from './actionsTypes'

export const onLogin = (token) => dispatch => {
    return (dispatch({
        type: AT.ON_LOGIN,
        payload: token
    }))
}

export const onLogOut = (token) => dispatch => {
    return (dispatch({
        type: AT.ON_LOGOUT
    }))
}