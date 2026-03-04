"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Animation Variants for re-use
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

// SORTED: Latest Career at the Top
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
  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
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
          {/* Duplicates for seamless loop */}
          <span>System_State: Operational</span>
          <span>Neural_Network: Active</span>
          <span>IR4.0_Protocol: Enabled</span>
        </motion.div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <motion.div variants={staggerContainer} initial="initial" animate="animate" className="z-10">
          <motion.h1 variants={fadeInUp} className="text-7xl font-black text-white mb-4 tracking-tighter leading-none">
            MUHAMMAD<br /><span className="text-cyan-500">SAFIE</span>
          </motion.h1>
          <motion.div variants={fadeInUp} className="h-1 w-20 bg-cyan-500 mb-6" />
          <motion.p variants={fadeInUp} className="text-lg font-mono text-cyan-400 mb-8 tracking-[0.15em] uppercase italic">
            Electronic Engineer & AI Researcher
          </motion.p>
          <motion.p variants={fadeInUp} className="text-xl text-slate-400 leading-relaxed mb-10 max-w-lg">
            Engineering the future of industry by synthesizing <strong className="text-white">physical sensor arrays</strong> and <strong className="text-white">machine intelligence</strong>. Currently pioneering IR4.0 research for the Malaysian Rubber Board.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-10">
            {["ROS", "TensorFlow", "IoT", "PCB Design", "Python", "STM32", "ESP32", "C++"].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-md font-mono text-xs text-slate-400 hover:border-cyan-500 hover:text-cyan-400 transition-all cursor-crosshair">
                {skill}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="flex items-center gap-6">
            <a href="mailto:muhd.safie1996@gmail.com" className="px-8 py-4 bg-cyan-600 text-white font-bold rounded shadow-lg shadow-cyan-900/20 hover:bg-cyan-500 hover:-translate-y-1 transition-all uppercase text-sm tracking-widest">
              Contact Me
            </a>
            <a href="/Muhammad_Safie_Resume.pdf" download className="px-8 py-4 border border-slate-700 text-slate-300 font-bold rounded hover:bg-slate-800 hover:border-slate-500 transition-all uppercase text-sm tracking-widest">
              Download CV
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }} 
          animate={{ opacity: 1, scale: 1, rotate: 0 }} 
          transition={{ duration: 1 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <Image 
            src="https://sjmmajuresources.com/wp-content/uploads/elementor/thumbs/41x47-q504iwyzwymp49j0xvviksey93v4rqtm96tp4lqoio.png"
            alt="Muhammad Safie"
            width={450}
            height={450}
            className="rounded-lg relative bg-[#020617] border border-slate-800 shadow-2xl brightness-90 grayscale-[0.2]"
            priority
          />
          
          {/* RESEARCH STATUS OVERLAY */}
          <div className="absolute -bottom-6 -right-6 bg-slate-900 p-5 border border-slate-700 shadow-2xl z-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <p className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest font-bold">Live Research</p>
            </div>
            <p className="text-sm font-bold text-white">MRB Industrial Chatbot v1.0</p>
          </div>
        </motion.div>
      </section>

      {/* 3. EXPERIENCE TIMELINE - Sorted Recent to Old */}
      <section className="max-w-6xl mx-auto px-6 py-32 bg-slate-950/50 border-y border-slate-900">
        <h3 className="text-4xl font-black text-white mb-16 flex items-center gap-6 tracking-tighter">
          CAREER <span className="text-cyan-500">ROADMAP</span>
        </h3>
        <div className="space-y-0">
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative grid md:grid-cols-4 gap-8 py-12 border-l-2 border-slate-800 pl-10 hover:bg-white/[0.02] transition-colors"
            >
              <div className="absolute w-4 h-4 bg-slate-900 border-2 border-cyan-500 rounded-full -left-[9px] top-14 group-hover:bg-cyan-500 transition-colors" />
              <div className="text-sm font-mono text-cyan-500 pt-2">{item.year}</div>
              <div className="md:col-span-2">
                <h4 className="text-2xl font-bold text-white mb-2">{item.role}</h4>
                <p className="text-slate-500 font-semibold mb-3 tracking-wide">{item.org}</p>
                <p className="text-slate-400 leading-relaxed max-w-xl">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. TECHNICAL MILESTONES */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-3 gap-0 border border-slate-800">
          {[
            { 
              title: "SiswaSAT 2020", 
              desc: "Awarded 3rd Place as Mission Manager. Engineered sensor-array interfacing using Arduino Master/Slave architecture and long-range NRF24L01 telemetry. [cite: 40, 42, 43]", 
              icon: "📡" 
            },
            { 
              title: "JVCKENWOOD", 
              desc: "Directing Pre-Preparation to Mass Production stages. Specialized in line-balancing, productivity improvement, and firmware validation. [cite: 57, 58, 60, 64]", 
              icon: "🏭" 
            },
            { 
              title: "Autonomous ROS", 
              desc: "Conducted deep-dive performance analysis on Adaptive Monte Carlo Localization (AMCL) within the Robot Operating System (ROS) framework. [cite: 26, 29, 30]", 
              icon: "🤖" 
            }
          ].map((m, i) => (
            <div key={i} className="p-12 border border-slate-800 hover:bg-cyan-500/[0.03] transition-all group relative">
              <div className="text-4xl mb-6 group-hover:-translate-y-2 transition-transform duration-300 inline-block">{m.icon}</div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">{m.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{m.desc}</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-cyan-500 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 text-center border-t border-slate-900">
        <div className="flex justify-center gap-10 mb-8 font-mono text-xs tracking-widest uppercase">
          <a href="https://linkedin.com/in/muhammad-safie-a019a220a" target="_blank" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
          <a href="https://www.iiotsme.com.my" target="_blank" className="hover:text-cyan-400 transition-colors">Lab / Portal</a>
          <a href="mailto:muhd.safie1996@gmail.com" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>
        <p className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.4em]">
          Innovating for Malaysia // &copy; 2026 Muhammad Safie
        </p>
      </footer>
    </div>
  );
}