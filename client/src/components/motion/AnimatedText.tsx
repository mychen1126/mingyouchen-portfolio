import { motion } from 'framer-motion';

type AnimatedTextProps = {
  text: string;
  className?: string;
  /** Seconds to wait before the first word animates in. */
  delay?: number;
  /** Words rendered with the accent styling. */
  accentWords?: string[];
  /** Class applied to accent words. Defaults to the primary color. */
  accentClassName?: string;
};

/**
 * AnimatedText
 * Splits text into words and reveals each one with a masked
 * slide-up animation, like a typeset headline being printed.
 */
export default function AnimatedText({
  text,
  className,
  delay = 0,
  accentWords = [],
  accentClassName = 'text-primary',
}: AnimatedTextProps) {
  const words = text.split(' ');

  return (
    <span className={className} aria-label={text}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          aria-hidden="true"
          className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom"
        >
          <motion.span
            className={`inline-block ${accentWords.includes(word) ? accentClassName : ''}`}
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: delay + index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {index < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
