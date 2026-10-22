'use client';

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  phase: number;
};

function spawn(particle: Particle, width: number, height: number, fromBottom: boolean) {
  particle.x = Math.random() * width;
  particle.y = fromBottom ? height + 8 : Math.random() * height;
  particle.radius = Math.random() * 1.7 + 0.35;
  particle.vx = (Math.random() - 0.5) * 0.28;
  particle.vy = -(Math.random() * 0.32 + 0.06);
  particle.alpha = Math.random() * 0.5 + 0.12;
  particle.phase = Math.random() * Math.PI * 2;
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches) return;

    const particles: Particle[] = [];
    let frame = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, canvas.clientWidth) * ratio;
      canvas.height = Math.max(1, canvas.clientHeight) * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const fill = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const count = Math.round(Math.min(110, Math.max(36, Math.round((width * height) / 16000))) * 1.5);

      while (particles.length < count) {
        const particle = {
          x: 0,
          y: 0,
          radius: 1,
          vx: 0,
          vy: 0,
          alpha: 0.2,
          phase: 0,
        };
        spawn(particle, width, height, false);
        particles.push(particle);
      }

      particles.length = count;
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.phase += 0.018;

        if (particle.y < -10 || particle.x < -10 || particle.x > width + 10) {
          spawn(particle, width, height, true);
        }

        const alpha = particle.alpha * (0.55 + 0.45 * Math.sin(particle.phase));
        context.beginPath();
        context.fillStyle = `rgba(255, 244, 230, ${alpha})`;
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }

      frame = window.requestAnimationFrame(draw);
    };

    const onResize = () => {
      resize();
      fill();
    };

    resize();
    fill();
    frame = window.requestAnimationFrame(draw);
    window.addEventListener('resize', onResize);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
