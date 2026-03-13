import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import ApplicantRegistration from './ApplicantRegistration'
import ApplicantList from './ApplicantList'
import APIdemo from './ApiDemo'

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
            <Route path='/registeredsadded' element={<ApplicantList/>}/>
            <Route path='/apidemo' element={<APIdemo/>}/>
        </Routes>
    </div>
  )
}
