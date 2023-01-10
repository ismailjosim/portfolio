import React from 'react';
import CTA from './CTA';
import me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>ISMAIL</h1>
                <h5 className="text-light">Full Stack developer</h5>
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
