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
  state.tempDetails = newState;
};

export const searchStudent = (state, action) => {
  const type = action.payload.type;
  const searchValue = action.payload.searcValue;
  const studentDetails = action.payload.StudentDetails;
  if (type == "name") {
    const finaldata = studentDetails
      .filter((arrayValues) =>
        arrayValues.fullname.toLowerCase().includes(searchValue.toLowerCase())
      )
      .map((filterData) => {
        return filterData;
      });

    state.tempDetails = finaldata;
  } else {
    if (searchValue != "") {
      let finalObject = [];
      studentDetails.forEach((Objects) => {
        if (Objects.tag.length > 0) {
          Objects.tag.forEach((filter) => {
            if (filter.toLowerCase().includes(searchValue.toLowerCase())) {
              finalObject.push(Objects);
            }
          });
        }
      });
      finalObject = finalObject.filter(
        (ele, ind) =>
          ind === finalObject.findIndex((elem) => elem.id === ele.id)
      );

      state.tempDetails = finalObject;
    } else {
      state.tempDetails = studentDetails;
    }
  }
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
      fullname: data.firstName + " " + data.lastName,
    }));
    state.searchDetails = newState;
    state.tempDetails = newState;
  }
};

export const GitAdd = (state, action) => {
  const loadedPost = action.payload;

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
