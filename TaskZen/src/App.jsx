import React from 'react'
import Signup from './component/signup.jsx'
import Login from './component/login.jsx'
import Dashboard from './component/Dashboard.jsx'
import Home from './component/home.jsx'
import SignOut from './component/signOut.jsx'
import './component/App.css'
import './component/Index.css'
import './component/Filtering/Filter.css'
import './component/Sidebar/sidebar.css'
import ForgotPassword from './component/forgetPassword.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ChangePassword from './component/changePassword.jsx'
import NavScrollExample from './component/welcome.jsx'
import Account from './component/account.jsx'
import MySelf from './Details/mySelf.jsx'
import TaskDetails from './component/taskDetails.jsx'



const App = () => {
  return(
    <Router>
      <Routes>
        <Route path='/TaskZen' element={ <NavScrollExample/> }></Route>
        <Route path='/' element={<Account />} ></Route>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/dashboard' element={<Dashboard />} ></Route>
        <Route path='/logout' element={<SignOut />} ></Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/changePassword/:token" element={<ChangePassword />} />
        <Route path="/account" element={<Account />} />
        <Route path="/portfolio" element={<MySelf />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/task/:id" element={<TaskDetails />} />
      </Routes>
    </Router>
  )
}

export default App

