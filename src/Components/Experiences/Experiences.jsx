import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs'
import '../Styles/experiences.css'
const Experiences = () => {
    const skillsFrontend = [
        {
            title: "HTML5",
            level: "Experienced"
        },
        {
            title: "CSS3",
            level: "Experienced"
        },
        {
            title: "JavaScript",
            level: "Experienced"
        },
        {
            title: "BootStrap",
            level: "Experienced"
        },
        {
            title: "Tailwind CSS",
            level: "Experienced"
        },
        {
            title: "ReactJS",
            level: "Experienced"
        }
    ]
    const skillsBack = [
        {
            title: "NodeJS",
            level: "Intermediate"
        },
        {
            title: "ExpressJS",
            level: "Intermediate"
        },
        {
            title: "MongoDB",
            level: "Intermediate"
        }
    ]


    return (
        <div id='experiences' className='section_wrapper'>
            <h5>Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience_container">
                <div className="frontend_experience">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        { skillsFrontend.map((item, idx) => <article
                            key={ idx } className="experience_details">
                            <BsPatchCheckFill className='experience_details_icon' />
                            <div className="details">
                                <h4>{ item.title }</h4>
                                <small className='text-light'>{ item.level }</small>
                            </div>
                        </article>
                        )

                        }
                    </div>
                </div>
                <div className="backend_experience">
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        { skillsBack.map((item, idx) => <article
                            key={ idx } className="experience_details">
                            <BsPatchCheckFill className='experience_details_icon' />
                            <div className="details">
                                <h4>{ item.title }</h4>
                                <small className='text-light'>{ item.level }</small>
                            </div>
                        </article>
                        )

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiences;
