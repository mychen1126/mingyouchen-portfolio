import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * ScrollProgress
 * Thin progress bar fixed to the top of the viewport that fills
 * as the user scrolls down the page.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left bg-primary"
      style={{ scaleX }}
    />
  );
}
