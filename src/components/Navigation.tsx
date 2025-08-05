import { ChevronDown } from 'lucide-react';
import { businessCategories } from '@/data/businessCategories';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

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
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center space-x-1 font-medium">
            <span>Solutions</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80">
          {businessCategories.map((category) => (
            <DropdownMenuItem key={category.id} asChild>
              <a
                href={category.href}
                className="flex flex-col items-start space-y-1 p-3 cursor-pointer"
              >
                <span className="font-medium">{category.title}</span>
                <span className="text-sm text-muted-foreground line-clamp-2">
                  {category.description}
                </span>
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

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