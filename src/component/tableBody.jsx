/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import "./tableBody.css";
import SearchType from "./searchType";
import { allStudentsDetails } from "../redux";
import { useSelector } from "react-redux";
import StudentsComponenet from "./studentDeatils";

function TableBody() {
  const [userSearchName, setSearchName] = useState("");
  const [userSearchTag, setSearchTag] = useState("");
  const [data, SetData] = useState([]);
  const StudentDetails = useSelector(allStudentsDetails);
  const [studentId, setStudentid] = useState();
  const panel = useRef(null);
  const accordion = useRef(null);
  const [accordionElement, setAccordion] = useState(false);

  const getUserSearch = (event) => {
    if (event.target.id === "Name") {
      setSearchName(event.target.value);
    } else {
      setSearchTag(event.target.value);
    }
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
            displayActive={accordionElement}
            panelRef={panel}
            selectedid={studentId}
            accordion={accordion}
            showAccordion={showAccordion.bind(this)}
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
