import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = new Float32Array(2000 * 3);
  
  // Generate random positions
  for (let i = 0; i < 2000; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.002}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (titleRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX - innerWidth / 2) / innerWidth;
        const y = (clientY - innerHeight / 2) / innerHeight;
        
        titleRef.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden grain static">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleField />
        </Canvas>
      </div>

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
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <motion.h1
          ref={titleRef}
          className="font-display font-black text-8xl md:text-9xl gradient-text mb-8 tracking-tighter"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          DITHER:
        </motion.h1>
        
        <motion.div
          className="text-xl md:text-2xl text-muted-foreground font-light italic max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="mb-2">
            /ˈdɪðər/ <span className="text-sm">noun</span>
          </p>
          <p>
            A state of indecision or agitation. In our case, the sweet spot between 
            chaos and clarity where breakthrough advertising is born.
          </p>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="glass-intense px-8 py-4 rounded-2xl text-lg font-medium hover:shadow-glow transition-all duration-500 group relative overflow-hidden">
            <span className="relative z-10">Explore Our Work</span>
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-500"></div>
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="w-full h-full" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent 0px, rgba(255,255,255,0.1) 1px, transparent 2px)`,
                backgroundSize: '4px 4px'
              }}></div>
            </div>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent animate-pulse"></div>
      </motion.div>
    </section>
  );
}