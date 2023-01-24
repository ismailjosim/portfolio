import React from 'react';
import '../Styles/Portfolio.css'
import img01 from '../../assets/portfolio1.jpg';

const Portfolio = () => {
    return (
        <section id='portfolio' className='section_wrapper'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container">
                <article className="portfolio_item">
                    <div className="portfolio_item_img">
                        <img src={img01} alt="" />
                    </div>
                    <h3>This is a portfolio Item title</h3>
                    <div className="cta">
                        <a href="https://github.com" target={'_blank'} className="btn" rel="noreferrer">Github</a>
                        <a href="https://github.com" target={'_blank'} className="btn btn-primary" rel="noreferrer">Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Portfolio;
