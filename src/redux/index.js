/* eslint-disable no-unused-vars */

import {
  studentData,
  Decrement,
  postReuestFailed,
  postsRecived,
  postsRequested,
  saveGitDetails,
} from "./student.reducers";
import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

const initialState = {
  students: [],
  gitHub: [],
  value: 0,
  status: "idle", //idle, loading, suceed, failed
  error: "",
  loaded: false,
};

export const fetchPost = createAsyncThunk("fetchPost", async () => {
  try {
    const response = await fetch(
      "https://api.hatchways.io/assessment/students"
    );

    return response.json();
  } catch (error) {
    return error.message;
  }
});

export const fetchGitHub = createAsyncThunk("fetcAPI", async (object) => {
  console.log(object);
  try {
    const response = await fetch("https://api.github.com/users/" + object);
    return response.json();
  } catch (error) {
    return error.message;
  }
});

const counterSlice = createSlice({
  name: "Counter",
  initialState: initialState,
  reducers: {
    incer: studentData,
    decrement: Decrement,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, postsRequested)
      .addCase(fetchPost.fulfilled, postsRecived)
      .addCase(fetchPost.rejected, postReuestFailed)
      .addCase(fetchGitHub.fulfilled, saveGitDetails);
  },
});

export const allStudentsDetails = (state) => state.students;

export const getStatus = (state) => state.status;

export const geterror = (state) => state.error;

export const number = (state) => state.value;

export const actions = counterSlice.actions;

const dataStore = configureStore({
  reducer: counterSlice.reducer,
});

export default dataStore;
