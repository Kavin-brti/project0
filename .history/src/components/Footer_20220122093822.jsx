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

                <div className="frontend">
                    <ul>
                        <li>Harshiny Arumugam</li>
                        <li>Keerthana Ravikumar</li>
                    </ul>
                </div>
                <div className="backend">
                    <ul>
                        <li>Marimuthu Ponnusamy</li>
                        <li>Madhan S</li>
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
