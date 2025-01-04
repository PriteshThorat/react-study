import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{
        id: nanoid(),
        text: "Something",
        completed: false,
        isEditable: false
    }]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
                isEditable: false
            };
            state.todos.push(todo);
        },
        removerTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;

            state.todos.map(todo => {
                if(todo.id === id){
                    todo.text = text;
                }
            });
        },
        toggleComplete: (state, action) => {
            const { id, isToggle } = action.payload;

            state.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = isToggle;
                }
            });
        },
        toggleEditable: (state, action) => {
            const { id, isEditable } = action.payload;

            state.todos.map(todo => {
                if(todo.id === id){
                    todo.isEditable = isEditable;
                }
            });
        }
    }
})

export const { addTodo, removerTodo, updateTodo, toggleComplete, toggleEditable } = todoSlice.actions;

export default todoSlice.reducer;