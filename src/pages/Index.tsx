import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import BusinessCategories from '@/components/BusinessCategories';
import ApparelSolutions from '@/components/ApparelSolutions';
import ApparelSmartTech from '@/components/ApparelSmartTech';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <BusinessCategories />
        <ApparelSolutions />
        <ApparelSmartTech />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
