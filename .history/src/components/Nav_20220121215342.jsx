import React from 'react'
import '../Styles/Nav.css'
import Logo from '../Images/Logo.png'
import {HomeTwoTone,
    FolderOpenTwoTone,
    MedicineBoxTwoTone,
    PlusCircleTwoTone,
    FireTwoTone ,
    MailTwoTone,
    setTwoToneColor} from '@ant-design/icons'
function Nav() {
    return (
        <div>
            <img className="logo" alt="Logo" src = {Logo} width={60} height={60} />
            <h1 className="title">KM Hospital</h1>
            <hr/>{setTwoToneColor('#000')}
            <div className="navbar">
            <ul className="nav">
                <li><HomeTwoTone  style= {{ fontSize: '20px' }} />&nbsp;Home</li>
                <li><FolderOpenTwoTone style= {{ fontSize: '20px'}} />&nbsp;Abouts us</li>
                <li><MedicineBoxTwoTone style= {{ fontSize: '20px' }} />&nbsp;Hospitals</li>
                <li><PlusCircleTwoTone style= {{ fontSize: '20px' }} />&nbsp;Speaciality</li>
                <li><FireTwoTone style= {{ fontSize: '20px'}} />&nbsp;For Patients</li>
                <li><MailTwoTone style= {{ fontSize: '20px'}} />&nbsp;Contact us</li>
            </ul>
            <hr/>
            </div>
            
        </div>
    )
}

export default Nav
