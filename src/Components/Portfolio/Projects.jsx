import '../Styles/project.css'
import { CiExport } from 'react-icons/ci'
import { BsGithub } from 'react-icons/bs'

const Projects = () => {
    const data = [
        {
            title: "Car Rental",
            img: "https://i.ibb.co/PZx4qxd/Doctor-portal-fullstack-website-min.png",
            description: "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
            techno1: "React",
            techno2: "SCSS",
            code: "https://github.com/stefvndev/car-rental",
            demo: "https://car-rental-ten.vercel.app/",
            scrollY: "-83%",
            icon: "🚗"
        },
        {
            title: "coindom",
            img: "https://i.ibb.co/khBCXqt/car-doctor-fullstack-website-min.png",
            description: "Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time.",
            techno1: "React",
            techno2: "SCSS",
            code: "https://github.com/stefvndev/coindom-crypto",
            demo: "https://coindom-crypto-search.vercel.app/",
            scrollY: "-74%",
            icon: "🪙",
            cName: "reversed-proj"
        },
        {
            title: "gymate",
            img: "https://i.ibb.co/Mf6zRhT/Eye-Care-fullstack-website-min.png",
            description: "A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals.",
            techno1: "React",
            techno2: "Tailwind CSS",
            code: "https://github.com/stefvndev/Gymate",
            demo: "https://gymate-iota.vercel.app/",
            scrollY: "-89%",
            icon: "🏋️"
        },
        {
            title: "Raouf Ecommerce",
            img: "https://i.ibb.co/BnZXhtW/traveler-fullstack-website-min.png",
            description: "With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need.",
            techno1: "React",
            techno2: "Vanila CSS",
            code: "https://github.com/stefvndev/Minimalist-E-commerce",
            demo: "https://minimalist-e-commerce.vercel.app/",
            scrollY: "-71%",
            icon: "🛒",
            cName: "reversed-proj"
        }
    ]

    return (
        <section id="projects" className="project">
            <div className="container">

                <div className="projects-grid">
                    <div className="single_project project__1">
                        <div className="project__img">
                            <a
                                target="_blank"
                                href="https://car-rental-ten.vercel.app/"
                                rel="noreferrer"
                            >
                                <img
                                    src="https://i.ibb.co/BnZXhtW/traveler-fullstack-website-min.png"
                                    alt="website"
                                />
                            </a>
                        </div>
                        <div className="project-content">
                            <h3 className='project_title'>Car Rental 🚗</h3>
                            <p className='project_description'>
                                A car rental website is an online platform that allows users to
                                rent cars for personal or business use. The website provides an
                                interface for searching, comparing, and reserving cars.
                            </p>
                            <div className="stack">
                                <p>React</p>
                                <p>CSS</p>
                            </div>
                            <div className="links">
                                <a
                                    target="_blank"
                                    href="https://github.com/stefvndev/car-rental"
                                    rel="noreferrer"
                                >
                                    Code <BsGithub />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://car-rental-ten.vercel.app/"
                                    rel="noreferrer"
                                    className='course_icon'
                                >
                                    Live Demo
                                    <CiExport />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>

    );
}

export default Projects;
