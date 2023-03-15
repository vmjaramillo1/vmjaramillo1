import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const errorsAdapter = createEntityAdapter({});

const initialState = errorsAdapter.getInitialState();

export const errorSlice = createSlice({
  name: "errorInfo",
  initialState,
  reducers: {
    addError: (state, action) => {
      errorsAdapter.addOne(state, action.payload);
    },
    removeError: (state, action) => {
      errorsAdapter.removeOne(state, action.payload);
    },
  },
});

export const { addError, removeError } = errorSlice.actions;

export default errorSlice.reducer;
