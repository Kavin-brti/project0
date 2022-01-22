import React from 'react'
import '../Styles/Nav.css'
import Logo from '../Images/Logo.png'
function Nav() {
    return (
        <div>
            <img className="logo" alt="Logo" src = {Logo} width={60} height={60} />
            <h1 className="title">KM Hospital</h1>
            <hr/>
            <div className="navbar">
            <ul className="nav">
                <li>Home</li>
                <li>Abouts us</li>
                <li>Hospitals</li>
                <li>Speaciality</li>
                <li>For Patients</li>
                <li>Contact us</li>
               
            </ul>
            </div>
            
        </div>
    )
}

export default Nav
