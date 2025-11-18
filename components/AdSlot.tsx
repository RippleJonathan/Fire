'use client';

import { useEffect, useRef, useState } from 'react';

interface AdSlotProps {
  slot?: string;
  format?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
}

export default function AdSlot({ slot = 'default', format = 'auto' }: AdSlotProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (adRef.current) {
      observer.observe(adRef.current);
    }

    return () => {
      if (adRef.current) {
        observer.unobserve(adRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={adRef}
      className="ad-slot my-8 flex items-center justify-center rounded-lg"
      style={{ minHeight: '250px' }}
    >
      <div className="text-center text-[var(--foreground)] opacity-50">
        {isVisible ? (
          <div className="space-y-2">
            <div className="text-sm">[ AD SPACE ]</div>
            <div className="text-xs">Slot: {slot} | Format: {format}</div>
          </div>
        ) : (
          <div className="text-sm">...</div>
        )}
      </div>
    </div>
  );
}
