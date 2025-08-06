import { businessCategories } from '@/data/businessCategories';

interface NavigationProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

export const Navigation = ({ mobile = false, onItemClick }: NavigationProps) => {
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
          <span className="text-sm font-medium text-muted-foreground">Business Categories</span>
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
        className="text-foreground hover:text-primary transition-colors font-medium"
      >
        Home
      </a>
      
      <div className="flex items-center space-x-1">
        <span className="text-foreground font-medium">Shop</span>
        <div className="flex flex-wrap items-center gap-2 ml-4">
          {businessCategories.map((category) => (
            <a
              key={category.id}
              href={category.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              {category.title}
            </a>
          ))}
        </div>
      </div>

      <a
        href="/about"
        className="text-foreground hover:text-primary transition-colors font-medium"
      >
        About
      </a>
      
      <a
        href="/contact"
        className="text-foreground hover:text-primary transition-colors font-medium"
      >
        Contact
      </a>
    </nav>
  );
};