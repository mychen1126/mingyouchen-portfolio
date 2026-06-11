import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollProgress from "./components/motion/ScrollProgress";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import CodeWork from "./pages/CodeWork";
import Photography from "./pages/Photography";
import Contact from "./pages/Contact";


function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Switch location={location}>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/code-work" component={CodeWork} />
          <Route path="/photography" component={Photography} />
          <Route path="/contact" component={Contact} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <MotionConfig reducedMotion="user">
          <TooltipProvider>
            <Toaster />
            <ScrollProgress />
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <div className="flex-1">
                <Router />
              </div>
              <Footer />
            </div>
          </TooltipProvider>
        </MotionConfig>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
