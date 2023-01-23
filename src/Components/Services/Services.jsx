import React from 'react';
import { BiCheck } from 'react-icons/bi';
import "../Styles/services.css";

const Services = () => {
    const serviceItems = [
        {
            title: "UI/UX Design",
            points: [
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
            ]
        },
        {
            title: "Web Development",
            points: [
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
            ]
        },
        {
            title: "Content Creation",
            points: [
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
            ]
        },
    ]

    return (
        <div id='services' className="section_wrapper">
            <h5>What I Offer</h5>
            <h2>My Services</h2>
            <div className="container services_container">
                {serviceItems.map((item, idx) => <div key={idx} className="service">
                    <div className="service_heading">
                        <h3>{item.title}</h3>
                    </div>
                    <ul className="service_list">
                        {item.points.map((point, idx) => <li key={idx}>
                            <BiCheck className='service_list_icon' />
                            <p className="list_details">{point}</p>
                        </li>
                        )}
                    </ul>
                </div>
                )}
            </div>
        </div>
    );
};

export default Services;
