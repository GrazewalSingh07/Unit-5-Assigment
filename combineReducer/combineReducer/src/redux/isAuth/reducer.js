import { LOGIN } from "./action"
const init ={token : ""}
export const loginReducer = (store = init, { type, payload }) => {
    switch (type) {
        case LOGIN:
            return { ...store, token: payload }
        default:
            return store
    }
    
}