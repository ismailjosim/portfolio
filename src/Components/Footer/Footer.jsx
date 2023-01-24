import React from 'react';
import '../Styles/Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer_logo">ISMAIL</a>
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
                <a href="https://facebook.com"><FaFacebookF /></a>
                <a href="https://facebook.com"><FaInstagram /></a>
                <a href="https://facebook.com"><FaTwitter /></a>
                <a href="https://facebook.com"><FaLinkedinIn /></a>
            </div>
            <div className="footer_copyright">
                <small>&copy; ISMAIL 2019-2023. All rights reserved.</small>

            </div>
        </footer>
    );
};

export default Footer;
