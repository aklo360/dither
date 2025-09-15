import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import FitBox from './FitBox';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "Mason Pearson",
    category: "Luxury",
    description: "Photo & Video campaign entitled The Heritage Hairbrush Brand.",
    coverImage: "/portfolio/mp1.png",
    videoUrl: "https://www.youtube.com/embed/VXMov5uNEZo",
    videoUrls: [
      "https://www.youtube.com/embed/VXMov5uNEZo",
      "https://www.youtube.com/embed/ZtkNU7l6pHg",
    ],
    videoRatios: [9/16, 9/16],
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
  const [mobileApi, setMobileApi] = useState<import('./ui/carousel').CarouselApi | null>(null);

  const SlideMedia = ({ item, index, title, videoRatios }: { item: string; index: number; title: string; videoRatios?: number[] }) => {
    const isYoutube = item.includes('youtube') || item.includes('youtu.be');
    const [imgRatio, setImgRatio] = useState<number | null>(null);

    if (isYoutube) {
      const ratio = videoRatios?.[index] ?? 9/16;
      return (
        <FitBox ratio={ratio} className="bg-black/40 rounded-xl">
          <iframe
            className="block w-full h-full rounded-xl"
            src={`${item}?modestbranding=1&rel=0&controls=1&playsinline=1`}
            title={`${title} Media ${index + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </FitBox>
      );
    }

    return (
      <div className="w-full h-full flex items-center justify-center">
        {imgRatio ? (
          <FitBox ratio={imgRatio} className="bg-black/40 rounded-xl">
            <img src={item} alt={`${title} ${index + 1}`} className="block w-full h-full object-contain rounded-xl" />
          </FitBox>
        ) : (
          <img
            src={item}
            alt={`${title} ${index + 1}`}
            className="max-w-full max-h-full object-contain rounded-xl bg-black/40"
            onLoad={(e) => {
              const t = e.currentTarget;
              if (t.naturalWidth && t.naturalHeight) {
                setImgRatio(t.naturalWidth / t.naturalHeight);
              }
            }}
          />
        )}
      </div>
    );
  };

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
        <DialogContent className="max-w-5xl p-4 sm:p-6 h-[85%] sm:h-[80%] max-h-[90%] overflow-hidden gap-0 rounded-3xl glass-black ring-1 ring-white/10">
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
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </FitBox>
                </div>
              </div>
            ) : (
              <>
                {/* Mason Pearson: Mobile-optimized single carousel (videos + photos) */}
                {active.id === 1 && (
                  <div className="lg:hidden h-full min-h-0 bg-black/60 glass-black flex flex-col gap-4 rounded-2xl overflow-hidden">
                    <DialogHeader className="shrink-0 w-full">
                      <DialogTitle className="text-xl font-bold break-words whitespace-normal text-pretty w-full">{active.title}</DialogTitle>
                    </DialogHeader>
                    <div className="flex-1 min-h-0 relative w-full">
                      <Carousel key={`${active.id}-mobile-${open ? 'open' : 'closed'}`} className="w-full h-full" opts={{ loop: true }} gutter={false} setApi={setMobileApi}>
                        <CarouselContent className="h-full w-full" viewportClassName="h-full">
                          {[...((((active as any).videoUrls ?? [active.videoUrl]) as string[])), ...((((active as any).gallery ?? []) as string[]))].map((item: string, i: number) => (
                            <CarouselItem key={`${item}-${i}`} className="h-full flex items-center justify-center p-1">
                              <SlideMedia item={item} index={i} title={active.title} videoRatios={(active as any).videoRatios} />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <button type="button" aria-label="Previous" onClick={() => mobileApi?.scrollPrev()} className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/10 backdrop-blur border border-white/10 text-white flex items-center justify-center z-20">
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button type="button" aria-label="Next" onClick={() => mobileApi?.scrollNext()} className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/10 backdrop-blur border border-white/10 text-white flex items-center justify-center z-20">
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </Carousel>
                    </div>
                    <p className="text-muted-foreground text-sm break-words whitespace-normal text-pretty w-full">
                      {(active as any).blurb ?? active.description}
                    </p>
                  </div>
                )}

                {/* Default two-column layout (hidden on small screens for Mason Pearson) */}
                <div className={`${active.id === 1 ? 'hidden lg:grid' : 'grid'} grid-cols-1 lg:grid-cols-2 gap-0 h-full min-h-0`}>
                  {/* Media side: contain content with padding and no cropping */}
                  <div className="bg-black/60 glass-black flex items-center justify-center p-6 h-full min-h-0 rounded-l-3xl">
                    {active.id === 1 ? (
                      <Carousel className="w-full h-full relative" opts={{ loop: true }}>
                        <CarouselContent className="h-full">
                          {(((active as any).videoUrls ?? [active.videoUrl]) as string[]).map((url, i) => (
                            <CarouselItem key={`${url}-${i}`} className="h-full">
                              <FitBox ratio={9/16}>
                                <iframe
                                  className="block w-full h-full rounded-xl"
                                  src={`${url}?modestbranding=1&rel=0&controls=1&playsinline=1`}
                                  title={`${active.title} Variant ${i+1}`}
                                  frameBorder="0"
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
              </>
            ))
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
