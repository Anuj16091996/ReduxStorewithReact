/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
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

            <section className="panel" ref={props.panelRef}>
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
      {props.selectedid == props.id && props.displayActive ? (
        <div
          className="accordion active"
          ref={props.accordion}
          onClick={() => props.showAccordion(props.id)}
        ></div>
      ) : (
        <div
          className="accordion"
          ref={props.accordion}
          onClick={() => props.showAccordion(props.id)}
        ></div>
      )}
    </div>
  );
}

export default StudentsDetails;
