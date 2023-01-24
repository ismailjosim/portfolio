import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri';
import '../Styles/Nav.css'


const Nav = () => {
    const [active, setActive] = useState('#')
    return (
        <nav>
            <a
                className={active === "#" ? 'active' : ''} href="#"
                onClick={() => setActive("#")}
            >
                <AiOutlineHome />
            </a>
            <a
                href="#about"
                onClick={() => setActive("#about")}
                className={active === "#about" ? 'active' : ''}
            >
                <AiOutlineUser />
            </a>
            <a
                href="#experiences"
                onClick={() => setActive("#experiences")}
                className={active === "#experiences" ? 'active' : ''}
            >
                <BiBook />
            </a>
            <a
                href="#services"
                onClick={() => setActive("#services")}
                className={active === "#services" ? 'active' : ''}
            >
                <RiServiceLine />
            </a>
            <a
                href="#contact"
                onClick={() => setActive("#contact")}
                className={active === "#contact" ? 'active' : ''}
            >
                <BiMessageSquareDetail />
            </a>
        </nav>
    );
};

export default Nav;
