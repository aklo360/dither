import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 glass opacity-80"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Minimal Footer Content */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} Dither Agency. All rights reserved.
          </p>
          <a
            href="mailto:info@dither.agency"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Contact Us: info@dither.agency
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
