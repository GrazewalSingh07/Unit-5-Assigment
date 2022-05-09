export const ADD_TODO = "ADD_TODO"
export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: data
    }
}

export const TOGGLE_TODO = "TOGGLE_TODO"

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}