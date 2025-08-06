import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  // Array of t-shirt images for floating animation
  const tshirtImages = [
    '/tshirt.png',
    '/tshirt1.png',
    // Add more t-shirt images here as they become available
    // '/tshirt2.png',
    // '/tshirt3.png',
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted overflow-hidden pt-24">
      {/* Enhanced Background decoration with modern animations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float animate-stagger-3"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/15 rounded-full blur-2xl animate-float animate-stagger-2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/25 rounded-full blur-3xl animate-float animate-stagger-4"></div>
      </div>

      {/* Floating Product Showcase - Small T-shirts with modern movement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Small floating t-shirts with orbital movements */}
        <div className="absolute top-20 left-16 w-12 h-12 opacity-20 animate-pulse">
          <div className="w-full h-full animate-spin" style={{ animationDuration: '20s' }}>
            <div className="w-full h-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
              <img src={tshirtImages[0]} alt="T-Shirt" className="w-full h-full object-contain filter drop-shadow-sm" />
            </div>
          </div>
        </div>
        
        <div className="absolute top-32 right-20 w-10 h-10 opacity-15">
          <div className="w-full h-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
            <div className="w-full h-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
              <img src={tshirtImages[1]} alt="T-Shirt" className="w-full h-full object-contain filter drop-shadow-sm" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-32 left-24 w-14 h-14 opacity-25">
          <div className="w-full h-full animate-spin" style={{ animationDuration: '30s' }}>
            <div className="w-full h-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '2.5s' }}>
              <img src={tshirtImages[0]} alt="T-Shirt" className="w-full h-full object-contain filter drop-shadow-sm" />
            </div>
          </div>
        </div>

        <div className="absolute top-40 left-1/3 w-8 h-8 opacity-20">
          <div className="w-full h-full animate-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }}>
            <div className="w-full h-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}>
              <img src={tshirtImages[1]} alt="T-Shirt" className="w-full h-full object-contain filter drop-shadow-sm" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-48 right-1/4 w-11 h-11 opacity-15">
          <div className="w-full h-full animate-spin" style={{ animationDuration: '22s' }}>
            <div className="w-full h-full animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>
              <img src={tshirtImages[0]} alt="T-Shirt" className="w-full h-full object-contain filter drop-shadow-sm" />
            </div>
          </div>
        </div>

        <div className="absolute top-60 right-16 w-9 h-9 opacity-30">
          <div className="w-full h-full animate-spin" style={{ animationDuration: '28s', animationDirection: 'reverse' }}>
            <div className="w-full h-full animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '4.5s' }}>
              <img src={tshirtImages[1]} alt="T-Shirt" className="w-full h-full object-contain filter drop-shadow-sm" />
            </div>
          </div>
        </div>

        <div className="absolute top-80 left-1/2 w-13 h-13 opacity-25">
          <div className="w-full h-full animate-spin" style={{ animationDuration: '26s' }}>
            <div className="w-full h-full animate-pulse" style={{ animationDelay: '3s', animationDuration: '2.8s' }}>
              <img src="/tshirt.png" alt="T-Shirt" className="w-full h-full object-contain filter drop-shadow-sm" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-40 left-1/4 w-10 h-10 opacity-20">
          <div className="w-full h-full animate-spin" style={{ animationDuration: '24s', animationDirection: 'reverse' }}>
            <div className="w-full h-full animate-bounce" style={{ animationDelay: '1.8s', animationDuration: '3.2s' }}>
              <img src="/tshirt.png" alt="T-Shirt" className="w-full h-full object-contain filter drop-shadow-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/40 rounded-full animate-float animate-stagger-1"></div>
        <div className="absolute top-32 right-32 w-1 h-1 bg-primary/60 rounded-full animate-float animate-stagger-2"></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-primary/30 rounded-full animate-float animate-stagger-3"></div>
        <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-primary/50 rounded-full animate-float animate-stagger-4"></div>
        <div className="absolute top-40 left-1/2 w-2 h-2 bg-primary/35 rounded-full animate-float animate-stagger-5"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main heading with multi-color gradient as in screenshot */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-up opacity-0">
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 via-40% via-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Smart Business Apparel<br />
              <span className="block" style={{
                background: 'linear-gradient(90deg, #FACC15 0%, #F472B6 30%, #38BDF8 60%, #FDBA74 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                Redefined
              </span>
            </span>
          </h1>

          {/* Subheading with staggered animation */}
          <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-stagger-3 opacity-0">
            Transform your business apparel into interactive experiences. From t-shirts to executive suits, every piece features smart QR & NFC technology. No minimums. Unlimited colors. Built for modern businesses.
          </p>

          {/* CTA Button with enhanced effects */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-scale-in animate-stagger-4 opacity-0">
            <Button size="lg" className="brand-gradient text-white px-8 py-4 text-lg font-semibold hover:scale-110 hover:rotate-1 transition-all duration-300 brand-shadow group">
              <span className="relative z-10">Start Shopping</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </Button>
          </div>

          {/* Floating elements around the button */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-primary/30 rounded-full animate-float animate-stagger-1"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 border-2 border-primary/40 rounded-full animate-float animate-stagger-3"></div>
            <div className="absolute top-0 right-8 w-4 h-4 bg-primary/20 rounded-full animate-float animate-stagger-2"></div>
          </div>
        </div>
      </div>

      {/* Functional scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          });
        }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center group-hover:border-primary transition-colors duration-300">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 group-hover:bg-primary transition-colors duration-300"></div>
        </div>
        <div className="text-xs text-muted-foreground mt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          Scroll down
        </div>
      </div>
    </section>
  );
};

export default Hero;