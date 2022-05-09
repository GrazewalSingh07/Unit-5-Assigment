import { ADD_TODO, TOGGLE_TODO } from "./action";
const init = {todos: []}

export const addTodoReducer = (store = init, {type, payload}) => {
    switch (type) {
        case ADD_TODO:
            return { ...store, todos: payload }
        case TOGGLE_TODO:
            return {
                ...store, todos: store.todos.map(e =>e.id === payload? {...e, status: !e.status }: e
            )}
        default:
            return store
    }
   
}
