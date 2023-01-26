import React from 'react';
import CTA from './CTA';
import me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial';
import '../Styles/Header.css'
import Typed from 'react-typed';

const Header = () => {
    return (
        <header id='#'>
            <div className="container header_container">
                <h5>Hello, I'M</h5>
                <h1> MD JASIM</h1>
                <Typed
                    className='text-light'
                    typeSpeed={90}
                    backSpeed={50}
                    loop
                    strings={[
                        'Frontend Developer ',
                        'Backend Developer ',
                        'MERN Stack Developer ',
                        'Full Stack Developer ',
                        'Content Creator ']}
                />
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
