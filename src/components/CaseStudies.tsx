import { useState } from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    id: 1,
    title: "TechFlow AI",
    category: "B2B SaaS",
    description: "Increased conversion rates by 340% through AI-driven personalization",
    coverImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    tags: ["AI", "Conversion", "B2B"]
  },
  {
    id: 2,
    title: "Lumina Beauty",
    category: "E-commerce",
    description: "Revolutionary AR-powered try-on experience driving 280% engagement",
    coverImage: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    tags: ["AR", "Beauty", "E-commerce"]
  },
  {
    id: 3,
    title: "FinanceFirst",
    category: "FinTech",
    description: "Simplified complex financial products, boosting user acquisition by 450%",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    tags: ["FinTech", "UX", "Growth"]
  },
  {
    id: 4,
    title: "GreenTech Solutions",
    category: "Sustainability",
    description: "Carbon-neutral messaging that resonated with eco-conscious consumers",
    coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    tags: ["Sustainability", "Branding", "Purpose"]
  },
  {
    id: 5,
    title: "HealthStream",
    category: "HealthTech",
    description: "Telemedicine platform achieving 95% patient satisfaction scores",
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    tags: ["HealthTech", "Telemedicine", "UX"]
  },
  {
    id: 6,
    title: "EduNext",
    category: "EdTech",
    description: "Gamified learning experience increasing student retention by 65%",
    coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    tags: ["EdTech", "Gamification", "Retention"]
  }
];

export default function CaseStudies() {
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);

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
            Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from our AI-powered advertising campaigns. Each project represents 
            a unique challenge solved through data-driven creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="glass rounded-3xl overflow-hidden group cursor-pointer hover:shadow-glow transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCase(study.id)}
              onMouseLeave={() => setHoveredCase(null)}
              whileHover={{ y: -10 }}
            >
              <div className="relative aspect-video overflow-hidden">
                {hoveredCase === study.id ? (
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={study.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={study.coverImage}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/20 glass text-primary-foreground text-sm rounded-full">
                    {study.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                  {study.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="glass-intense px-8 py-4 rounded-2xl text-lg font-medium hover:shadow-glow transition-all duration-500">
            View All Case Studies
          </button>
        </motion.div>
      </div>
    </section>
  );
}