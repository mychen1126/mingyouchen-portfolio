import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type PhotographyItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
};

/**
 * Photography Page
 * Minimalist Technical Elegance Design
 * - Photography gallery
 * - Project descriptions
 * - Photography philosophy
 */
export default function Photography() {
  const [galleryItems, setGalleryItems] = useState<PhotographyItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadGallery = async () => {
      try {
        const response = await fetch('/data/photography.json');

        if (!response.ok) {
          throw new Error(`Failed to load photography data (${response.status})`);
        }

        const data = (await response.json()) as PhotographyItem[];

        if (!isMounted) {
          return;
        }

        setGalleryItems(data);
        setLoadError(null);
      } catch (error) {
        if (!isMounted) {
          return;
        }

        setLoadError(error instanceof Error ? error.message : 'Failed to load photography data.');
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    void loadGallery();

    return () => {
      isMounted = false;
    };
  }, []);

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

          {isLoading ? (
            <div className="rounded-lg border border-border/50 bg-card p-8 text-muted-foreground">
              Loading photography data...
            </div>
          ) : loadError ? (
            <div className="rounded-lg border border-destructive/30 bg-card p-8 text-destructive">
              {loadError}
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05, type: 'tween' }}
                  viewport={{ once: true }}
                  className="group cursor-pointer overflow-hidden rounded-lg border border-border/50 bg-card transition-all duration-300 hover:border-primary/50"
                >
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-64 w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                      const fallback = event.currentTarget.nextElementSibling as HTMLDivElement | null;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="hidden h-64 w-full items-center justify-center bg-secondary px-6 text-center text-sm text-muted-foreground">
                    Add image at {item.image}
                  </div>

                  <div className="p-8">
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold font-playfair text-foreground transition-colors group-hover:text-primary">
                        {item.title}
                      </h3>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
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
          )}
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
