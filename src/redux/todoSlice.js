import { createSlice } from "@reduxjs/toolkit";

const savedTodos =
  JSON.parse(localStorage.getItem("todos")) || [];

const todoSlice = createSlice({
  name: "todos",

  initialState: {
    list: savedTodos,
    filter: "all",
  },

  reducers: {

    addTodo: (state, action) => {
      state.list.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });

      localStorage.setItem(
        "todos",
        JSON.stringify(state.list)
      );
    },

    deleteTodo: (state, action) => {
      state.list = state.list.filter(
        todo => todo.id !== action.payload
      );

      localStorage.setItem(
        "todos",
        JSON.stringify(state.list)
      );
    },

    toggleTodo: (state, action) => {

      const todo = state.list.find(
        t => t.id === action.payload
      );

      todo.completed = !todo.completed;

      localStorage.setItem(
        "todos",
        JSON.stringify(state.list)
      );
    },

    editTodo: (state, action) => {

      const todo = state.list.find(
        t => t.id === action.payload.id
      );

      todo.text = action.payload.text;

      localStorage.setItem(
        "todos",
        JSON.stringify(state.list)
      );
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },

  },
});

export const {
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
  setFilter,
} = todoSlice.actions;

export default todoSlice.reducer;