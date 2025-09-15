import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CaseStudies from '@/components/CaseStudies';
import EnterpriseSection from '@/components/EnterpriseSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CaseStudies />
      <EnterpriseSection />
      <Footer />
    </div>
  );
};

export default Index;
