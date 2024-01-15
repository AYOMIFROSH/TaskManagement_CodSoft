import React from 'react'
import Signup from './component/signup.jsx'
import Login from './component/login.jsx'
import Dashboard from './component/Dashboard.jsx'
import Home from './component/home.jsx'
import SignOut from './component/signOut.jsx'
import './component/App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/dashboard' element={<Dashboard />} ></Route>
        <Route path='/logout' element={<SignOut />} ></Route>
      </Routes>
    </Router>
  )
}

export default App

