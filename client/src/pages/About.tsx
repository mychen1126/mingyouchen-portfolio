import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Code, Users, Zap } from 'lucide-react';

/**
 * About Page
 * Minimalist Technical Elegance Design
 * - Professional background and philosophy
 * - Skills and expertise
 * - Work approach and values
 */
export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-secondary/20 border-b border-border/50">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'tween' }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-playfair text-foreground mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Full-stack engineer based in Sydney with a passion for building scalable, maintainable systems that solve real problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'tween' }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-playfair text-foreground mb-4">
                  Who I Am
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm Ming-You Chen, a full-stack engineer based in Sydney. I enjoy building modern web products that feel fast, reliable, and easy to use. I care about clean architecture, strong user experience, and security that is practical rather than theoretical.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold font-playfair text-foreground mb-4">
                  What I Do
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  I work mainly with TypeScript, React, Next.js, and Supabase. I like projects where I can take ownership across the full flow, from UI and state to APIs, database design, and deployment. I am especially interested in building systems that scale smoothly, stay maintainable, and support real users.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-secondary/30 rounded-lg p-6 border border-border/50">
                    <Code className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Full Stack Development</h3>
                    <p className="text-sm text-muted-foreground">From frontend UI to backend APIs and database design</p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-6 border border-border/50">
                    <Zap className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Performance</h3>
                    <p className="text-sm text-muted-foreground">Building fast, responsive applications that scale</p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-6 border border-border/50">
                    <Users className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">User Experience</h3>
                    <p className="text-sm text-muted-foreground">Creating intuitive interfaces that users love</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold font-playfair text-foreground mb-4">
                  How I Work
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My approach is simple. I break problems down, ship small increments, and measure what matters. I write clear documentation, keep interfaces consistent, and prefer solutions that other engineers can understand quickly. I value teamwork and direct communication, especially when requirements change or timelines are tight.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold font-playfair text-foreground mb-4">
                  Technical Skills
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Frontend</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• React & Next.js</li>
                      <li>• TypeScript</li>
                      <li>• Tailwind CSS</li>
                      <li>• Framer Motion</li>
                      <li>• State Management</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Backend & Database</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Node.js & Express</li>
                      <li>• PostgreSQL</li>
                      <li>• Supabase</li>
                      <li>• RESTful APIs</li>
                      <li>• Database Design</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold font-playfair text-foreground mb-4">
                  Photography
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Outside of engineering, I do photography. It helps me practice composition, detail, and storytelling. I bring that same mindset into product work by paying attention to visual hierarchy, spacing, and how people actually experience an interface. Photography has taught me that good design is about clarity, intention, and making complex things feel simple.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold font-playfair text-foreground mb-4">
                  What I'm Looking For
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm looking for software engineering roles where I can contribute to real products, learn from strong teammates, and grow into larger ownership over time. I value companies that care about code quality, user experience, and treating their team well.
                </p>
              </div>
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
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Feel free to reach out if you'd like to discuss opportunities, collaborate on projects, or just chat about engineering and design.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:mychen1126@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-all duration-200 group"
              >
                Send Email
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/mingyouchen2611"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary/10 transition-all duration-200"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
