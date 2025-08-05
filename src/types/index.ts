export interface BusinessCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  features: string[];
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  features: string[];
  description: string;
  price?: string;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  category: string;
}

export interface NavigationItem {
  title: string;
  href: string;
  description?: string;
}