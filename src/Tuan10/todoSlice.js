import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos2',
    initialState: [],
    reducers: {
        setTodos: (state, action) => {
            return action.payload;
        },
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        editTodo: (state, action) => {
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return action.payload;
                }
                return todo;
            });
        },
    },
});

export const { setTodos, addTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
