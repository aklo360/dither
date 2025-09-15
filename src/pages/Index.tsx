import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CaseStudies from '@/components/CaseStudies';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CaseStudies />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
