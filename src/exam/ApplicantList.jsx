import React, { useEffect, useState } from 'react'

export default function ApplicantList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(stored);
  }, []);

  return (
    <div>
      <h3>List of Applicants</h3>
      {users.length === 0 ? (
        <b>No Applicants Registered</b>
      ) : (
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Company</th>
              <th>Contact</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
