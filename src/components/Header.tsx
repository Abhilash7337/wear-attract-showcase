import { useState, useEffect } from 'react';
import { Menu, X, Search, User, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { Navigation } from './Navigation';
import { useTheme } from '@/contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false);
      } else {
        // Scrolling up or at top
        setIsVisible(true);
      }
      
      // Add background blur when scrolled
      setIsScrolled(currentScrollY > 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 border-b border-border ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg' 
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-24 relative">
          {/* Left: Home, Shop, About, Contact */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200">Home</a>
            <a href="/shop" className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200">Shop</a>
            <a href="/about" className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200">About</a>
            <a href="/contact" className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200">Contact</a>
          </nav>

          {/* Center: Logo (absolutely centered) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <a href="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
              <img 
                src={theme === 'light' ? '/logo-light.png' : '/logo.png'}
                alt="Wear Attraction" 
                className="h-20 w-auto transition-all duration-300 hover:scale-105 drop-shadow-lg"
              />
            </a>
          </div>

          {/* Right: utility icons only */}
          <div className="hidden md:flex items-center space-x-6">
            <ThemeToggle />
            <button className="p-2 hover:bg-accent rounded-lg transition-all duration-200 hover:scale-110 group">
              <Search className="h-5 w-5 text-foreground group-hover:text-primary transition-colors duration-200" />
            </button>
            <button className="p-2 hover:bg-accent rounded-lg transition-all duration-200 hover:scale-110 group">
              <User className="h-5 w-5 text-foreground group-hover:text-primary transition-colors duration-200" />
            </button>
            <button className="p-2 hover:bg-accent rounded-lg transition-all duration-200 hover:scale-110 group">
              <ShoppingBag className="h-5 w-5 text-foreground group-hover:text-primary transition-colors duration-200" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="p-2 hover:scale-105 transition-transform duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <Navigation mobile onItemClick={() => setIsMenuOpen(false)} />
            <div className="mt-4 space-y-2">
              <Button variant="outline" className="w-full hover:scale-105 transition-transform duration-200" size="sm">
                Contact Sales
              </Button>
              <Button className="w-full brand-gradient text-white hover:scale-105 transition-transform duration-200" size="sm">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;