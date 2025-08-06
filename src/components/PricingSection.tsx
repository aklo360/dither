import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Sparkles, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: "Essentials",
    icon: <Sparkles className="w-6 h-6" />,
    description: "Short & Simple Social Promo Content",
    monthlyPrice: 9899,
    annualPrice: 12499,
    features: [
      { name: "Length: 6-15sec", included: true },
      { name: "Your Logo & Brand Guidelines Used", included: true },
      { name: "Your Products/Services Featured", included: true },
      { name: "Choice of Format (Vertical, Square or Wide)", included: true },
      { name: "1080p HD Quality", included: true },
      { name: "Audio (SFX & Music)", included: true },
      { name: "Pre-Production/Script", included: false },
      { name: "Revisions", included: false },
      { name: "Voiceover", included: false },
      { name: "Dialogue", included: false }
    ],
    cta: "Subscribe Now",
    popular: false
  },
  {
    name: "Growth",
    icon: <Zap className="w-6 h-6" />,
    description: "Informational content about your company",
    monthlyPrice: 24999,
    annualPrice: 29999,
    features: [
      { name: "Length: 30sec", included: true },
      { name: "Your Logo & Brand Guidelines Used", included: true },
      { name: "Your Products/Services Featured", included: true },
      { name: "Choice of Format (Vertical, Square or Wide)", included: true },
      { name: "1080p HD Quality", included: true },
      { name: "Audio (SFX & Music)", included: true },
      { name: "Pre-Production/Script", included: true },
      { name: "Revisions (1 Round)", included: true },
      { name: "Voiceover", included: true },
      { name: "Dialogue", included: false }
    ],
    cta: "Subscribe Now",
    popular: true
  },
  {
    name: "Premium",
    icon: <Crown className="w-6 h-6" />,
    description: "Story driven commercial ads",
    monthlyPrice: 74999,
    annualPrice: 84999,
    features: [
      { name: "Length: 60sec", included: true },
      { name: "Your Logo & Brand Guidelines Used", included: true },
      { name: "Your Products/Services Featured", included: true },
      { name: "Choice of Format (Vertical, Square or Wide)", included: true },
      { name: "4K UHD Quality", included: true },
      { name: "Audio (SFX & Music)", included: true },
      { name: "Pre-Production/Script", included: true },
      { name: "Revisions (1 Round)", included: true },
      { name: "Voiceover", included: true },
      { name: "Dialogue", included: true }
    ],
    cta: "Subscribe Now",
    popular: false
  }
];

export default function PricingSection() {
  const [isMultimedia, setIsMultimedia] = useState(false);

  const handleCheckout = (planName: string) => {
    // Stripe checkout integration would go here
    console.log(`Checkout for ${planName} plan`);
    // For demo purposes, we'll just log the action
    alert(`Checkout for ${planName} plan - Stripe integration coming soon!`);
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Scale your advertising with AI-powered tools that adapt to your needs. 
            All plans include 1 hero video campaign per month.
          </p>

          {/* Content Type Toggle */}
          <div className="glass-intense rounded-2xl p-2 inline-flex items-center gap-4">
            <span className={`px-4 py-2 rounded-xl transition-all duration-300 ${!isMultimedia ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>
              Video
            </span>
            <button
              onClick={() => setIsMultimedia(!isMultimedia)}
              className="relative w-12 h-6 bg-secondary rounded-full transition-colors duration-300"
            >
              <div className={`absolute w-5 h-5 bg-primary rounded-full top-0.5 transition-transform duration-300 ${isMultimedia ? 'translate-x-6' : 'translate-x-0.5'}`} />
            </button>
            <span className={`px-4 py-2 rounded-xl transition-all duration-300 ${isMultimedia ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>
              Multimedia
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`glass-intense rounded-3xl p-8 relative overflow-hidden group hover:shadow-glow transition-all duration-500 ${
                plan.popular ? 'ring-2 ring-primary/50 scale-105 static' : 'dither'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-primary h-1"></div>
              )}
              
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-xl text-primary">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
              </div>

              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">
                    ${isMultimedia ? (plan.annualPrice / 100).toFixed(0) : (plan.monthlyPrice / 100).toFixed(0)}
                  </span>
                  <span className="text-muted-foreground">
                    /month
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleCheckout(plan.name)}
                className={`w-full py-4 rounded-2xl font-medium transition-all duration-300 mb-8 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:shadow-glow hover:from-gray-600 hover:to-gray-700'
                    : 'glass border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/10'
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`text-sm leading-relaxed ${feature.included ? '' : 'text-muted-foreground'}`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
                {isMultimedia && (
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">
                      {plan.name === 'Essentials' ? '3 Still Image Ads' : 
                       plan.name === 'Growth' ? '8 Still Image Ads' : 
                       '20 Still Image Ads'}
                    </span>
                  </li>
                )}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}