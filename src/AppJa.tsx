import HeaderJa from './components/HeaderJa';
import HeroJa from './components/HeroJa';
import AboutJa from './components/AboutJa';
import ServicesJa from './components/ServicesJa';
import ClientLogos from './components/ClientLogos';
import PropertyLocationsJa from './components/PropertyLocationsJa';
import ContactJa from './components/ContactJa';
import FooterJa from './components/FooterJa';
import FurnishingsJa from './components/FurnishingsJa';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function AppJa() {
  return (
    <div className="min-h-screen">
      <HeaderJa current="ja" />
      <main className="pt-20">
        <HeroJa />
        <AboutJa />
        <ServicesJa />
        <ClientLogos title="一部のクライアントリスト" />
        <FurnishingsJa />
        <PropertyLocationsJa />
        <ContactJa />
      </main>
      <FooterJa />
    </div>
  );
} 