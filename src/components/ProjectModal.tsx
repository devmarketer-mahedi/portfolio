import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, Layers } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { Project } from "@/data/projects";
import { useEffect, useState } from "react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [lightboxImage, setLightboxImage] = useState<string | StaticImageData | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  const isWebDev = !!project.techStack;

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1a1a1a] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl shadow-neon-blue/10"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-10"
              >
                <X size={20} />
              </button>

              {/* Header Image */}
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a] via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 md:left-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <Layers className="text-neon-purple" size={20} />
                      Overview
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Web Dev Specific: Features */}
                  {isWebDev && project.features && (
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300">
                            <CheckCircle2 className="text-neon-blue mt-1 shrink-0" size={16} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Marketing Specific: Strategy */}
                  {!isWebDev && project.strategy && (
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Strategy</h3>
                      <p className="text-gray-300 leading-relaxed">
                        {project.strategy}
                      </p>
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Links */}
                  <div className="flex flex-col gap-3">
                    {isWebDev ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-neon-blue text-black font-semibold hover:bg-neon-blue/90 transition-colors"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    ) : (
                      <button
                        onClick={() => {
                          const gallery = document.getElementById("project-gallery");
                          if (gallery) {
                            gallery.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-neon-blue text-black font-semibold hover:bg-neon-blue/90 transition-colors"
                      >
                        <Layers size={18} />
                        View Results
                      </button>
                    )}
                    
                    {isWebDev && (
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors border border-white/10"
                      >
                        <Github size={18} />
                        View Code
                      </a>
                    )}
                  </div>

                  {/* Web Dev: Tech Stack */}
                  {isWebDev && project.techStack && (
                    <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="text-sm text-gray-300 bg-black/20 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Marketing: Results */}
                  {!isWebDev && project.results && (
                    <div className="bg-neon-purple/5 rounded-xl p-5 border border-neon-purple/20">
                      <h4 className="text-sm font-semibold text-neon-purple uppercase tracking-wider mb-4">
                        Key Results
                      </h4>
                      <ul className="space-y-3">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="text-gray-200 font-medium flex items-start gap-2">
                            <span className="text-neon-purple">•</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Gallery Section */}
              {project.gallery && project.gallery.length > 0 && (
                <div id="project-gallery" className="p-6 md:p-8 border-t border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <Layers className="text-neon-blue" size={20} />
                    Project Gallery
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.gallery.map((img, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => setLightboxImage(img)}
                        className="relative h-48 rounded-lg overflow-hidden border border-white/5 hover:border-neon-blue/50 transition-all duration-300 group/image cursor-zoom-in"
                      >
                        <Image
                          src={img}
                          alt={`${project.title} gallery image ${idx + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover/image:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Lightbox Overlay */}
          <AnimatePresence>
            {lightboxImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxImage(null)}
                className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
              >
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                >
                  <X size={24} />
                </button>
                
                <div className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center">
                  <Image
                    src={lightboxImage}
                    alt="Gallery Preview"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}
