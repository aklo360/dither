import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: "Essentials",
    icon: <Sparkles className="w-6 h-6" />,
    description: "Perfect for startups and small businesses",
    monthlyPrice: 2999,
    annualPrice: 29999,
    features: [
      "AI-powered ad creative generation",
      "Basic analytics & reporting",
      "Up to 3 active campaigns",
      "Email support",
      "Standard templates library",
      "Social media integration"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Growth",
    icon: <Zap className="w-6 h-6" />,
    description: "Ideal for growing companies and agencies",
    monthlyPrice: 7999,
    annualPrice: 79999,
    features: [
      "Everything in Essentials",
      "Advanced AI optimization",
      "Unlimited campaigns",
      "A/B testing suite",
      "Priority support",
      "Custom integrations",
      "Advanced analytics",
      "Team collaboration tools"
    ],
    cta: "Start Growing",
    popular: true
  },
  {
    name: "Premium",
    icon: <Crown className="w-6 h-6" />,
    description: "For enterprises needing maximum power",
    monthlyPrice: 19999,
    annualPrice: 199999,
    features: [
      "Everything in Growth",
      "White-label solutions",
      "Dedicated account manager",
      "Custom AI model training",
      "24/7 phone support",
      "API access",
      "Advanced security features",
      "Custom reporting dashboards"
    ],
    cta: "Go Premium",
    popular: false
  }
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

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
            All plans include our core AI engine and dedicated support.
          </p>

          {/* Billing Toggle */}
          <div className="glass-intense rounded-2xl p-2 inline-flex items-center gap-4">
            <span className={`px-4 py-2 rounded-xl transition-all duration-300 ${!isAnnual ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-12 h-6 bg-secondary rounded-full transition-colors duration-300"
            >
              <div className={`absolute w-5 h-5 bg-primary rounded-full top-0.5 transition-transform duration-300 ${isAnnual ? 'translate-x-6' : 'translate-x-0.5'}`} />
            </button>
            <span className={`px-4 py-2 rounded-xl transition-all duration-300 ${isAnnual ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>
              Annual
              <span className="ml-2 text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`glass-intense rounded-3xl p-8 relative overflow-hidden group hover:shadow-glow transition-all duration-500 ${
                plan.popular ? 'ring-2 ring-primary/50 scale-105' : ''
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
                    ${isAnnual ? (plan.annualPrice / 100).toFixed(0) : (plan.monthlyPrice / 100).toFixed(0)}
                  </span>
                  <span className="text-muted-foreground">
                    /{isAnnual ? 'year' : 'month'}
                  </span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-accent mt-1">
                    Save ${((plan.monthlyPrice * 12 - plan.annualPrice) / 100).toFixed(0)} annually
                  </p>
                )}
              </div>

              <button
                onClick={() => handleCheckout(plan.name)}
                className={`w-full py-4 rounded-2xl font-medium transition-all duration-300 mb-8 ${
                  plan.popular
                    ? 'bg-gradient-primary text-white hover:shadow-glow'
                    : 'glass border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/10'
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}