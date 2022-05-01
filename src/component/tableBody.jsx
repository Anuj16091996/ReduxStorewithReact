/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./tableBody.css";
import SearchType from "./searchType";
import PlaceHolder from "../Images/placeholder.png";

function TableBody() {
  const [userSearchName, setSearchName] = useState([]);
  const [userSearchTag, setSearchTag] = useState([]);

  const getUserSearch = (event) => {
    if (event.target.id === "Name") {
      setSearchName(event.target.value);
    } else {
      setSearchTag(event.target.value);
    }
  };

  return (
    <div className="displayBody">
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
    </div>
  );
}

export default TableBody;
