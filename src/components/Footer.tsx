import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { businessCategories } from '@/data/businessCategories';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-foreground mb-4">Wear Attraction</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Revolutionary smart clothing technology for modern businesses. Transform your team's potential with WearTap innovation.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-3 text-primary" />
                <span className="text-sm">hello@wearattraction.com</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-3 text-primary" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-3 text-primary" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-2">
              {businessCategories.slice(0, 5).map((category) => (
                <li key={category.id}>
                  <a
                    href={category.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {category.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/solutions"
                  className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  View All Solutions →
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="/press" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Press & Media
                </a>
              </li>
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <a href="/help" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/documentation" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div>
              <h5 className="text-sm font-medium text-foreground mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 Wear Attraction for Business. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-xs text-muted-foreground">Powered by WearTap Technology</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;