/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./tableBody.css";
import SearchType from "./searchType";
import { allStudentsDetails, number, userID } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import StudentsComponenet from "./studentDeatils";

function TableBody() {
  const [userSearchName, setSearchName] = useState("");
  const [userSearchTag, setSearchTag] = useState("");
  const [data, SetData] = useState([]);
  const StudentDetails = useSelector(allStudentsDetails);
  const [studentId, setStudentid] = useState();

  const getUserSearch = (event) => {
    if (event.target.id === "Name") {
      setSearchName(event.target.value);
    } else {
      setSearchTag(event.target.value);
    }
  };

  const showAccordion = (id) => {
    setStudentid(id);
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
      {StudentDetails.map((studentInfomation, id) => {
        return (
          <StudentsComponenet
            key={id}
            fullname={
              studentInfomation.firstName + " " + studentInfomation.lastName
            }
            city={studentInfomation.city}
            copmany={studentInfomation.company}
            email={studentInfomation.email}
            grades={studentInfomation.grades}
            pic={studentInfomation.pic}
            skill={studentInfomation.skill}
            id={studentInfomation.id}
            showAccordion={showAccordion.bind(this)}
            selectedId={studentId}
            average={
              studentInfomation.grades.reduce((a, b) => a + parseFloat(b), 0) /
              studentInfomation.grades.length
            }
          />
        );
      })}
    </div>
  );
}

export default TableBody;

// const [studentDeails, setStudentDetails] = useState([]);
// const dispatch = useDispatch();
