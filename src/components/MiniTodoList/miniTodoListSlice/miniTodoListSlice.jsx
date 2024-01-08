// slice redux-toolkit
import { createSlice } from "@reduxjs/toolkit";

import { STORAGE } from "../../../vendor";

const todosStorage = STORAGE("todosStorage");

const initialState = {
   todos: todosStorage.get("todos") || [],
   todoInput: "",
};

const miniTodoListSlice = createSlice({
   name: "miniTodoList",
   initialState,
   reducers: {
      setTodoInput(state, action) {
         state.todoInput = action.payload;
      },
      setTodos(state, action) {
         state.todos.unshift(action.payload);
         todosStorage.set("todos", state.todos);
      },
      deleteTodo(state, action) {
         state.todos = state.todos.filter((todo) => todo.id !== action.payload);
         todosStorage.set("todos", state.todos);
      },
   },
});

export default miniTodoListSlice;
