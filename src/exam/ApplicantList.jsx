import React, { useState, useEffect } from 'react'

export default function ApplicantList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <div>
        <h3>List of Applicants</h3>
        <table>
         <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Company</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.gender}</td>
                  <td>{user.email}</td>
                  <td>{user.company}</td>
                  <td>{user.contact}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
    </div>
  )
}
