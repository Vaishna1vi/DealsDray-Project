// // /* eslint-disable no-undef */
// // // import mongoose from "mongoose"

// // // const connectDb = handler => async (req, res) =>{
// // //   if(mongoose.connections[0].readyState){
// // //     return handler(req,res)
// // //   }
// // //   await mongoose.connect(process.env.MONGODB_URI)
// // //   return handler(req,res);
// // // }

// // // export default connectDb;

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = 5000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // MongoDB connection
// // mongoose.connect('mongodb://127.0.0.1:27017/test', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// // mongoose.connect(process.env.MONGODB_URI)
// require('dotenv').config();
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });


// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// // User schema and model
// const userSchema = new mongoose.Schema({
//     userName: String,
//   email: String,
//   password: String,
// });

// const User = mongoose.model('User', userSchema);

// // Routes
// app.post('/register', (req, res) => {
//   const newUser = new User({
//     userName: req.body.userName,
//     email: req.body.email,
//     password: req.body.password,
//   });

//   newUser.save((err) => {
//     if (err) {
//       res.status(500).send('Error registering new user');
//     } else {
//       res.status(200).send('User registered successfully');
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// // const mongoose = require('mongoose');
// // require('dotenv').config();

// // const uri = process.env.MONGODB_URI;

// // mongoose.connect(uri, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // }).then(() => {
// //   console.log('Connected to MongoDB');
// // }).catch((err) => {
// //   console.error('Connection error', err);
// // });

