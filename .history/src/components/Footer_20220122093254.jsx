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
