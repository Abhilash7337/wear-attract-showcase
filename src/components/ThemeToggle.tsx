import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative p-2 transition-transform hover:scale-110"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 transition-transform rotate-0 scale-100" />
      ) : (
        <Sun className="h-5 w-5 transition-transform rotate-0 scale-100" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};