import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, MessageSquare, User, Building2, Send } from 'lucide-react';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  plan: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Contact form submission:', data);
      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Let's Talk
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to revolutionize your advertising? Drop us a line and let's explore 
            how AI can transform your marketing strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-intense rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-muted-foreground">hello@dither.ai</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Live Chat</p>
                    <p className="text-muted-foreground">Available 9AM-6PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h4 className="text-lg font-semibold mb-3">Response Time</h4>
              <p className="text-muted-foreground text-sm">
                We typically respond to all inquiries within 2-4 hours during business hours. 
                For urgent matters, please mention "URGENT" in your subject line.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass-intense rounded-3xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="Your Name"
                    className="w-full pl-12 pr-4 py-4 bg-secondary/50 border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-12 pr-4 py-4 bg-secondary/50 border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="relative">
                <Building2 className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                <input
                  {...register('company')}
                  type="text"
                  placeholder="Company Name"
                  className="w-full pl-12 pr-4 py-4 bg-secondary/50 border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
                />
                {errors.company && (
                  <p className="text-destructive text-sm mt-1">{errors.company.message}</p>
                )}
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                <textarea
                  {...register('message')}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full pl-12 pr-4 py-4 bg-secondary/50 border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none resize-none"
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary text-white py-4 rounded-xl font-medium hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}