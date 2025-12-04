import webDevImg from "@/assets/web_dev.png";
import digitalMarketingImg from "@/assets/digital_marketing.png";
import { StaticImageData } from "next/image";

// Cover Images
import ecommerceCover from "@/assets/ecommerce_cover.png";
import portfolioCover from "@/assets/portfolio_cover.png";
import socialMediaCover from "@/assets/social_media_cover.png";
import seoCover from "@/assets/seo_cover.png";

// Social Media Growth Images
import smg1 from "@/assets/social-media-growth/Social Media Growth (1).jpg";
import smg2 from "@/assets/social-media-growth/Social Media Growth (2).jpg";
import smg3 from "@/assets/social-media-growth/Social Media Growth (3).jpg";
import smg4 from "@/assets/social-media-growth/Social Media Growth (4).jpg";
import smg5 from "@/assets/social-media-growth/Social Media Growth (5).jpg";
import smg6 from "@/assets/social-media-growth/Social Media Growth (6).jpg";
import smg7 from "@/assets/social-media-growth/Social Media Growth (7).jpg";
import smg8 from "@/assets/social-media-growth/Social Media Growth (8).jpg";
import smg9 from "@/assets/social-media-growth/Social Media Growth (9).jpg";
import smg10 from "@/assets/social-media-growth/Social Media Growth (10).jpg";
import smg11 from "@/assets/social-media-growth/Social Media Growth (11).jpg";
import smg12 from "@/assets/social-media-growth/Social Media Growth (12).jpg";
import smg13 from "@/assets/social-media-growth/Social Media Growth (13).jpg";
import smg14 from "@/assets/social-media-growth/Social Media Growth (14).jpg";
import smg15 from "@/assets/social-media-growth/Social Media Growth (15).jpg";
import smg16 from "@/assets/social-media-growth/Social Media Growth (16).jpg";
import smg17 from "@/assets/social-media-growth/Social Media Growth (17).jpg";
import smg18 from "@/assets/social-media-growth/Social Media Growth (18).jpg";
import smg19 from "@/assets/social-media-growth/Social Media Growth (19).jpg";
import smg20 from "@/assets/social-media-growth/Social Media Growth (20).jpg";
import smg21 from "@/assets/social-media-growth/Social Media Growth (21).jpg";
import smg22 from "@/assets/social-media-growth/Social Media Growth (22).jpg";
import smg23 from "@/assets/social-media-growth/Social Media Growth (23).jpg";
import smg24 from "@/assets/social-media-growth/Social Media Growth (24).jpg";
import smg25 from "@/assets/social-media-growth/Social Media Growth (25).jpg";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: StaticImageData | string;
  link: string;
  tags: string[];
  // New fields for Modal
  gallery?: (StaticImageData | string)[];
  techStack?: string[]; // For Web Dev
  features?: string[]; // For Web Dev
  results?: string[]; // For Digital Marketing
  strategy?: string; // For Digital Marketing
}

export interface CategoryProjects {
  title: string;
  description: string;
  projects: Project[];
}

export const projectData: Record<string, CategoryProjects> = {
  "web-development": {
    title: "Web Development Projects",
    description: "Here are some of the websites and applications I have built.",
    projects: [
      {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-featured online store with cart, checkout, and payment integration.",
        image: ecommerceCover,
        link: "#",
        tags: ["Next.js", "Stripe", "Tailwind"],
        gallery: [ecommerceCover], // Placeholder for now
        techStack: ["Next.js 14", "TypeScript", "Stripe Connect", "Tailwind CSS", "Supabase"],
        features: [
          "Real-time inventory management",
          "Secure payment processing with Stripe",
          "Admin dashboard for order tracking",
          "Responsive mobile-first design"
        ]
      },
      {
        id: 2,
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website with dark mode and animations.",
        image: portfolioCover,
        link: "#",
        tags: ["React", "Framer Motion"],
        gallery: [portfolioCover],
        techStack: ["React", "Framer Motion", "Vite", "Tailwind"],
        features: [
          "Smooth scroll animations",
          "Dark/Light mode toggle",
          "Contact form with email integration",
          "SEO optimized structure"
        ]
      },
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing Campaigns",
    description: "Successful campaigns that drove growth and engagement.",
    projects: [
      {
        id: 1,
        title: "Social Media Growth",
        description: "Increased brand awareness by 200% through targeted Facebook ads.",
        image: socialMediaCover,
        link: "#",
        tags: ["Facebook Ads", "Content Strategy"],
        gallery: [
          smg1, smg2, smg3, smg4, smg5, 
          smg6, smg7, smg8, smg9, smg10, 
          smg11, smg12, smg13, smg14, smg15, 
          smg16, smg17, smg18, smg19, smg20, 
          smg21, smg22, smg23, smg24, smg25
        ],
        results: [
          "200% Increase in Brand Awareness",
          "50k+ Monthly Reach",
          "3.5x ROAS (Return on Ad Spend)"
        ],
        strategy: "Implemented A/B testing on ad creatives and focused on lookalike audiences to maximize conversion rates."
      },
      {
        id: 2,
        title: "SEO Optimization",
        description: "Ranked #1 on Google for key industry keywords.",
        image: seoCover,
        link: "#",
        tags: ["SEO", "Google Analytics"],
        results: [
          "Ranked #1 for 5 high-volume keywords",
          "150% Increase in Organic Traffic",
          "Reduced Bounce Rate by 20%"
        ],
        strategy: "Conducted comprehensive keyword research, optimized on-page meta tags, and built high-quality backlinks."
      },
    ],
  },
};
