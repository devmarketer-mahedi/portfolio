"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import webDevImg from "@/assets/web_dev.png";
import digitalMarketingImg from "@/assets/digital_marketing.png";

const projects = [
  {
    id: 1,
    title: "Web Development",
    description: "Building high-performance, scalable web applications using modern technologies like React, Next.js, and Node.js.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Full Stack"],
    links: {
      demo: "#",
      github: "#",
    },
    color: "neon-blue",
    image: webDevImg,
  },
  {
    id: 2,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to grow your brand, increase traffic, and maximize ROI through SEO and paid campaigns.",
    tags: ["SEO", "Meta Ads", "Google Ads", "Social Media", "Analytics"],
    links: {
      demo: "#",
      github: "#",
    },
    color: "neon-purple",
    image: digitalMarketingImg,
  },
];

export default function Projects() {
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
          className="text-center mb-16"
        >
          <h2 className="text-neon-blue text-sm font-bold tracking-widest uppercase mb-2">
            My Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-blue to-neon-purple">Projects</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-neon-blue/50 transition-all duration-500"
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
                
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.links.github}
                    className="p-3 rounded-full bg-white/10 hover:bg-neon-blue hover:text-black text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.links.demo}
                    className="p-3 rounded-full bg-white/10 hover:bg-neon-purple hover:text-white text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75"
                  >
                    <ExternalLink size={20} />
                  </a>
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
        </div>
      </div>
    </section>
  );
}
