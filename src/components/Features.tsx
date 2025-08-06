import { Users, Zap, Palette, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: Users,
    title: 'No Minimum Orders',
    description: 'Order as few as 1 piece. Perfect for startups, SMEs, and large enterprises.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'Smart Technology',
    description: 'Built-in QR codes and NFC chips with advanced tracking and link management.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Palette,
    title: 'Unlimited Colors',
    description: 'Match your exact brand colors with our extensive customization options.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: TrendingUp,
    title: 'Analytics Tracking',
    description: 'Track every interaction and engagement. Update links anytime through our dashboard.',
    gradient: 'from-orange-500 to-red-500'
  }
];

const Features = () => {
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
    <section ref={sectionRef} className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}>
            Why Choose{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-gradient-shift">
              Wear Attraction
            </span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}>
            We're revolutionizing the way businesses think about clothing and technology integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 card-shadow transform ${
                  isVisible 
                    ? 'animate-slide-in-left opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-20'
                }`}
                style={{ 
                  animationDelay: isVisible ? `${index * 150}ms` : '0ms',
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
                }}
              >
                <CardContent className="p-6 h-full flex flex-col relative">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                    <div className={`w-full h-full bg-gradient-to-br ${feature.gradient} animate-gradient-shift`}></div>
                  </div>

                  {/* Icon with subtle animations */}
                  <div className="relative mb-6 z-10">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} p-3 group-hover:scale-105 transition-all duration-300`}>
                      <Icon className="w-8 h-8 text-white transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Content with subtle animations */}
                  <div className="flex-1 relative z-10">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Enhanced hover effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Subtle call to action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95'}`}>
          <p className="text-lg text-muted-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            Ready to transform your business with smart clothing?
          </p>
          <button className="brand-gradient text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 brand-shadow group">
            <span className="relative z-10">Explore Our Solutions</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;