// store => wadah atau menyimpan value atau state secara global
// reducer => berfungsi untuk melakukan update store
// action => proses pemanggilan reducer
// subscription => pemanggilan store yang diperlukan

const redux = require('redux')

const createStore = redux.createStore;

const initialState = {
    name : 'Doni',
    age : 20
}

// reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_AGE":
            return{
                ...state,
                age : state.age + 1
            }
        case "CHANGE_NAME":
            return{
                ...state,
                name : action.newName
            }
        default:
            return state;
    }
}

// store
const store = createStore(rootReducer)
console.log(store.getState());

// dispatching action
store.dispatch({
    type : "ADD_AGE"
})

store.dispatch({
    type : "CHANGE_NAME", newName : "Octa"
})

// subscription
store.subscribe( () => {
    console.log("store change", store.getState());
})

console.log(store.getState());