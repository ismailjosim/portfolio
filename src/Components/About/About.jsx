import React from 'react';
import me from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc';
import '../Styles/About.css'

const About = () => {
    return (
        <section id='about' className='section_wrapper'>
            <h3>Get To Know</h3>
            <h2>About Me</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me_image">
                        <img src={me} alt="" />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className='about_icon' />
                            <h4>Experience</h4>
                            <small>3+ years</small>
                        </article>
                        <article className="about_card">
                            <FiUsers className='about_icon' />
                            <h4>Clients</h4>
                            <small>200+ Worldwide</small>
                        </article>
                        <article className="about_card">
                            <VscFolderLibrary className='about_icon' />
                            <h4>Projects</h4>
                            <small>70+ Completed Projects</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto assumenda ea culpa numquam deleniti cupiditate dolor odit eius! Quasi voluptatibus minus aperiam reiciendis facere, optio ratione itaque rerum. Accusamus, ut!
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;
