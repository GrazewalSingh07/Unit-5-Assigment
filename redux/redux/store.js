
const info = document.getElementById("input").value


const initState = {
    todo: []
}

const reducer = (store, action)=>{
if (action.type === "ADD_TODO") {
    return {...store, todo:[...store.todo , action.payload]}
}
return store
}
const store = Redux.createStore(reducer, initState)
const state = store.getState()

document.getElementById("btn").addEventListener("click", function () {
store.dispatch({ type: "ADD_TODO", payload: {title: "shawon", status:false} })
console.log(state)
})