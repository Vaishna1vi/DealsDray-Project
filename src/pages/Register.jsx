/* eslint-disable no-unused-vars */
// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import { router } from "react-router";
// import axios from 'axios';

// // eslint-disable-next-line no-unused-vars
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   Container,
//   TextField,
//   Button,
//   Grid,
//   Typography,
//   Box,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
// } from "@mui/material";

// const Register = () => {
// //   const [formData, setFormData] = useState({
// //     userName: "",
// //     email: "",
// //     password: "",
// //   });

//   const [errors, setErrors] = useState({});

//   const [open, setOpen] = useState(false);

//   const [message, setMessage] = useState('');

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

//   const validateForm = () => {
//     let tempErrors = {};
//     if (!formData.userName) tempErrors.userName = "User name is required";
//     if (!formData.email) tempErrors.email = "Email is required";
//     if (!formData.password) tempErrors.password = "Password is required";
//     return tempErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {

//       console.log("Form Submitted", formData);
//       // Add your logic to submit form data
//     }
//     try {
//         const response = await axios.post('http://localhost:5000/register', {userName, email, password });
//         setMessage(response.data);
//         setOpen(true);
//       } catch (error) {
//         setMessage('Error registering user');
//         setOpen(true);
//       }

//     if (response.userExist) {
//       toast.warn(response.msg, {
//         position: "top-center",
//         autoClose: 1000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });
//     } else if (response.success) {
//       toast.success("Your account has been created...!", {
//         position: "top-center",
//         autoClose: 1000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });

//       setTimeout(() => {
//         router.push("/login");
//       }, 2000);
//     } else {
//       toast.error(response.error, {
//         position: "top-center",
//         autoClose: 1000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });
//     }
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <ToastContainer
//         position="top-center"
//         autoClose={1000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//       <Container maxWidth="sm">
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Typography component="h1" variant="h5">
//             Register
//           </Typography>
//           <Box
//             component="form"
//             onSubmit={handleSubmit}
//             noValidate
//             sx={{ mt: 3 }}
//           >
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="userName"
//                   required
//                   fullWidth
//                   id="userName"
//                   label="User Name"
//                   autoFocus
//                   value={userName}
//                   onChange={handleChange}
//                   error={!!errors.userName}
//                   helperText={errors.userName}
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   value={email}
//                   onChange={handleChange}
//                   error={!!errors.email}
//                   helperText={errors.email}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                   value={password}
//                   onChange={handleChange}
//                   error={!!errors.password}
//                   helperText={errors.password}
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Register
//             </Button>
//           </Box>
//         </Box>
//         <Dialog open={open} onClose={handleClose}>
//           <DialogTitle>Registration Successful</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               Your account has been successfully created.
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose} color="primary">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Container>
//     </>
//   );
// };

// export default Register;

//// eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Container,
//   Typography,
//   Box,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
// } from "@mui/material";
// import axios from "axios";

// const RegistrationForm = () => {
//     const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [open, setOpen] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     if (e.target.name == 'name') {
//       setUserName(e.target.value)
//     }
//     else if (e.target.name == 'email') {
//       setEmail(e.target.value)
//     }
//     else if (e.target.name == 'password') {
//       setPassword(e.target.value)
//     } 
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5000/register", {
//         userName,
//         email,
//         password,
//       });
//       setMessage(response.data);
//       setOpen(true);
//       // eslint-disable-next-line no-unused-vars
//     } catch (error) {
//       setMessage("Error registering user");
//       setOpen(true);
//     }
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box sx={{ mt: 8 }}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Register
//         </Typography>
//         <form onSubmit={handleSubmit} method="POST">
//         <TextField
//             label="User-Name"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={userName}
//             onChange={handleChange}
//           />
//           <TextField
//             label="Email"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={email}
//             onChange={handleChange}
//           />
//           <TextField
//             label="Password"
//             type="password"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={password}
//             onChange={handleChange}
//           />
//           <Button type="submit" variant="contained" color="primary" fullWidth>
//             Register
//           </Button>
//         </form>
//       </Box>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Registration Status</DialogTitle>
//         <DialogContent>
//           <DialogContentText>{message}</DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default RegistrationForm;

// Import required libraries
// import React, { useState } from 'react';
// import axios from 'axios';

// const Registration = () => {
//   // State to handle form inputs
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   // Function to handle form submission
//   const handleRegister = async (e) => {
//     e.preventDefault();

//     try {
//       // Send POST request to backend
//       const response = await axios.post('http://localhost:5000/register', {
//         username,
//         password,
//       });

//       // Show success message
//       setMessage(response.data.message);
//       setUsername('');
//       setPassword('');
//     } catch (error) {
//       if (error.response && error.response.data) {
//         setMessage(error.response.data.message);
//       } else {
//         setMessage('An error occurred. Please try again.');
//       }
//     }
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
//       <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
//         <h2>Register</h2>

//         {/* Username Input */}
//         <label>Username</label>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />

//         {/* Password Input */}
//         <label>Password</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         {/* Register Button */}
//         <button type="submit" style={{ marginTop: '10px' }}>Register</button>

//         {/* Display message */}
//         {message && <p>{message}</p>}
//       </form>
//     </div>
//   );
// };

// export default Registration;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { TextField, Button, Typography, Container, Paper } from '@mui/material';

// const Registration = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/register', {
//         username,
//         password,
//       });
//       setMessage(response.data.message);
//       setUsername('');
//       setPassword('');
//     } catch (error) {
//       if (error.response && error.response.data) {
//         setMessage(error.response.data.message);
//       } else {
//         setMessage('An error occurred. Please try again.');
//       }
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <Paper elevation={3} className="p-5">
//         <Typography variant="h5" component="h1" gutterBottom>
//           Register
//         </Typography>
//         <form onSubmit={handleRegister}>
//           <TextField
//             label="Username"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <TextField
//             label="Password"
//             type="password"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <Button type="submit" variant="contained" color="primary" fullWidth>
//             Register
//           </Button>
//         </form>
//         {message && <Typography color="error">{message}</Typography>}
//       </Paper>
//     </Container>
//   );
// };

// export default Registration;

import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Paper } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; // Make sure to import useNavigate

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', {
        username,
        password,
      });
      // Show success notification
      // toast.success(response.data.message);
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
      setUsername('');
      setPassword('');

      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate('/login'); // Make sure the path matches your routing setup
      }, 2000);
    } catch (error) {
      if (error.response && error.response.data) {
        // toast.error(error.response.data.message);
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      } else {
        toast.error('An error occurred. Please try again.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
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
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} className="p-5">
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
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </form>
        {/* <ToastContainer /> Add the ToastContainer component here */}
      </Paper>
    </Container>
    </>
  );
};

export default Registration;

