import React from 'react'
import '../Styles/Nav.css'
import Logo from '../Images/Logo.png'
import { Menu, Dropdown,Button } from 'antd'
import {HomeTwoTone,
    FolderOpenTwoTone,
    MedicineBoxTwoTone,
    PlusCircleTwoTone,
    FireTwoTone ,
    MailTwoTone,
    PhoneFilled,
    MailFilled,
    setTwoToneColor,
    DownOutlined} from '@ant-design/icons'
function Nav() {
    const menu = (
        <Menu>
          <Menu.Item key="0">
            <a href="https://www.antgroup.com">1st menu item</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="https://www.aliyun.com">2nd menu item</a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
      );
    return (
        
        <div>
             <div className="title"><h1>KM Hospital</h1></div>
            <img className="logo" alt="Logo" src = {Logo} width={60} height={60} />
           
            <Dropdown className="vaccination" overlay={menu} placement="topCenter">
                 <Button>Vaccination<DownOutlined /></Button>
            </Dropdown>

            <div className="contactHead">
                <p><PhoneFilled  style= {{ fontSize: '20px',color: '#00cf23'  }} />&nbsp;+91 95009 77257</p>
                <p><a href="mailto:infokmh@gmail.com"><MailFilled style= {{ fontSize: '20px',color: '#00cf23'  }} />&nbsp;infokmh@gmail.com</a></p>
            </div>&nbsp;
            <hr/>
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
                {setTwoToneColor('#00cf23')}
        </div>

        
    )
}

export default Nav
