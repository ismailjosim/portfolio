import React from 'react';
import CTA from './CTA';
import me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial';
import '../Styles/Header.css'

const Header = () => {
    return (
        <header id='#'>
            <div className="container header_container">
                <h5>Hello, I'M</h5>
                <h1> MD JASIM</h1>
                <h5 className="text-light">Web Developer</h5>
                <p className="header-description">
                    High level experience in web design and development knowledge, producing quality work.
                </p>
                <CTA />

                <div className="me">
                    <img src={me} alt="" />

                </div>
                <a href="#contact" className='scroll_down'>Scroll Down</a>
                <HeaderSocial />
            </div>
        </header>
    );
};

export default Header;
