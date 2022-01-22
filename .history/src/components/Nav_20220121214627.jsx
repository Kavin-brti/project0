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
                <li><HomeTwoTone  style= {{ fontSize: '20px' }} />&nbsp;Home</li>
                <li><FolderOpenTwoTone style= {{ fontSize: '20px', color: '#000' }} />&nbsp;Abouts us</li>
                <li><MedicineBoxTwoTone style= {{ fontSize: '20px', color: '#000' }} />&nbsp;Hospitals</li>
                <li><PlusCircleTwoTone style= {{ fontSize: '20px', color: '#000' }} />&nbsp;Speaciality</li>
                <li><FireTwoTone style= {{ fontSize: '20px', color: '#000' }} />&nbsp;For Patients</li>
                <li><MailTwoTone style= {{ fontSize: '20px', color: '#000' }} />&nbsp;Contact us</li>
            </ul>
            <hr/>
            </div>
            
        </div>
    )
}

export default Nav
