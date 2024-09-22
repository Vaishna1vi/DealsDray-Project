/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import dotenv from 'dotenv'; // Import dotenv

// Load environment variables from .env file
dotenv.config();

import express, { json } from 'express';
import { Schema, model, mongoose } from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcrypt';
import mongooseAutoIncrement from 'mongoose-sequence'
import multer from 'multer';

// const path = require('path');


const app = express();


// Middleware
app.use(cors());
app.use(json());
app.use('/uploads', express.static('uploads'));

// Retrieve MongoDB URI from environment variables
// eslint-disable-next-line no-undef
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB using the connection string from the .env file
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));


// MongoDB Connection
// connect('mongodb+srv://vaishnavinagvanshi68675:tanu8090@myprojects.dfm0x21.mongodb.net/test', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB connected'))
// .catch((error) => console.error('MongoDB connection error:', error));

// Initialize autoIncrement by passing mongoose instance
const AutoIncrement = mongooseAutoIncrement(mongoose);

// Define User schema and model
const userSchema = new mongoose.Schema({
  f_sno: {type: Number },
f_userName: { type: String, required: true, unique: true },
f_Pwd: { type: String, required: true },
});

// Add auto-increment plugin to userSchema for field f_sno
userSchema.plugin(AutoIncrement, { inc_field: 'f_sno' });

const User = mongoose.model('User', userSchema);

// Registration endpoint
app.post('/register', async (req, res) => {
const { username, password } = req.body;

// Basic validation
if (!username || !password) {
  return res.status(400).json({ message: 'Username and password are required' });
}

try {
  // Check if the username already exists
  const existingUser = await User.findOne({ f_userName: username });
  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  // Hash the password before saving it
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const newUser = new User({
    f_userName: username,
    f_Pwd: hashedPassword,
  });

  // Save the user to the database
  await newUser.save();
  res.status(201).json({ message: 'User registered successfully' });
} catch (error) {
  console.error('Error registering user:', error);
  res.status(500).json({ message: 'Server error during registration' });
}
});


// Login Schema
// const loginSchema = new Schema({
//   f_userName: String,
//   f_Pwd: String
// });
// const Login = model('Login', loginSchema);

// Employee Schema
// const employeeSchema = new Schema({
//   f_Image: String,
//   f_Name: { type: String, required: true },
//   f_Email: { type: String, required: true, unique: true },
//   f_Mobile: { type: String, required: true },
//   f_Designation: { type: String, required: true },
//   f_Gender: { type: String, required: true },
//   f_Course: { type: [String], required: true },
//   f_Createdate: { type: Date, default: Date.now },
// });
// const Employee = model('Employee', employeeSchema);

// Login Route
// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   const user = await Login.findOne({ f_userName: username, f_Pwd: password });
  
//   if (user) {
//     res.status(200).json({ message: 'Login successful', username });
//   } else {
//     res.status(401).json({ message: 'Invalid login details' });
//   }
// });

// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     console.log(`Received login request for Username: "${username}" and Password: "${password}"`);
    
//     // Trim the input to avoid accidental spaces
//     const trimmedUsername = username.trim();
//     const trimmedPassword = password.trim();

//     // Find user in the database
//     const user = await Login.findOne({ f_userName: trimmedUsername });

//     if (!user) {
//       console.log('No user found with the provided username.');
//       return res.status(401).json({ message: 'Invalid login details' });
//     }

//     console.log(`User found: Username - "${user.f_userName}", Password - "${user.f_Pwd}"`);

//     // Direct comparison (if not using bcrypt)
//     if (user.f_Pwd !== trimmedPassword) {
//       console.log('Password does not match.');
//       return res.status(401).json({ message: 'Invalid login details' });
//     }

//     res.status(200).json({ message: 'Login successful', username: user.f_userName });
//   } catch (error) {
//     console.error('Error during login process:', error);
//     res.status(500).json({ message: 'Server error during login' });
//   }
// });

// // Login endpoint
// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   // Basic validation
//   if (!username || !password) {
//     return res.status(400).json({ message: 'Username and password are required' });
//   }

//   try {
//     // Find the user by username
//     const user = await User.findOne({ f_userName: username });

//     // If the user does not exist
//     if (!user) {
//       return res.status(401).json({ message: 'User-Name not exists.' });
//     }

//     // Compare the provided password with the stored hashed password
//     const isPasswordValid = await bcrypt.compare(password, user.f_Pwd);

//     if (!isPasswordValid) {
//       return res.status(401).json({ message: 'Password does not match.' });
//     }

//     console.log('Received login request:', username, password);
// console.log('User found in DB:', user);
// console.log('Is password valid:', isPasswordValid);


