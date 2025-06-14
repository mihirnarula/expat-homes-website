import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import PropertyLocations from './components/PropertyLocations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Furnishings from './components/Furnishings';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Inject Google Translate script
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);

    // Define the callback globally (TypeScript: extend window)
    (window as any).googleTranslateElementInit = function () {
      new (window as any).google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'ja,ko',
        layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');

      // Detect browser language and auto-select if needed
      const userLang = navigator.language;
      if (userLang.startsWith('ja')) {
        setTimeout(() => {
          const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
          if (select) {
            select.value = 'ja';
            select.dispatchEvent(new Event('change'));
          }
        }, 1000);
      } else if (userLang.startsWith('ko')) {
        setTimeout(() => {
          const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
          if (select) {
            select.value = 'ko';
            select.dispatchEvent(new Event('change'));
          }
        }, 1000);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div id="google_translate_element" style={{ position: 'fixed', top: 10, right: 10, zIndex: 9999 }}></div>
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