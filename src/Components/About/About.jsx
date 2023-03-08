import React from 'react';
import me from '../../assets/me-about.jpg'
import { SiJavascript, SiMongodb } from 'react-icons/si'
import { FaGitSquare } from 'react-icons/fa';
import '../Styles/About.css'

const About = () => {
    return (
        <section id='about' className='section_wrapper'>
            <h5>My Introduction</h5>
            <h2>About Me</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me_image">
                        <img src={ me } alt="" />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <SiJavascript className='about_icon' />
                            <h4>Frontend</h4>
                            <small>30+ Projects</small>
                        </article>
                        <article className="about_card">
                            <SiMongodb className='about_icon' />
                            <h4>Fullstack</h4>
                            <small>10+ Projects</small>
                        </article>
                        <article className="about_card">
                            <FaGitSquare className='about_icon' />
                            <h4>Github</h4>
                            <small>76+ Projects</small>
                        </article>
                    </div>
                    <p>
                        Web developer, with extensive knowledge and more than 3 years of experience, working in web technologies and Ui / Ux design, delivering quality work.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;
