import { ArrowRight, Rocket, Calendar, Users, Video, Heart, GraduationCap, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { businessCategories } from '@/data/businessCategories';
import { useEffect, useRef, useState } from 'react';

const iconMap = {
  Rocket,
  Calendar,
  Users,
  Video,
  Heart,
  GraduationCap,
  ShoppingBag
};

const BusinessCategories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % businessCategories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + businessCategories.length) % businessCategories.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-play functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section ref={sectionRef} className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}>
            Convert Your{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-gradient-shift">
              Business
            </span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}>
            Discover how smart clothing technology can transform your specific industry and business needs.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="carousel-container">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="carousel-nav-button carousel-nav-left"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="carousel-nav-button carousel-nav-right"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {businessCategories.map((category, index) => {
                const Icon = iconMap[category.icon as keyof typeof iconMap];
                
                return (
                  <div 
                    key={category.id} 
                    className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                  >
                    <Card className="carousel-card">
                      <CardContent className="p-0 relative">
                        {/* Hero Image Section */}
                        <div className="carousel-hero-section">
                          <div className="carousel-hero-overlay"></div>
                          <div className="carousel-icon-container">
                            <div className="carousel-icon-wrapper">
                              <Icon className="w-12 h-12 text-white" />
                            </div>
                          </div>
                          <div className="carousel-title-overlay">
                            <h3 className="carousel-title">
                              {category.title}
                            </h3>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8">
                          <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                            {category.description}
                          </p>

                          {/* Features List */}
                          <div className="mb-6">
                            <h4 className="font-semibold text-foreground mb-4 flex items-center">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                              Key Features
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {category.features.map((feature, featureIndex) => (
                                <li 
                                  key={featureIndex} 
                                  className="flex items-start text-sm text-muted-foreground"
                                >
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Gallery Placeholder */}
                          <div className="mb-6">
                            <h4 className="font-semibold text-foreground mb-4 flex items-center">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                              Gallery
                            </h4>
                            <div className="grid grid-cols-3 gap-3">
                              {[1, 2, 3].map((item) => (
                                <div 
                                  key={item}
                                  className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center border"
                                >
                                  <span className="text-xs text-muted-foreground">Image {item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CTA Section */}
                          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6">
                            <a
                              href={category.href}
                              className="flex items-center justify-between text-primary hover:text-primary/80 font-semibold transition-all duration-300 group"
                            >
                              <span className="text-lg">Explore {category.title} Solutions</span>
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-indicators">
            {businessCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Subtle Bottom CTA */}
        <div className={`text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl transition-all duration-1000 delay-1000 relative overflow-hidden ${isVisible ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95'}`}>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-foreground mb-4 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              Don't see your industry?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
              We work with businesses across all industries. Contact us to discuss how smart clothing can benefit your specific needs.
            </p>
            <button className="brand-gradient text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 brand-shadow group animate-scale-in"
                    style={{ animationDelay: '1.6s' }}>
              <span className="relative z-10">Contact Our Team</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCategories;