/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import PlaceHolder from "../Images/placeholder.png";
import "./studentDetails.css";

class StudentsDetails extends React.Component {
  render() {
    return (
      <div className="contentDisplay">
        <div className="ImageDisplay">
          <img
            className="studentImage"
            src={PlaceHolder}
            alt="Cover_Image"
            height="50px"
            width="50px"
          />
        </div>
        <div className="displayStudentContent">Hello</div>
        <div className="accordion"></div>
      </div>
    );
  }
}

export default StudentsDetails;
