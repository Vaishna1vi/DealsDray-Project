// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import "./index.css"
import "./App.css"
import Login  from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import CreateEmployee from './pages/CreateEmployee'

function App() {


  return (
    <>
      {/* <div>
      <h1>User Authentication</h1>
      
        <Register />
      
      <div>
        <Login />
      </div>
    </div> */}

<Router>
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/createEmployees' element={<CreateEmployee />} />
    <Route path='/createEmployees/:id' element={<CreateEmployee />} />
  </Routes>
</Router>
    </>
  )
}

export default App
