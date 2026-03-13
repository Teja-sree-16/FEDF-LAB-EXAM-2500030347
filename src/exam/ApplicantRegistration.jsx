import React, { useState } from 'react';

export default function ApplicantRegistration() {


  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    company: '',
    contact: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful!');
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
      <h2>ApplicantRegistration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>SelectCompany</label>
         <select name="company" value={formData.company} onChange={handleChange} required>
            <option value="" >Select Company</option>
            <option value="Google">Google</option>
            <option value="Amazon">Amazon</option>
             
         </select>
        </div>
        <div>
          <label>Contact No:</label>
          <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );

}
