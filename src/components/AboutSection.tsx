import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { useState } from 'react';

export default function AboutSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-24 px-6 relative grain">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2 
                className="text-5xl md:text-6xl font-bold gradient-text mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Where Chaos
                <br />
                Meets <span className="italic font-display">Clarity</span>
              </motion.h2>
              
              <motion.div 
                className="space-y-6 text-lg text-foreground/90 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p>
                  In the liminal space between uncertainty and breakthrough, DITHER operates 
                  as more than an agency—we're architects of persuasion in the digital noise.
                </p>
                
                <p>
                  Our AI doesn't just generate ads; it decodes the subconscious patterns that 
                  drive human behavior, crafting campaigns that resonate at frequencies your 
                  audience didn't know they were listening for.
                </p>
                
                <p className="text-accent font-medium">
                  Welcome to advertising's uncanny valley, where the most human connections 
                  are forged by artificial intelligence.
                </p>
              </motion.div>
            </div>

            <motion.div 
              className="flex flex-wrap gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="glass-intense px-6 py-4 rounded-2xl">
                <div className="text-2xl font-bold gradient-text">500M+</div>
                <div className="text-sm text-muted-foreground">Impressions Generated</div>
              </div>
              <div className="glass-intense px-6 py-4 rounded-2xl">
                <div className="text-2xl font-bold gradient-text">340%</div>
                <div className="text-sm text-muted-foreground">Avg. Conversion Increase</div>
              </div>
              <div className="glass-intense px-6 py-4 rounded-2xl dither">
                <div className="text-2xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground">AI Optimization</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Video Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-intense rounded-3xl overflow-hidden aspect-video relative group static">
              {/* Video Element */}
              <video
                id="hero-video"
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                preload="metadata"
                poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop&auto=format"
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video Overlay */}
              <div className="absolute inset-0 bg-black/20 dither group-hover:bg-black/10 transition-all duration-500"></div>
              
              {/* Play/Pause Button */}
              <button
                onClick={handlePlayPause}
                className="absolute inset-0 flex items-center justify-center group-hover:bg-black/10 transition-all duration-300"
              >
                <div className="glass-intense p-6 rounded-full hover:scale-110 transition-all duration-300 group">
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-primary" />
                  ) : (
                    <Play className="w-8 h-8 text-primary ml-1" />
                  )}
                </div>
              </button>
              
              {/* Video Label */}
              <div className="absolute bottom-4 left-4">
                <div className="glass px-4 py-2 rounded-xl">
                  <span className="text-sm font-medium text-foreground/90">
                    Behind the Algorithm
                  </span>
                </div>
              </div>
              
              {/* Static Noise Overlay */}
              <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
                <div 
                  className="w-full h-full animate-static-flicker" 
                  style={{
                    backgroundImage: `repeating-linear-gradient(90deg, transparent 0px, rgba(255,255,255,0.1) 1px, transparent 2px)`,
                    backgroundSize: '3px 3px'
                  }}
                ></div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 glass rounded-2xl p-4 animate-float">
              <div className="text-xs text-muted-foreground">AI-Powered</div>
              <div className="text-sm font-bold gradient-text">Creative Engine</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-xs text-muted-foreground">Real-Time</div>
              <div className="text-sm font-bold gradient-text">Optimization</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}