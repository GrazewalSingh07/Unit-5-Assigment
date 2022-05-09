import { legacy_createStore as createStore } from "redux"


import { combineReducers } from 'redux'
import { addCounterReducer } from "./counter/reducer"
import { addTodoReducer } from "./todo/reducer"
import { loginReducer } from "./isAuth/reducer"

export const rootReducer= combineReducers({
  todos:addTodoReducer,
  counter: addCounterReducer,
  token : loginReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
