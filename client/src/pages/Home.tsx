import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

/**
 * Home Page
 * Minimalist Technical Elegance Design
 * - Hero section with compelling introduction
 * - Featured projects preview
 * - Call-to-action sections
 * - Photography hobby highlight
 */
export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663535647985/CoRsTMNmtEwoWexkKZW2VF/hero-main-kn5EUcQuHJZ5LEWNCNUiaB.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold font-playfair text-white mb-6 leading-tight"
            >
              Full Stack Engineer
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
            >
              I build modern web products that feel fast, reliable, and beautiful. Specializing in TypeScript, React, Next.js, and Supabase. Based in Sydney.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Link href="/code-work">
                <a className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-all duration-200 group">
                  View My Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Link>
              <Link href="/about">
                <a className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white/10 transition-all duration-200">
                  Learn More
                </a>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'tween' }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
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
            </div>
            <div className="bg-secondary/50 rounded-lg p-8 border border-border/50">
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
            </div>
          </motion.div>
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
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, type: 'tween' }}
                viewport={{ once: true }}
                className="bg-card rounded-lg border border-border/50 p-8 hover:border-primary/50 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold font-playfair text-foreground mb-3">
                  Project {i}
                </h3>
                <p className="text-muted-foreground mb-4">
                  A brief description of the project and the technologies used.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">React</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">TypeScript</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Next.js</span>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  View Project
                  <ArrowRight size={18} />
                </a>
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
              <a className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-all duration-200 group">
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
            <div
              className="rounded-lg overflow-hidden h-96 md:h-full"
              style={{
                backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663535647985/CoRsTMNmtEwoWexkKZW2VF/photography-accent-YFLymQf3RXy4kMvu5fdCG9.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
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
              <a className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-all duration-200 group">
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
