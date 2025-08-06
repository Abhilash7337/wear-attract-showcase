import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BackgroundPaths } from '@/components/ui/background-paths';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      {/* Animated Background Paths */}
      <BackgroundPaths />
      
      {/* Enhanced Background decoration with modern animations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float animate-stagger-3"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/15 rounded-full blur-2xl animate-float animate-stagger-2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/25 rounded-full blur-3xl animate-float animate-stagger-4"></div>
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
          {/* Main heading with enhanced animations */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up opacity-0">
            <span className="inline-block animate-slide-in-left animate-stagger-1">Smart</span>{' '}
            <span className="inline-block animate-slide-in-right animate-stagger-2">Clothing</span>{' '}
            <span className="inline-block animate-fade-in-up animate-stagger-3">for</span>{' '}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-gradient-shift animate-scale-in animate-stagger-4">
              Modern Business
            </span>
          </h1>

          {/* Subheading with staggered animation */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-stagger-3 opacity-0">
            Wear Attraction for Business crafts custom, smart, and sustainable apparel to perfectly fit your brand, with options for NFC/QR integration.
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