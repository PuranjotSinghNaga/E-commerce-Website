import React, { } from 'react'
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Login from "./Pages/Login/Login"
import Register from './Pages/Register/Register'
import MY_Accounts from "./Pages/My_Acc/MY_Account"
import Orders from "./Pages/Orders/Orders"


function App() {

  
  return (
    <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/myAcc" element={<MY_Accounts/>}/>
        <Route path="/order" element={<Orders/>}/>
      </Routes>
    </Router>
      <Footer/>
    </div>
  )
}


export default App;