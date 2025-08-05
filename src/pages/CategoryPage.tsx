import { ArrowLeft, Check, Star, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { businessCategories } from '@/data/businessCategories';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';

interface CategoryPageProps {
  categoryId: string;
}

const CategoryPage = ({ categoryId }: CategoryPageProps) => {
  const category = businessCategories.find(cat => cat.id === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-8">The requested business category could not be found.</p>
          <Button asChild>
            <a href="/">Return Home</a>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span>/</span>
            <a href="/#solutions" className="hover:text-primary transition-colors">Solutions</a>
            <span>/</span>
            <span className="text-foreground">{category.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
                Industry Solution
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Smart Clothing for{' '}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {category.title}
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {category.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="brand-gradient text-white">
                  Get Started
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Demo
                </Button>
              </div>

              {/* Quick stats */}
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>500+ Companies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-primary" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span>No Minimums</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Zap className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">WearTap Technology</h3>
                  <p className="text-muted-foreground">Revolutionary smart clothing innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Features Designed for {category.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the specific capabilities that make our smart clothing perfect for your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.features.map((feature, index) => (
              <Card key={index} className="bg-background border-0 card-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature}
                      </h3>
                      <p className="text-muted-foreground">
                        Advanced technology integration designed specifically for {category.title.toLowerCase()} environments.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your {category.title}?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already using smart clothing technology to enhance their business operations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="brand-gradient text-white px-8 py-4">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4">
              Contact Sales Team
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>✓ No minimum orders • ✓ Custom branding • ✓ Fast turnaround • ✓ 24/7 support</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;