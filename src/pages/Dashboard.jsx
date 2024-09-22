/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography, Button, TextField, Box } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import EmployeeList from "./EmployeeList";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Checking authentication...");
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/");
    } else {
      console.log("Fetching employees...");
      fetchEmployees();
    }
  }, [navigate]);

  const fetchEmployees = async () => {
    if (employees.length > 0) return;

    try {
      const response = await axios.get("http://localhost:5000/employees");
      setEmployees(response.data);
      toast.success("Employee list fetched successfully!");
    } catch (error) {
      toast.error("Error fetching employee list!");
      console.error("Error fetching employees:", error);
    }
  };

  const deleteEmployee = async (id) => {
    if (!id) {
      console.error("Employee ID is missing");
      return;
    }

    if (
      !window.confirm(
        "Are you sure you want to delete this employee? This action cannot be undone."
      )
    ) {
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/employees/${id}`);
      fetchEmployees();
      toast.success("Employee deleted successfully!");
    } catch (error) {
      toast.error("Error deleting employee!");
      console.error("Error deleting employee:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setPage(0);
  };

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.f_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.f_Email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          style={{
            marginTop: "20px",
            fontWeight: "bolder",
            color: "#254441",
            textTransform: "uppercase",
            fontStyle: "normal",
          }}
        >
          Employee Dashboard
        </Typography>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ marginBottom: "20px" }}
        >
          <TextField
            label="Search"
            variant="outlined"
            onChange={handleSearch}
            value={searchTerm}
            style={{
              backgroundColor: "#f5f5f5",
              borderRadius: "5px",
              width: "300px",
            }}
            InputProps={{
              style: {
                color: "#333",
              },
              sx: {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
              },
            }}
          />
        </Box>

        <EmployeeList
          employees={filteredEmployees.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
          )}
          deleteEmployee={deleteEmployee}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          totalCount={filteredEmployees.length}
        />
        <ToastContainer position="bottom-right" autoClose={3000} />
      </Container>
    </>
  );
};

export default Dashboard;
