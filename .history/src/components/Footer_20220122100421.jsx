import React from 'react'
import '../Styles/Footer.css'
import logo from '../Images/logoWithBg.png'
import {WhatsAppOutlined,
    InstagramOutlined,
    FacebookOutlined} from '@ant-design/icons'
function Footer() {
    return (
        <div>
            <div className="footer">
                <img className="footLogo" src={logo} alt="Logo" width={150}/>
                <div className="footerContent">
                <h3>&copy;KM Hospital and Pharmacy</h3>
                <p>All Rights Reserved &copy;2022</p>
                <div className="maintain">
                    <h4><strong>Maintanence</strong></h4>
                    <span>Kavinbharathi_Ananth</span><br/>
                </div>
  

                <div className="frontend">
                    <h4><strong>UI/UX & FrontEnd</strong></h4>
                    <ul>  
                        <li>Harshiny_Arumugachamy</li>&nbsp;&nbsp;&nbsp;
                        <li>Keerthana_Ravikumar</li>
                    </ul>
                </div>

                <div className="backend">
                <h4><strong>BackEnd & Database</strong></h4>
                    <ul>
                        <li>Marimuthu_Ponnusamy</li>&nbsp;&nbsp;&nbsp;
                        <li>Madhan_Selvarasu</li>
                    </ul>
                </div>

                <ul className="social">
                    <li><WhatsAppOutlined style={{fontSize: '30px' }} /></li>
                    <li><InstagramOutlined style={{fontSize: '30px' }} /></li>
                    <li><FacebookOutlined style={{fontSize: '30px' }} /></li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Footer
