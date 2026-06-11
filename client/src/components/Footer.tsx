import { Linkedin, Github, Mail } from 'lucide-react';

/**
 * Footer Component
 * Minimalist Technical Elegance Design
 * - Clean, centered layout
 * - Social links with icons
 * - Professional contact information
 */
export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border/50 mt-20">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/mingyouchen2611"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary/10 rounded-md transition-colors duration-200 group"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/mychen1126"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary/10 rounded-md transition-colors duration-200 group"
              aria-label="GitHub"
            >
              <Github size={20} className="text-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:mychen1126@gmail.com"
              className="p-2 hover:bg-primary/10 rounded-md transition-colors duration-200 group"
              aria-label="Email"
            >
              <Mail size={20} className="text-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Email: <a href="mailto:mychen1126@gmail.com" className="text-primary hover:underline">mychen1126@gmail.com</a>
            </p>
            <p className="text-sm text-muted-foreground">
              Based in Sydney, Australia
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t border-border/50 pt-8 w-full text-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Ming-You Chen. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
