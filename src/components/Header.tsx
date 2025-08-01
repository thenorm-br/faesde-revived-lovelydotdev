import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import logoFaesde from '@/assets/logo-faesde.webp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'Quem somos', href: '#about' },
    { name: 'Cursos', href: '#courses' },
    { name: 'Processo seletivo', href: '#process' },
    { name: 'Perguntas frequentes', href: '#faq' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contato', href: '#contact' }
  ];

  return (
    <header className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex flex-wrap items-center gap-4 mb-2 md:mb-0">
            <a href="tel:+552722378054" className="flex items-center gap-1 hover:text-secondary transition-colors">
              <Phone size={14} />
              +55 (27) 2237-8054
            </a>
            <span className="flex items-center gap-1">
              <Mail size={14} />
              contato@faesde.com
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              Seg - Sex: 9h - 17h | Sáb: 9h - 12h
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://www.facebook.com/faesde/" target="_blank" rel="noopener noreferrer" 
               className="hover:text-secondary transition-colors">
              <Facebook size={16} />
            </a>
            <a href="https://www.instagram.com/faesde/" target="_blank" rel="noopener noreferrer"
               className="hover:text-secondary transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://www.linkedin.com/company/faesde/" target="_blank" rel="noopener noreferrer"
               className="hover:text-secondary transition-colors">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background shadow-card py-4 px-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logoFaesde} alt="FAESDE" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button variant="outline" className="ml-4">
              Minha Conta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="outline" className="w-fit">
                Minha Conta
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;