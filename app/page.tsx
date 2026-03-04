"use client";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const timeline = [
  { 
    year: "Current Mission", 
    role: "Researcher (AI & IR4.0)", 
    org: "Malaysian Rubber Board", 
    detail: "Spearheading the integration of Industrial AI and intelligent chatbot systems for the rubber industry." 
  },
  { 
    year: "2022 - 2024", 
    role: "Assistant Engineer (Product)", 
    org: "JVCKENWOOD", 
    detail: "Optimized production lines for high-efficiency mass production and executed rigorous software QC." 
  },
  { 
    year: "2018 - 2022", 
    role: "B.Eng (Hons) Electronic Engineering", 
    org: "UTeM", 
    detail: "Specialized in Robotics & IoT. Research focused on ROS-based autonomous navigation. CGPA 3.45." 
  },
  { 
    year: "2015 - 2017", 
    role: "Diploma in Electronic Engineering", 
    org: "POLISAS", 
    detail: "Focused on Communication Systems. Graduated with CGPA 3.74." 
  }
];

export default function Portfolio() {

  // 🔥 Smooth Mouse Glow Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  const background = useMotionTemplate`
    radial-gradient(
      600px at ${smoothX}px ${smoothY}px,
      rgba(6,182,212,0.15),
      transparent 80%
    )
  `;

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-cyan-500/30 overflow-x-hidden"
    >

      {/* 🔥 Animated Mouse Glow Background */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background }}
      />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10">

        {/* 1. INTERACTIVE TECHNICAL TICKER */}
        <div className="bg-cyan-950/20 backdrop-blur-md border-b border-cyan-500/10 py-3 overflow-hidden sticky top-0 z-50">
          <motion.div 
            animate={{ x: [0, -1000] }} 
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex whitespace-nowrap gap-12 text-[10px] font-mono text-cyan-400 tracking-[0.2em] uppercase"
          >
            <span>System_State: Operational</span>
            <span>Neural_Network: Active</span>
            <span>IR4.0_Protocol: Enabled</span>
            <span>IoT_Gateway: Connected</span>
            <span>Location: Malaysia</span>
            <span>AI_Core: Online</span>
            <span>System_State: Operational</span>
          </motion.div>
        </div>

        {/* 2. HERO SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="z-10 order-2 md:order-1">
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter leading-none text-center md:text-left">
              MUHAMMAD<br /><span className="text-cyan-500">SAFIE</span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="h-1 w-20 bg-cyan-500 mb-6 mx-auto md:mx-0" />

            <motion.p variants={fadeInUp} className="text-base md:text-lg font-mono text-cyan-400 mb-8 tracking-[0.15em] uppercase italic text-center md:text-left">
              Electronic Engineer & AI Researcher
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-lg text-center md:text-left">
              Engineering the future of industry by synthesizing <strong className="text-white">physical sensor arrays</strong> and <strong className="text-white">machine intelligence</strong>.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center md:justify-start gap-2 mb-10">
              {["ROS", "TensorFlow", "IoT", "PCB Design", "Python", "STM32", "ESP32", "C++"].map((skill) => (
                <span key={skill} className="px-3 py-2 bg-slate-900/50 border border-slate-800 rounded-md font-mono text-[10px] md:text-xs text-slate-400">
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* IMAGE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1 }}
            className="relative group order-1 md:order-2 flex justify-center"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            <div className="w-[280px] h-[280px] md:w-[450px] md:h-[450px] relative">
              <Image 
                src="https://sjmmajuresources.com/wp-content/uploads/elementor/thumbs/41x47-q504iwyzwymp49j0xvviksey93v4rqtm96tp4lqoio.png"
                alt="Muhammad Safie"
                fill
                className="rounded-lg relative bg-[#020617] border border-slate-800 shadow-2xl brightness-90 grayscale-[0.2] object-cover"
                priority
              />
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
