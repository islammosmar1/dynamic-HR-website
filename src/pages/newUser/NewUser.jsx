// import React from 'react'
// import './newUser.css'
// export default function NewUser() {
//   return (
//     <div className='newUser'>
// <h1 className="newUserTitle">New User</h1>
// <form action="" className="newUserForm">
//     <div className="newUserItem">
//         <label htmlFor="">Username</label>
//         <input type="text" placeholder='islam' />
//     </div>

//     <div className="newUserItem">
//         <label htmlFor="">Full Name</label>
//         <input type="text" placeholder='Mosmar' />
//     </div>
//     <div className="newUserItem">
//         <label htmlFor="">Email</label>
//         <input type="email" placeholder='1234@gmail.com' />
//     </div>
//     <div className="newUserItem">
//         <label htmlFor="">Password</label>
//         <input type="password" placeholder='*********' />
//     </div>

//     <div className="newUserItem">
//         <label htmlFor="">Phone</label>
//         <input type="number" placeholder='059*******' />
//     </div>

//     <div className="newUserItem">
//         <label htmlFor="">Address</label>
//         <input type="text" placeholder='Jenin | palestine' />
//     </div>

//     <div className="newUserItem">
//         <label htmlFor="">Gender</label>
//         <div className="newUserGender">
//         <input type="radio" name='gender' id='male' value="male" />
//         <label for="male">male</label>
//         <input type="radio" name='gender' id='female' value="female" />
//         <label for="female">female</label>
//         <input type="radio" name='gender' id='other' value="other" />
//         <label for="other">other</label>
//     </div>
//     </div>

//     <div className="newUserItem">
//      <label htmlFor="">Active</label>
//      <select className='newUserSelect' name="active" id="active">
//         <option value="yes">Yes</option>
//         <option value="no">No</option>

//      </select>
//     </div>

//     <button className="newUserButton">Create</button>
// </form>
//     </div>
//   )
// }


import React, { useState } from 'react';
import './newUser.css';
import { Link } from 'react-router-dom';

export default function NewUser() {
  const [user, setUser] = useState({
    id: Math.floor(Math.random() * 1000),
    username: '',
    fullName: '',
    email: '',
    phone: '',
    address: '',
    birthDate: '',
    avatar: '',
    status: 'active', // حالة النشاط (افتراضي: active)
    price: 0, // السعر (افتراضي: 0)
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser(prevUser => ({
          ...prevUser,
          avatar: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = [...storedUsers, user];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    alert('User added successfully!');
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={handleSubmit}>
        <div className="newUserItem">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="username"
            required
          />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="email@example.com"
            required
          />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            placeholder="+1 123 456 789"
            required
          />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={handleChange}
            placeholder="City | Country"
            required
          />
        </div>
        <div className="newUserItem">
          <label>Birth Date</label>
          <input
            type="date"
            name="birthDate"
            value={user.birthDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="newUserItem">
          <label>Status</label>
          <select
            name="status"
            value={user.status}
            onChange={handleChange}
            required
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={user.price}
            onChange={handleChange}
            placeholder="Price"
            required
          />
        </div>
        <div className="newUserItem">
          <label>Profile Picture</label>
          <input
            type="file"
            onChange={handleImageUpload}
          />
        </div>
        <button type="submit" className="newUserButton">Create</button>
      </form>
    </div>
  );
}