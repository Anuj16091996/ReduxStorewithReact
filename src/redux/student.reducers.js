/* eslint-disable no-unused-vars */
export const setStudentID = (state, action) => {
  state.userID = action.payload;
};

export const setStudentTag = (state, action) => {
  const studentId = action.payload.studentId;
  const tagDetails = action.payload.tagDetails;
  const oldstate = state.searchDetails;
  const newState = oldstate.map((data) => {
    if (data.id == studentId) data.tag.push(tagDetails);

    return data;
  });
  state.searchDetails = newState;
};

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

    const newState = state.students.map((data) => ({
      ...data,
      tag: [],
    }));
    state.searchDetails = newState;
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

// Object.preventExtensions(student2);
// const student = action.payload.studentDetails;
// state.searchDetails = action.payload.studentDetails;
// state.searchDetails.map((data) => {
//   data["tag"] = [];
// });
