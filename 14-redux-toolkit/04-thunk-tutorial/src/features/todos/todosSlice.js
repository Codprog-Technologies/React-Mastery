import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchTodos = createAsyncThunk("todos/fetch", async () => {
    const response = await axios.get("http://localhost:8001/todos");
    // await pause(1500);
    return response.data;
});

export const addTodo = createAsyncThunk("todos/add", async (title) => {
    const response = await axios.post("http://localhost:8001/todos", {
        title: title,
        completed: false,
    });
    // await pause(1500);
    return response.data;
});
export const deleteTodo = createAsyncThunk("todos/delete", async (id) => {
    const response = await axios.delete(`http://localhost:8001/todos/${id}`);
    return id;
});
export const toggleTodo = createAsyncThunk(
    "todos/toggle",
    async ({ id, completed }) => {
        const response = await axios.patch(
            `http://localhost:8001/todos/${id}`,
            { completed: !completed }
        );
        console.log(response.data);
        return response.data;
    }
);

const pause = (duaration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duaration);
    });
};
// fulfilled
// rejected
// pending

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        data: [],
    },
    extraReducers: (builders) => {
        builders.addCase(fetchTodos.pending, (state, action) => {
            console.log("fetch todos, pending state ....");
        });
        builders.addCase(fetchTodos.fulfilled, (state, action) => {
            console.log("fetch todos, fulfilled state ....");

            state.data = action.payload;
        });
        builders.addCase(fetchTodos.rejected, (state, action) => {
            console.log("fetch todos, rejected state ....");
        });
        builders.addCase(addTodo.pending, (state, action) => {
            console.log("add todo, pending state ....");
        });
        builders.addCase(addTodo.fulfilled, (state, action) => {
            console.log("add todo, fulfilled state ....");
            state.data.push(action.payload);
        });
        builders.addCase(addTodo.rejected, (state, action) => {
            console.log("add todo, rejected state ....");
        });
        builders.addCase(deleteTodo.pending, (state, action) => {
            console.log("deleteTodo, pending state ....");
        });
        builders.addCase(deleteTodo.fulfilled, (state, action) => {
            console.log("deleteTodo, fulfilled state ....");
            state.data = state.data.filter(
                (todo) => todo.id !== action.payload
            );
        });
        builders.addCase(deleteTodo.rejected, (state, action) => {
            console.log("deleteTodo, rejected state ....");
        });
        builders.addCase(toggleTodo.pending, (state, action) => {
            console.log("toggleTodo, pending state ....");
        });
        builders.addCase(toggleTodo.fulfilled, (state, action) => {
            console.log("toggleTodo, fulfilled state ....");
            state.data.forEach((todo) => {
                if (todo.id === action.payload.id) {
                    todo.completed = action.payload.completed;
                }
            });
        });
        builders.addCase(toggleTodo.rejected, (state, action) => {
            console.log("toggleTodo, rejected state ....");
        });
    },
});

export const todosReducer = todosSlice.reducer;
