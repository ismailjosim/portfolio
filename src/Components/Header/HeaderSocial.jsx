import React from 'react';
import { BsDribbble, BsGithub, BsLinkedin } from 'react-icons/bs';

const HeaderSocial = () => {
    return (
        <div className='header_social'>
            <a href="http://linkedin.com" target="_blank" rel="noreferrer" >
                <BsLinkedin />
            </a>
            <a href="http://github.com" target="_blank" rel="noreferrer">
                <BsGithub />
            </a>
            <a href="http://dribbble.com" target="_blank" rel="noreferrer">
                <BsDribbble />
            </a>
        </div>
    );
};

export default HeaderSocial;
