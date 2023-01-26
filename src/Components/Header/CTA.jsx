import React from 'react';


const CTA = () => {
    return (
        <div className='cta'>
            <a className='btn' target={'_blank'} href='https://drive.google.com/file/d/1outMVkz4ZmF902o7SotvWdR5n_h2iDEb/view?usp=share_link' download rel="noreferrer">Download CV</a>
            <a className='btn btn-primary' href="#contact">Let's Talk</a>
        </div>
    );
};

export default CTA;
