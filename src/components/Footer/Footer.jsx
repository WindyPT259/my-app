import React from "react";
import icon from "../../assets/icon/icon";
import '../../styles/footer.scss'
import { Link } from "react-router-dom";
function Footer() {
    const menu = [
        {
            id: 1,
            label: "Home",
            to: "/"
        },
        {
            id: 2,
            label: ".NET template initializer",
            to: "/NETtemplate"
        },
        {
            id: 3,
            label: "ReactJS template initializer",
            href: "/ReactJStemplate"
        },
        {
            id: 4,
            label: "Contacts",
            href: "/Contacts"
        },

    ];

    return (
        <footer className='wrapper-footer'>
            <div className='footer-container'>
                <div className='footer-content'>
                    <div className='footer_content_left'>
                        <div className='footer_content_left_title'>Connect with us</div>
                        <div className='footer_content_left_icon'>
                            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                                <div className='footer_icon_linkedin'>
                                    <img
                                        src={icon.linkedin}
                                        alt="linkedin logo"
                                        className="icon_contact"
                                    />
                                </div>
                            </a>
                            <a href="mailto:sales@tmasolutions.com">
                                <div className='footer_icon_email'>
                                    <img
                                        src={icon.email}
                                        alt="email logo"
                                        className="icon_contact"
                                    />
                                </div>
                            </a>
                            <a href="tel:+842839978000">
                                <div className='footer_icon_telephone'>
                                    <img
                                        src={icon.telephone}
                                        alt="telephone logo"
                                        className="icon_contact"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='footer_content_right'>
                        <ul>
                            {menu.map((item) => (
                                <li key={item.id}>
                                    <Link to={item.to}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='footer_content_line'>Companny © 2022 All Rights Reserved</div>
            </div>
        </footer>
    );
}

export default Footer;

