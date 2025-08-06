import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { businessCategories } from '@/data/businessCategories';

interface NavigationProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

export const Navigation = ({ mobile = false, onItemClick }: NavigationProps) => {
  const [isShopOpen, setIsShopOpen] = useState(false);

  const handleClick = () => {
    if (onItemClick) onItemClick();
  };

  if (mobile) {
    return (
      <nav className="space-y-2">
        <a
          href="/"
          className="block py-2 text-foreground hover:text-primary transition-colors"
          onClick={handleClick}
        >
          Home
        </a>
        <div className="py-2">
          <span className="text-sm font-medium text-muted-foreground">Shop - Business Categories</span>
          <div className="mt-2 space-y-2 pl-4">
            {businessCategories.map((category) => (
              <a
                key={category.id}
                href={category.href}
                className="block py-1 text-sm text-foreground hover:text-primary transition-colors"
                onClick={handleClick}
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
        <a
          href="/about"
          className="block py-2 text-foreground hover:text-primary transition-colors"
          onClick={handleClick}
        >
          About
        </a>
        <a
          href="/contact"
          className="block py-2 text-foreground hover:text-primary transition-colors"
          onClick={handleClick}
        >
          Contact
        </a>
      </nav>
    );
  }

  return (
    <nav className="flex items-center space-x-8">
      <a
        href="/"
        className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
      >
        Home
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
      </a>
      
      {/* Shop Dropdown */}
      <div 
        className="relative group"
        onMouseEnter={() => setIsShopOpen(true)}
        onMouseLeave={() => setIsShopOpen(false)}
      >
        <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-all duration-300 font-medium group">
          <span>Shop</span>
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isShopOpen ? 'rotate-180' : ''}`} />
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </button>
        
        {/* Dropdown Menu */}
        <div className={`absolute top-full left-0 mt-2 w-72 bg-background/95 backdrop-blur-lg border border-border rounded-lg shadow-2xl transition-all duration-300 origin-top z-50 ${
          isShopOpen 
            ? 'opacity-100 scale-100 translate-y-0 visible' 
            : 'opacity-0 scale-95 -translate-y-2 invisible'
        }`}>
          <div className="p-4">
            <h3 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
              Business Categories
            </h3>
            <div className="grid gap-1">
              {businessCategories.map((category, index) => (
                <a
                  key={category.id}
                  href={category.href}
                  className="group/item block px-3 py-2 rounded-md hover:bg-accent/50 transition-all duration-200 hover:translate-x-1"
                  style={{ 
                    animationDelay: isShopOpen ? `${index * 30}ms` : '0ms'
                  }}
                >
                  <span className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors duration-200">
                    {category.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Bottom gradient */}
          <div className="h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-b-lg"></div>
        </div>
      </div>

      <a
        href="/about"
        className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
      >
        About
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
      </a>
      
      <a
        href="/contact"
        className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
      >
        Contact
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
      </a>
    </nav>
  );
};