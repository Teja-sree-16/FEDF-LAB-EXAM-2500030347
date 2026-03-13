import React from "react";
import './home.css'

export default function Home() {
  return (
    <div className="home-container">
      <h2>Applicant Registration</h2>

      <img
        src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
        alt="registration"
        className="home-image"
      />

      <p>
        Welcome! Please fill out the registration form to submit your
        application. Make sure all the details are correct before submitting.
      </p>
    </div>
  );
}