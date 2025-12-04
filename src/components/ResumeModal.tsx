"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, MapPin, Globe, Briefcase, GraduationCap, User, Download } from "lucide-react";
import Image from "next/image";
import profileImg from "@/assets/profile_v2.jpg";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 py-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm no-print"
            />

            {/* Modal Content */}
            <motion.div
              id="resume-content"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-[#1a1a2e] border border-white/10 rounded-2xl shadow-2xl flex flex-col md:flex-row print:max-h-none print:overflow-visible print:border-none print:shadow-none z-10"
            >
            {/* Actions Buttons */}
            <div className="absolute top-4 right-4 z-20 flex gap-3 no-print">
              <button
                onClick={handlePrint}
                className="p-2 rounded-full bg-neon-blue/10 hover:bg-neon-blue/20 text-neon-blue transition-colors"
                title="Print / Download PDF"
              >
                <Download size={24} />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Sidebar (Left Column) */}
            <div className="w-full md:w-1/3 bg-[#11111f] p-8 border-r border-white/5">
              <div className="text-center mb-8">
                <div className="relative w-32 h-32 mx-auto rounded-full border-4 border-neon-blue/30 overflow-hidden mb-4">
                  <Image 
                    src={profileImg} 
                    alt="Mahedi Hasan" 
                    fill 
                    className="object-cover"
                    placeholder="blur"
                  />
                </div>
                <h2 className="text-2xl font-bold text-white mb-1">MAHEDI HASAN</h2>
                <p className="text-neon-blue text-sm font-medium">WEB DEVELOPER & DIGITAL MARKETING SPECIALIST</p>
              </div>

              <div className="space-y-8">
                {/* Contact */}
                <div>
                  <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2 mb-4 uppercase tracking-wider">Contact</h3>
                  <ul className="space-y-3 text-sm text-gray-400">
                    <li className="flex items-center gap-3">
                      <Phone size={16} className="text-neon-blue" />
                      <span>+880 1326-098934</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail size={16} className="text-neon-blue" />
                      <span className="break-all">mahedihasan98934@gmail.com</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin size={16} className="text-neon-blue" />
                      <span>Paba 6210 Upazila, Rajshahi</span>
                    </li>
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2 mb-4 uppercase tracking-wider">Skills</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neon-purple rounded-full"></span>Advertising</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neon-purple rounded-full"></span>Digital Marketing</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neon-purple rounded-full"></span>Growth Marketing</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neon-purple rounded-full"></span>Social Media Marketing</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neon-purple rounded-full"></span>Meta Ads</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neon-blue rounded-full"></span>Web Development</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neon-blue rounded-full"></span>Web Design</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neon-blue rounded-full"></span>HTML, CSS, Java</li>
                  </ul>
                </div>

                {/* Languages */}
                <div>
                  <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2 mb-4 uppercase tracking-wider">Languages</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex justify-between"><span>English</span> <span className="text-gray-500">(Basic)</span></li>
                    <li className="flex justify-between"><span>Bangla</span> <span className="text-neon-blue">(Pro)</span></li>
                    <li className="flex justify-between"><span>Hindi</span> <span className="text-neon-blue">(Pro)</span></li>
                    <li className="flex justify-between"><span>Urdu</span> <span className="text-neon-blue">(Pro)</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Content (Right Column) */}
            <div className="w-full md:w-2/3 p-8 bg-[#1a1a2e]">
              <div className="space-y-10">
                {/* Profile */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/5 rounded-lg text-neon-blue">
                      <User size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider">Profile</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Hi, I&apos;m Mahedi Hasan, a professional Web Developer and Digital Marketing expert. 
                    I build fast, modern, and user-friendly websites. After building your site, I help it grow 
                    using smart marketing strategies like SEO, Social Media Marketing, and Advertising. 
                    My goal is to provide a complete all-in-one service, from development to customer acquisition. 
                    Let&apos;s connect to discuss how I can help your business succeed online.
                  </p>
                </section>

                {/* Work Experience */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-white/5 rounded-lg text-neon-blue">
                      <Briefcase size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider">Work Experience</h3>
                  </div>

                  <div className="space-y-8">
                    <div className="relative pl-8 border-l border-white/10">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-neon-blue"></div>
                      <h4 className="text-lg font-bold text-white">Website Development</h4>
                      <p className="text-neon-purple text-sm mb-3">Web Developer / Front-End Developer</p>
                      <ul className="list-disc list-outside ml-4 space-y-2 text-gray-400 text-sm">
                        <li>Built modern front-end interfaces using HTML, CSS, and JavaScript.</li>
                        <li>Developed dynamic user interfaces (UI) using modern JavaScript frameworks such as <strong className="text-white">React.js</strong>.</li>
                        <li>Customized and developed themes for Content Management Systems (CMS) like WordPress, ensuring ease of use for clients.</li>
                        <li>Integrated third-party <strong className="text-white">APIs</strong> and collaborated with back-end teams to create fully functional web applications.</li>
                        <li>Performed routine website maintenance, bug fixing, and implemented regular updates.</li>
                      </ul>
                    </div>

                    <div className="relative pl-8 border-l border-white/10">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-neon-blue"></div>
                      <h4 className="text-lg font-bold text-white">Digital Marketing</h4>
                      <p className="text-neon-purple text-sm mb-3">Digital Marketing Specialist / SEO Expert</p>
                      <ul className="list-disc list-outside ml-4 space-y-2 text-gray-400 text-sm">
                        <li>Managed and optimized Facebook Ads campaigns to generate leads while strategically growing Facebook page followers and engagement.</li>
                        <li>Implemented on-page and off-page SEO strategies to improve website search engine rankings and increase organic traffic.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Education */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-white/5 rounded-lg text-neon-blue">
                      <GraduationCap size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider">Education</h3>
                  </div>

                  <div className="relative pl-8 border-l border-white/10">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-neon-blue"></div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-bold text-white">BA / BSS</h4>
                        <p className="text-gray-400 text-sm">Nowhata Degree College, Rajshahi</p>
                      </div>
                      <span className="text-neon-purple text-sm font-medium">2022-2027</span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
