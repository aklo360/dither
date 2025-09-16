import React from 'react';


export default function HeroSection() {

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden grain static">

      {/* Gradient Overlay with Dithering */}
      <div className="absolute inset-0 bg-gradient-glow opacity-40 dither"></div>
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="w-full h-full bg-repeat animate-static-flicker" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='%23ffffff' points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '8px 8px'
             }}>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 flex flex-col items-center justify-center">
        <div className="mb-8 relative flex items-center justify-center">
          <div className="pointer-events-none absolute -inset-16 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0)_60%)] blur-3xl opacity-70"></div>
          <img
            src="/dither-logo.png"
            alt="DITHER"
            className="relative z-10 h-24 md:h-28 mx-auto filter brightness-0 invert drop-shadow-[0_0_80px_rgba(255,255,255,0.35)]"
          />
        </div>
        
        <div className="text-xl md:text-2xl text-muted-foreground font-light italic max-w-2xl mx-auto leading-relaxed">
          <p className="mb-2">
            /ˈdɪðər/ <span className="text-sm">noun</span>
          </p>
          <p>
            Intentionally added noise (chaos) that preserves realism in a quantized image/audio file—or in our case, infusing organic human touch into AI-crafted campaigns, delivering ad agency quality at a fraction of the traditional cost.
          </p>
        </div>

        <div className="mt-12">
          <a 
            href="#case-studies" 
            className="glass-intense px-8 py-4 rounded-2xl text-lg font-medium hover:shadow-glow transition-all duration-500 group relative overflow-hidden inline-block"
          >
            <span className="relative z-10">Explore Our Work</span>
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-500"></div>
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="w-full h-full" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent 0px, rgba(255,255,255,0.1) 1px, transparent 2px)`,
                backgroundSize: '4px 4px'
              }}></div>
            </div>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  );
}
