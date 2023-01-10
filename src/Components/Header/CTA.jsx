import React from 'react';
import cv from '../../assets/cv.pdf';


const CTA = () => {
    return (
        <div className='cta'>
            <a className='btn' href={cv} download>Download CV</a>
            <a className='btn btn-primary' href="#contact">Let's Talk</a>
        </div>
    );
};

export default CTA;
