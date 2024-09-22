// /* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Navbar from '../components/Navbar';

// const CreateEmployee = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     designation: '',
//     gender: '',
//     course: [],
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'course') {
//       const newCourses = formData.course.includes(value)
//         ? formData.course.filter(course => course !== value)
//         : [...formData.course, value];
//       setFormData({ ...formData, [name]: newCourses });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     Object.keys(formData).forEach(key => {
//       if (key === 'course') {
//         data.append(key, formData[key].join(','));
//       } else {
//         data.append(key, formData[key]);
//       }
//     });

//     try {
//       const response = await axios.post('http://localhost:5000/create-employee', data);
//       toast.success(response.data.message);
//     } catch (error) {
//       toast.error(error.response ? error.response.data.message : 'An error occurred');
//     }
//   };

//   return (
//     <>
//     <Navbar />
    
//     <div className="container mx-auto p-8">
//       <h2 className="text-2xl font-bold mb-4">Create Employee</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label>Name:</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required className="border rounded w-full p-2" />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required className="border rounded w-full p-2" />
//         </div>
//         <div>
//           <label>Mobile No:</label>
//           <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required className="border rounded w-full p-2" />
//         </div>
//         <div>
//           <label>Designation:</label>
//           <select name="designation" value={formData.designation} onChange={handleChange} required className="border rounded w-full p-2">
//             <option value="">Select</option>
//             <option value="HR">HR</option>
//             <option value="Manager">Manager</option>
//             <option value="Sales">Sales</option>
//           </select>
//         </div>
//         <div>
//           <label>Gender:</label>
//           <div>
//             <label><input type="radio" name="gender" value="M" onChange={handleChange} /> Male</label>
//             <label className="ml-4"><input type="radio" name="gender" value="F" onChange={handleChange} /> Female</label>
//           </div>
//         </div>
//         <div>
//           <label>Course:</label>
//           <div>
//             <label><input type="checkbox" name="course" value="MCA" onChange={handleChange} /> MCA</label>
//             <label className="ml-4"><input type="checkbox" name="course" value="BCA" onChange={handleChange} /> BCA</label>
//             <label className="ml-4"><input type="checkbox" name="course" value="BSC" onChange={handleChange} /> BSC</label>
//           </div>
//         </div>
//         <div>
//           <label>Image Upload:</label>
//           <input type="file" name="image" accept=".jpg,.png" onChange={handleFileChange} required />
//         </div>
//         <div>
//           <button type="submit" className="bg-green-500 text-white p-2 rounded">Submit</button>
//         </div>
//       </form>
//       <ToastContainer />
//     </div>
//     </>
//   );
// };

// export default CreateEmployee;

/* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
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
//   Paper
// } from '@mui/material';

// const CreateEmployee = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     designation: '',
//     gender: '',
//     course: [],
//     // f_Image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'course') {
//       const newCourses = formData.course.includes(value)
//         ? formData.course.filter((course) => course !== value)
//         : [...formData.course, value];
//       setFormData({ ...formData, [name]: newCourses });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

// //   const handleFileChange = (e) => {
// //     setFormData({ ...formData, f_Image: e.target.files[0] });
// //   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Manual validation for the image field
//     // if (!formData.f_Image) {
//     //   toast.error('Please upload an image.');
//     //   return;
//     // }

//     const data = new FormData();
//     Object.keys(formData).forEach((key) => {
//       if (key === 'course') {
//         data.append(key, formData[key].join(','));
//       } else {
//         data.append(key, formData[key]);
//       }
//     });

//     try {
//       const response = await axios.post('http://localhost:5000/employees', data);
//       toast.success(response.data.message);
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
//             Create Employee
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             {/* Name */}
//             <TextField
//               label="Name"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="name"
//               value={formData.name}
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
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />

//             {/* Mobile */}
//             <TextField
//               label="Mobile No"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               type="tel"
//               name="mobile"
//               value={formData.mobile}
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
//                 name="designation"
//                 value={formData.designation}
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
//               <RadioGroup row name="gender" value={formData.gender} onChange={handleChange} required>
//                 <FormControlLabel value="M" control={<Radio />} label="Male" />
//                 <FormControlLabel value="F" control={<Radio />} label="Female" />
//               </RadioGroup>
//             </FormControl>

//             {/* Course */}
//             <FormControl component="fieldset" margin="normal">
//               <FormLabel component="legend" required>Course</FormLabel>
//               <Box>
//                 <FormControlLabel
//                   control={<Checkbox name="course" value="MCA" onChange={handleChange} />}
//                   label="MCA"
//                 />
//                 <FormControlLabel
//                   control={<Checkbox name="course" value="BCA" onChange={handleChange} />}
//                   label="BCA"
//                 />
//                 <FormControlLabel
//                   control={<Checkbox name="course" value="BSC" onChange={handleChange} />}
//                   label="BSC"
//                 />
//               </Box>
//             </FormControl>

