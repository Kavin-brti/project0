import React from 'react'
import '../Styles/Footer.css'
import {WhatsAppOutlined,
    InstagramOutlined,
    FacebookOutlined} from '@ant-design/icons'
function Footer() {
    return (
        <div>
            <div className="footer">
                <h3>&copy;KM Hospital and Pharmacy</h3>
                <p>All Rights Reserved &copy;2022</p>
                <span><strong>Maintanence</strong></span><br/>
                    <span>Kavinbharathi_Ananth</span><br/>

                <div className="frontend">
                    <span><strong>UI/UX & FrontEnd</strong></span><br/>
                    <ul>  
                        <li>Harshiny_Arumugachamy</li>&nbsp;&nbsp;&nbsp;
                        <li>Keerthana_Ravikumar</li>
                    </ul>
                </div>

                <div className="backend">
                <span><strong>BackEnd & Database</strong></span><br/>
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
    )
}

export default Footer
