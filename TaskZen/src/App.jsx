import React from 'react'
import Signup from './signup'
import Login from './login'
import Dashboard from './Dashboard'
import Home from './home'
import SignOut from './signOut'
import './App.css'
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

