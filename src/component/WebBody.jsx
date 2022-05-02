/* eslint-disable no-unused-vars */
import React from "react";
import "./webBody.css";
import { useEffect } from "react";
import TableBody from "./tableBody";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost, getStatus } from "../redux";

function WebBody() {
  const dispatch = useDispatch();
  const callStatus = useSelector(getStatus);

  useEffect(() => {
    if (callStatus == "idle") {
      dispatch(fetchPost());
    }
  }, [callStatus, dispatch]);

  return (
    <div className="body">
      <TableBody />
    </div>
  );
}

export default WebBody;

// import { useEffect, useState } from "react";
// import {
//   fetchPost,
//   fetchGitHub,
//   getStatus,
//   allStudentsDetails,
// } from "../redux";

// useEffect(() => {
//   if (callStatus == "idle") {
//     // dispatch(fetchPost());
//   }
// }, [callStatus, dispatch]);

// const dispatch = useDispatch();
// const callStatus = useSelector(getStatus);
// // const StudentsDetails = useSelector(allStudentsDetails);

// // const sendValue = () => {
// //   dispatch(fetchGitHub("Anuj16091996"));
// // };

// import { useDispatch, useSelector } from "react-redux";
