import { motion } from 'framer-motion';

/**
 * Photography Page
 * Minimalist Technical Elegance Design
 * - Photography gallery
 * - Project descriptions
 * - Photography philosophy
 */
export default function Photography() {
  const galleryItems = [
    {
      title: 'Landscape Series',
      description: 'Capturing the beauty of natural landscapes with attention to light and composition.',
      category: 'Landscape',
    },
    {
      title: 'Urban Exploration',
      description: 'Finding patterns and stories in city environments.',
      category: 'Urban',
    },
    {
      title: 'Portrait Studies',
      description: 'Exploring human emotion and connection through portraiture.',
      category: 'Portrait',
    },
    {
      title: 'Detail & Texture',
      description: 'Macro photography revealing the intricate details of everyday objects.',
      category: 'Macro',
    },
    {
      title: 'Travel Documentation',
      description: 'Visual storytelling from travels around the world.',
      category: 'Travel',
    },
    {
      title: 'Light & Shadow',
      description: 'Exploring the interplay of light and shadow in various environments.',
      category: 'Experimental',
    },
  ];

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
              Photography
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A visual exploration of composition, light, and storytelling. Photography has taught me to see the world differently and brings that perspective into my design and engineering work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photography Philosophy */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'tween' }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold font-playfair text-foreground mb-4">
                Why Photography
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Photography is more than a hobby for me—it's a practice in visual thinking. Through the lens, I've learned to observe composition, understand how light shapes perception, and tell stories without words. These principles directly inform my approach to product design and user interface development.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold font-playfair text-foreground mb-4">
                Bringing It Together
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The discipline of photography—attention to detail, intentional composition, and clarity of message—shapes how I build software. I pay careful attention to visual hierarchy, whitespace, and how users experience an interface. Good design, whether in photography or product, is about making complex things feel simple and intuitive.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-secondary/20">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'tween' }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold font-playfair text-foreground mb-2">
              Gallery
            </h2>
            <p className="text-muted-foreground">
              A selection of photography projects and series.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05, type: 'tween' }}
                viewport={{ once: true }}
                className="bg-card rounded-lg border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 group cursor-pointer"
              >
                {/* Placeholder for image */}
                <div className="w-full h-64 bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl text-muted-foreground/30 mb-2">📷</div>
                    <p className="text-sm text-muted-foreground">Gallery Image</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold font-playfair text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'tween' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-playfair text-foreground mb-4">
              Interested in My Work?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Feel free to reach out if you'd like to discuss photography, design, or any of my work.
            </p>
            <a
              href="mailto:mychen1126@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-all duration-200"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
