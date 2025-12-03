"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);

  const handleShowProjects = () => {
    setShowProjects(true);
    // Give a small delay for the component to mount before scrolling
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <main className="bg-deep-dark min-h-screen">
      <Hero onShowProjects={handleShowProjects} />
      {showProjects && <Projects />}
    </main>
  );
}
