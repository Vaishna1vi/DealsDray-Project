/* eslint-disable no-unused-vars */

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateEmployee from "./pages/CreateEmployee";
import PrivateRoute from "./components/PrivateRoute";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/createEmployees"
        element={
          <PrivateRoute>
            <CreateEmployee />
          </PrivateRoute>
        }
      />
      <Route
        path="/createEmployees/:id"
        element={
          <PrivateRoute>
            <CreateEmployee />
          </PrivateRoute>
        }
      />
    </Routes>
  </Router>
);

export default App;
