import './page.css';
import './components/NavTest.css'
import About from '../app/components/About';
//import Contact from '../app/components/Contact';
import Education from '../app/components/Education';
import Experinces from '../app/components/Experinces';
import Footer from '../app/components/Footer';
import Hello from '../app/components/Hello';
import Navbar from './components/Navbar';
import Projects from '../app/components/Projects';
import Qualification from '../app/components/Qualification';
import Tech from '../app/components/Tech';
import Contact from './components/Contact';
import NavTest from './components/NavTest';


export default function Home() {
  return (
    <div id='home'>
    <NavTest/>
    {/* <Navbar/> */}
    <Hello/>
    <Tech />
    <About />
    <Experinces />
    <Education />
    <Qualification />
    <Projects />
    <Contact/>
    <Footer />
  
  </div>
  );
}
