import HeaderJa from './components/HeaderJa';
import HeroJa from './components/HeroJa';
import AboutJa from './components/AboutJa';
import ServicesJa from './components/ServicesJa';
import PropertyLocationsJa from './components/PropertyLocationsJa';
import ContactJa from './components/ContactJa';
import FooterJa from './components/FooterJa';
import FurnishingsJa from './components/FurnishingsJa';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function AppJa() {
  return (
    <div className="min-h-screen">
      <HeaderJa />
      <LanguageSwitcher current="ja" />
      <main>
        <HeroJa />
        <AboutJa />
        <ServicesJa />
        <FurnishingsJa />
        <PropertyLocationsJa />
        <ContactJa />
      </main>
      <FooterJa />
    </div>
  );
} 