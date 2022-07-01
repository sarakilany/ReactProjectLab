import { createSlice } from "@reduxjs/toolkit"

//Intial State
const initialState = {
    todos: [],
    // counter: 0
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)

        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((item, index) => { return index !== action.payload })
        }
    }
});

export const { addTodo, deleteTodo } = todoSlice.actions;