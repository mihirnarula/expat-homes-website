import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ClientLogos from './components/ClientLogos';
import PropertyLocations from './components/PropertyLocations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Furnishings from './components/Furnishings';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function App() {
  return (
    <div className="min-h-screen">
      <LanguageSwitcher current="en" />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ClientLogos title="Partial Client List" />
        <Furnishings />
        <PropertyLocations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}