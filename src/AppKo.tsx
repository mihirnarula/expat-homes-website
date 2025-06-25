import HeaderKo from './components/HeaderKo';
import HeroKo from './components/HeroKo';
import AboutKo from './components/AboutKo';
import ServicesKo from './components/ServicesKo';
import ClientLogos from './components/ClientLogos';
import PropertyLocationsKo from './components/PropertyLocationsKo';
import ContactKo from './components/ContactKo';
import FooterKo from './components/FooterKo';
import FurnishingsKo from './components/FurnishingsKo';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function AppKo() {
  return (
    <div className="min-h-screen">
      <LanguageSwitcher current="ko" />
      <HeaderKo />
      <main>
        <HeroKo />
        <AboutKo />
        <ServicesKo />
        <ClientLogos title="일부 고객 명단" />
        <FurnishingsKo />
        <PropertyLocationsKo />
        <ContactKo />
      </main>
      <FooterKo />
    </div>
  );
} 