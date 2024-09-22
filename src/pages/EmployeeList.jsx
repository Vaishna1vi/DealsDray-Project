/* eslint-disable no-unused-vars */

// import React from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

// const EmployeeList = ({ employees, deleteEmployee }) => {
//   return (
//     <>
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Unique Id</TableCell>
//             <TableCell>Name</TableCell>
//             <TableCell>Email</TableCell>
//             <TableCell>Mobile No</TableCell>
//             <TableCell>Designation</TableCell>
//             <TableCell>Gender</TableCell>
//             <TableCell>Course</TableCell>
//             <TableCell>Create Date</TableCell>
//             <TableCell>Action</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {employees.map((employee, index) => (
//             <TableRow key={employee._id}>
//               <TableCell>{index + 1}</TableCell>
//               <TableCell>{employee.name}</TableCell>
//               <TableCell>{employee.email}</TableCell>
//               <TableCell>{employee.mobileNo}</TableCell>
//               <TableCell>{employee.designation}</TableCell>
//               <TableCell>{employee.gender}</TableCell>
//               <TableCell>{employee.course}</TableCell>
//               <TableCell>{new Date(employee.createDate).toLocaleDateString()}</TableCell>
//               <TableCell>
//                 <Button variant="contained" color="secondary" onClick={() => deleteEmployee(employee._id)}>
//                   Delete
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </>
//   );
// };

// export default EmployeeList;

// src/components/EmployeeTable.js

// import React from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button } from '@mui/material';
// // import DeleteIcon from '@mui/icons-material/Delete';
// import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom'; // Import for navigation



// const EmployeeList = ({ employees, deleteEmployee }) => {
//     const navigate = useNavigate();
//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Image</TableCell>
//             <TableCell>Name</TableCell>
//             <TableCell>Email</TableCell>
//             <TableCell>Mobile No</TableCell>
//             <TableCell>Designation</TableCell>
//             <TableCell>Gender</TableCell>
//             <TableCell>Course</TableCell>
//             <TableCell>Created Date</TableCell>
//             <TableCell>Action</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {employees.map((employee) => (
//             <TableRow key={employee._id}>
//               <TableCell>
//                 {employee.f_Image ? (
//                   <img src={`http://localhost:5000/${employee.f_Image}`} alt="Employee" style={{ width: '50px', height: '50px' }} />
//                 ) : (
//                   'No Image'
//                 )}
//               </TableCell>
//               <TableCell>{employee.f_Name}</TableCell>
//               <TableCell>{employee.f_Email}</TableCell>
//               <TableCell>{employee.f_Mobile}</TableCell>
//               <TableCell>{employee.f_Designation}</TableCell>
//               <TableCell>{employee.f_Gender}</TableCell>
//               <TableCell>{employee.f_Course.join(', ')}</TableCell>
//               <TableCell>{new Date(employee.f_Createdate).toLocaleDateString()}</TableCell>
//               <TableCell>
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 onClick={() => navigate(`/createEmployees/${employee._id}`)} // Navigate to edit form
//                 style={{ margin: '10px', fontFamily: 'sans-serif' }}
//                 >
//                 Edit
//                 </Button>
              
//                 <Button
//                 variant="contained"
//                 color="error"
//                 // onClick={navigateToCreateEmployee}
//                 onClick={() => deleteEmployee(employee._id)}
//                 style={{ margin: '10px', fontFamily: 'sans-serif' }}
//                 >
//                 Delete
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// EmployeeList.propTypes = {
//     employees: PropTypes.arrayOf(PropTypes.object).isRequired,
//     deleteEmployee: PropTypes.func.isRequired,
//   };

// export default EmployeeList;

