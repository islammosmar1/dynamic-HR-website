import React, { Component } from 'react'
import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import { WhatsApp } from '@mui/icons-material';
export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
<div className="topLeft">
    <span className='logo'>Islam</span>
</div>
<div className="topRight">
    <div className="topbarIconContainer">
<NotificationsNoneIcon/>
<span className='topIconBadge'>2</span>
    </div>

    <div className="topbarIconContainer">
<LanguageIcon/>
{/* <span className='topIconBadge'>2</span> */}
    </div>

    <div className="topbarIconContainer">
<SettingsIcon/>
    </div>
    <img            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQGHKexWoNife5mckGZdRl_GbDLwr6xgO7Q&s"
 alt="" className='topAvatar'/>
</div>
        </div>
      
    </div>
  )
}
