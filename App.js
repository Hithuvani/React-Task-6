import './App.css';
import Home from './component/Home';
// import Navbar from './component/Navbar';
import About from './component/About';
import Work from './component/Work';
import Testimonials from './component/Testimonials';
import Contact from './component/Contact';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />      
    </div>
  );
}

export default App;