import React, { useState } from 'react';
import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const EmployeeList = ({ employees, deleteEmployee, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage, totalCount }) => {

//     const [sortDirection, setSortDirection] = useState('asc');
// const [sortField, setSortField] = useState('f_Name');

const [sortField, setSortField] = useState(null);
const [sortDirection, setSortDirection] = useState('asc'); // 'asc' or 'desc'


    const navigate = useNavigate();

    // const handleSort = (field) => {
    //     const direction = sortField === field && sortDirection === 'asc' ? 'desc' : 'asc';
    //     setSortDirection(direction);
    //     setSortField(field);
    //   };

    // const handleSort = (field) => {
    //     if (sortField === field) {
    //       // If the same field is selected, toggle the direction
    //       setSortDirection((prevDirection) => (prevDirection === 'asc' ? 'desc' : 'asc'));
    //     } else {
    //       // Set the new field and reset direction to ascending
    //       setSortField(field);
    //       setSortDirection('asc');
    //     }
    //   };
      
      
    //   const sortedEmployees = [...employees].sort((a, b) => {
    //     if (sortDirection === 'asc') {
    //       return a[sortField] > b[sortField] ? 1 : -1;
    //     } else {
    //       return a[sortField] < b[sortField] ? 1 : -1;
    //     }
    //   });

    // Sort the employees based on the selected field and direction
    // const sortedEmployees = [...employees].sort((a, b) => {
    //     const aValue = sortField === 'f_Createdate' ? new Date(a[sortField]) : a[sortField];
    //     const bValue = sortField === 'f_Createdate' ? new Date(b[sortField]) : b[sortField];
      
    //     if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    //     if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    //     return 0;
    //   });
      
    const handleSort = (field) => {
        if (sortField === field) {
          setSortDirection((prevDirection) => (prevDirection === 'asc' ? 'desc' : 'asc'));
        } else {
          setSortField(field);
          setSortDirection('asc');
        }
      };
    
      const handleCheckboxChange = (field) => {
        if (sortField === field) {
          setSortField(null); // Reset sort field if checkbox is unchecked
        } else {
          handleSort(field); // Call handleSort if checkbox is checked
        }
      };
    
      const sortedEmployees = [...employees].sort((a, b) => {
        const aValue = sortField === 'f_Createdate' ? new Date(a[sortField]) : a[sortField];
        const bValue = sortField === 'f_Createdate' ? new Date(b[sortField]) : b[sortField];
    
        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
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

<TableHead>
  <TableRow>
    <TableCell>Image</TableCell>
    <TableCell>
      <Checkbox
        checked={sortField === 'f_Name'}
        onChange={() => handleCheckboxChange('f_Name')}
        size="small"
      />
      Name
    </TableCell>
    <TableCell>
      <Checkbox
        checked={sortField === 'f_Email'}
        onChange={() => handleCheckboxChange('f_Email')}
        size="small"
      />
      Email
    </TableCell>
    <TableCell>Mobile No</TableCell>
    <TableCell>Designation</TableCell>
    <TableCell>
      <Checkbox
        checked={sortField === 'f_Gender'}
        onChange={() => handleCheckboxChange('f_Gender')}
        size="small"
      />
      Gender
    </TableCell>
    <TableCell>Course</TableCell>
    <TableCell>
      <Checkbox
        checked={sortField === 'f_Createdate'}
        onChange={() => handleCheckboxChange('f_Createdate')}
        size="small"
      />
      Created Date
    </TableCell>
    <TableCell>Action</TableCell>
  </TableRow>
</TableHead>



                <TableBody>
                    {sortedEmployees.map((employee) => (
                        <TableRow key={employee._id}>
                            <TableCell>
                                {employee.f_Image ? (
                                    <img src={`http://localhost:5000/${employee.f_Image}`} alt="Employee" style={{ width: '50px', height: '50px' }} />
                                ) : (
                                    'No Image'
                                )}
                            </TableCell>
                            <TableCell>{employee.f_Name}</TableCell>
                            <TableCell>{employee.f_Email}</TableCell>
                            <TableCell>{employee.f_Mobile}</TableCell>
                            <TableCell>{employee.f_Designation}</TableCell>
                            <TableCell>{employee.f_Gender}</TableCell>
                            <TableCell>{employee.f_Course.join(', ')}</TableCell>
                            <TableCell>{new Date(employee.f_Createdate).toLocaleDateString()}</TableCell>
                            <TableCell>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => navigate(`/createEmployees/${employee._id}`)}
                                    style={{ margin: '10px', fontFamily: 'sans-serif' }}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => deleteEmployee(employee._id)}
                                    style={{ margin: '10px', fontFamily: 'sans-serif' }}
                                >
                                    Delete
                                </Button>
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
