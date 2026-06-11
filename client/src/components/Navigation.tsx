import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Navigation Component
 * Minimalist Technical Elegance Design
 * - Glassmorphism bar that blurs once the page scrolls
 * - Sliding underline that tracks the active route
 * - Spring-animated mobile menu
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Code & Work', href: '/code-work' },
    { label: 'Photography', href: '/photography' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm'
          : 'bg-background border-b border-border/50'
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="text-2xl font-bold font-playfair text-foreground hover:text-primary transition-colors duration-200">
            Ming-You Chen
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <a
                  className={`text-sm font-medium transition-colors duration-200 relative group py-1 ${
                    isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active-underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  ) : (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary/60 transition-all duration-300 group-hover:w-full" />
                  )}
                </a>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md overflow-hidden"
          >
            <div className="container max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.25 }}
                >
                  <Link href={item.href}>
                    <a
                      className={`text-sm font-medium transition-colors ${
                        location === item.href ? 'text-primary' : 'text-foreground hover:text-primary'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
