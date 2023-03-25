import React from 'react';
import '../Styles/Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer_logo">JASIM</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#experiences">experiences</a></li>
                <li><a href="#services">services</a></li>
                <li><a href="#portfolio">portfolio</a></li>
                <li><a href="#testimonials">testimonials</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
            <div className="footer_socials">
                <a target={ '_blank' } href="https://www.facebook.com/ismailjosim99" rel="noreferrer"><FaFacebookF /></a>
                <a target={ '_blank' } href="#" rel="noreferrer"><FaInstagram /></a>
                <a target={ '_blank' } href="https://twitter.com/ismail_josim" rel="noreferrer"><FaTwitter /></a>
                <a target={ '_blank' } href="https://www.linkedin.com/in/ismailjosim/" rel="noreferrer"><FaLinkedinIn /></a>
            </div>
            <div className="footer_copyright">
                <small>&copy; JASIM 2019-2023. All rights reserved.</small>

            </div>
        </footer>
    );
};

export default Footer;
