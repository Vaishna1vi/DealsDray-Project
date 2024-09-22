/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Button,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const EmployeeList = ({
  employees,
  deleteEmployee,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
  totalCount,
}) => {
  //     const [sortDirection, setSortDirection] = useState('asc');
  // const [sortField, setSortField] = useState('f_Name');

  // const [sortField, setSortField] = useState(null);
  // const [sortDirection, setSortDirection] = useState('asc');  'asc' or 'desc'

  const navigate = useNavigate();
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection((prevDirection) =>
        prevDirection === "asc" ? "desc" : "asc"
      );
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const handleCheckboxChange = (field) => {
    if (sortField === field) {
      setSortField(null); // Reset sort field if checkbox is unchecked
      setSortDirection("asc"); // Optionally reset the direction
    } else {
      handleSort(field); // Call handleSort if checkbox is checked
    }
  };

  const sortedEmployees = [...employees].sort((a, b) => {
    let aValue, bValue;

    if (sortField === "_id") {
      aValue = a._id.toString(); // Ensure it's treated as a string
      bValue = b._id.toString();
    } else {
      aValue =
        sortField === "f_Createdate" ? new Date(a[sortField]) : a[sortField];
      bValue =
        sortField === "f_Createdate" ? new Date(b[sortField]) : b[sortField];
    }

    if (sortField === "_id") {
      return sortDirection === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        {/* <TableHead>
    <TableRow>
        <TableCell >Image</TableCell>
        <TableCell onClick={() => handleSort('f_Name')}>Name</TableCell>
        <TableCell onClick={() => handleSort('f_Email')}>Email</TableCell>
        <TableCell >Mobile No</TableCell>
        <TableCell >Designation</TableCell>
        <TableCell onClick={() => handleSort('f_Gender')}>Gender</TableCell>
        <TableCell >Course</TableCell>
        <TableCell onClick={() => handleSort('f_Createdate')}>Created Date</TableCell>
        <TableCell>Action</TableCell>
    </TableRow>
</TableHead> */}

        <TableHead style={{ backgroundColor: "#43AA8B" }}>
          <TableRow>
            <TableCell align="center">
              <Checkbox
                checked={sortField === "_id"}
                onChange={() => handleCheckboxChange("_id")}
                size="small"
              />
              <span
                style={{
                  marginLeft: "8px",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Employee ID
              </span>
            </TableCell>
            <TableCell
              align="center"
              style={{ fontWeight: "bold", fontSize: "15px" }}
            >
              Image
            </TableCell>
            <TableCell align="center">
              <Checkbox
                checked={sortField === "f_Name"}
                onChange={() => handleCheckboxChange("f_Name")}
                size="small"
              />
              <span
                style={{
                  marginLeft: "8px",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Name
              </span>
            </TableCell>
            <TableCell align="center">
              <Checkbox
                checked={sortField === "f_Email"}
                onChange={() => handleCheckboxChange("f_Email")}
                size="small"
              />
              <span
                style={{
                  marginLeft: "8px",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Email
              </span>
            </TableCell>
            <TableCell
              align="center"
              style={{ fontWeight: "bold", fontSize: "15px" }}
            >
              Mobile No
            </TableCell>
            <TableCell
              align="center"
              style={{ fontWeight: "bold", fontSize: "15px" }}
            >
              Designation
            </TableCell>
            <TableCell align="center">
              <Checkbox
                checked={sortField === "f_Gender"}
                onChange={() => handleCheckboxChange("f_Gender")}
                size="small"
              />
              <span
                style={{
                  marginLeft: "5px",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Gender
              </span>
            </TableCell>
            <TableCell
              align="center"
              style={{ fontWeight: "bold", fontSize: "15px" }}
            >
              Course
            </TableCell>
            <TableCell align="center">
              <Checkbox
                checked={sortField === "f_Createdate"}
                onChange={() => handleCheckboxChange("f_Createdate")}
                size="small"
              />
              <span
                style={{ gap: "8px", fontWeight: "bold", fontSize: "15px" }}
              >
                Created Date
              </span>
            </TableCell>
            <TableCell
              align="center"
              style={{ fontWeight: "bold", fontSize: "15px" }}
            >
              Action
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {sortedEmployees.map((employee) => (
            <TableRow key={employee._id}>
              <TableCell>{employee._id}</TableCell>

              <TableCell>
                {employee.f_Image ? (
                  <img
                    src={`http://localhost:5000/${employee.f_Image}`}
                    alt="Employee"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  "No Image"
                )}
              </TableCell>
              <TableCell>{employee.f_Name}</TableCell>
              <TableCell>{employee.f_Email}</TableCell>
              <TableCell>{employee.f_Mobile}</TableCell>
              <TableCell>{employee.f_Designation}</TableCell>
              <TableCell>{employee.f_Gender}</TableCell>
              <TableCell>{employee.f_Course.join(", ")}</TableCell>
              <TableCell>
                {new Date(employee.f_Createdate).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <Box display="flex" justifyContent="space-between">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => navigate(`/createEmployees/${employee._id}`)}
                    style={{ fontFamily: "sans-serif", margin: "5px", flex: 1 }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => deleteEmployee(employee._id)}
                    style={{ fontFamily: "sans-serif", margin: "5px", flex: 1 }}
                  >
                    Delete
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={totalCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteEmployee: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
};

export default EmployeeList;
