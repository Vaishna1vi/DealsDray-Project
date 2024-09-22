/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  AppBar,
  Toolbar,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/register", {
        username,
        password,
      });
      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setUsername("");
      setPassword("");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again.",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    }
  };

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "#254441" }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, color: "wheat" }}>
            DealsDray Employee Management System
          </Typography>
        </Toolbar>
      </AppBar>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Container
        component="main"
        maxWidth="xs"
        style={{ marginTop: "50px", padding: "20px" }}
      >
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h5" component="h1" gutterBottom>
            Register
          </Typography>
          <form onSubmit={handleRegister}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" color="success" fullWidth>
              Register
            </Button>
            <Typography
              variant="body2"
              style={{ marginTop: "10px", textAlign: "center" }}
            >
              Already have an account?{" "}
              <Button color="primary" onClick={() => navigate("/")}>
                Login
              </Button>
            </Typography>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default Registration;
