import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import FitBox from './FitBox';

const caseStudies = [
  {
    id: 1,
    title: "Mason Pearson",
    category: "Luxury",
    description: "Photo & Video campaign entitled The Heritage Hairbrush Brand.",
    coverImage: "/portfolio/mp1.png",
    videoUrl: "https://www.youtube.com/embed/VXMov5uNEZo",
    tags: ["Luxury", "Product"],
    blurb: "We created a photo/video campaign entitled The Heritage Hairbrush Brand, featuring a set of stills as well as a :30sec hero spot  + a :15sec cutdown to introduce a new market (Toronto & Vancouver) to Mason Pearson.",
    gallery: [
      "/portfolio/mp1.png",
      "/portfolio/mp2.png",
      "/portfolio/mp3.png",
      "/portfolio/mp4.png",
      "/portfolio/mp5.png",
      "/portfolio/mp6.png",
      "/portfolio/mp7.png",
      "/portfolio/mp8.png",
      "/portfolio/mp9.png",
      "/portfolio/mp10.png",
      "/portfolio/mp11.png",
    ],
  },
  {
    id: 2,
    title: "Betway",
    category: "Sports Betting",
    description: "Promo Spot for Betway Sports betting app.",
    coverImage: "/portfolio/betway.jpg",
    videoUrl: "https://www.youtube.com/embed/bZ5KF0QdSdU",
    // This item has only a wide 16:9 video; no stills/gallery
    singleColumnVideo: true,
    tags: ["Sports", "Video"]
  },
  {
    id: 3,
    title: "CVC Custom Builders",
    category: "Real Estate",
    description: "Short Social Content for CVC Custom Builders.",
    coverImage: "/portfolio/cvc.jpg",
    videoUrl: "https://www.youtube.com/embed/1N_HrjipcKg",
    singleColumnVideo: true,
    tags: ["Construction", "Video"]
  },
  {
    id: 4,
    title: "Hellkartz",
    category: "Video Game",
    description: "Trailer for a Web3 P2E Game from a new boutique game studio.",
    coverImage: "/portfolio/hellkartz.jpg",
    videoUrl: "https://www.youtube.com/embed/yixSwSjJOpo",
    singleColumnVideo: true,
    tags: ["Video"]
  },
  {
    id: 5,
    title: "Humble Object",
    category: "Furniture",
    description: "Short Social Content for Humble Object.",
    coverImage: "/portfolio/ho.jpg",
    videoUrl: "https://www.youtube.com/embed/NGQgPmNu51E",
    singleColumnVideo: true,
    videoRatio: 9/16,
    tags: ["Video", "Vertical"]
  },
  {
    id: 6,
    title: "Bonsai Gardens",
    category: "Video Game",
    description: "Trailer for the indie game Bonsai Gardens.",
    coverImage: "/portfolio/bonsaigardens.jpg",
    videoUrl: "https://www.youtube.com/embed/xr7-4m5Asbc",
    singleColumnVideo: true,
    tags: ["Game", "Video"]
  }
];

export default function CaseStudies() {
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<number | null>(null);
  const active = caseStudies.find((c) => c.id === activeId) as (typeof caseStudies)[number] | undefined;

  return (
    <section id="case-studies" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Portfolio Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="glass-intense edge-light rounded-3xl overflow-hidden group cursor-pointer hover:shadow-glow transition-all duration-500 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCase(study.id)}
              onMouseLeave={() => setHoveredCase(null)}
              onClick={() => { setActiveId(study.id); setOpen(true); }}
              whileHover={{ y: -10 }}
            >
              <div className="relative aspect-video overflow-hidden">
                {hoveredCase === study.id && study.id !== 1 && (study.videoUrl?.includes('.mp4') ?? false) ? (
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
                {/* Overlays: default for others; Mason Pearson shows only label */}
                {study.id !== 1 ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent dither"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/20 glass text-primary-foreground text-sm rounded-full">
                        {study.category}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/20 glass text-primary-foreground text-sm rounded-full">
                      Luxury Goods
                    </span>
                  </div>
                )}
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
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl p-0 h-[80%] max-h-[90%] overflow-hidden gap-0 rounded-3xl glass-black edge-light ring-1 ring-white/10 shadow-glow">
          {active && (
            ((active as any).singleColumnVideo ? (
              // Single-column, wide 16:9 video only (e.g., Betway, CVC) with brand header
              <div className="h-full min-h-0 bg-black/60 glass-black flex flex-col p-6 gap-4 rounded-3xl">
                <DialogHeader className="shrink-0">
                  <DialogTitle className="text-2xl font-bold">{active.title}</DialogTitle>
                </DialogHeader>
                <div className="flex-1 min-h-0 flex items-center justify-center">
                  <FitBox ratio={(active as any).videoRatio ?? 16/9}>
                    <iframe
                      className="block w-full h-full rounded-xl"
                      src={`${active.videoUrl}?modestbranding=1&rel=0&controls=1&playsinline=1`}
                      title={active.title}
                      frameBorder="0"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </FitBox>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full min-h-0">
                {/* Media side: contain content with padding and no cropping */}
                <div className="bg-black/60 glass-black flex items-center justify-center p-6 h-full min-h-0 rounded-l-3xl">
                  {active.id === 1 ? (
                    <Carousel className="w-full h-full relative" opts={{ loop: true }}>
                      <CarouselContent className="h-full">
                        {[0,1].map((i) => (
                          <CarouselItem key={i} className="h-full">
                            <FitBox ratio={9/16}>
                              <iframe
                                className="block w-full h-full rounded-xl"
                                src={`${active.videoUrl}?modestbranding=1&rel=0&controls=1&playsinline=1`}
                                title={`${active.title} Variant ${i+1}`}
                                frameBorder="0"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              />
                            </FitBox>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2 bg-white/10 hover:bg-white/20 border-0 text-white" />
                      <CarouselNext className="right-2 bg-white/10 hover:bg-white/20 border-0 text-white" />
                    </Carousel>
                  ) : (
                    <img src={active.coverImage} alt={active.title} className="block h-full w-auto max-w-full object-contain rounded-xl" />
                  )}
                </div>
                {/* Info + gallery side: keep contained and margin */}
                <div className="p-6 space-y-4 overflow-hidden flex flex-col h-full min-h-0 bg-black/30">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">{active.title}</DialogTitle>
                  </DialogHeader>
                  <p className="text-muted-foreground shrink-0">
                    {(active as any).blurb ?? active.description}
                  </p>
                  {(active as any).gallery && Array.isArray((active as any).gallery) && (
                    <Carousel className="w-full relative flex-1 min-h-0" opts={{ loop: true }}>
                      <CarouselContent className="h-full">
                        {(active as any).gallery.map((src: string) => (
                          <CarouselItem key={src} className="h-full">
                            <div className="w-full h-full flex items-center justify-center">
                              <img src={src} alt="Gallery" className="block h-full w-auto max-w-full object-contain rounded-lg" />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  )}
                </div>
              </div>
            ))
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
