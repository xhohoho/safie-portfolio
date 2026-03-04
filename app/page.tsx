"use client";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

// 1. ANIMATION SETTINGS (The missing variables)
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
  // 2. MOUSE GLOW LOGIC
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  const backgroundGlow = useMotionTemplate`
    radial-gradient(
      600px circle at ${smoothX}px ${smoothY}px,
      rgba(6, 182, 212, 0.15),
      transparent 80%
    )
  `;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* GLOW LAYER */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background: backgroundGlow }}
      />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10">
        
        {/* TICKER */}
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

        {/* HERO SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="z-10 order-2 md:order-1">
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter leading-none text-center md:text-left">
              MUHAMMAD<br /><span className="text-cyan-500">SAFIE</span>
            </motion.h1>
            <motion.div variants={fadeInUp} className="h-1 w-20 bg-cyan-500 mb-6 mx-auto md:mx-0" />
            <motion.p variants={fadeInUp} className="text-base md:text-lg font-mono text-cyan-400 mb-8 tracking-[0.15em] uppercase italic text-center md:text-left">
              Electronic Engineer & AI Researcher
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-lg text-center md:text-left text-pretty">
              Engineering the future of industry by synthesizing <strong className="text-white font-bold">physical sensor arrays</strong> and <strong className="text-white font-bold">machine intelligence</strong>.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center md:justify-start gap-2 mb-10">
              {["ROS", "TensorFlow", "IoT", "PCB Design", "Python", "STM32", "ESP32", "C++"].map((skill) => (
                <span key={skill} className="px-3 py-2 bg-slate-900/50 border border-slate-800 rounded-md font-mono text-[10px] md:text-xs text-slate-400">
                  {skill}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
              <a href="mailto:muhd.safie1996@gmail.com" className="w-full sm:w-auto px-8 py-4 bg-cyan-600 text-white font-bold rounded shadow-lg shadow-cyan-900/20 hover:bg-cyan-500 transition-all uppercase text-sm tracking-widest text-center">
                Contact Me
              </a>
              <a href="/Muhammad_Safie_Resume.pdf" download className="w-full sm:w-auto px-8 py-4 border border-slate-700 text-slate-300 font-bold rounded hover:bg-slate-800 transition-all uppercase text-sm tracking-widest text-center">
                Download CV
              </a>
            </motion.div>
          </motion.div>

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
                className="rounded-lg relative border border-slate-800 shadow-2xl brightness-90 grayscale-[0.2] object-cover"
                priority
              />
            </div>
          </motion.div>
        </section>

        {/* 3. EXPERIENCE TIMELINE */}
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-32 bg-slate-950/50 border-y border-slate-900">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-12 md:mb-16 flex items-center gap-4 md:gap-6 tracking-tighter uppercase">
            Career <span className="text-cyan-500 tracking-tighter">Roadmap</span>
          </h3>
          <div className="space-y-0">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative flex flex-col md:grid md:grid-cols-4 gap-4 md:gap-8 py-8 md:py-12 border-l-2 border-slate-800 pl-6 md:pl-10 transition-colors"
              >
                <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-slate-900 border-2 border-cyan-500 rounded-full -left-[7px] md:-left-[9px] top-10 md:top-14 group-hover:bg-cyan-500 transition-colors" />
                <div className="text-xs md:text-sm font-mono text-cyan-500">{item.year}</div>
                <div className="md:col-span-2">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">{item.role}</h4>
                  <p className="text-xs md:text-sm text-slate-500 font-semibold mb-2 tracking-wide uppercase">{item.org}</p>
                  <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-xl">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* FOOTER */}
        <footer className="py-20 text-center">
          <p className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.4em]">
            Muhammad Safie &copy; 2026 // Researcher & Engineer
          </p>
        </footer>

      </div>
    </div>
  );
}
