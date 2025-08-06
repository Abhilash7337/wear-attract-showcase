import { ArrowRight, Rocket, Calendar, Users, Video, Heart, GraduationCap, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { businessCategories } from '@/data/businessCategories';
// import ApparelSolutions from './ApparelSolutions';
import { useEffect, useRef, useState } from 'react';

const iconMap = {
  Rocket,
  Calendar,
  Heart,
  GraduationCap,
  ShoppingBag
};

const BusinessCategories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoPlayProgress, setAutoPlayProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % businessCategories.length);
    // Use requestAnimationFrame for smoother transitions
    requestAnimationFrame(() => {
      setTimeout(() => setIsTransitioning(false), 1000);
    });
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + businessCategories.length) % businessCategories.length);
    requestAnimationFrame(() => {
      setTimeout(() => setIsTransitioning(false), 1000);
    });
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    requestAnimationFrame(() => {
      setTimeout(() => setIsTransitioning(false), 1000);
    });
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

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentSlide((prev) => (prev + 1) % businessCategories.length);
      }
    }, 6000); // Increased to 6 seconds for smoother experience

    return () => {
      clearInterval(interval);
    };
  }, [isTransitioning]);

  return (
    <section ref={sectionRef} className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`mb-4 flex justify-center ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}> 
            <span className="inline-block px-4 py-1 rounded-full bg-foreground/10 text-foreground text-base font-semibold tracking-wide shadow-sm">Industry Solutions</span>
          </div>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}> 
            Tailored for Your Industry
          </h2>
          <p className={`text-2xl text-muted-foreground max-w-4xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}> 
            Specialized smart apparel solutions designed for different industries and use cases. Each solution is crafted to meet your specific business needs.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full group">
          {/* Navigation Arrows - Appear on hover */}
          {/* Navigation Arrows - Appear on hover, now vertically centered and spaced for all screens */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-background/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed opacity-80 group-hover:opacity-100"
            aria-label="Previous slide"
            style={{ boxShadow: '0 2px 12px 0 rgba(0,0,0,0.08)' }}
          >
            <ChevronLeft className="w-6 h-6 transition-transform duration-300 hover:-translate-x-0.5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-background/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed opacity-80 group-hover:opacity-100"
            aria-label="Next slide"
            style={{ boxShadow: '0 2px 12px 0 rgba(0,0,0,0.08)' }}
          >
            <ChevronRight className="w-6 h-6 transition-transform duration-300 hover:translate-x-0.5" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden px-6 sm:px-16 md:px-24 lg:px-32 xl:px-48">
            <div
              className="flex"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: `transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                willChange: 'transform'
              }}
            >
              {businessCategories.map((category, index) => {
                const isActive = index === currentSlide;
                return (
                  <div
                    key={category.id}
                    className={`w-full flex-shrink-0 min-h-[60vh] transition-all duration-700 ${
                      isActive
                        ? 'opacity-100 blur-0 z-20'
                        : 'opacity-60 blur-sm z-10'
                    }`}
                    style={{ pointerEvents: isActive ? 'auto' : 'none' }}
                  >
                    {/* Full-width page section */}
                    <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
                      <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                          {/* Left Content */}
                          <div className="space-y-8">
                            {/* Category Title with Typewriter Effect */}
                            <h3 className={`text-4xl sm:text-5xl font-bold text-foreground leading-tight transition-all duration-700 ${
                              isActive 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-60 translate-y-2'
                            }`}>
                              {category.title}
                            </h3>
                            
                            <p className={`text-xl text-muted-foreground leading-relaxed transition-all duration-700 ${
                              isActive 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-50 translate-y-2'
                            }`}>
                              {category.description}
                            </p>

                            {/* Features List with Staggered Animation */}
                            <div className={`transition-all duration-700 ${
                              isActive 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-50 translate-y-2'
                            }`}>
                              <h4 className="text-2xl font-semibold text-foreground mb-6">
                                Key Features
                              </h4>
                              <ul className="space-y-4">
                                {category.features.map((feature, featureIndex) => (
                                  <li 
                                    key={featureIndex} 
                                    className={`flex items-start text-lg text-muted-foreground transition-all duration-500 ${
                                      isActive 
                                        ? 'opacity-100 translate-x-0' 
                                        : 'opacity-70 translate-x-1'
                                    }`}
                                  >
                                    <div className={`w-2 h-2 bg-primary rounded-full mr-4 mt-3 flex-shrink-0 transition-all duration-300 ${
                                      isActive ? 'scale-100 shadow-lg shadow-cyan-400/50' : 'scale-75'
                                    }`}></div>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* CTA Section with Enhanced Animation */}
                            <div className={`pt-8 transition-all duration-700 ${
                              isActive 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-50 translate-y-2'
                            }`}>
                              <a
                                href={category.href}
                                className="inline-flex items-center gap-3 text-primary hover:text-cyan-400 font-semibold text-xl transition-all duration-300 group hover:translate-x-2 hover:scale-105 active:scale-95 hover:drop-shadow-lg"
                              >
                                <span className="relative">
                                  Explore {category.title} Solutions
                                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-cyan-400 group-hover:w-full transition-all duration-400"></span>
                                </span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 group-hover:text-cyan-400 transition-all duration-300" />
                              </a>
                            </div>
                          </div>

                          {/* Right Content - Gallery with Enhanced Animations */}
                          <div className={`space-y-8 transition-all duration-700 ${
                            isActive 
                              ? 'opacity-100 translate-y-0' 
                              : 'opacity-50 translate-y-4'
                          }`}>
                            <div>
                              <h4 className="text-2xl font-semibold text-foreground mb-6">
                                Gallery
                              </h4>
                              <div className="grid grid-cols-2 gap-6">
                                {[1, 2, 3, 4].map((item, galleryIndex) => (
                                  <div 
                                    key={item}
                                    className={`aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-xl flex items-center justify-center border border-border/50 cursor-pointer group overflow-hidden relative transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20 hover:border-cyan-400/50 ${
                                      isActive 
                                        ? 'opacity-100 translate-y-0' 
                                        : 'opacity-70 translate-y-2'
                                    }`}
                                  >
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-400"></div>
                                    
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-br from-cyan-400/10 to-transparent"></div>
                                    
                                    <span className="text-sm text-muted-foreground relative z-10 group-hover:text-cyan-300 transition-colors duration-300">
                                      Image {item}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dot Indicators - Minimal and Clean */}
          <div className="flex justify-center mt-8 space-x-2">
            {businessCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-foreground scale-125' 
                    : 'bg-muted-foreground/40 hover:bg-muted-foreground/70 hover:scale-110'
                }`}
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
}

export default BusinessCategories;