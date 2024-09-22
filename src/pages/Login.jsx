/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import axios from "axios";
import {
  AppBar,
  Toolbar,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Link,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      const { token } = response.data;

      localStorage.setItem("authToken", token);
      localStorage.setItem("username", username);
      localStorage.setItem("isAuthenticated", true);

      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 3000,
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (error) {
      const message =
        error.response?.data?.message || "An error occurred. Please try again.";
      toast.error(message, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <AppBar position="static" style={{ backgroundColor: "#254441" }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, color: "wheat" }}>
            DealsDray Employee Management System
          </Typography>
        </Toolbar>
      </AppBar>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
          <Typography variant="h5" component="h1" gutterBottom align="center">
            Login
          </Typography>
          <form onSubmit={handleLogin}>
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Login
            </Button>
          </form>
          <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
            Don't have an account?{" "}
            <Link href="/register" variant="body2">
              Register
            </Link>
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default Login;
