import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

type CodeWorkProject = {
  id: string;
  title: string;
  publishedAt: string;
  description: string;
  tags: string[];
  projectUrl: string;
  githubUrl: string;
};

function formatProjectDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

/**
 * Code & Work Page
 * Minimalist Technical Elegance Design
 * - Project showcase
 * - Blog posts and technical writing
 * - Links to GitHub repositories
 */
export default function CodeWork() {
  const [projects, setProjects] = useState<CodeWorkProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadProjects = async () => {
      try {
        const response = await fetch('/data/code-work.json');

        if (!response.ok) {
          throw new Error(`Failed to load project data (${response.status})`);
        }

        const data = (await response.json()) as CodeWorkProject[];

        if (!isMounted) {
          return;
        }

        setProjects(data);
        setLoadError(null);
      } catch (error) {
        if (!isMounted) {
          return;
        }

        setLoadError(error instanceof Error ? error.message : 'Failed to load project data.');
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    void loadProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  const sortedProjects = useMemo(
    () =>
      [...projects].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      ),
    [projects],
  );

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
              Code & Work
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A collection of projects, code snippets, and technical explorations. Most of my work is available on GitHub.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'tween' }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold font-playfair text-foreground mb-2">
              Featured Projects
            </h2>
            <p className="text-muted-foreground">
              Explore my recent work across different technologies and domains.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="rounded-lg border border-border/50 bg-card p-8 text-muted-foreground">
              Loading project data...
            </div>
          ) : loadError ? (
            <div className="rounded-lg border border-destructive/30 bg-card p-8 text-destructive">
              {loadError}
            </div>
          ) : (
            <div className="grid gap-6">
              {sortedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05, type: 'tween' }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg border border-border/50 p-8 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold font-playfair text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {formatProjectDate(project.publishedAt)}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.projectUrl}
                      className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
                    >
                      View Project
                      <ArrowRight size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      title="View on GitHub"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Skills Highlight */}
      <section className="py-20 bg-secondary/20">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'tween' }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-playfair text-foreground mb-12">
              Technologies & Tools
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg border border-border/50 p-8">
                <h3 className="text-lg font-semibold font-playfair text-foreground mb-4">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-lg border border-border/50 p-8">
                <h3 className="text-lg font-semibold font-playfair text-foreground mb-4">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'C#', '.NET', 'Python'].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-lg border border-border/50 p-8">
                <h3 className="text-lg font-semibold font-playfair text-foreground mb-4">
                  Database & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['PostgreSQL', 'Supabase', 'Git', 'Swift', 'SQL'].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'tween' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-playfair text-foreground mb-4">
              More on GitHub
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Check out my GitHub profile for more projects, open-source contributions, and code examples.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-all duration-200 group"
            >
              Visit GitHub
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
