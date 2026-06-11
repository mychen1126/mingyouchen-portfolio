import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { type ReactNode, type MouseEvent } from 'react';

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Max tilt angle in degrees. Keep small for a subtle effect. */
  maxTilt?: number;
};

/**
 * TiltCard
 * Subtle 3D tilt that follows the cursor, with a spring back to
 * rest on mouse leave. Wraps any card content.
 */
export default function TiltCard({ children, className, maxTilt = 4 }: TiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {children}
    </motion.div>
  );
}
