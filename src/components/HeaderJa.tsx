import { useState, useEffect } from 'react';
import { Building, Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function HeaderJa() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'ホーム', anchor: 'home' },
    { label: '会社概要', anchor: 'about' },
    { label: 'サービス', anchor: 'services' },
    { label: 'お問い合わせ', anchor: 'contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-4' : 'bg-white py-6'}`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="Expat Homes ロゴ" className="h-10 w-auto" />
            <span className="text-2xl font-display font-bold text-primary">エクスパットホームズ</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {links.map(link => (
              <a
                key={link.anchor}
                href={`#${link.anchor}`}
                className="text-primary hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
            {links.map(link => (
              <a
                key={link.anchor}
                href={`#${link.anchor}`}
                className="block px-4 py-2 text-primary hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
} 