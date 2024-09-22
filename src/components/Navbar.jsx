// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react';
// import { useNavigate, Link, useLocation } from 'react-router-dom';
// // import Login from './Login'

// const Navbar = () => {
//     const [username, setUsername] = useState('');

//     useEffect(() => {
//       // Retrieve username from local storage
//       const storedUsername = localStorage.getItem('username');
//       if (storedUsername) {
//         setUsername(storedUsername);
//       }
//     }, []);

// const navigate = useNavigate();
// const location = useLocation();

//   const logout = () => {
//     username.signOut();
// navigate('/')

//   }

//   return (
//     <>
//     <div className='bg-primary d-flex align-items-center p-2' style={{justifyContent: 'space-between'}}> 
//         <div className="user-content d-flex justify-content-center align-items-center" style={{gap: '1rem'}}>
           
//             <h3>{username?.currentUser?.displayName}</h3>
//         </div>

//         <div className="email d-flex justify-content-center align-items-center" style={{gap: '1rem'}}>

//         {/* { (location.pathName==='/blogs') ? (<Link to={'/addblog'} className='btn btn-warning'>Add Blog</Link>) : '' } */}
//         { location.pathname==='/dashboard' && <Link to={'/createEmployees'} className='btn btn-warning'>Create Employees</Link> }
//         { location.pathname!=='/dashboard' && <Link to={'/dashboard'} className='btn btn-warning'>Back to Employee List</Link> }

           
//           <button className='btn btn-danger' onClick={logout}>Log-out</button>

//         </div>
//     </div>
//     </>
//   )
// }

// export default Navbar

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Navbar = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

//   useEffect(() => {
//     // Retrieve username from local storage
//     const storedUsername = localStorage.getItem('username');
//     if (storedUsername) {
//       setUsername(storedUsername);
//     }
//   }, []);

  const logout = () => {
    // Remove user details from local storage
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <AppBar position="static" color="primary" style={{margin:0, width: '100%'}}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left side - Logo or App Name */}
        <Typography variant="h6" component="div">
          Employee Management
        </Typography>

        {/* Center - Username */}
        {username && (
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Welcome, {username}
          </Typography>
        )}

        {/* Right side - Navigation Buttons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {/* Conditional rendering for 'Create Employees' or 'Back to Employee List' */}
          {location.pathname === '/dashboard' && (
            <Button variant="contained" color="warning" component={Link} to="/createEmployees">
              Create Employees
            </Button>
          )}
          {location.pathname !== '/dashboard' && (
            <Button variant="contained" color="warning" component={Link} to="/dashboard">
              Back to Employee List
            </Button>
          )}

          {/* Logout Button */}
          <Button variant="contained" color="secondary" onClick={logout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
