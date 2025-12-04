import webDevImg from "@/assets/web_dev.png";
import digitalMarketingImg from "@/assets/digital_marketing.png";
import { StaticImageData } from "next/image";

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
        image: webDevImg,
        link: "#",
        tags: ["Next.js", "Stripe", "Tailwind"],
        gallery: [webDevImg, webDevImg], // Placeholder for now
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
        image: webDevImg,
        link: "#",
        tags: ["React", "Framer Motion"],
        gallery: [webDevImg],
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
        image: digitalMarketingImg,
        link: "#",
        tags: ["Facebook Ads", "Content Strategy"],
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
        image: digitalMarketingImg,
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
