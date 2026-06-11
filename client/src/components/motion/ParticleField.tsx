import { useMemo } from 'react';
import { motion } from 'framer-motion';

type Particle = {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
};

type ParticleFieldProps = {
  count?: number;
  className?: string;
};

/**
 * ParticleField
 * A field of softly glowing dots that drift upward and pulse,
 * adding depth to hero sections. Pure DOM + framer-motion, no canvas.
 */
export default function ParticleField({ count = 24, className }: ParticleFieldProps) {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: count }, (_, id) => ({
        id,
        left: Math.random() * 100,
        top: 20 + Math.random() * 80,
        size: 2 + Math.random() * 3,
        duration: 7 + Math.random() * 8,
        delay: Math.random() * 6,
        drift: -10 + Math.random() * 20,
      })),
    [count],
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ''}`} aria-hidden="true">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-primary/70 shadow-[0_0_8px_2px] shadow-primary/30"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -120],
            x: [0, particle.drift],
            opacity: [0, 0.9, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
