"use client";

import { motion } from "framer-motion";
import { Code2, BarChart3, LineChart, FileJson } from "lucide-react";

const icons = [
  { Icon: Code2, color: "text-neon-blue", delay: 0, x: -120, y: -100 },
  { Icon: FileJson, color: "text-yellow-400", delay: 1, x: 140, y: -80 },
  { Icon: BarChart3, color: "text-neon-purple", delay: 2, x: -100, y: 120 },
  { Icon: LineChart, color: "text-green-400", delay: 3, x: 120, y: 100 },
];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [item.y, item.y - 20, item.y],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            opacity: { duration: 0.5, delay: item.delay * 0.2 + 1 },
            scale: { duration: 0.5, delay: item.delay * 0.2 + 1 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: item.delay },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: item.delay }
          }}
          style={{ x: item.x }}
          className="absolute p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl shadow-neon-blue/10"
        >
          <item.Icon className={`w-8 h-8 ${item.color}`} />
        </motion.div>
      ))}
    </div>
  );
}
