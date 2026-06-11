import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type RotatingWordProps = {
  words: string[];
  /** Milliseconds each word stays on screen. */
  interval?: number;
  className?: string;
};

/**
 * RotatingWord
 * Cycles through a list of words with a vertical roll, like a
 * split-flap departure board.
 */
export default function RotatingWord({ words, interval = 2400, className }: RotatingWordProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span
      className={`relative inline-flex overflow-hidden align-bottom pb-[0.1em] -mb-[0.1em] ${className ?? ''}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          className="inline-block"
          initial={{ y: '105%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-105%', opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
