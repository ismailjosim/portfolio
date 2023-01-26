import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const HeaderSocial = () => {
    return (
        <div className='header_social'>
            <a href="https://www.linkedin.com/in/ismailjosim/" target="_blank" rel="noreferrer" >
                <BsLinkedin />
            </a>
            <a href="https://github.com/ismailjosim" target="_blank" rel="noreferrer">
                <BsGithub />
            </a>
            <a href="https://www.facebook.com/ismailjosim99" target="_blank" rel="noreferrer">
                <BsFacebook />
            </a>
        </div>
    );
};

export default HeaderSocial;
