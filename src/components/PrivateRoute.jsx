/* eslint-disable no-unused-vars */

import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated"); // Check if the user is authenticated

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/" replace />;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
