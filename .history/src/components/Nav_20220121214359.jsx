import React from 'react'
import '../Styles/Nav.css'
import Logo from '../Images/Logo.png'
import {HomeTwoTone,
    FolderOpenTwoTone,
    MedicineBoxTwoTone,
    PlusCircleTwoTone,
    FireTwoTone ,
    MailTwoTone} from '@ant-design/icons'
function Nav() {
    return (
        <div>
            <img className="logo" alt="Logo" src = {Logo} width={60} height={60} />
            <h1 className="title">KM Hospital</h1>
            <hr/>
            <div className="navbar">
            <ul className="nav">
                <li><HomeTwoTone  style= {{ fontSize: '16px', color: '#000' }} />Home</li>
                <li><FolderOpenTwoTone />Abouts us</li>
                <li><MedicineBoxTwoTone />Hospitals</li>
                <li><PlusCircleTwoTone />Speaciality</li>
                <li><FireTwoTone />For Patients</li>
                <li><MailTwoTone />Contact us</li>
            </ul>
            <hr/>
            </div>
            
        </div>
    )
}

export default Nav
