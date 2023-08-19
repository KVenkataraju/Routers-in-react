import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contactus'>Contact Us</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signin'>Signin</Link></li>            
        </ul>
    </div>
  )
}
 