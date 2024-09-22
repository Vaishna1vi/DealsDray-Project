/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import {
  Container,
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
  Checkbox,
  Button,
  InputLabel,
  FormLabel,
  Paper,
} from "@mui/material";
import { useNavigate, useParams } from "react-router";

const CreateEmployee = () => {
  const [formData, setFormData] = useState({
    f_Name: "",
    f_Email: "",
    f_Mobile: "",
    f_Designation: "",
    f_Gender: "",
    f_Course: [],
    f_Image: "",
  });
  const [existingEmails, setExistingEmails] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false); // To track if it's edit mode
  const { id } = useParams(); // Get the employee ID from the URL if present
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Fetch existing emails from the server
  //   const fetchEmails = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/employees/emails');
  //       setExistingEmails(response.data);
  //     } catch (error) {
  //       console.error('Error fetching emails:', error);
  //     }
  //   };

  //   const fetchEmployeeData = async () => {
  //     if (id) {
  //       setIsEditMode(true);
  //       try {
  //         const response = await axios.get(`http://localhost:5000/employees/${id}`);
  //         console.log('Fetched employee data:', response.data);
  //         setFormData(response.data);
  //       } catch (error) {
  //         toast.error('Error fetching employee data!');
  //         console.error('Error fetching employee data:', error);
  //       }
  //     }
  //   };

  //   fetchEmails();
  //   fetchEmployeeData();
  // }, [id]);

  useEffect(() => {
    if (id) {
      fetchEmployeeData(id); // Fetch employee data if id exists
    }
  }, [id]);

  const fetchEmployeeData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/employees/${id}`);
      setFormData(response.data);
    } catch (error) {
      toast.error("Error fetching employee data!");
      console.error("Error fetching employee data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "course") {
      const newCourses = formData.f_Course.includes(value)
        ? formData.f_Course.filter((course) => course !== value)
        : [...formData.f_Course, value];
      setFormData({ ...formData, f_Course: newCourses });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setFormData({ ...formData, f_Image: file });
    } else {
      toast.error("Please upload a valid image (jpg/png).");
    }
  };

  const validateForm = () => {
    const { f_Email, f_Mobile, f_Name } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(f_Email)) {
      toast.error("Invalid email format.");
      return false;
    }
    // Mobile number must be 10 digits and numeric
    if (!/^\d{10}$/.test(f_Mobile)) {
      toast.error("Mobile number must be 10 digits and numeric.");
      return false;
    }
    if (!isEditMode && existingEmails.includes(f_Email)) {
      // Check for duplicate emails only in create mode
      toast.error("Email already exists.");
      return false;
    }
    if (
      !f_Name ||
      !formData.f_Designation ||
      !formData.f_Gender ||
      formData.f_Course.length === 0
    ) {
      toast.error("Please fill all required fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "f_Course") {
        data.append(key, formData[key].join(","));
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      if (isEditMode) {
        // Update existing employee
        const response = await axios.put(
          `http://localhost:5000/employees/${id}`,
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success(response.data.message);
      } else {
        // Create new employee
        const response = await axios.post(
          "http://localhost:5000/employees",
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success(response.data.message);
      }
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      toast.error(
        error.response ? error.response.data.message : "An error occurred"
      );
    }
  };

  return (
    <>
      <Navbar />

      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
          <Typography variant="h5" align="center" gutterBottom>
            {/* {isEditMode ? 'Edit Employee' : 'Create Employee'} */}
            {id ? "Edit Employee" : "Create Employee"}
          </Typography>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="f_Name"
              value={formData.f_Name}
              onChange={handleChange}
              required
            />

            {/* Email */}
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              name="f_Email"
              value={formData.f_Email}
              onChange={handleChange}
              required
              disabled={isEditMode} // Disable email editing in edit mode
            />

            {/* Mobile */}
            <TextField
              label="Mobile No"
              variant="outlined"
              fullWidth
              margin="normal"
              type="tel"
              name="f_Mobile"
              value={formData.f_Mobile}
              onChange={handleChange}
              required
            />

            {/* Designation */}
            <FormControl fullWidth margin="normal" variant="outlined">
              <InputLabel id="designation-label">Designation</InputLabel>
              <Select
                labelId="designation-label"
                id="designation"
                label="Designation"
                name="f_Designation"
                value={formData.f_Designation}
                onChange={handleChange}
                required
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="HR">HR</MenuItem>
                <MenuItem value="Manager">Manager</MenuItem>
                <MenuItem value="Sales">Sales</MenuItem>
              </Select>
            </FormControl>

            {/* Gender */}
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                name="f_Gender"
                value={formData.f_Gender}
                onChange={handleChange}
                required
              >
                <FormControlLabel value="M" control={<Radio />} label="Male" />
                <FormControlLabel
                  value="F"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>

            {/* Course */}
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">Course</FormLabel>
              <Box>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="course"
                      value="MCA"
                      onChange={handleChange}
                      checked={formData.f_Course.includes("MCA")}
                    />
                  }
                  label="MCA"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="course"
                      value="BCA"
                      onChange={handleChange}
                      checked={formData.f_Course.includes("BCA")}
                    />
                  }
                  label="BCA"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="course"
                      value="BSC"
                      onChange={handleChange}
                      checked={formData.f_Course.includes("BSC")}
                    />
                  }
                  label="BSC"
                />
              </Box>
            </FormControl>

            {/* Image Upload */}
            <Button
              variant="contained"
              component="label"
              fullWidth
              sx={{ marginTop: 2, marginBottom: 2 }}
            >
              {/* {isEditMode ? 'Update Image' : 'Upload Image'} */}
              {id ? "Update Image" : "Upload Image"}
              <input
                type="file"
                name="f_Image"
                accept=".jpg,.png"
                value={formData.f_Image}
                onChange={handleFileChange}
                hidden
              />
            </Button>

            {/* Submit Button */}
            <Button type="submit" variant="contained" color="success" fullWidth>
              {/* {isEditMode ? 'Update Employee' : 'Create Employee'} */}
              {id ? "Update Employee" : "Create Employee"}
            </Button>
          </form>
        </Paper>
        <ToastContainer />
      </Container>
    </>
  );
};

