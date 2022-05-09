export const ADD_COUNT = "ADD_COUNT"

export const addCounter = (data) => {
    return {
        type: ADD_COUNT,
        payload: data
    }
}