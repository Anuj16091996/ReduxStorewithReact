/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import PlaceHolder from "../Images/placeholder.png";
import "./studentDetails.css";

function StudentsDetails(props) {
  return (
    <div className="contentDisplay">
      <div className="ImageDisplay">
        <img
          className="studentImage"
          src={props.pic}
          alt="Cover_Image"
          height="50px"
          width="50px"
        />
      </div>
      <div className="displayStudentContent">
        <table>
          <tbody className="tableContent">
            <tr>
              <td>
                <h3 className="titleAlign">
                  <b>{props.fullname}</b>
                </h3>
              </td>
            </tr>
            <tr>
              <td>Email: {props.email}</td>
            </tr>
            <tr>
              <td>Company: {props.copmany}</td>
            </tr>

            <tr>
              <td>Skill: {props.skill}</td>
            </tr>

            <tr>
              <td>Average: {props.average}</td>
            </tr>

            {props.selectedId != undefined
              ? console.log(props.selectedId)
              : null}

            <section className="panel">
              <table>
                <tbody>
                  {props.grades.map((data, id) => {
                    return (
                      <tr key={id}>
                        <td>
                          Test{id + 1}: {data}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>
          </tbody>
        </table>
      </div>
      <div className="accordion" onClick={() => props.showAccordion(props.id)}>
        {props.selectedId != undefined ? console.log(props.selectedId) : null};
      </div>
    </div>
  );
}

export default StudentsDetails;

{
  /* {this.props.id} */
}
