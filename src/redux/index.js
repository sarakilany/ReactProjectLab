import { createStore } from 'redux';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
//Actions
export const addTodoAction = (payload) => {
    return {
        type: ADD_TODO,
        payload: payload,
    }
}

export const deleteTodoAction = (payload) => {
    return {
        type: DELETE_TODO,
        payload: payload
    }
}


//Intial State
const initialState = {
    todos: [],
    // counter: 0
}
//Reducer
const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_TODO': return { ...state, todos: [...state.todos, action.payload] }

        case 'DELETE_TODO': return { ...state, todos: [...state.todos.filter((item, index) => { return index !== action.payload })] }
    }
    // if (action.type === ADD_TODO) {
    //     return { ...state, todos: [...state.todos, action.payload] }
    // }
    // if (action.type === DELETE_TODO) {
    //     return { ...state, todos: [...state.todos.filter((item, index) => { return index !== action.payload })] }
    // }
    return state;
}

// const counterReducer = (state = initialState, action)=>{

// }
//Store
export const store = createStore(
    //reducer
    todoReducer

);