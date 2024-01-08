import { configureStore } from "@reduxjs/toolkit";

import { miniTodoListSlice } from "../components/MiniTodoList";

const store = configureStore({
   reducer: {
      miniTodoList: miniTodoListSlice.reducer,
   },
});

export default store;
