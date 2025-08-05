import { ArrowRight, Rocket, Calendar, Users, Video, Heart, GraduationCap, ShoppingBag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { businessCategories } from '@/data/businessCategories';

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
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Solutions for Every{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Business
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how smart clothing technology can transform your specific industry and business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessCategories.map((category, index) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            
            return (
              <Card
                key={category.id}
                className="group cursor-pointer overflow-hidden bg-card hover:shadow-xl transition-all duration-500 hover:-translate-y-3 card-shadow border-0"
              >
                <CardContent className="p-0">
                  {/* Header with icon and title */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl p-2.5 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {category.description}
                    </p>
                  </div>

                  {/* Features list */}
                  <div className="px-6 pb-4">
                    <ul className="space-y-2">
                      {category.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Footer */}
                  <div className="p-6 pt-4 bg-muted/30 group-hover:bg-primary/5 transition-colors duration-300">
                    <a
                      href={category.href}
                      className="flex items-center justify-between text-primary group-hover:text-primary font-medium"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>

                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Don't see your industry?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We work with businesses across all industries. Contact us to discuss how smart clothing can benefit your specific needs.
          </p>
          <button className="brand-gradient text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform brand-shadow">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusinessCategories;