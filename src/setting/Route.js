import React from 'react'
import {Routes, Route,} from "react-router-dom";
import Home from '../component/home/home';
const  Routers = () => {
  return (
    <Routes>
    <Route path="/" element={ <Home/> } />
  
  </Routes>
  )
}

export default Routers