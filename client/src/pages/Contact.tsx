import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

/**
 * Contact Page
 * Minimalist Technical Elegance Design
 * - Contact information
 * - Social links
 * - Simple contact form placeholder
 */
export default function Contact() {
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
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              I'm always interested in hearing about new projects, opportunities, and ideas. Feel free to reach out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: 'tween' }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold font-playfair text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <a
                  href="mailto:mychen1126@gmail.com"
                  className="flex items-start gap-4 p-6 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-secondary/30 transition-all duration-300 group"
                >
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">
                      mychen1126@gmail.com
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/mingyouchen2611"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-secondary/30 transition-all duration-300 group"
                >
                  <Linkedin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">
                      linkedin.com/in/mingyouchen2611
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/mychen1126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-secondary/30 transition-all duration-300 group"
                >
                  <Github className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">GitHub</h3>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">
                      github.com/mychen1126
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-6 rounded-lg border border-border/50 bg-secondary/30">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Sydney, Australia
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: 'tween' }}
              viewport={{ once: true }}
              className="bg-secondary/30 rounded-lg border border-border/50 p-8"
            >
              <h2 className="text-3xl font-bold font-playfair text-foreground mb-6">
                Let's Talk
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're interested in discussing a project, exploring collaboration opportunities, or just want to chat about engineering and design, I'd love to hear from you.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I typically respond to emails within 24 hours. For urgent matters, feel free to reach out via LinkedIn.
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>What I'm interested in:</strong>
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Full-stack engineering opportunities</li>
                    <li>✓ Collaboration on interesting projects</li>
                    <li>✓ Technical discussions and mentoring</li>
                    <li>✓ Photography and design conversations</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20 bg-secondary/20">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'tween' }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-playfair text-foreground mb-8">
              Connect With Me
            </h2>
            <div className="flex justify-center gap-6">
              <a
                href="https://linkedin.com/in/mingyouchen2611"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-card rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://github.com/mychen1126"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-card rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github size={24} className="text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:mychen1126@gmail.com"
                className="p-4 bg-card rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail size={24} className="text-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
