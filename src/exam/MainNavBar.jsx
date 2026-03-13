import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import ApplicantRegistration from './ApplicantRegistration'

import APIdemo from './ApiDemo'
import './navbar.css'
import ApplicantList from './ApplicantList'

export default function MainNavBar() {

  return (
    <div>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/registration">Register</Link>
        <Link to="/registeresadded">Registered Applicants</Link>
        <Link to="/apidemo"> APIdemo</Link>
        </nav>
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/registration" element={<ApplicantRegistration/>}/>
            <Route path="/registeresadded" element={<ApplicantList/>}/>
            <Route path='/apidemo' element={<APIdemo/>}/>
        </Routes>
    </div>
  )
}
