
import React, { useRef, useEffect, useState } from 'react';
import { QrCode, SmartphoneNfc, TrendingUp, Clock } from 'lucide-react';

const features = [
  {
    icon: <QrCode className="w-8 h-8 text-primary" />, 
    title: 'QR Code Integration',
    description: 'Seamlessly embedded QR codes that blend perfectly with your design. Link to websites, contact information, social media, digital business cards, or any online content.'
  },
  {
    icon: <SmartphoneNfc className="w-8 h-8 text-primary" />, 
    title: 'NFC Technology',
    description: 'Near Field Communication chips invisibly embedded in fabric. Create instant tap-to-connect experiences for mobile devices without any visible hardware.'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />, 
    title: 'Advanced Analytics',
    description: 'Comprehensive tracking of every interaction and engagement. Monitor performance metrics and gain valuable insights through our intuitive analytics dashboard.'
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />, 
    title: 'Dynamic Content Management',
    description: 'Update your QR code and NFC destinations instantly without reprinting. Perfect for evolving campaigns, seasonal promotions, and growing businesses.'
  }
];


const ApparelSmartTech = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Features */}
          <div>
            <h2 className={`text-4xl sm:text-5xl font-bold text-foreground mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}>The Future of Business Apparel</h2>
            <p className={`text-xl text-muted-foreground mb-12 max-w-2xl transition-all duration-1000 delay-100 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}>Every piece of clothing can be enhanced with cutting-edge QR code and NFC technology for seamless interactive experiences and powerful business networking.</p>
            <div className="space-y-8">
              {features.map((feature, idx) => (
                <div
                  key={feature.title}
                  className={`flex items-start gap-6 transition-all duration-700 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}
                  style={{
                    animationDelay: isVisible ? `${idx * 120 + 200}ms` : '0ms',
                    transitionDelay: isVisible ? `${idx * 120 + 200}ms` : '0ms'
                  }}
                >
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Image and CTA with scroll animation */}
          <div
            className={`flex flex-col items-center justify-center transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ animationDelay: isVisible ? '700ms' : '0ms', transitionDelay: isVisible ? '700ms' : '0ms' }}
          >
            <div className="w-full max-w-xl rounded-3xl overflow-hidden bg-card border border-border shadow-xl mb-8">
              <img src="/images/business-apparel-demo.jpg" alt="Business Apparel Demo" className="w-full h-80 object-cover object-center" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2 text-center">Transform Your Brand Experience</h3>
            <p className="text-muted-foreground mb-6 text-center max-w-lg">Convert your business apparel into powerful interactive marketing tools and sophisticated networking facilitators that work 24/7.</p>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-md hover:bg-cyan-600 transition-all duration-300 text-lg">
              See Technology Demo
              <span className="ml-1">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApparelSmartTech;
