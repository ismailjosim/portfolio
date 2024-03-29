import './App.css';
import About from './Components/About/About';
import Experiences from './Components/Experiences/Experiences';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Projects from './Components/Portfolio/Projects';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experiences />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
