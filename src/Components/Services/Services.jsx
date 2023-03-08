import React from 'react';
import { BiCheck } from 'react-icons/bi';
import "../Styles/services.css";

const Services = () => {
    const serviceItems = [
        {
            title: "Frontend Development",
            points: [
                "I develop the user interface.",
                "Web page development.",
                "Understanding of HTML, CSS, and JavaScript",
                "Experience with JavaScript frameworks React",
                "Familiarity with browser developer tools",
                "Understanding of responsive design principles",
                "Knowledge of cross-browser compatibility issues",
                "Experience with version control systems such as Git",
            ]
        },
        {
            title: "Backend Development",
            points: [
                "Create Server From scratch with NodeJS and ExpressJS.",
                "With In Database Management system - MongoDB.",
                "Understanding of RESTful API design principles.",
                "Knowledge of server-side caching,and performance.",
                "MongoDB CRUD Operations.",
                "Enable Data security With JWT(JSON Web Token).",
                "Work with Environment Variables.",
                "NodeJS login authentication."
            ]
        },
        {
            title: "UI/UX Design",
            points: [
                "Familiarity with design software such as Adobe XD, Figma",
                "Understanding of user-centered design principles and user experience (UX) design",
                "Understanding of responsive design principles",
                "Knowledge of typography, color theory, and layout principles",
                "Experience with user research and testing methodologies",
                "Strong attention to detail and ability to iterate on designs based on feedback.",
            ]
        },
    ]

    return (
        <div id='services' className="section_wrapper">
            <h5>What I Offer</h5>
            <h2>My Services</h2>
            <div className="container services_container">
                { serviceItems.map((item, idx) => <div key={ idx } className="service">
                    <div className="service_heading">
                        <h3>{ item.title }</h3>
                    </div>
                    <ul className="service_list">
                        { item.points.map((point, idx) => <li key={ idx }>
                            <BiCheck className='service_list_icon' />
                            <p className="list_details">{ point }</p>
                        </li>
                        ) }
                    </ul>
                </div>
                ) }
            </div>
        </div>
    );
};

export default Services;