//             {/* Image Upload */}
//             {/* <Button variant="contained" component="label" fullWidth sx={{ marginTop: 2, marginBottom: 2 }}>
//               Upload Image
//               <input
//                 type="file"
//                 name="f_Image"
//                 accept=".jpg,.png"
//                 onChange={handleFileChange}
//                 hidden
//               />
//             </Button> */}

//             {/* Submit Button */}
//             <Button type="submit" variant="contained" color="primary" fullWidth>
//               Submit
//             </Button>
//           </form>
//         </Paper>
//         <ToastContainer />
//       </Container>
//     </>
//   );
// };

// export default CreateEmployee;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Navbar from '../components/Navbar';
// import { useNavigate } from 'react-router-dom';
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
//   Paper
// } from '@mui/material';

// const CreateEmployee = () => {
//   const [formData, setFormData] = useState({
//     f_Name: '',
//     f_Email: '',
//     f_Mobile: '',
//     f_Designation: '',
//     f_Gender: '',
//     f_Course: [],
//     f_Image: null,
//   });
//   const navigate = useNavigate();

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
//     setFormData({ ...formData, f_Image: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     Object.keys(formData).forEach((key) => {
//       if (key === 'f_Course') {
//         data.append(key, formData[key].join(','));
//       } else {
//         data.append(key, formData[key]);
//       }
//     });

//     try {
//       const response = await axios.post('http://localhost:5000/employees', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//        toast.success(response.data.message, {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//         });

//       setTimeout( () => {
//         navigate('/dashboard')
//       }, 2000);
    
//     } catch (error) {
//     //   toast.error(error.response ? error.response.data.message : 'An error occurred');
//     if (error.response && error.response.data) {
//         toast.error(error.response.data.message, {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//           });
//         // setMessage(error.response.data.message);
//       } else {
//         // setMessage('Error logging in');
//         toast.error('An error occurred. Please try again.', {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//           });
//       }
//     }
//   };
  

//   return (
//     <>
//       <Navbar />

//       <Container maxWidth="sm">
//         <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
//           <Typography variant="h5" align="center" gutterBottom>
//             Create Employee
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
//               <FormLabel component="legend" required>Course</FormLabel>
//               <Box>
//                 <FormControlLabel
//                   control={<Checkbox name="course" value="MCA" onChange={handleChange} />}
//                   label="MCA"
//                 />
//                 <FormControlLabel
//                   control={<Checkbox name="course" value="BCA" onChange={handleChange} />}
//                   label="BCA"
//                 />
//                 <FormControlLabel
//                   control={<Checkbox name="course" value="BSC" onChange={handleChange} />}
//                   label="BSC"
//                 />
//               </Box>
//             </FormControl>

//             {/* Image Upload */}
//             <Button variant="contained" component="label" fullWidth sx={{ marginTop: 2, marginBottom: 2 }}>
//               Upload Image
//               <input
//                 type="file"
//                 name="f_Image"
//                 accept=".jpg,.png"
//                 onChange={handleFileChange}
//                 hidden
//               />
//             </Button>

//             {/* Submit Button */}
//             <Button type="submit" variant="contained" color="primary" fullWidth>
//               Submit
//             </Button>
//           </form>
//         </Paper>
//         <ToastContainer />
//       </Container>
//     </>
//   );
// };

// export default CreateEmployee;

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
//   Paper
// } from '@mui/material';
// import { useNavigate } from 'react-router';

// const CreateEmployee = () => {
//   const [formData, setFormData] = useState({
//     f_Name: '',
//     f_Email: '',
//     f_Mobile: '',
//     f_Designation: '',
//     f_Gender: '',
//     f_Course: [],
//     f_Image: null,
//   });
  
//   const [existingEmails, setExistingEmails] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch existing emails from the server
//     const fetchEmails = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/employees/emails');
//         setExistingEmails(response.data);
//       } catch (error) {
//         console.error('Error fetching emails:', error);
//       }
//     };
//     fetchEmails();
//   }, []);

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
//     // if (!/^\d+$/.test(f_Mobile)) {
//     //   toast.error('Mobile number must be numeric.');
//     //   return false;
//     // }
//     // Mobile number must be 10 digits and numeric
//     if (!/^\d{10}$/.test(f_Mobile)) {
//         toast.error('Mobile number must be 10 digits and numeric.');
//         return false;
//       }
//     if (existingEmails.includes(f_Email)) {
//       toast.error('Email already exists.');
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
//       const response = await axios.post('http://localhost:5000/employees', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       toast.success(response.data.message);
//       setTimeout( () => {
//                 navigate('/dashboard')
//              }, 2000);
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
//             Create Employee
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
//               <FormLabel component="legend" required>Course</FormLabel>
//               <Box>
//                 <FormControlLabel
//                   control={<Checkbox name="course" value="MCA" onChange={handleChange} />}
//                   label="MCA"
//                 />
//                 <FormControlLabel
//                   control={<Checkbox name="course" value="BCA" onChange={handleChange} />}
//                   label="BCA"
//                 />
//                 <FormControlLabel
//                   control={<Checkbox name="course" value="BSC" onChange={handleChange} />}
//                   label="BSC"
//                 />
//               </Box>
//             </FormControl>

