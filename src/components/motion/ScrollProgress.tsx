'use client';

import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [scale, setScale] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      setScale(distance <= 0 ? 0 : Math.min(1, Math.max(0, window.scrollY / distance)));
    };
    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5" aria-hidden="true">
      <div
        className="h-full origin-left bg-[linear-gradient(90deg,#ffe9c5,#c9a4c4,#7c43b5,#5012b0)] motion-reduce:transition-none"
        style={{ transform: `scaleX(${scale})` }}
      />
    </div>
  );
}
