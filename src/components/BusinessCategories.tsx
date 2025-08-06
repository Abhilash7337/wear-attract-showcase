import { ArrowRight, Rocket, Calendar, Users, Video, Heart, GraduationCap, ShoppingBag } from 'lucide-react';
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
    <section ref={sectionRef} className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}>
            Solutions for Every{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-gradient-shift">
              Business
            </span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}>
            Discover how smart clothing technology can transform your specific industry and business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessCategories.map((category, index) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            
            return (
              <Card
                key={category.id}
                className={`group cursor-pointer overflow-hidden bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 card-shadow border-0 transform ${
                  isVisible 
                    ? 'animate-scale-in opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                }`}
                style={{ 
                  animationDelay: isVisible ? `${index * 200}ms` : '0ms',
                  transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
                }}
              >
                <CardContent className="p-0 relative">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                    <div className="w-full h-full bg-gradient-to-br from-primary via-primary/50 to-primary/20 animate-gradient-shift"></div>
                  </div>

                  {/* Header with icon and title */}
                  <div className="p-6 pb-4 relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl p-2.5 group-hover:scale-105 transition-all duration-300">
                        <Icon className="w-7 h-7 text-white transition-transform duration-300" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-all duration-300">
                        {category.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                      {category.description}
                    </p>
                  </div>

                  {/* Features list with subtle animations */}
                  <div className="px-6 pb-4 relative z-10">
                    <ul className="space-y-2">
                      {category.features.slice(0, 3).map((feature, featureIndex) => (
                        <li 
                          key={featureIndex} 
                          className={`flex items-center text-sm text-muted-foreground transition-transform duration-300`}
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Subtle CTA Footer */}
                  <div className="p-6 pt-4 bg-muted/30 group-hover:bg-primary/10 transition-all duration-300 relative z-10">
                    <a
                      href={category.href}
                      className="flex items-center justify-between text-primary group-hover:text-primary font-medium transition-transform duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </div>

                  {/* Enhanced hover overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                  <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-transparent via-primary/30 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
                </CardContent>
              </Card>
            );
          })}
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