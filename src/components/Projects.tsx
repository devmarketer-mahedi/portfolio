"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projectData, Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"web-development" | "digital-marketing">("web-development");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-deep-dark relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-neon-blue text-sm font-bold tracking-widest uppercase mb-2">
            My Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-blue to-neon-purple">Projects</span>
          </h3>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {Object.entries(projectData).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as "web-development" | "digital-marketing")}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeTab === key
                    ? "bg-neon-blue/10 border-neon-blue text-neon-blue shadow-[0_0_15px_rgba(0,243,255,0.3)]"
                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {data.title.replace(" Projects", "").replace(" Campaigns", "")}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {projectData[activeTab].projects.map((project, index) => (
              <motion.div
                key={project.id}
                layoutId={`project-${project.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-neon-blue/50 transition-all duration-500 cursor-pointer"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-linear-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image Placeholder */}
                <div className="relative h-48 bg-black/40 flex items-center justify-center border-b border-white/5 group-hover:border-white/10 transition-colors overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay Text */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold tracking-wider border border-white/30 px-6 py-2 rounded-full hover:bg-white/10 transition-colors">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5 group-hover:border-white/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
