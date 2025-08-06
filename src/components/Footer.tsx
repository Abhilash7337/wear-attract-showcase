import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { businessCategories } from '@/data/businessCategories';
import { useEffect, useRef, useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={sectionRef} className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className={`lg:col-span-1 transition-all duration-700 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-6'}`}>
            <h3 className="text-2xl font-bold text-foreground mb-4">Wear Attraction</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Revolutionary smart clothing technology for modern businesses. Transform your team's potential with WearTap innovation.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 group">
                <Mail className="w-4 h-4 mr-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">hello@wearattraction.com</span>
              </div>
              <div className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 group">
                <Phone className="w-4 h-4 mr-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 group">
                <MapPin className="w-4 h-4 mr-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-6'}`}>
            <h4 className="text-lg font-semibold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-2">
              {businessCategories.slice(0, 5).map((category, index) => (
                <li key={category.id} 
                    className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}>
                  <a
                    href={category.href}
                    className="text-muted-foreground hover:text-primary text-sm hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {category.title}
                  </a>
                </li>
              ))}
              <li className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: '900ms' }}>
                <a
                  href="/solutions"
                  className="text-primary hover:text-primary/80 text-sm font-medium hover:translate-x-1 inline-block transition-all duration-300"
                >
                  View All Solutions →
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-6'}`}>
            <h4 className="text-lg font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: '600ms' }}>
                <a href="/about" className="text-muted-foreground hover:text-primary text-sm hover:translate-x-1 inline-block transition-all duration-300">
                  About Us
                </a>
              </li>
              <li className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: '700ms' }}>
                <a href="/careers" className="text-muted-foreground hover:text-primary text-sm hover:translate-x-1 inline-block transition-all duration-300">
                  Careers
                </a>
              </li>
              <li className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: '800ms' }}>
                <a href="/press" className="text-muted-foreground hover:text-primary text-sm hover:translate-x-1 inline-block transition-all duration-300">
                  Press & Media
                </a>
              </li>
              <li className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: '900ms' }}>
                <a href="/blog" className="text-muted-foreground hover:text-primary text-sm hover:translate-x-1 inline-block transition-all duration-300">
                  Blog
                </a>
              </li>
              <li className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: '1000ms' }}>
                <a href="/contact" className="text-muted-foreground hover:text-primary text-sm hover:translate-x-1 inline-block transition-all duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div className={`transition-all duration-700 delay-600 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-6'}`}>
            <h4 className="text-lg font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 mb-6">
              <li className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: '800ms' }}>
                <a href="/help" className="text-muted-foreground hover:text-primary text-sm hover:translate-x-1 inline-block transition-all duration-300">
                  Help Center
                </a>
              </li>
              <li className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: '900ms' }}>
                <a href="/documentation" className="text-muted-foreground hover:text-primary text-sm hover:translate-x-1 inline-block transition-all duration-300">
                  Documentation
                </a>
              </li>
              <li className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: '1000ms' }}>
                <a href="/privacy" className="text-muted-foreground hover:text-primary text-sm hover:translate-x-1 inline-block transition-all duration-300">
                  Privacy Policy
                </a>
              </li>
              <li className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: '1100ms' }}>
                <a href="/terms" className="text-muted-foreground hover:text-primary text-sm hover:translate-x-1 inline-block transition-all duration-300">
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
                  className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className={`border-t border-border mt-12 pt-8 transition-all duration-700 delay-800 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 Wear Attraction for Business. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-xs text-muted-foreground">Powered by WearTap Technology</span>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;