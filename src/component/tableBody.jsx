/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import "./tableBody.css";
import SearchType from "./searchType";
import { allStudentsDetails, actions, studentSearch } from "../redux";
import { useSelector, useDispatch } from "react-redux";
import StudentsComponenet from "./studentDeatils";

function TableBody() {
  const textElements = [];
  const [userSearchName, setSearchName] = useState("");
  const [userSearchTag, setSearchTag] = useState("");
  const StudentDetails = useSelector(studentSearch);
  // const StudentDetails = useSelector(allStudentsDetails);
  const [studentId, setStudentid] = useState();
  const [accordionElement, setAccordion] = useState(false);
  const dispatch = useDispatch();
  // const searchStudent = useSelector(studentSearch);

  const getUserSearch = (event) => {
    if (event.target.id === "Name") {
      setSearchName(event.target.value);
    } else {
      setSearchTag(event.target.value);
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

// const [studentDeails, setStudentDetails] = useState([]);
// const dispatch = useDispatch();

// rerender ? setRender(false) : setRender(true);
// const pannel = panel.current;
// const accordionEle = accordion.current;
// if (accordionEle.className == "accordion") {
//   accordionEle.className = "accordion active";
//   console.log(accordionEle);
// } else {
//   accordionEle.className = "accordion";
//   console.log(accordionEle);
// }

// const [rerender, setRender] = useState(false);
// accordion={accordion}
// panelRef={panel}
// const panel = useRef(null);
// const accordion = useRef(null);
// const [data, SetData] = useState([]);
