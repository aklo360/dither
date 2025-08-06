import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CaseStudies from '@/components/CaseStudies';
import PricingSection from '@/components/PricingSection';
import EnterpriseSection from '@/components/EnterpriseSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CaseStudies />
      <PricingSection />
      <EnterpriseSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
