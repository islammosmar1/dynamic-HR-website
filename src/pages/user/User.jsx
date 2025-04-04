// import React from 'react'
// import './user.css';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import { Publish } from '@mui/icons-material';
// import { Link } from "react-router-dom";


// export default function User() {
//   return (
//     <div className="user">
//     <div className="userTitleContainer">
//       <h1 className="userTitle">Edit User</h1>
//       <Link to="/newUser">
//         <button className="userAddButton">Create</button>
//       </Link>
//     </div>
//       <div className="userContainer">
//         <div className="userShow"> 
//          <div className="userShowTop">
//             <img src="" alt="" className="userShowImg" />
           
//            <div className="userShowTopTitle">
//             <span className="userShowUsername">Islam Mosmar</span>
//             <span className="userShowUserTitle">SoftWare Engineering</span>

//            </div>
//             </div>  
//          <div className="userShowBottom">
//             <span className="userShowTitle">Account Details</span>
//             <div className="userShowInfo">
//             <PermIdentityIcon className='userShowIcon'/>
//             <span className="userShowInfoTitle">islammosmar1</span>
//             </div>  

//             <div className="userShowInfo">
//             <CalendarMonthIcon className='userShowIcon'/>
//             <span className="userShowInfoTitle">21.5.2003</span>
//             </div> 

//             <span className="userShowTitle">Contact Details</span>

//             <div className="userShowInfo">
//             <PhoneAndroidIcon className='userShowIcon'/>
//             <span className="userShowInfoTitle">+972598188707</span>
//             </div> 



//             <div className="userShowInfo">
//             <MailOutlineIcon className='userShowIcon'/>
//             <span className="userShowInfoTitle">islammosmar2@gmail.com</span>
//             </div> 




//             <div className="userShowInfo">
//             <LocationOnIcon className='userShowIcon'/>
//             <span className="userShowInfoTitle">Jenin | Palestine </span>
//             </div> 
       
// </div>
//         </div>

//        <div className="userUpdate">
//           <span className="userUpdateTitle">Edit</span>
//           <form className="userUpdateForm">
//             <div className="userUpdateLeft">
//               <div className="userUpdateItem">
//                 <label>Username</label>
//                 <input
//                   type="text"
//                   placeholder="annabeck99"
//                   className="userUpdateInput"
//                 />
//               </div>
//               <div className="userUpdateItem">
//                 <label>Full Name</label>
//                 <input
//                   type="text"
//                   placeholder="Anna Becker"
//                   className="userUpdateInput"
//                 />
//               </div>
//               <div className="userUpdateItem">
//                 <label>Email</label>
//                 <input
//                   type="text"
//                   placeholder="annabeck99@gmail.com"
//                   className="userUpdateInput"
//                 />
//               </div>
//               <div className="userUpdateItem">
//                 <label>Phone</label>
//                 <input
//                   type="text"
//                   placeholder="+1 123 456 67"
//                   className="userUpdateInput"
//                 />
//               </div>
//               <div className="userUpdateItem">
//                 <label>Address</label>
//                 <input
//                   type="text"
//                   placeholder="New York | USA"
//                   className="userUpdateInput"
//                 />
//               </div>
//             </div>
//             <div className="userUpdateRight">
//               <div className="userUpdateUpload">
//                 <img
//                   className="userUpdateImg"
//                   src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//                   alt=""
//                 />
//                 <label htmlFor="file">
//                   <Publish className="userUpdateIcon" />
//                 </label>
//                 <input type="file" id="file" style={{ display: "none" }} />
//               </div>
//               <button className="userUpdateButton">Update</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react';
import './user.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Publish } from '@mui/icons-material';
import { Link, useParams } from "react-router-dom";

export default function User() {
  const { userId } = useParams();
  const [user, setUser] = useState({
    id: userId,
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

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = storedUsers.find(u => u.id === parseInt(userId));
    if (currentUser) {
      setUser(currentUser);
    }
  }, [userId]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = storedUsers.map(u => u.id === parseInt(userId) ? user : u);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    alert('User updated successfully!');
  };

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

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={user.avatar || "https://via.placeholder.com/150"} alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.fullName}</span>
              <span className="userShowUserTitle">Software Engineering</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentityIcon className='userShowIcon' />
              <span className="userShowInfoTitle">{user.username}</span>
            </div>
            <div className="userShowInfo">
              <CalendarMonthIcon className='userShowIcon' />
              <span className="userShowInfoTitle">{user.birthDate}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroidIcon className='userShowIcon' />
              <span className="userShowInfoTitle">{user.phone}</span>
            </div>
            <div className="userShowInfo">
              <MailOutlineIcon className='userShowIcon' />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationOnIcon className='userShowIcon' />
              <span className="userShowInfoTitle">{user.address}</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">Status: {user.status}</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">Price: ${user.price}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm" onSubmit={handleUpdate}>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                  className="userUpdateInput"
                  required
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={user.fullName}
                  onChange={handleChange}
                  className="userUpdateInput"
                  required
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="userUpdateInput"
                  required
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  className="userUpdateInput"
                  required
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={user.address}
                  onChange={handleChange}
                  className="userUpdateInput"
                  required
                />
              </div>
              <div className="userUpdateItem">
                <label>Birth Date</label>
                <input
                  type="date"
                  name="birthDate"
                  value={user.birthDate}
                  onChange={handleChange}
                  className="userUpdateInput"
                  required
                />
              </div>
              <div className="userUpdateItem">
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
              <div className="userUpdateItem">
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
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={user.avatar || "https://via.placeholder.com/150"}
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
              </div>
              <button type="submit" className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
