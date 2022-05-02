/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./tableBody.css";
import SearchType from "./searchType";
import PlaceHolder from "../Images/placeholder.png";
import { fetchPost, getStatus, allStudentsDetails } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import StudentsComponenet from "./studentDeatils";

function TableBody() {
  const [userSearchName, setSearchName] = useState("");
  const [userSearchTag, setSearchTag] = useState("");
  const [data, SetData] = useState([]);

  const StudentDetails = useSelector(allStudentsDetails);

  const getUserSearch = (event) => {
    if (event.target.id === "Name") {
      setSearchName(event.target.value);
    } else {
      setSearchTag(event.target.value);
    }
  };

  return (
    <div className="displayBody scrollobject">
      <div className="inputDisplay">
        <SearchType
          placeholder="Search By Name"
          id="Name"
          getUserType={getUserSearch.bind(this)}
        />
      </div>

      <div className="inputDisplay">
        <SearchType
          placeholder="Search By Tag"
          id="Tag"
          getUserType={getUserSearch.bind(this)}
        />
      </div>

      {console.log(StudentDetails)}

      <StudentsComponenet />
    </div>
  );
}

export default TableBody;

// const [studentDeails, setStudentDetails] = useState([]);
// const dispatch = useDispatch();
