/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Navbar = () => {
  const [username, setUsername] = useState("");
  const location = useLocation();

  // Retrieve the username from local storage and set it in state
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  // Logout function to clear authentication data
  const logout = () => {
    // Remove all authentication data from local storage
    localStorage.removeItem("authToken"); // Assuming you store a token
    localStorage.removeItem("username"); // If you store the username
    localStorage.removeItem("isAuthenticated"); // Remove isAuthenticated flag

    // Navigate to the login page with a full page reload to clear state
    window.location.href = "/";
  };

  return (
    <AppBar
      position="static"
      style={{
        margin: 0,
        width: "100%",
        backgroundColor: "#254441",
        color: "wheat",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left side - Logo or App Name */}
        <Typography variant="h6" component="div">
          DealsDray Employee Management
        </Typography>

        {/* Center - Username */}
        {username && (
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Welcome, {username}
          </Typography>
        )}

        {/* Right side - Navigation Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {/* Conditional rendering for 'Create Employees' or 'Back to Employee List' */}
          {location.pathname === "/dashboard" && (
            <Button
              variant="contained"
              style={{ backgroundColor: "#43AA8B" }}
              component={Link}
              to="/createEmployees"
            >
              Create Employees
            </Button>
          )}
          {location.pathname !== "/dashboard" && (
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/dashboard"
            >
              Back to Employee List
            </Button>
          )}

          {/* Logout Button */}
          <Button
            variant="contained"
            style={{ backgroundColor: "#DB504A" }}
            onClick={logout}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
