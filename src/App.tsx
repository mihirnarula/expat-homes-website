import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import PropertyLocations from './components/PropertyLocations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Furnishings from './components/Furnishings';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Furnishings />
        <PropertyLocations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}