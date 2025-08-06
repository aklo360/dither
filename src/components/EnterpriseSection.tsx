import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users, Zap } from 'lucide-react';

export default function EnterpriseSection() {
  const handleContactUs = () => {
    // This would open a contact modal in a real implementation
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="glass-intense rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-8 left-8 w-32 h-32 border border-primary rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-24 h-24 border border-accent rounded-full"></div>
            <div className="absolute top-1/2 left-8 w-16 h-16 bg-primary/20 rounded-full blur-sm"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
              Need More Firepower?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              Enterprise solutions built for scale. Custom LoRa character models & mascot development, fine tuned brand style models 
              and white-glove service for organizations that demand the extraordinary.
            </p>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-primary/20 rounded-2xl mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom LoRa Models</h3>
              <p className="text-muted-foreground">Fine tuned models based on your brand's mascot and style guidelines.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-primary/20 rounded-2xl mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Influencer Creation</h3>
              <p className="text-muted-foreground">Account managers, engineers, and strategists</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-primary/20 rounded-2xl mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mass Quantity</h3>
              <p className="text-muted-foreground">Enough Video & Photo content to keep you posting all month long.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              onClick={handleContactUs}
              className="group bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:shadow-glow hover:from-gray-600 hover:to-gray-700 px-12 py-6 rounded-2xl text-xl font-medium transition-all duration-500 inline-flex items-center gap-4"
            >
              Contact Our Enterprise Team
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            
            <p className="mt-6 text-sm text-muted-foreground">
              Ready in 48 hours • Custom pricing • Dedicated onboarding
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}