//     // Login successful
//     res.status(200).json({ message: 'Login successful' });
//   } catch (error) {
//     console.error('Error during login:', error);
//     res.status(500).json({ message: 'Server error during login' });
//   }
// });

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Basic validation
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    // Find the user by username
    const user = await User.findOne({ f_userName: username });

    // If the user does not exist
    if (!user) {
      console.log(`User not found: ${username}`);
      return res.status(401).json({ message: 'User-Name does not exist.' });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.f_Pwd);

    if (!isPasswordValid) {
      console.log(`Invalid password for user: ${username}`);
      return res.status(401).json({ message: 'Password does not match.' });
    }

    // Login successful
    console.log('Login successful for user:', username);
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
});






// Employees Route
// app.get('/employees', async (req, res) => {
//   const employees = await Employee.find();
//   res.status(200).json(employees);
// });

// Storage setup for image uploads
// const storage = multer.diskStorage({
//   destination: './uploads/',
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   }
// });
// const upload = multer({ storage });

// Create employee route
// upload.single('f_Image'),
// app.post('/employees', async (req, res) => {
//   try {
//     const newEmployee = new Employee({
//       // f_Image: req.file ? req.file.path : '',
//       f_Name: req.body.f_Name,
//       f_Email: req.body.f_Email,
//       f_Mobile: req.body.f_Mobile,
//       f_Designation: req.body.f_Designation,
//       f_Gender: req.body.f_Gender,
//       f_Course: req.body.f_Course.split(',')
//     });
//     await newEmployee.save();
//     res.status(201).json({ message: 'Employee created successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating employee', error });
//   }
// });

// const multer = require('multer');
// const { Schema, model } = require('mongoose');

// Storage setup for image uploads
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

// Employee schema
const employeeSchema = new Schema({
  f_Image: String,
  f_Name: { type: String, required: true },
  f_Email: { type: String, required: true, unique: true },
  f_Mobile: { type: String, required: true },
  f_Designation: { type: String, required: true },
  f_Gender: { type: String, required: true },
  f_Course: { type: [String], required: true },
  f_Createdate: { type: Date, default: Date.now },
});
const Employee = model('Employee', employeeSchema);

// Route to get existing emails
app.get('/employees/emails', async (req, res) => {
  try {
    const employees = await Employee.find({}, 'f_Email');
    res.json(employees.map(emp => emp.f_Email));
  } catch (error) {
    res.status(500).json({ message: 'Error fetching emails', error });
  }
});



// Create employee route
app.post('/employees', upload.single('f_Image'), async (req, res) => {

  const { f_Name, f_Email, f_Mobile, f_Designation, f_Gender, f_Course } = req.body;
  
   // Validate email format
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(f_Email)) {
     return res.status(400).json({ message: 'Invalid email format' });
   }
 
   // Validate mobile
  //  if (!/^\d+$/.test(f_Mobile)) {
  //    return res.status(400).json({ message: 'Mobile number must be numeric' });
  //  }
  
   // Validate mobile number (must be exactly 10 digits)
   if (!/^\d{10}$/.test(f_Mobile)) {
    return res.status(400).json({ message: 'Mobile number must be exactly 10 digits' });
  }
 
   // Check for duplicate email
   const existingEmployee = await Employee.findOne({ f_Email });
   if (existingEmployee) {
     return res.status(400).json({ message: 'Email already exists' });
   }
 
   // Validate file type
   if (req.file && (req.file.mimetype !== 'image/jpeg' && req.file.mimetype !== 'image/png')) {
     return res.status(400).json({ message: 'Only jpg and png files are allowed' });
   }
 
  try {
    const newEmployee = new Employee({
      f_Image: req.file ? req.file.path : '',
      f_Name: req.body.f_Name,
      f_Email: req.body.f_Email,
      f_Mobile: req.body.f_Mobile,
      f_Designation: req.body.f_Designation,
      f_Gender: req.body.f_Gender,
      f_Course: req.body.f_Course.split(','),
    });
    await newEmployee.save();
    res.status(201).json({ message: 'Employee created successfully' });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: 'Error creating employee', error });
  }
});

// Route to get all employees
app.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find(); // Fetch all employees from the database
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employees', error });
  }
});

app.delete('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndDelete(id);

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting employee', error });
  }
});

// Route to get all employees
app.get('/employees/:id', async (req, res) => {
  try {
    const employees = await Employee.findById(id); // Fetch all employees from the database
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employees', error });
  }
});

// Update employee by ID
app.put('/employees/:id', async (req, res) => {
  const { id } = req.params;
  const { f_Image, f_Name, f_Email, f_Mobile, f_Designation, f_Gender, f_Course } = req.body;

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(f_Email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      {
        f_Image,
        f_Name,
        f_Email,
        f_Mobile,
        f_Designation,
        f_Gender,
        f_Course: f_Course.split(','), // Convert courses string to array if necessary
      },
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(200).json({ message: 'Employee updated successfully', updatedEmployee });
  } catch (error) {
    res.status(500).json({ message: 'Error updating employee', error });
  }
});


// Server Listener
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
