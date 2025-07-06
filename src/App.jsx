import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./contexts/ThemeContext";
import ModernSidebar from "./components/Navigation/ModernSidebar";
import HeroSection from "./components/Hero/HeroSection";
import AboutSection from "./components/About/AboutSection";
import SkillsSection from "./components/Skills/SkillsSection";
import ProjectsSection from "./components/Projects/ProjectsSection";
import ExperienceSection from "./components/Experience/ExperienceSection";
import ContactSection from "./components/Contact/ContactSection";
import DesignShowcase from "./components/UI/DesignShowcase";
import ParticleBackground from "./components/Background/ParticleBackground";
import ScrollProgress from "./components/UI/ScrollProgress";
import "./styles/design-system.css";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const LoadingScreen = () => (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "var(--gradient-dark)" }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.div
          className="w-20 h-20 border-4 border-t-transparent rounded-full mx-auto mb-4"
          style={{
            borderColor: "var(--cyber-cyan-400)",
            borderTopColor: "transparent",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.h2
          className="heading-4 gradient-text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Loading Portfolio...
        </motion.h2>
      </div>
    </motion.div>
  );

  return (
    <ThemeProvider>
      <div
        className="relative min-h-screen"
        style={{ background: "var(--neutral-950)", color: "var(--neutral-50)" }}
      >
        <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

        {!isLoading && (
          <>
            <ParticleBackground />
            <ScrollProgress />
            <HeroSection />
            <main className="lg:ml-80">
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <ExperienceSection />
              <ContactSection />
            </main>
            <ModernSidebar />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
