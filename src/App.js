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

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experiences />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
