import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

// components
import Navbar from "./navigation/Navbar";

// pages
import About from '../pages/About';
import Shift from '../pages/Shift'
import Welcome from '../pages/Welcome'

export default function Path() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Welcome />} />
        <Route path="/shift" element={<Shift />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}