export default CreateEmployee;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Navbar from '../components/Navbar';
// import {
//   Container,
//   Box,
//   Typography,
//   TextField,
//   Select,
//   MenuItem,
//   RadioGroup,
//   FormControl,
//   FormControlLabel,
//   Radio,
//   Checkbox,
//   Button,
//   InputLabel,
//   FormLabel,
//   Paper,
// } from '@mui/material';
// import { useNavigate, useParams } from 'react-router';

// const CreateEmployee = () => {
//   const [formData, setFormData] = useState({
//     f_Name: '',
//     f_Email: '',
//     f_Mobile: '',
//     f_Designation: '',
//     f_Gender: '',
//     f_Course: [],
//     f_Image: '',
//   });
//   const { id } = useParams(); // Get the employee ID from the URL if present
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (id) {
//       fetchEmployeeData(id); // Fetch employee data if id exists
//     }
//   }, [id]);

//   const fetchEmployeeData = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/employees/${id}`);
//       setFormData(response.data);
//     } catch (error) {
//       toast.error('Error fetching employee data!');
//       console.error('Error fetching employee data:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'course') {
//       const newCourses = formData.f_Course.includes(value)
//         ? formData.f_Course.filter((course) => course !== value)
//         : [...formData.f_Course, value];
//       setFormData({ ...formData, f_Course: newCourses });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
//       setFormData({ ...formData, f_Image: file });
//     } else {
//       toast.error('Please upload a valid image (jpg/png).');
//     }
//   };

//   const validateForm = () => {
//     const { f_Email, f_Mobile, f_Name } = formData;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(f_Email)) {
//       toast.error('Invalid email format.');
//       return false;
//     }
//     // Mobile number must be 10 digits and numeric
//     if (!/^\d{10}$/.test(f_Mobile)) {
//       toast.error('Mobile number must be 10 digits and numeric.');
//       return false;
//     }
//     if (!f_Name || !formData.f_Designation || !formData.f_Gender || formData.f_Course.length === 0) {
//       toast.error('Please fill all required fields.');
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     const data = new FormData();
//     Object.keys(formData).forEach((key) => {
//       if (key === 'f_Course') {
//         data.append(key, formData[key].join(','));
//       } else {
//         data.append(key, formData[key]);
//       }
//     });

//     try {
//       if (id) {
//         // Update existing employee
//         const response = await axios.put(`http://localhost:5000/employees/${id}`, data, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         toast.success(response.data.message);
//       } else {
//         // Create new employee
//         const response = await axios.post('http://localhost:5000/employees', data, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         toast.success(response.data.message);
//       }
//       setTimeout(() => {
//         navigate('/dashboard');
//       }, 2000);
//     } catch (error) {
//       toast.error(error.response ? error.response.data.message : 'An error occurred');
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <Container maxWidth="sm">
//         <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
//           <Typography variant="h5" align="center" gutterBottom>
//             {id ? 'Edit Employee' : 'Create Employee'}
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             {/* Name */}
//             <TextField
//               label="Name"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="f_Name"
//               value={formData.f_Name}
//               onChange={handleChange}
//               required
//             />

//             {/* Email */}
//             <TextField
//               label="Email"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               type="email"
//               name="f_Email"
//               value={formData.f_Email}
//               onChange={handleChange}
//               required
//               // disabled={id} // Disable email editing in edit mode
//             />

//             {/* Mobile */}
//             <TextField
//               label="Mobile No"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               type="tel"
//               name="f_Mobile"
//               value={formData.f_Mobile}
//               onChange={handleChange}
//               required
//             />

//             {/* Designation */}
//             <FormControl fullWidth margin="normal" variant="outlined">
//               <InputLabel id="designation-label">Designation</InputLabel>
//               <Select
//                 labelId="designation-label"
//                 id="designation"
//                 label="Designation"
//                 name="f_Designation"
//                 value={formData.f_Designation}
//                 onChange={handleChange}
//                 required
//               >
//                 <MenuItem value="">Select</MenuItem>
//                 <MenuItem value="HR">HR</MenuItem>
//                 <MenuItem value="Manager">Manager</MenuItem>
//                 <MenuItem value="Sales">Sales</MenuItem>
//               </Select>
//             </FormControl>

//             {/* Gender */}
//             <FormControl component="fieldset" margin="normal">
//               <FormLabel component="legend">Gender</FormLabel>
//               <RadioGroup row name="f_Gender" value={formData.f_Gender} onChange={handleChange} required>
//                 <FormControlLabel value="M" control={<Radio />} label="Male" />
//                 <FormControlLabel value="F" control={<Radio />} label="Female" />
//               </RadioGroup>
//             </FormControl>

//             {/* Course */}
//             <FormControl component="fieldset" margin="normal">
//               <FormLabel component="legend">Course</FormLabel>
//               <Box>
//                 <FormControlLabel
//                   control={<Checkbox name="course" value="MCA" onChange={handleChange} checked={formData.f_Course.includes('MCA')} />}
//                   label="MCA"
//                 />
//                 <FormControlLabel
//                   control={<Checkbox name="course" value="BCA" onChange={handleChange} checked={formData.f_Course.includes('BCA')} />}
//                   label="BCA"
//                 />
//                 <FormControlLabel
//                   control={<Checkbox name="course" value="BSC" onChange={handleChange} checked={formData.f_Course.includes('BSC')} />}
//                   label="BSC"
//                 />
//               </Box>
//             </FormControl>

//             {/* Image Upload */}
//             <Button variant="contained" component="label" fullWidth sx={{ marginTop: 2, marginBottom: 2 }}>
//               {id ? 'Update Image' : 'Upload Image'}
//               <input
//                 type="file"
//                 name="f_Image"
//                 accept=".jpg,.png"
//                 onChange={handleFileChange}
//                 hidden
//               />
//             </Button>

//             {/* Submit Button */}
//             <Button type="submit" variant="contained" color="success" fullWidth>
//               {id ? 'Update Employee' : 'Create Employee'}
//             </Button>
//           </form>
//         </Paper>
//         <ToastContainer />
//       </Container>
//     </>
//   );
// };

// export default CreateEmployee;
