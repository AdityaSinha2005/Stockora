import React from "react";
import { Navigate } from "react-router-dom";

import "../dashboard.css";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;