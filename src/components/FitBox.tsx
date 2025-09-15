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
      const cw = rect.width;
      const ch = rect.height;
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
    update();
    return () => ro.disconnect();
  }, [ratio]);

  return (
    <div ref={containerRef} className={cn('w-full h-full flex items-center justify-center', className)}>
      <div style={{ width: size.width, height: size.height }} className="relative">
        {children}
      </div>
    </div>
  );
}