//             {/* Image Upload */}
//             <Button variant="contained" component="label" fullWidth sx={{ marginTop: 2, marginBottom: 2 }}>
//               Upload Image
//               <input
//                 type="file"
//                 name="f_Image"
//                 accept=".jpg,.png"
//                 onChange={handleFileChange}
//                 hidden
//               />
//             </Button>

//             {/* Submit Button */}
//             <Button type="submit" variant="contained" color="primary" fullWidth>
//               Submit
//             </Button>
//           </form>
//         </Paper>
//         <ToastContainer />
//       </Container>
//     </>
//   );
// };

// export default CreateEmployee;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
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
} from '@mui/material';
import { useNavigate, useParams } from 'react-router';

const CreateEmployee = () => {
  const [formData, setFormData] = useState({
    f_Name: '',
    f_Email: '',
    f_Mobile: '',
    f_Designation: '',
    f_Gender: '',
    f_Course: [],
    f_Image: null,
  });
  const [existingEmails, setExistingEmails] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false); // To track if it's edit mode
  const { id } = useParams(); // Get the employee ID from the URL if present
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch existing emails from the server
    const fetchEmails = async () => {
      try {
        const response = await axios.get('http://localhost:5000/employees/emails');
        setExistingEmails(response.data);
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    };

    const fetchEmployeeData = async () => {
      if (id) {
        setIsEditMode(true);
        try {
          const response = await axios.get(`http://localhost:5000/employees/${id}`);
          console.log('Fetched employee data:', response.data);
          setFormData(response.data);
        } catch (error) {
          toast.error('Error fetching employee data!');
          console.error('Error fetching employee data:', error);
        }
      }
    };

    fetchEmails();
    fetchEmployeeData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'course') {
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
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      setFormData({ ...formData, f_Image: file });
    } else {
      toast.error('Please upload a valid image (jpg/png).');
    }
  };

  const validateForm = () => {
    const { f_Email, f_Mobile, f_Name } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(f_Email)) {
      toast.error('Invalid email format.');
      return false;
    }
    // Mobile number must be 10 digits and numeric
    if (!/^\d{10}$/.test(f_Mobile)) {
      toast.error('Mobile number must be 10 digits and numeric.');
      return false;
    }
    if (!isEditMode && existingEmails.includes(f_Email)) { // Check for duplicate emails only in create mode
      toast.error('Email already exists.');
      return false;
    }
    if (!f_Name || !formData.f_Designation || !formData.f_Gender || formData.f_Course.length === 0) {
      toast.error('Please fill all required fields.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'f_Course') {
        data.append(key, formData[key].join(','));
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      if (isEditMode) {
        // Update existing employee
        const response = await axios.put(`http://localhost:5000/employees/${id}`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        toast.success(response.data.message);
      } else {
        // Create new employee
        const response = await axios.post('http://localhost:5000/employees', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        toast.success(response.data.message);
      }
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (error) {
      toast.error(error.response ? error.response.data.message : 'An error occurred');
    }
  };

  return (
    <>
      <Navbar />

      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
          <Typography variant="h5" align="center" gutterBottom>
            {isEditMode ? 'Edit Employee' : 'Create Employee'}
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
              <RadioGroup row name="f_Gender" value={formData.f_Gender} onChange={handleChange} required>
                <FormControlLabel value="M" control={<Radio />} label="Male" />
                <FormControlLabel value="F" control={<Radio />} label="Female" />
              </RadioGroup>
            </FormControl>

            {/* Course */}
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">Course</FormLabel>
              <Box>
                <FormControlLabel
                  control={<Checkbox name="course" value="MCA" onChange={handleChange} checked={formData.f_Course.includes('MCA')} />}
                  label="MCA"
                />
                <FormControlLabel
                  control={<Checkbox name="course" value="BCA" onChange={handleChange} checked={formData.f_Course.includes('BCA')} />}
                  label="BCA"
                />
                <FormControlLabel
                  control={<Checkbox name="course" value="BSC" onChange={handleChange} checked={formData.f_Course.includes('BSC')} />}
                  label="BSC"
                />
              </Box>
            </FormControl>

            {/* Image Upload */}
            <Button variant="contained" component="label" fullWidth sx={{ marginTop: 2, marginBottom: 2 }}>
              {isEditMode ? 'Update Image' : 'Upload Image'}
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
            <Button type="submit" variant="contained" color="primary" fullWidth>
              {isEditMode ? 'Update Employee' : 'Create Employee'}
            </Button>
          </form>
        </Paper>
        <ToastContainer />
      </Container>
      </>
  );
}

export default CreateEmployee;
