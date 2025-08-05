import { Package, Zap, Palette, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Package,
    title: 'No Minimum Orders',
    description: 'Start with as few as one piece. Perfect for testing, small teams, or individual needs.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'WearTap Technology',
    description: 'Revolutionary smart clothing technology that transforms how people connect and interact.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Palette,
    title: 'Personalization at Scale',
    description: 'Custom designs and features tailored to your specific business needs and brand identity.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Quick production and delivery times to meet your business deadlines and events.',
    gradient: 'from-orange-500 to-red-500'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Wear Attraction
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're revolutionizing the way businesses think about clothing and technology integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 card-shadow"
              >
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Icon with gradient background */}
                  <div className="relative mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your business with smart clothing?
          </p>
          <button className="brand-gradient text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform brand-shadow">
            Explore Our Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;