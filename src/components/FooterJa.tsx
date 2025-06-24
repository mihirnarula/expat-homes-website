import { Building } from 'lucide-react';

export default function FooterJa() {
  const links = [
    { label: 'ホーム', anchor: 'home' },
    { label: '会社概要', anchor: 'about' },
    { label: 'サービス', anchor: 'services' },
    { label: 'お問い合わせ', anchor: 'contact' },
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img src="/images/logo.png" alt="Expat Homes ロゴ" className="h-20 w-auto" />
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map(link => (
              <a
                key={link.anchor}
                href={`#${link.anchor}`}
                className="text-white/80 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Expat Homes. 全著作権所有。</p>
        </div>
      </div>
    </footer>
  );
} 