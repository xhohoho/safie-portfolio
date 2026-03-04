"use client";
import { motion } from "framer-motion";
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
          <span>System_State: Operational</span>
          <span>Neural_Network: Active</span>
          <span>IR4.0_Protocol: Enabled</span>
        </motion.div>
      </div>

      {/* 2. HERO SECTION - Responsive Grid */}
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
            Engineering the future of industry by synthesizing <strong className="text-white">physical sensor arrays</strong> and <strong className="text-white">machine intelligence</strong>. Currently pioneering IR4.0 research for the Malaysian Rubber Board.
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

        {/* IMAGE SECTION - Centered on Mobile */}
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
          
          {/* RESEARCH STATUS OVERLAY - Adjusted for Mobile */}
          <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-slate-900 p-3 md:p-5 border border-slate-700 shadow-2xl z-20">
            <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
              <span className="relative flex h-2 w-2 md:h-3 md:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-cyan-500"></span>
              </span>
              <p className="text-[8px] md:text-[10px] font-mono text-cyan-500 uppercase tracking-widest font-bold">Live Research</p>
            </div>
            <p className="text-[10px] md:text-sm font-bold text-white">MRB Industrial Chatbot v1.0</p>
          </div>
        </motion.div>
      </section>

      {/* 3. EXPERIENCE TIMELINE - Responsive Layout */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32 bg-slate-950/50 border-y border-slate-900">
        <h3 className="text-3xl md:text-4xl font-black text-white mb-12 md:mb-16 flex items-center gap-4 md:gap-6 tracking-tighter">
          CAREER <span className="text-cyan-500">ROADMAP</span>
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

      {/* 4. TECHNICAL MILESTONES - Stacked on Mobile */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-800">
          {[
            { 
              title: "SiswaSAT 2020", 
              desc: "Awarded 3rd Place as Mission Manager. Engineered a mini satellite size of a can featuring sensor-array interfacing using Arduino Master/Slave architecture and long-range NRF24L01 telemetry.", 
              icon: "📡" 
            },
            { 
              title: "JVCKENWOOD", 
              desc: "Directing Pre-Preparation to Mass Production stages. Specialized in line-balancing, productivity improvement, and firmware validation.", 
              icon: "🏭" 
            },
            { 
              title: "Autonomous ROS", 
              desc: "Conducted deep-dive performance analysis on Adaptive Monte Carlo Localization (AMCL) within the Robot Operating System (ROS) framework.", 
              icon: "🤖" 
            }
          ].map((m, i) => (
            <div key={i} className="p-8 md:p-12 border border-slate-800 hover:bg-cyan-500/[0.03] transition-all group relative">
              <div className="text-3xl md:text-4xl mb-4 md:mb-6 group-hover:-translate-y-2 transition-transform duration-300 inline-block">{m.icon}</div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4 uppercase tracking-wider">{m.title}</h4>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{m.desc}</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-cyan-500 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER - Center Aligned for Mobile */}
      <footer className="py-12 md:py-20 text-center border-t border-slate-900">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8 font-mono text-[10px] md:text-xs tracking-widest uppercase">
          <a href="https://linkedin.com/in/muhammad-safie-a019a220a" target="_blank" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
          <a href="https://www.iiotsme.com.my" target="_blank" className="hover:text-cyan-400 transition-colors">Lab / Portal</a>
          <a href="mailto:muhd.safie1996@gmail.com" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>
        <p className="text-[8px] md:text-[10px] font-mono text-slate-600 uppercase tracking-[0.4em] px-4">
          Innovating for Malaysia // &copy; 2026 Muhammad Safie
        </p>
      </footer>
    </div>
  );
}