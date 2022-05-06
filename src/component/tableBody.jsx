/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import "./tableBody.css";
import SearchType from "./searchType";
import { actions, studentSearch, renderDetails } from "../redux";
import { useSelector, useDispatch } from "react-redux";
import StudentsComponenet from "./studentDeatils";

function TableBody() {
  const studentSearchDetails = useSelector(studentSearch);
  const renderStudent = useSelector(renderDetails);
  const [studentId, setStudentid] = useState();
  const [accordionElement, setAccordion] = useState(false);
  const dispatch = useDispatch();

  const getUserSearch = (event) => {
    if (event.target.id === "Name") {
      const object = {
        StudentDetails: studentSearchDetails,
        type: "name",
        searcValue: event.target.value,
      };
      dispatch(actions.searchData(object));
    } else {
      const object = {
        StudentDetails: studentSearchDetails,
        type: "tag",
        searcValue: event.target.value,
      };
      dispatch(actions.searchData(object));
    }
  };

  const addTag = (StudentId, event) => {
    const userInput = event.target.value;
    event.target.value = "";
    const object = {
      tagDetails: userInput,
      studentId: StudentId,
    };
    dispatch(actions.setTag(object));
  };

  const showAccordion = (id) => {
    if (studentId != id) {
      setStudentid(id);
      setAccordion(true);
    } else {
      accordionElement ? setAccordion(false) : setAccordion(true);
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

      <br></br>
      {renderStudent.map((studentInfomation, id) => {
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
            tag={studentInfomation.tag}
            displayActive={accordionElement}
            selectedid={studentId}
            showAccordion={showAccordion.bind(this)}
            addTag={addTag.bind(this)}
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
