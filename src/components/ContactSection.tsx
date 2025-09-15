import { motion } from 'framer-motion';
import { Shield, Users, Zap } from 'lucide-react';

export default function ContactSection() {

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
          {/* Background Pattern (decorative; ignore pointer events) */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
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
              Contact Us
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              Reach out to dicuss your company's marketing needs and how we can assist on a one-time or ongoing basis.
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
              <p className="text-muted-foreground">Digital Avatars to promote your brand.</p>
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
            <div className="inline-flex items-center gap-3 px-6 py-5 rounded-2xl bg-white/5 border border-white/10 shadow-lg shadow-black/20 backdrop-blur text-lg md:text-xl text-white/90">
              <span className="text-muted-foreground/90">Email us at</span>
              <span className="font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                info@dither.agency
              </span>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
