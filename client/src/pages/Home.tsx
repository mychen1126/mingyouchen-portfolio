import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, ChevronDown } from 'lucide-react';
import AnimatedText from '@/components/motion/AnimatedText';
import TiltCard from '@/components/motion/TiltCard';
import ParticleField from '@/components/motion/ParticleField';
import RotatingWord from '@/components/motion/RotatingWord';
import Magnetic from '@/components/motion/Magnetic';

type FeaturedProject = {
  id: string;
  title: string;
  publishedAt: string;
  description: string;
  tags: string[];
  projectUrl: string;
  githubUrl: string;
};

/**
 * Home Page
 * Minimalist Technical Elegance Design
 * - Hero with masked word-by-word headline reveal and parallax background
 * - Featured projects with 3D tilt cards
 * - Scroll-triggered section reveals
 * - Photography hobby highlight with hover zoom
 */
export default function Home() {
  const [featuredProjects, setFeaturedProjects] = useState<FeaturedProject[]>([]);

  useEffect(() => {
    let isMounted = true;

    fetch('/data/code-work.json')
      .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
      .then((data: FeaturedProject[]) => {
        if (isMounted) {
          const sorted = [...data].sort(
            (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
          );
          setFeaturedProjects(sorted.slice(0, 2));
        }
      })
      .catch(() => {
        // Featured section simply stays empty if data fails to load.
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const heroContentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Parallax + Overlay */}
        <motion.div
          className="absolute inset-0 z-0 scale-110"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663535647985/CoRsTMNmtEwoWexkKZW2VF/hero-main-kn5EUcQuHJZ5LEWNCNUiaB.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: backgroundY,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>

        {/* Floating Particles */}
        <ParticleField count={26} className="z-[5]" />

        {/* Hero Content */}
        <motion.div
          className="container max-w-6xl mx-auto px-4 relative z-10"
          style={{ opacity: heroContentOpacity }}
        >
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold font-playfair text-white mb-6 leading-tight">
              <AnimatedText
                text="Full Stack Engineer"
                delay={0.1}
                accentWords={['Engineer']}
                accentClassName="text-shimmer"
              />
            </h1>

            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
              >
                I build modern web products that feel{' '}
                <RotatingWord
                  words={['fast', 'reliable', 'beautiful', 'intuitive']}
                  className="font-semibold text-[oklch(0.78_0.14_200)]"
                />
                . Specializing in TypeScript, React, Next.js, and Supabase. Based in Sydney.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <Magnetic>
                  <Link href="/code-work">
                    <a className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 group">
                      View My Work
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link href="/about">
                    <a className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white/10 transition-all duration-200">
                      Learn More
                    </a>
                  </Link>
                </Magnetic>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={28} />
          </motion.div>
        </motion.div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="group relative overflow-hidden border-b border-border/50 bg-secondary/30 py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="animate-marquee flex w-max items-center">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
              {[
                'TypeScript',
                'React',
                'Next.js',
                'Supabase',
                'Node.js',
                'PostgreSQL',
                'Tailwind CSS',
                'C#',
                '.NET',
                'Python',
                'Swift',
                'Framer Motion',
              ].map((tech) => (
                <span
                  key={tech}
                  className="flex items-center gap-3 px-4 font-mono text-sm text-muted-foreground"
                >
                  {tech}
                  <span className="size-1 rounded-full bg-primary/60" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-80px' }}
            >
              <h2 className="text-4xl font-bold font-playfair text-foreground mb-6">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                I'm a full-stack engineer based in Sydney with a passion for building scalable, maintainable systems. I focus on clean architecture, strong user experience, and practical security.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I work primarily with TypeScript, React, Next.js, and Supabase. I enjoy taking ownership across the full development stack, from UI design to database architecture.
              </p>
              <Link href="/about">
                <a className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                  Read Full Bio
                  <ArrowRight size={18} />
                </a>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-80px' }}
              className="bg-secondary/50 rounded-lg p-8 border border-border/50 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Core Skills</h3>
                  <p className="text-sm text-muted-foreground">TypeScript, React, Next.js, Supabase, Node.js, PostgreSQL, Tailwind CSS</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Interests</h3>
                  <p className="text-sm text-muted-foreground">Scalable systems, UX design, photography, clean code, mentoring</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Currently</h3>
                  <p className="text-sm text-muted-foreground">Open to opportunities in full-stack engineering roles</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'tween' }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold font-playfair text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              A selection of projects showcasing my technical skills and problem-solving approach.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12, type: 'tween' }}
                viewport={{ once: true, margin: '-60px' }}
              >
                <TiltCard className="bg-card rounded-lg border border-border/50 p-8 h-full hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-[border-color,box-shadow] duration-300 group">
                  <h3 className="text-xl font-semibold font-playfair text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
                  >
                    View Project
                    <ArrowRight size={18} />
                  </a>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, type: 'tween' }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link href="/code-work">
              <a className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-200 group">
                View All Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Photography Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'tween' }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="rounded-lg overflow-hidden h-96 md:h-full group">
              <div
                className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663535647985/CoRsTMNmtEwoWexkKZW2VF/photography-accent-YFLymQf3RXy4kMvu5fdCG9.webp)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold font-playfair text-foreground mb-6">
                Photography
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Beyond code, I'm passionate about photography. It helps me practice composition, detail, and storytelling—skills that directly improve my approach to product design and user experience.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I bring the same mindset from photography into my engineering work: attention to visual hierarchy, thoughtful spacing, and how people actually experience an interface.
              </p>
              <Link href="/photography">
                <a className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                  View Photography
                  <ArrowRight size={18} />
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'tween' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-playfair text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out.
            </p>
            <Link href="/contact">
              <a className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-200 group">
                Get In Touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
