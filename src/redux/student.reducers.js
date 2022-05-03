/* eslint-disable no-unused-vars */
export const setStudentID = (state, action) => {
  state.userID = action.payload;
};

export function Decrement(state, action) {
  state.counter += action.payload;
}

export const postsRequested = (state, action) => {
  state.status = "loading";
};

export const saveGitDetails = (state, action) => {
  const loadedPost = action.payload;
  state.gitHub = state.gitHub.concat(loadedPost);
};

export const postsRecived = (state, action) => {
  if (state.status != "Sucess") {
    state.status = "Sucess";
    const loadedPost = action.payload;
    state.students = state.students.concat(loadedPost.students);
  }
};

export const GitAdd = (state, action) => {
  const loadedPost = action.payload;
  console.log("loadedPost.login");
  state.gitHub = state.gitHub.concat(loadedPost);
};

export const postReuestFailed = (state, action) => {
  state.status = "Failed";
  state.error = action.error.message;
};
