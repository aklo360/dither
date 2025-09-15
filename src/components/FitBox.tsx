import React from 'react';
import { cn } from '@/lib/utils';

type FitBoxProps = {
  ratio: number; // width / height, e.g. 9/16 for vertical video
  className?: string;
  children: React.ReactNode;
};

export default function FitBox({ ratio, className, children }: FitBoxProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [size, setSize] = React.useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      let cw = rect.width;
      let ch = rect.height;

      // Fallbacks for cases where height or width is 0 at mount (e.g., hidden until dialog opens)
      if (!cw) {
        const parent = el.parentElement as HTMLElement | null;
        if (parent) cw = parent.getBoundingClientRect().width;
        if (!cw) cw = window.innerWidth;
      }
      if (!ch) {
        const parent = el.parentElement as HTMLElement | null;
        if (parent) ch = parent.getBoundingClientRect().height;
        if (!ch) ch = Math.min(window.innerHeight * 0.7, window.innerHeight - 120);
      }
      if (!cw || !ch) return;

      // Compute contained size preserving aspect ratio, fitting within cw x ch.
      const heightBasedWidth = ch * ratio;
      if (heightBasedWidth <= cw) {
        setSize({ width: heightBasedWidth, height: ch });
      } else {
        const width = cw;
        const height = width / ratio;
        setSize({ width, height });
      }
    };

    const ro = new ResizeObserver(update);
    ro.observe(el);
    // Run a few times to catch late layout on dialogs/modals
    update();
    const raf = requestAnimationFrame(update);
    const t = setTimeout(update, 60);
    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(t);
      window.removeEventListener('resize', update);
    };
  }, [ratio]);

  return (
    <div ref={containerRef} className={cn('w-full h-full flex items-center justify-center', className)}>
      <div style={{ width: size.width, height: size.height }} className="relative">
        {children}
      </div>
    </div>
  );
}
