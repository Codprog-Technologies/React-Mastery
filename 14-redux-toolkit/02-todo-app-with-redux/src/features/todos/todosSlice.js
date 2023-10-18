import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: "12df", title: "play cricket", completed: true },
    { id: "32gf", title: "edit videos", completed: false },
];

const todosSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (title) => {
                return {
                    payload: {
                        id: nanoid(),
                        title: title,
                        completed: false,
                    },
                };
            },
        },
        removeTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },
        toggleCompleted: (state, action) => {
            state.forEach((todo) => {
                if (todo.id === action.payload.id) {
                    todo.completed = !todo.completed;
                }
            });
        },
    },
});
export const { addTodo, removeTodo, toggleCompleted } = todosSlice.actions;
export default todosSlice.reducer;
