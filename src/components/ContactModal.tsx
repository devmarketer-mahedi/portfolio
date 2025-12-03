"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Linkedin, ExternalLink } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-[#1a1a2e]/90 border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
              <div className="absolute top-[-20%] right-[-20%] w-[50%] h-[50%] bg-neon-blue/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-[-20%] left-[-20%] w-[50%] h-[50%] bg-neon-purple/10 rounded-full blur-[80px]" />
            </div>

            {/* Header */}
            <div className="relative z-10 flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-white">Let&apos;s Connect</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <div className="relative z-10 space-y-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/8801326098934"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-neon-blue/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-green-500/20 text-green-400 group-hover:scale-110 transition-transform duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">WhatsApp</h4>
                    <p className="text-sm text-gray-400">+880 1326-098934</p>
                  </div>
                </div>
                <ExternalLink size={18} className="text-gray-500 group-hover:text-white transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/devmarketer-mahedi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-neon-purple/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">LinkedIn</h4>
                    <p className="text-sm text-gray-400">@devmarketer-mahedi</p>
                  </div>
                </div>
                <ExternalLink size={18} className="text-gray-500 group-hover:text-white transition-colors" />
              </a>
            </div>
            
            <div className="relative z-10 mt-8 text-center">
                <p className="text-xs text-gray-500">Available for freelance projects & collaborations</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
