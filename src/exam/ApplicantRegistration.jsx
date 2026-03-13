import React, { useState } from 'react';
import './applicantregistration.css';

export default function ApplicantRegistration() {

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    company: '',
    contact: ''
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // get existing users
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // add new user
    users.push(formData);

    // save to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // 🔥 notify ApplicantList to refresh
    window.dispatchEvent(new Event("usersUpdated"));

    alert('Registration successful!');

    // reset form
    setFormData({
      name: '',
      gender: '',
      email: '',
      company: '',
      contact: ''
    });
  };

  return (
    <div className="registration-form">
      <h2>Applicant Registration</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Select Company:</label>
          <select
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          >
            <option value="">Select Company</option>
            <option value="Google">Google</option>
            <option value="Amazon">Amazon</option>
          </select>
        </div>

        <div>
          <label>Contact No:</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Register</button>

      </form>
    </div>
  );
}