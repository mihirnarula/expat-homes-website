import { Building } from 'lucide-react';

export default function Footer() {
  const links = ['Home', 'About', 'Services', 'Contact'];
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img src="/images/logo.png" alt="Expat Homes Logo" className="h-20 w-auto" />
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/80 hover:text-accent transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Expat Homes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}