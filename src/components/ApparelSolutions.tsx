import React, { useRef, useEffect, useState } from 'react';

const apparelSolutions = [
  {
    image: '/images/apparel-shirts.jpg',
    title: 'Corporate Shirts',
    description: 'Professional shirts and polo shirts for your team with smart features',
    tags: ['Polo Shirts', 'Dress Shirts', 'Casual Shirts']
  },
  {
    image: '/images/apparel-suits.jpg',
    title: 'Suits & Formal Wear',
    description: 'Executive and formal business attire with integrated technology',
    tags: ['Business Suits', 'Blazers', 'Formal Wear']
  },
  {
    image: '/images/apparel-work.jpg',
    title: 'Work Uniforms',
    description: 'Practical uniforms for various industries with smart capabilities',
    tags: ['Aprons', 'Work Shirts', 'Safety Wear']
  }
];

const ApparelSolutions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`mb-4 flex justify-center ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}> 
            <span className="inline-block px-4 py-1 rounded-full bg-foreground/10 text-foreground text-base font-semibold tracking-wide shadow-sm">Product Range</span>
          </div>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}> 
            Complete Apparel Solutions
          </h2>
          <p className={`text-2xl text-muted-foreground max-w-4xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}> 
            From corporate uniforms to specialized workwear, we offer a comprehensive range of customizable business apparel enhanced with smart technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apparelSolutions.map((item, idx) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden bg-card rounded-2xl border border-border shadow-lg transition-all duration-700 hover:-translate-y-3 hover:scale-[1.03] card-shadow flex flex-col
                ${isVisible ? 'opacity-100 translate-y-0 animate-fade-in-up' : 'opacity-0 translate-y-10'}
              `}
              style={{
                animationDelay: isVisible ? `${idx * 140 + 200}ms` : '0ms',
                transitionDelay: isVisible ? `${idx * 140 + 200}ms` : '0ms'
              }}
            >
              <div className="w-full h-56 md:h-64 bg-muted rounded-t-2xl overflow-hidden flex items-center justify-center relative">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1" />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-4xl text-muted-foreground">No Image</div>
                )}
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                <p className="text-lg text-muted-foreground mb-4 transition-colors duration-300 group-hover:text-foreground/80">{item.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map((tag) => (
                    <span key={tag} className="inline-block bg-foreground/10 text-foreground text-sm font-medium px-3 py-1 rounded-full transition-all duration-300 group-hover:bg-primary/20 group-hover:text-primary">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApparelSolutions;
