/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar';
// import EmployeeList from './EmployeeList';
// // import { response } from 'express';

// const Dashboard = () => {
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     // Retrieve username from local storage
//     const storedUsername = localStorage.getItem('username');
//     console.log('Retrieved username:', storedUsername);
//     if (storedUsername) {
//       setUsername(storedUsername);
//     }
//   }, []);

//   return (
//     <>
//     <div>
//         <Navbar />
//       <h1>Welcome, {username}</h1>
//       <EmployeeList />
//     </div>
//     </>
//   );
// };

// export default Dashboard;

// src/pages/Dashboard.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Typography, Button } from '@mui/material';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
// import EmployeeList from './EmployeeList';

// const Dashboard = () => {
//   const [employees, setEmployees] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/employees');
//       setEmployees(response.data);
//       toast.success('Employee list fetched successfully!');
//     } catch (error) {
//       toast.error('Error fetching employee list!');
//       console.error('Error fetching employees:', error);
//     }
//   };

//   const deleteEmployee = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/employees/${id}`);
//       fetchEmployees(); // Refresh the list after deletion
//       toast.success('Employee deleted successfully!');
//     } catch (error) {
//       toast.error('Error deleting employee!');
//       console.error('Error deleting employee:', error);
//     }
//   };

//   const navigateToCreateEmployee = () => {
//     navigate('/createEmployees');
//   };

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom align="center">
//         Employee Dashboard
//       </Typography>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={navigateToCreateEmployee}
//         style={{ marginBottom: '20px' }}
//       >
//         Create Employee
//       </Button>
//       <EmployeeList employees={employees} deleteEmployee={deleteEmployee} />
//       <ToastContainer position="bottom-right" autoClose={3000} />
//     </Container>
//   );
// };

// export default Dashboard;

// src/pages/Dashboard.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Typography, Button } from '@mui/material';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
// import EmployeeList from './EmployeeList';
// import Navbar from '../components/Navbar';


// const Dashboard = () => {
//   const [employees, setEmployees] = useState([]);
//   const navigate = useNavigate();

//   // Fetch employees on component mount
//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   // Function to fetch employees
//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/employees'); // URL must match your backend route
//       setEmployees(response.data);
//       toast.success('Employee list fetched successfully!');
//     } catch (error) {
//       toast.error('Error fetching employee list!');
//       console.error('Error fetching employees:', error);
//     }
//   };

//   // Function to delete an employee
//   // const deleteEmployee = async (id) => {
//   //   alert("Your data will be deleted forever.")
//   //   try {
//   //     await axios.delete(`http://localhost:5000/employees/${id}`);
//   //     fetchEmployees(); // Refresh the list after deletion
//   //     toast.success('Employee deleted successfully!');
//   //   } catch (error) {
//   //     toast.error('Error deleting employee!');
//   //     console.error('Error deleting employee:', error);
//   //   }
//   // };

//   const deleteEmployee = async (id) => {
//     if (!id) {
//       console.error('Employee ID is missing');
//       return;
//     }
  
//     // Confirm deletion
//     if (!window.confirm("Are you sure you want to delete this employee? This action cannot be undone.")) {
//       return;
//     }
  
//     try {
//       const response = await axios.delete(`http://localhost:5000/employees/${id}`);
//       console.log('Delete response:', response.data);
  
//       fetchEmployees(); // Refresh the list after deletion
//       toast.success('Employee deleted successfully!');
//     } catch (error) {
//       toast.error('Error deleting employee!');
//       console.error('Error deleting employee:', error);
//     }
//   };
  

//   // Navigate to create employee page
//   const navigateToCreateEmployee = () => {
//     navigate('/createEmployees');
//   };

//   return (
//     <>
//     <Navbar />
//     <Container>
//       <Typography variant="h4" gutterBottom align="center" style={{marginTop: '20px'}}>
//         Employee Dashboard
//       </Typography>
//       {/* <Button
//         variant="contained"
//         color="primary"
//         onClick={navigateToCreateEmployee}
//         style={{ marginBottom: '20px' }}
//       >
//         Create Employee
//       </Button> */}
//       <EmployeeList employees={employees} deleteEmployee={deleteEmployee} />
//       <ToastContainer position="bottom-right" autoClose={3000} />
//     </Container>
//     </>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Button, TextField } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import EmployeeList from './EmployeeList';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:5000/employees');
      setEmployees(response.data);
      toast.success('Employee list fetched successfully!');
    } catch (error) {
      toast.error('Error fetching employee list!');
      console.error('Error fetching employees:', error);
    }
  };

  const deleteEmployee = async (id) => {
    if (!id) {
      console.error('Employee ID is missing');
      return;
    }

    if (!window.confirm("Are you sure you want to delete this employee? This action cannot be undone.")) {
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/employees/${id}`);
      fetchEmployees();
      toast.success('Employee deleted successfully!');
    } catch (error) {
      toast.error('Error deleting employee!');
      console.error('Error deleting employee:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setPage(0); // Reset to the first page when searching
  };

  const filteredEmployees = employees.filter((employee) =>
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
        <Typography variant="h4" gutterBottom align="center" style={{marginTop: '20px'}}>
          Employee Dashboard
        </Typography>
        <TextField
          label="Search"
          variant="outlined"
          onChange={handleSearch}
          value={searchTerm}
          style={{ marginBottom: '20px' }}
        />
        <EmployeeList
          employees={filteredEmployees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)}
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

