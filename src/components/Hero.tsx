import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-8 animate-fade-in">
            <span className="text-sm font-medium text-primary">
              🚀 Introducing WearTap Technology
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 animate-slide-up">
            Smart Clothing for{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Modern Business
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Transform your business with revolutionary smart clothing technology. 
            No minimum orders, unlimited personalization, and cutting-edge WearTap features.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="brand-gradient text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform brand-shadow">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Key features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">No Minimum Orders</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">Custom Branding</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">WearTap Technology</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;