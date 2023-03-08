import React, { useState } from 'react';
import '../Styles/Portfolio.css'
import { useEffect } from 'react';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])



    return (
        <section id='portfolio' className='section_wrapper'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container">
                { projects.map((item, idx) => {
                    const { name, picture, live, github, tech } = item;
                    return <article key={ idx } className="portfolio_item">
                        <div className="portfolio_item_img">
                            <img src={ picture } alt="" />
                        </div>
                        <div className="portfolio_tech">
                            {
                                tech.map((item, idx) => <button className="btn-outline" key={ idx }>{ item }</button>)
                            }
                        </div>
                        <h3 className='portfolio_title'>{ name }</h3>

                        <div className="cta">
                            <a href={ github } target={ '_blank' } className="btn" rel="noreferrer">Github</a>
                            <a href={ live } target={ '_blank' } className="btn btn-primary" rel="noreferrer">Livesite</a>
                        </div>
                    </article>
                }) }
            </div>
        </section>
    );
};

export default Portfolio;
