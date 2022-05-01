/* eslint-disable no-unused-vars */
import React from "react";
import "./webBody.css";
import { useEffect, useState } from "react";
import {
  fetchPost,
  fetchGitHub,
  getStatus,
  allStudentsDetails,
} from "../redux";
import { useDispatch, useSelector } from "react-redux";
import TableBody from "./tableBody";

function WebBody() {
  const dispatch = useDispatch();
  const callStatus = useSelector(getStatus);
  // const StudentsDetails = useSelector(allStudentsDetails);

  // const sendValue = () => {
  //   dispatch(fetchGitHub("Anuj16091996"));
  // };

  useEffect(() => {
    if (callStatus == "idle") {
      // dispatch(fetchPost());
    }
  }, [callStatus, dispatch]);
  return (
    <div className="body">
      <TableBody />
    </div>
  );
}

export default WebBody;
