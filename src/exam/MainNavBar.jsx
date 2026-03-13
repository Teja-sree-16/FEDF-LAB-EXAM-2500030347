import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import ApplicantRegistration from './ApplicantRegistration'
import ApplicantList from './ApplicantList'

export default function MainNavBar() {

  return (
    <div>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/registration">Register</Link>
        <Link to="/registeresadded">Registered Applicants</Link>
        </nav>
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/registration" element={<ApplicantRegistration/>}/>
            <Route path='/registeredsadded' element={<ApplicantList/>}/>
        </Routes>
    </div>
  )
}
